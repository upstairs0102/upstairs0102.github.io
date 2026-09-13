import type { Metadata } from "next";
export const metadata: Metadata = { title: "Work" };
const sections = ["開源", "專利", "講課", "競賽", "讀書會 / 分享", "工作"];
export default function Work() {
  return (
    <main className="page-shell work-page">
      <p className="overline">01 / WORK</p>
      <div className="page-intro">
        <h1>
          A few things
          <br />
          along the way.
        </h1>
        <p>從產品開發到技術分享，記錄持續探索與實作的過程。</p>
      </div>
      <div className="editorial-grid">
        {sections.map((title, index) => (
          <section key={title} className="editorial-row">
            <span className="overline">0{index + 1}</span>
            <h2>{title}</h2>
            <p>內容整理中。</p>
          </section>
        ))}
      </div>
      <p className="placeholder-note">
        目前先確認版型，完整經歷將在下一階段整理。
      </p>
    </main>
  );
}
