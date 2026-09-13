import type { Metadata } from "next";
export const metadata: Metadata = { title: "Notebook" };
export default function Notebook() {
  return (
    <main className="page-shell">
      <p className="overline">02 / NOTEBOOK</p>
      <div className="page-intro">
        <h1>
          Always a work
          <br />
          in progress.
        </h1>
        <p>關於前端、程式設計，以及把事情想清楚的筆記。</p>
      </div>
      <p>文章樣板整理中。</p>
    </main>
  );
}
