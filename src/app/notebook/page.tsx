import Link from "next/link";
import type { Metadata } from "next";
import { getNotes, getLatestNotes, noteHref } from "@/lib/notebook";
export const metadata: Metadata = { title: "Notebook" };
export default function NotebookPage() {
  const notes = getNotes();
  const latest = getLatestNotes(notes);
  return (
    <main className="page-shell notebook-page">
      <div className="page-intro">
        <p className="eyebrow">IDEAS / EXPERIMENTS / FIELD NOTES</p>
        <h1>Notebook.</h1>
        <p>把遇到的問題、試過的方法，和那些值得記下的細節，慢慢整理在這裡。</p>
      </div>
      <section aria-labelledby="latest-notes-title">
        <div className="notebook-index-label">
          <h2 id="latest-notes-title">LATEST NOTES</h2>
          <span>{String(latest.length).padStart(2, "0")} ARTICLES</span>
        </div>
        {latest.length > 0 ? (
          <div className="notebook-list">
            {latest.map((note, index) => (
              <Link
                className="notebook-row"
                href={noteHref(note)}
                key={note.slug}
              >
                <span className="note-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="eyebrow">{note.category}</p>
                  <h3>{note.title}</h3>
                  <p className="note-tags">
                    <time dateTime={note.publishedAt!}>{note.publishedAt}</time>{" "}
                    · {note.tags.join(" / ")}
                  </p>
                </div>
                <span className="note-reading">
                  約 {note.readingMinutes} 分鐘
                </span>
                <span className="note-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="latest-notes-empty">
            <p>新的筆記，慢慢寫。</p>
            <p>目前尚無標示發表日期的文章，可使用筆記目錄瀏覽所有內容。</p>
          </div>
        )}
      </section>
      <div className="format-example">
        <Link href="/notebook/rendering-guide/">文章格式預覽 ↗</Link>
      </div>
    </main>
  );
}
