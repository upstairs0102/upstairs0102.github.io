import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { RootContent } from "mdast";
import { getWorkSections } from "../src/lib/work";
import { getNotes, noteHref } from "../src/lib/notebook";
import { legacyRoutes, rewriteLegacyHref } from "../src/lib/legacy-routes";

test("all 43 active Work entries preserve wording, order and every original link", () => {
  const ledger = JSON.parse(readFileSync("docs/work-migration.json", "utf8"));
  const sections = getWorkSections();
  assert.equal(sections.length, 6);
  assert.deepEqual(
    ledger.sections.map((s: { entries: unknown[] }) => s.entries.length),
    [1, 3, 1, 1, 34, 3],
  );
  function text(node: RootContent): string {
    return "value" in node
      ? node.value
      : "children" in node
        ? node.children.map(text).join("")
        : "";
  }
  for (const [i, section] of sections.entries()) {
    const expected = ledger.sections[i];
    assert.equal(section.title, expected.title);
    const tree = unified().use(remarkParse).parse(section.body);
    const actual: { text: string; links: { text: string; href: string }[] }[] =
      [];
    visit(tree, "listItem", (node) => {
      const links: { text: string; href: string }[] = [];
      visit(node, "link", (link) => {
        links.push({ text: text(link), href: link.url });
      });
      actual.push({ text: text(node), links });
    });
    assert.deepEqual(actual, expected.entries, section.id);
  }
});

test("every published legacy document has a unique compatible URL; drafts have none", () => {
  const inventory = JSON.parse(
    readFileSync("docs/migration-inventory.json", "utf8"),
  );
  const notes = getNotes();
  const targets = new Set(notes.map(noteHref));
  assert.equal(Object.keys(legacyRoutes).length, 76);
  assert.equal(legacyRoutes["/docs"], "/notebook/");
  for (const doc of inventory.documents) {
    if (doc.draft) assert.equal(legacyRoutes[doc.legacyPath], undefined);
    else {
      assert.ok(targets.has(legacyRoutes[doc.legacyPath]), doc.source);
      assert.equal(legacyRoutes[doc.legacyPath], doc.plannedPath + "/");
    }
  }
  assert.equal(
    rewriteLegacyHref(
      "https://upstairs0102.github.io/docs/vuejs-ncut-course-2019?from=work#day-1",
    ),
    "/notebook/vuejs-ncut-course-2019/?from=work#day-1",
  );
  assert.equal(rewriteLegacyHref("/docs/"), "/notebook/");
  for (const href of [
    "https://example.com/docs/",
    "//example.com/docs/",
    "/docs/unknown",
    "#docs",
    "mailto:adam@example.com",
  ])
    assert.equal(rewriteLegacyHref(href), href);
});
