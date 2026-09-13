import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
export interface Note {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  body: string;
  file: string;
  source?: string;
  sample: boolean;
  draft: boolean;
  readingMinutes: number;
}
export function parseNote(raw: string, file: string): Note {
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? "").replace(/^\/+|\/+$/g, "");
  if (!/^[a-z0-9]+(?:[a-z0-9/-]*[a-z0-9])?$/.test(slug) || slug.includes("//"))
    throw new Error(`Invalid notebook slug in ${file}`);
  if (typeof data.title !== "string" || !data.title.trim())
    throw new Error(`Missing title in ${file}`);
  if (
    data.tags !== undefined &&
    (!Array.isArray(data.tags) ||
      data.tags.some((tag: unknown) => typeof tag !== "string"))
  )
    throw new Error(`Invalid tags in ${file}`);
  if (data.draft !== undefined && typeof data.draft !== "boolean")
    throw new Error(`Invalid draft flag in ${file}`);
  const prose = content.replace(/```[\s\S]*?```/g, "");
  const chinese = (prose.match(/[\u3400-\u9fff]/g) ?? []).length;
  const words = (prose.match(/[a-zA-Z0-9]+/g) ?? []).length;
  return {
    slug,
    title: data.title,
    category: String(data.category ?? "Notes"),
    tags: data.tags ?? [],
    body: content,
    file,
    source: typeof data.source === "string" ? data.source : undefined,
    sample: data.sample === true,
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.ceil(chinese / 350 + words / 220)),
  };
}
export function getNotes(
  directory = path.join(process.cwd(), "content/notebook"),
): Note[] {
  const files = readdirSync(directory, { recursive: true })
    .map(String)
    .filter((file) => /\.mdx?$/.test(file))
    .sort();
  const notes = files.map((file) =>
    parseNote(readFileSync(path.join(directory, file), "utf8"), file),
  );
  const seen = new Set<string>();
  for (const note of notes) {
    if (seen.has(note.slug))
      throw new Error(`Duplicate notebook slug: ${note.slug}`);
    seen.add(note.slug);
  }
  return notes.filter((note) => !note.draft);
}
export function noteHref(note: Pick<Note, "slug">) {
  return `/notebook/${note.slug}/`;
}
