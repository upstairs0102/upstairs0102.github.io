import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
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
console.log(
  `Static export checked: ${htmlFiles.length} HTML files, ${checked} local links/assets/anchors.`,
);
