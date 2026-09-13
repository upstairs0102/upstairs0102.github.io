import { Hero } from "./Hero";
import Link from "next/link";
import { getNotes, getLatestNotes, noteHref } from "@/lib/notebook";

export function HomeContent() {
  const latestNotes = getLatestNotes(getNotes(), 3);
  return (
    <main className="home">
      <Hero />
      <section id="work" className="work section">
        <div className="section-top">
          <span className="overline">01 / SELECTED WORK</span>
          <span className="overline secondary">A FEW THINGS I BUILD.</span>
        </div>
        <div className="section-heading">
          <h2>
            Ideas into
            <br />
            something useful.
          </h2>
          <p>
            Thoughtful interfaces. Clear information.
            <br />
            Small details that make a difference.
          </p>
        </div>
        <div className="projects">
          <article className="project">
            <div
              className="project-art chart-art"
              aria-label="Illustrative line chart"
            >
              <div className="art-top">
                <span>OrbCharts</span>
                <span>DATA, IN MOTION</span>
              </div>
              <svg
                viewBox="0 0 560 230"
                role="img"
                aria-label="An illustrative rising line chart"
              >
                <g className="grid">
                  <path d="M0 40h560M0 95h560M0 150h560M0 205h560" />
                </g>
                <path
                  className="chart-fill"
                  d="M0 195L45 180L90 187L135 140L180 153L225 96L270 123L315 69L360 93L405 42L450 58L495 15L560 29V230H0Z"
                />
                <path
                  className="chart-line"
                  d="M0 195L45 180L90 187L135 140L180 153L225 96L270 123L315 69L360 93L405 42L450 58L495 15L560 29"
                />
              </svg>
              <span className="art-caption">A DIFFERENT VIEW OF DATA.</span>
            </div>
            <div className="project-caption">
              <div>
                <h3>OrbCharts</h3>
                <p>Data visualization / Open source</p>
              </div>
              <span className="project-number">01</span>
            </div>
          </article>
          <article className="project">
            <div className="project-art company-art">
              <div className="art-top">
                <span>幫你查</span>
                <span>COMPANY EXPLORER</span>
              </div>
              <div className="company-content">
                <span className="company-small">CONNECTING THE DOTS</span>
                <p>
                  Every company.
                  <br />A bigger picture.
                </p>
                <div className="search-illustration">
                  <span>探索一間公司</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10" cy="10" r="6" />
                    <path d="m15 15 5 5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <h3>幫你查 · Company Explorer</h3>
                <p>Product engineering / Information design</p>
              </div>
              <span className="project-number">02</span>
            </div>
          </article>
        </div>
      </section>
      <section id="notebook" className="notebook section">
        <div className="section-top">
          <span className="overline">02 / NOTEBOOK</span>
          <span className="overline secondary">ALWAYS A WORK IN PROGRESS.</span>
        </div>
        <div className="notebook-layout">
          <h2>
            Beyond
            <br />
            the screen.
          </h2>
          <div className="notes">
            {latestNotes.map((note, index) => (
              <article key={note.slug}>
                <span className="note-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Link className="home-note-link" href={noteHref(note)}>
                  <span className="note-category">{note.category}</span>
                  <h3>{note.title}</h3>
                  <p>
                    <time dateTime={note.publishedAt!}>{note.publishedAt}</time>{" "}
                    · 約 {note.readingMinutes} 分鐘
                  </p>
                </Link>
              </article>
            ))}
            {latestNotes.length === 0 && <p>新的筆記，慢慢寫。</p>}
            <Link href="/notebook/" className="home-notebook-more quiet-link">
              所有筆記 ↗
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="section-top">
          <span className="overline">03 / CONTACT</span>
          <a href="#top" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
        <p className="contact-intro">Good things start with a conversation.</p>
        <h2>
          Let’s connect<span>.</span>
        </h2>
        <p className="contact-note">
          Taipei, Taiwan · Somewhere between code and a camera.
        </p>
      </section>
    </main>
  );
}
