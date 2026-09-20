import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import matter from "gray-matter";
const root = path.resolve("out");
const htmlFiles = readdirSync(root, { recursive: true })
  .map(String)
  .filter((file) => file.endsWith(".html"));
assert.ok(
  htmlFiles.length >= 10,
  "Expected homepage, index, sample articles, inner pages and 404",
);
let checked = 0;
for (const file of htmlFiles) {
  const html = readFileSync(path.join(root, file), "utf8");
  const current = "/" + file.replace(/index\.html$/, "");
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(href)) continue;
    const url = new URL(href, `https://local.test${current}`);
    const pathname = decodeURIComponent(url.pathname);
    let target = path.join(root, pathname);
    if (existsSync(target) && statSync(target).isDirectory())
      target = path.join(target, "index.html");
    assert.ok(existsSync(target), `${file}: missing ${href}`);
    if (url.hash && target.endsWith(".html")) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(
        readFileSync(target, "utf8").includes(`id="${id}"`),
        `${file}: missing anchor ${href}`,
      );
    }
    checked++;
  }
}
const fixture = readFileSync(
  path.join(root, "notebook/rendering-guide/index.html"),
  "utf8",
);
assert.ok(fixture.includes("data-highlighted-line"));
assert.ok(fixture.includes("callout-info"));
assert.ok(fixture.includes("table-scroll"));
const inventory = JSON.parse(
  readFileSync("docs/migration-inventory.json", "utf8"),
);
for (const doc of inventory.documents) {
  const aliasFile = path.join(root, doc.legacyPath, "index.html");
  assert.equal(existsSync(aliasFile), !doc.draft, doc.legacyPath);
  if (!doc.draft) {
    const alias = readFileSync(aliasFile, "utf8");
    assert.ok(
      alias.includes(`href="${doc.plannedPath}/"`),
      `Missing redirect fallback: ${doc.legacyPath}`,
    );
  }
}
assert.ok(existsSync(path.join(root, "docs/index.html")));
const journey = readFileSync(path.join(root, "journey/index.html"), "utf8");
assert.ok(!journey.includes("內容整理中"));
assert.ok(journey.includes('href="/notebook/vuejs-ncut-course-2019/"'));
assert.equal(
  (journey.split("</main>")[0].match(/<li(?:\s|>)/g) ?? []).length,
  43,
);
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const datedNotes = readdirSync("content/notebook", { recursive: true })
  .map(String)
  .filter((file) => /\.mdx?$/.test(file))
  .map((file) => {
    const { data } = matter(
      readFileSync(path.join("content/notebook", file), "utf8"),
    );
    return {
      slug: data.slug.replace(/^\/+|\/+$/g, ""),
      date:
        data.publishedAt instanceof Date
          ? data.publishedAt.toISOString().slice(0, 10)
          : data.publishedAt,
      draft: data.draft,
      kind: data.kind ?? "article",
    };
  })
  .filter(
    (note) =>
      !note.draft && note.kind === "article" && note.date && note.date <= today,
  )
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
const notebookIndex = readFileSync(
  path.join(root, "notebook/index.html"),
  "utf8",
);
assert.ok(!notebookIndex.includes('id="browse-notes"'));
const latestSection = notebookIndex.match(
  /<section aria-labelledby="latest-notes-title">([\s\S]*?)<\/section>/,
)?.[1];
assert.ok(latestSection);
assert.equal(
  (latestSection.match(/class="notebook-row"/g) ?? []).length,
  Math.min(6, datedNotes.length),
);
for (const note of datedNotes.slice(0, 6))
  assert.ok(latestSection.includes(`href="/notebook/${note.slug}/"`));
const home = readFileSync(path.join(root, "index.html"), "utf8");
const homeNotes = home.match(
  /<section id="notebook"[^>]*>([\s\S]*?)<\/section>/,
)?.[1];
assert.ok(homeNotes);
assert.equal(
  (homeNotes.match(/<article>/g) ?? []).length,
  Math.min(3, datedNotes.length),
);
for (const note of datedNotes.slice(0, 3))
  assert.ok(homeNotes.includes(`href="/notebook/${note.slug}/"`));
assert.ok(!homeNotes.includes("Making complex things feel simple."));
console.log(
  `Static export checked: ${htmlFiles.length} HTML files, ${checked} local links/assets/anchors.`,
);
