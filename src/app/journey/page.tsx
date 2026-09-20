import type { Metadata } from "next";
import { getJourneySections } from "@/lib/journey";
import { renderNote } from "@/lib/markdown";
export const metadata: Metadata = { title: "Journey" };
export default async function Journey() {
  const sections = await Promise.all(
    getJourneySections().map(async (section) => ({
      ...section,
      content: (await renderNote(section)).content,
    })),
  );
  return (
    <main className="page-shell journey-page">
      <p className="overline">01 / JOURNEY</p>
      <div className="page-intro">
        <h1>
          A few things
          <br />
          along the way.
        </h1>
        <p>從產品開發到技術分享，記錄持續探索與實作的過程。</p>
      </div>
      <nav className="journey-index" aria-label="Journey 分類">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.title}
          </a>
        ))}
      </nav>
      <div className="editorial-grid">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`editorial-row journey-section journey-${section.id}`}
            aria-labelledby={`heading-${section.id}`}
          >
            <span className="overline">0{index + 1}</span>
            <h2 id={`heading-${section.id}`}>{section.title}</h2>
            <div className="journey-content">{section.content}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
