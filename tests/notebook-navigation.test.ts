import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import matter from "gray-matter";
import { getNotes, getLatestNotes, parseNote } from "../src/lib/notebook";
import {
  getNotebookNavigation,
  searchNavigation,
} from "../src/lib/notebook-navigation";
const sha = (value: string | Buffer) =>
  createHash("sha256").update(value).digest("hex");

test("all 76 migrated originals retain content and image bytes; only verified Blog matches receive dates", () => {
  const dateSources = JSON.parse(
    readFileSync("docs/notebook-date-sources.json", "utf8"),
  );
  const records = JSON.parse(
    readFileSync("docs/notebook-migration.json", "utf8"),
  );
  assert.equal(records.length, 76);
  for (const record of records) {
    const { data, content } = matter(readFileSync(record.target, "utf8"));
    const matched = dateSources.matches.find(
      (entry: { target: string }) => entry.target === record.target,
    );
    assert.equal(data.publishedAt, matched?.publishedAt ?? null, record.source);
    assert.equal(data.updatedAt, null, record.source);
    let original = content;
    for (const edit of [...record.edits].reverse())
      original = original.replace(edit.to, edit.from);
    assert.equal(sha(original), record.originalBodySha256, record.source);
    for (const asset of record.assets)
      assert.equal(
        sha(readFileSync(path.join("public", asset.path))),
        asset.sha256,
        asset.path,
      );
  }
});

test("navigation includes every published original, preserves series order and searches tags", () => {
  const notes = getNotes();
  const categories = getNotebookNavigation(notes);
  assert.equal(notes.filter((note) => note.source).length, 75);
  assert.equal(categories.length, 11);
  const entries = categories.flatMap((category) => category.notes);
  assert.equal(entries.length, 74); // The root README is linked separately.
  assert.equal(new Set(entries.map((note) => note.slug)).size, 74);
  assert.equal(
    entries.some((note) => note.slug.includes("rxjs-operators")),
    false,
  );
  assert.equal(
    entries.some((note) => note.slug === "rendering-guide"),
    false,
  );
  const d3 = categories.find(
    (category) => category.label === "D3.js 新手開發基本圖表",
  )!;
  assert.equal(d3.notes[0].kind, "index");
  const days = d3.notes
    .slice(1)
    .map((note) => Number(/day(\d+)/.exec(note.slug)![1]));
  assert.deepEqual(
    days,
    Array.from({ length: 30 }, (_, index) => index + 1),
  );
  assert.ok(
    searchNavigation(categories, "RXJS combineLatest").some(
      (note) => note.slug === "rxjs/combinelatest-duplicate-events",
    ),
  );
  assert.equal(
    searchNavigation(categories, "impossible-term-012345").length,
    0,
  );
  assert.equal(searchNavigation(categories, "  ").length, 0);
});

test("latest notes use publication date only, exclude undated/draft/index/example/future notes, and cap at six", () => {
  const base = parseNote(
    "---\nslug: base\ntitle: Example\npublishedAt:\nupdatedAt:\n---\nBody",
    "example.md",
  );
  const examples = Array.from({ length: 8 }, (_, index) => ({
    ...base,
    slug: `note-${index}`,
    publishedAt: `2026-09-${String(index + 1).padStart(2, "0")}`,
  }));
  const extra = [
    { ...base, slug: "undated", updatedAt: "2026-09-12" },
    { ...base, slug: "draft", publishedAt: "2026-09-12", draft: true },
    {
      ...base,
      slug: "index",
      publishedAt: "2026-09-12",
      kind: "index" as const,
    },
    {
      ...base,
      slug: "example",
      publishedAt: "2026-09-12",
      kind: "example" as const,
    },
    { ...base, slug: "future", publishedAt: "2027-01-01" },
  ];
  examples[0].updatedAt = "2026-09-13";
  assert.deepEqual(
    getLatestNotes([...examples, ...extra], 6, "2026-09-13").map(
      (note) => note.slug,
    ),
    ["note-7", "note-6", "note-5", "note-4", "note-3", "note-2"],
  );
  assert.equal(getLatestNotes(getNotes(), 6, "2026-09-13").length, 6);
  assert.deepEqual(
    getLatestNotes(getNotes(), 3, "2026-09-13"),
    getLatestNotes(getNotes(), 6, "2026-09-13").slice(0, 3),
  );
  const dated = parseNote(
    '---\nslug: valid\ntitle: Example\npublishedAt: 2026-09-01\nupdatedAt: "2026-09-02"\n---\nBody',
    "valid.md",
  );
  assert.equal(dated.publishedAt, "2026-09-01");
  assert.equal(dated.updatedAt, "2026-09-02");
  assert.throws(
    () =>
      parseNote(
        '---\nslug: bad\ntitle: Bad\npublishedAt: "2026-02-30"\n---\n',
        "bad.md",
      ),
    /Invalid publishedAt/,
  );
  assert.throws(
    () =>
      parseNote(
        '---\nslug: bad\ntitle: Bad\npublishedAt: "2026-09-02"\nupdatedAt: "2026-09-01"\n---\n',
        "bad.md",
      ),
    /precedes/,
  );
});

test("Blog date provenance covers 15 notes and 17 source posts without inventing update times", () => {
  const ledger = JSON.parse(
    readFileSync("docs/notebook-date-sources.json", "utf8"),
  );
  assert.equal(ledger.matches.length, 15);
  assert.equal(
    new Set(ledger.matches.map((entry: { target: string }) => entry.target))
      .size,
    15,
  );
  let sourceCount = 0;
  for (const entry of ledger.matches) {
    const { data, content } = matter(readFileSync(entry.target, "utf8"));
    assert.equal(sha(content), entry.noteBodySha256, entry.target);
    assert.equal(data.publishedAt, entry.publishedAt);
    assert.equal(data.updatedAt, null);
    assert.equal(data.draft, false);
    for (const source of entry.sources) {
      assert.equal(
        path.basename(source.source).slice(0, 10),
        entry.publishedAt,
      );
      assert.equal(
        source.slug.slice(0, 10).replaceAll("/", "-"),
        entry.publishedAt,
      );
      assert.match(source.sha256, /^[a-f0-9]{64}$/);
      sourceCount++;
    }
  }
  assert.equal(sourceCount, 17);
  assert.equal(ledger.unmatchedBlog.length, 9);
  assert.equal(
    getNotes().filter((note) => note.source && note.publishedAt).length,
    15,
  );
});
