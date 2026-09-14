import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";
import { renderToStaticMarkup } from "react-dom/server";
import { getNotes, parseNote } from "../src/lib/notebook";
import { renderNote } from "../src/lib/markdown";
const digest = (text: string | Buffer) =>
  createHash("sha256").update(text).digest("hex");

test("sample migration preserves full original prose/code and image bytes", () => {
  const records = JSON.parse(
    readFileSync("docs/sample-migration.json", "utf8"),
  );
  assert.equal(records.length, 4);
  for (const record of records) {
    let body = parseNote(
      readFileSync(record.target, "utf8"),
      record.target,
    ).body.replace(/^\n+/, "");
    for (const image of record.images) {
      body = body.replaceAll(`(${image.to})`, `(${image.from})`);
      assert.equal(
        digest(readFileSync(path.join("public", image.to))),
        image.sha256,
      );
    }
    assert.equal(
      digest(body),
      record.normalizedOriginalBodySha256,
      record.source,
    );
  }
});

test("drafts are excluded and duplicate or unsafe routes fail", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "notebook-test-"));
  const raw = (slug: string, draft: boolean) =>
    `---\nslug: ${slug}\ntitle: Example\ndraft: ${draft}\n---\nBody`;
  try {
    writeFileSync(path.join(dir, "a.md"), raw("one", false));
    writeFileSync(path.join(dir, "draft.md"), raw("draft", true));
    assert.deepEqual(
      getNotes(dir).map((note) => note.slug),
      ["one"],
    );
    writeFileSync(path.join(dir, "duplicate.md"), raw("one", false));
    assert.throws(() => getNotes(dir), /Duplicate/);
    assert.throws(
      () => parseNote(raw("../escape", false), "bad.md"),
      /Invalid notebook slug/,
    );
  } finally {
    rmSync(dir, { recursive: true });
  }
});

test("renderer supports GFM, callouts, highlighting and unique matching TOC anchors", async () => {
  const note = getNotes().find((note) => note.slug === "rendering-guide")!;
  const { content, toc } = await renderNote(note);
  const html = renderToStaticMarkup(content);
  assert.match(html, /<del>刪除線<\/del>/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /class="table-scroll"/);
  assert.match(html, /callout-info/);
  assert.match(html, /callout-warning/);
  assert.match(html, /data-highlighted-line/);
  assert.match(html, /example.ts/);
  assert.match(html, /id="typography"/);
  assert.doesNotMatch(html, /\{#typography\}/);
  assert.equal(new Set(toc.map((item) => item.id)).size, toc.length);
  assert.equal(toc.filter((item) => item.text === "重複標題").length, 2);
  for (const item of toc) assert.ok(html.includes(`id="${item.id}"`));
});

test("legacy Vue callouts compile without changing inline HTML examples or duplicating h1", async () => {
  const note = getNotes().find(
    (note) => note.slug === "vuejs-ncut-course-2019/day1-3",
  )!;
  const html = renderToStaticMarkup((await renderNote(note)).content);
  assert.equal((html.match(/callout-info/g) ?? []).length, 2);
  assert.doesNotMatch(html, /<h1/);
  assert.match(html, /&lt;input/);
  assert.match(html, /https:\/\/codepen.io/);
});
