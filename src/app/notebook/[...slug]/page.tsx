import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNotes, noteHref } from "@/lib/notebook";
import { renderNote } from "@/lib/markdown";
import { TableOfContents } from "@/components/notebook/TableOfContents";
export const dynamicParams = false;
export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug.split("/") }));
}
type Props = { params: Promise<{ slug: string[] }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNotes().find((item) => item.slug === slug.join("/"));
  return { title: note?.title ?? "Article not found" };
}
export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const notes = getNotes();
  const note = notes.find((item) => item.slug === slug.join("/"));
  if (!note) notFound();
  const { content, toc } = await renderNote(note);
  const related = notes
    .filter((item) => item.slug !== note.slug && item.source)
    .slice(0, 3);
  return (
    <main className="reading-page">
      <div className="reading-breadcrumb">
        <Link href="/notebook/">← Notebook</Link>
        <span>{note.category}</span>
      </div>
      <div className="reading-layout">
        <article className="reading-article">
          <header className="article-header">
            <p className="eyebrow">{note.category}</p>
            <h1>{note.title}</h1>
            <div className="article-meta">
              <span>ADAM YOU</span>
              <span>約 {note.readingMinutes} 分鐘</span>
              <span>{note.tags.join(" / ")}</span>
            </div>
          </header>
          <TableOfContents items={toc} mobile />
          <div className="prose prose-neutral article-body">{content}</div>
          <div className="article-end">
            <span>— END OF NOTE —</span>
            <Link href="/notebook/">返回所有筆記 ↗</Link>
          </div>
        </article>
        <aside className="reading-aside">
          <TableOfContents items={toc} />
        </aside>
      </div>
      <section className="related-notes" aria-labelledby="related-title">
        <p className="eyebrow">KEEP READING</p>
        <h2 id="related-title">更多筆記</h2>
        <div>
          {related.map((item) => (
            <Link href={noteHref(item)} key={item.slug}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
