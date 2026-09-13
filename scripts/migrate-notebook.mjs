import {
  readFileSync,
  readdirSync,
  mkdirSync,
  writeFileSync,
  copyFileSync,
  existsSync,
} from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";

const oldRoot = path.resolve(process.argv[2] ?? "../old-site-audit");
const inventoryPath = "docs/migration-inventory.json";
const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));
const records = [];
const allFiles = readdirSync(path.join(oldRoot, "docs"), {
  recursive: true,
}).map((name) => path.join(oldRoot, "docs", String(name)));
const byLower = new Map(allFiles.map((file) => [file.toLowerCase(), file]));
const sha = (data) => createHash("sha256").update(data).digest("hex");
const parser = unified().use(remarkParse).use(remarkGfm).use(remarkDirective);
const categories = {
  React: "React / Next.js",
  Vue: "Vue.js",
  RxJS: "RxJS",
  "D3.js": "D3.js",
  JavaScript: "JavaScript",
  "CSS & Tailwind": "CSS & Tailwind",
  "JS Modules & Build Tools": "Modules & Build Tools",
  "static site": "Static Site",
  前端Libraries: "Frontend Libraries",
};
for (const item of inventory.documents) {
  const original = readFileSync(path.join(oldRoot, item.source), "utf8");
  const parsed = matter(original);
  const sourceBody = parsed.content;
  const folder = item.source.split("/")[1];
  const collection = folder.startsWith("[") ? "series" : "technical";
  const category = folder.startsWith("[講課]")
    ? "Vue.js 前端開發課程"
    : folder.startsWith("[鐵人賽]")
      ? "D3.js 新手開發基本圖表"
      : (categories[folder] ?? "Notebook");
  const isIndex = item.source.endsWith("/README.md");
  const slug = parsed.data.slug?.replace(/^\/+|\/+$/g, "") ?? "about";
  const target = item.target ?? `content/notebook/${slug}.md`;
  let body = sourceBody;
  const edits = [];
  const assets = [];
  // Existing verified samples retain their stable image URLs.
  if (
    [
      "content/notebook/d3-scatter.md",
      "content/notebook/vue-events.md",
      "content/notebook/rxjs.md",
      "content/notebook/next-data-fetching.md",
    ].includes(target)
  ) {
    body = sourceBody;
    const sample = JSON.parse(
      readFileSync("docs/sample-migration.json", "utf8"),
    ).find((record) => record.source === item.source);
    for (const img of sample.images)
      body = body.replaceAll(`(${img.from})`, `(${img.to})`);
    for (const img of sample.images)
      edits.push({ from: `(${img.from})`, to: `(${img.to})` });
    for (const img of sample.images)
      assets.push({ path: img.to, sha256: img.sha256 });
  } else {
    const tree = parser.parse(body);
    const replacements = [];
    visit(tree, (node) => {
      if (
        node.type !== "image" &&
        node.type !== "link" &&
        node.type !== "definition"
      )
        return;
      if (/^(https?:|mailto:|#)/i.test(node.url)) return;
      let url = node.url;
      if (node.type === "image") {
        const candidate = path.resolve(
          path.dirname(path.join(oldRoot, item.source)),
          decodeURI(url),
        );
        const file = existsSync(candidate)
          ? candidate
          : byLower.get(candidate.toLowerCase());
        if (!file) throw new Error(`Missing image: ${item.source}: ${url}`);
        const data = readFileSync(file);
        url = `/images/notebook/legacy/${sha(data).slice(0, 20)}${path.extname(file).toLowerCase()}`;
        const destination = path.join("public", url);
        mkdirSync(path.dirname(destination), { recursive: true });
        copyFileSync(file, destination);
        assets.push({ path: url, sha256: sha(data) });
      } else if (url.startsWith("/docs/")) {
        const mapped = inventory.documents.find(
          (record) => record.legacyPath === url.replace(/\/$/, ""),
        );
        if (!mapped) throw new Error(`Unresolved legacy link: ${url}`);
        url =
          mapped.source === "docs/README.md"
            ? "/notebook/about/"
            : `${mapped.plannedPath.replace(/\/$/, "")}/`;
      } else {
        throw new Error(`Unresolved local link: ${item.source}: ${url}`);
      }
      const start = node.position.start.offset;
      const end = node.position.end.offset;
      const from = body.slice(start, end);
      const offset = from.lastIndexOf(node.url);
      if (offset < 0)
        throw new Error(`URL spelling needs manual review: ${node.url}`);
      const to =
        from.slice(0, offset) + url + from.slice(offset + node.url.length);
      replacements.push({ start, end, from, to });
    });
    for (const edit of replacements.sort((a, b) => b.start - a.start)) {
      body = body.slice(0, edit.start) + edit.to + body.slice(edit.end);
      edits.push({ from: edit.from, to: edit.to });
    }
  }
  let order = 999;
  if (isIndex) order = 0;
  else if (folder.startsWith("[鐵人賽]"))
    order = Number(/day(\d+)/i.exec(item.source)?.[1] ?? 999);
  else if (folder.startsWith("[講課]")) {
    const parts = /(\d+)-(\d+)/.exec(path.basename(item.source));
    if (parts) order = Number(parts[1]) * 10 + Number(parts[2]);
  }
  const extras = {
    ...parsed.data,
    slug: `/${slug}`,
    title: parsed.data.title ?? item.title,
    category,
    collection,
    kind: isIndex ? "index" : "article",
    order,
    source: item.source,
    draft: item.draft,
    publishedAt: null,
    updatedAt: null,
  };
  const frontmatter = Object.entries(extras)
    .map(([key, value]) =>
      value === null ? `${key}:` : `${key}: ${JSON.stringify(value)}`,
    )
    .join("\n");
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, `---\n${frontmatter}\n---\n${body}`);
  records.push({
    source: item.source,
    target,
    originalBodySha256: sha(sourceBody),
    edits,
    assets,
  });
  item.target = target;
  item.status = item.draft ? "migrated-draft" : "migrated";
  if (item.source === "docs/README.md") item.plannedPath = "/notebook/about";
}
writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2) + "\n");
writeFileSync(
  "docs/notebook-migration.json",
  JSON.stringify(records, null, 2) + "\n",
);
console.log(
  `Migrated ${records.length} original documents; ${records.filter((x) => x.source.includes("_wip")).length} stays draft.`,
);
