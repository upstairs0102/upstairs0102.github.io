import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { toText } from "hast-util-to-text";
import type { Root as MdRoot, Heading } from "mdast";
import type { Root as HtmlRoot } from "hast";
import type { ComponentProps } from "react";
import type { Note } from "./notebook";
import { rewriteLegacyHref } from "./legacy-routes";
export interface TocItem {
  id: string;
  text: string;
  depth: number;
}
function headingText(node: Heading): string {
  return node.children
    .map((child) =>
      "value" in child
        ? child.value
        : "children" in child
          ? child.children
              .map((part) => ("value" in part ? part.value : ""))
              .join("")
          : "",
    )
    .join("");
}
function remarkLegacy({ title }: { title: string }) {
  return (tree: MdRoot) => {
    // Preserve the source; suppress only a redundant title at render time.
    const first = tree.children[0];
    if (
      first?.type === "heading" &&
      first.depth === 1 &&
      headingText(first) === title
    )
      tree.children.shift();
    visit(tree, "heading", (node) => {
      const last = node.children.at(-1);
      if (last?.type !== "text") return;
      const match = /\s*\{#([a-zA-Z][\w-]*)\}\s*$/.exec(last.value);
      if (!match) return;
      last.value = last.value.slice(0, match.index);
      node.data = {
        ...node.data,
        hProperties: { ...node.data?.hProperties, id: match[1] },
      };
    });
    visit(tree, (node) => {
      if (node.type !== "containerDirective") return;
      const labels: Record<string, string> = {
        info: "資訊",
        note: "筆記",
        tip: "提示",
        warning: "注意",
        caution: "注意",
        danger: "警告",
      };
      const label = labels[node.name];
      if (!label)
        throw new Error(`Unsupported Markdown directive: ${node.name}`);
      node.data = {
        ...node.data,
        hName: "aside",
        hProperties: {
          className: ["callout", `callout-${node.name}`],
          "aria-label": label,
        },
      };
    });
  };
}
function rehypeToc({ toc }: { toc: TocItem[] }) {
  return (tree: HtmlRoot) => {
    const seen = new Set<string>();
    visit(tree, "element", (node) => {
      if (!/^h[1-6]$/.test(node.tagName)) return;
      const original = String(node.properties.id ?? "section");
      let id = original;
      let suffix = 1;
      while (seen.has(id)) id = `${original}-${suffix++}`;
      node.properties.id = id;
      seen.add(id);
      if (node.tagName === "h2" || node.tagName === "h3")
        toc.push({ id, text: toText(node), depth: Number(node.tagName[1]) });
    });
  };
}
function ReadingTable(props: ComponentProps<"table">) {
  return (
    <div
      className="table-scroll"
      role="region"
      aria-label="可橫向捲動的表格"
      tabIndex={0}
    >
      <table {...props} />
    </div>
  );
}
function ReadingImage(props: ComponentProps<"img">) {
  return (
    <img {...props} alt={props.alt ?? ""} loading="lazy" decoding="async" />
  );
}
function rehypeLegacyLinks() {
  return (tree: HtmlRoot) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a" && typeof node.properties.href === "string") {
        node.properties.href = rewriteLegacyHref(node.properties.href);
      }
    });
  };
}
export async function renderNote(note: Pick<Note, "body" | "file" | "title">) {
  const toc: TocItem[] = [];
  const { content } = await compileMDX({
    source: note.body,
    components: { table: ReadingTable, img: ReadingImage },
    options: {
      parseFrontmatter: false,
      blockJS: true,
      blockDangerousJS: true,
      mdxOptions: {
        format: note.file.endsWith(".mdx") ? "mdx" : "md",
        remarkPlugins: [
          remarkGfm,
          remarkDirective,
          [remarkLegacy, { title: note.title }],
        ],
        rehypePlugins: [
          rehypeLegacyLinks,
          rehypeSlug,
          [rehypeToc, { toc }],
          [rehypePrettyCode, { theme: "github-light", keepBackground: false }],
        ],
      },
    },
  });
  return { content, toc };
}
