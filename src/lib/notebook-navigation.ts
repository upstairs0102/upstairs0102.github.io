import type { Note } from "./notebook";
export interface NavigationNote {
  slug: string;
  title: string;
  label: string;
  tags: string[];
  category: string;
  kind: Note["kind"];
}
export interface NavigationCategory {
  id: string;
  label: string;
  collection: "technical" | "series";
  notes: NavigationNote[];
  articleCount: number;
}
const order = [
  "JavaScript",
  "React / Next.js",
  "Vue.js",
  "RxJS",
  "D3.js",
  "CSS & Tailwind",
  "Modules & Build Tools",
  "Frontend Libraries",
  "Static Site",
  "Vue.js 前端開發課程",
  "D3.js 新手開發基本圖表",
];
export function getNotebookNavigation(notes: Note[]): NavigationCategory[] {
  const groups = new Map<string, Note[]>();
  for (const note of notes) {
    if (note.draft || note.kind === "example" || note.slug === "about")
      continue;
    groups.set(note.category, [...(groups.get(note.category) ?? []), note]);
  }
  return [...groups]
    .sort(([a], [b]) => {
      const aIndex = order.indexOf(a);
      const bIndex = order.indexOf(b);
      return (
        (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex) ||
        a.localeCompare(b, "zh-Hant")
      );
    })
    .map(([category, items]) => ({
      id: `category-${category.toLowerCase().replace(/[^a-z0-9\u3400-\u9fff]+/g, "-")}`,
      label: category,
      collection: items[0].collection,
      articleCount: items.filter((note) => note.kind === "article").length,
      notes: items
        .sort(
          (a, b) =>
            a.order - b.order ||
            a.title.localeCompare(b.title, "zh-Hant", { numeric: true }),
        )
        .map((note) => ({
          slug: note.slug,
          title: note.title,
          label: note.kind === "index" ? "系列簡介" : note.title,
          tags: note.tags,
          category: note.category,
          kind: note.kind,
        })),
    }));
}
export function searchNavigation(
  categories: NavigationCategory[],
  query: string,
): NavigationNote[] {
  const terms = query
    .normalize("NFKC")
    .toLocaleLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!terms.length) return [];
  return categories
    .flatMap((category) => category.notes)
    .filter((note) => {
      const text = [note.title, note.category, ...note.tags]
        .join(" ")
        .normalize("NFKC")
        .toLocaleLowerCase();
      return terms.every((term) => text.includes(term));
    });
}
