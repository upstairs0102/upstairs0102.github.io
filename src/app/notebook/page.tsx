import Link from "next/link";
import type { Metadata } from "next";
import { getNotes, noteHref } from "@/lib/notebook";
export const metadata: Metadata = { title: "Notebook" };
export default function NotebookPage() {
  const notes = getNotes();
  const originals = notes.filter((note) => note.source);
  const examples = notes.filter((note) => !note.source);
  return (
    <main className="page-shell notebook-page">
      <div className="page-intro">
        <p className="eyebrow">IDEAS / EXPERIMENTS / FIELD NOTES</p>
        <h1>Notebook.</h1>
        <p>把遇到的問題、試過的方法，和那些值得記下的細節，慢慢整理在這裡。</p>
      </div>
      <div className="notebook-index-label">
        <span>SELECTED NOTES</span>
        <span>{String(originals.length).padStart(2, "0")} ARTICLES</span>
      </div>
      <div className="notebook-list">
        {originals.map((note, index) => (
          <Link className="notebook-row" href={noteHref(note)} key={note.slug}>
            <span className="note-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="eyebrow">{note.category}</p>
              <h2>{note.title}</h2>
              <p className="note-tags">{note.tags.join(" / ")}</p>
            </div>
            <span className="note-reading">約 {note.readingMinutes} 分鐘</span>
            <span className="note-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
      <p className="placeholder-note">
        目前先收錄 4 篇文章作為閱讀版型預覽，其餘筆記將陸續整理。
      </p>
      <div className="format-example">
        {examples.map((note) => (
          <Link href={noteHref(note)} key={note.slug}>
            {note.title} ↗
          </Link>
        ))}
      </div>
    </main>
  );
}
