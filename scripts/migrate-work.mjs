import ts from "typescript-legacy";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

// Parse the active TSX syntax only. Commented-out entries must stay unpublished.
const source = "src/components/HomepageAboutMe/index.tsx";
const raw = readFileSync(path.join(process.argv[2], source), "utf8");
const tree = ts.createSourceFile(
  source,
  raw,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TSX,
);
let items;
function find(node) {
  if (
    ts.isVariableDeclaration(node) &&
    node.name.getText(tree) === "aboutMeItems"
  )
    items = node.initializer;
  ts.forEachChild(node, find);
}
find(tree);
if (!items || !ts.isArrayLiteralExpression(items))
  throw new Error("Missing Work array");
const ids = [
  "open-source",
  "patents",
  "teaching",
  "competitions",
  "sharing",
  "experience",
];
const escape = (value) => value.replace(/[\\`*_[\]<>]/g, "\\$&");
function text(node) {
  if (ts.isJsxText(node)) {
    // React JSX whitespace rules, preserving spaces on the same source line.
    const lines = node.text.replace(/\t/g, " ").split(/\r?\n/);
    const last = lines.findLastIndex((line) => /\S/.test(line));
    return lines
      .map((line, i) => {
        if (i !== 0) line = line.trimStart();
        if (i !== lines.length - 1) line = line.trimEnd();
        return line && i < last ? line + " " : line;
      })
      .join("");
  }
  if (ts.isJsxExpression(node)) {
    if (!node.expression) return "";
    if (ts.isStringLiteral(node.expression)) return node.expression.text;
    throw new Error("Unexpected dynamic content");
  }
  return node.children ? [...node.children].map(text).join("") : "";
}
function markdown(node) {
  if (
    ts.isJsxElement(node) &&
    node.openingElement.tagName.getText(tree) === "a"
  ) {
    const href = node.openingElement.attributes.properties.find(
      (p) => p.name?.getText(tree) === "href",
    )?.initializer;
    if (!href || !ts.isStringLiteral(href)) throw new Error("Dynamic href");
    return `[${escape(text(node).trim())}](<${href.text}>)`;
  }
  return node.children
    ? [...node.children].map(markdown).join("")
    : escape(text(node));
}
mkdirSync("content/work", { recursive: true });
const sections = items.elements.map((item, index) => {
  const prop = (name) =>
    item.properties.find((p) => p.name?.getText(tree) === name)?.initializer;
  const title = prop("title").text;
  const entries = [];
  function collect(node) {
    if (
      ts.isJsxElement(node) &&
      node.openingElement.tagName.getText(tree) === "li"
    ) {
      const links = [];
      function link(n) {
        if (
          ts.isJsxElement(n) &&
          n.openingElement.tagName.getText(tree) === "a"
        ) {
          links.push({
            text: text(n).trim(),
            href: n.openingElement.attributes.properties.find(
              (p) => p.name?.getText(tree) === "href",
            ).initializer.text,
          });
        }
        ts.forEachChild(n, link);
      }
      link(node);
      entries.push({
        text: text(node).trim(),
        links,
        markdown: markdown(node).trim(),
      });
      return;
    }
    ts.forEachChild(node, collect);
  }
  collect(prop("description"));
  const id = ids[index];
  if (!id) throw new Error("Unexpected section");
  const target = `content/work/${id}.md`;
  writeFileSync(
    target,
    `---\nid: ${id}\ntitle: ${JSON.stringify(title)}\norder: ${index + 1}\n---\n\n${entries.map((e) => "- " + e.markdown).join("\n\n")}\n`,
  );
  return {
    id,
    title,
    target,
    entries: entries.map(({ markdown, ...entry }) => entry),
  };
});
writeFileSync(
  "docs/work-migration.json",
  JSON.stringify(
    {
      source,
      sourceSha256: createHash("sha256").update(raw).digest("hex"),
      sections,
    },
    null,
    2,
  ) + "\n",
);
console.log(sections.map((s) => `${s.title}: ${s.entries.length}`).join("\n"));
