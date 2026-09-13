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
          <article className="project featured-project">
            <div className="project-art orbcharts-art">
              <div className="art-top">
                <span>OrbCharts</span>
                <span>DATA, IN MOTION</span>
              </div>
              <img
                className="orbcharts-logo"
                src="https://camo.githubusercontent.com/373cbfc68d0d19b21515de664f371f35f2a2650115ec87c820498bd3741f567f/68747470733a2f2f6270626173652e6769746875622e696f2f6f72626368617274732f66617669636f6e2f66617669636f6e2d3132382e706e67"
                alt="OrbCharts 標誌"
                width={128}
                height={128}
                loading="lazy"
                decoding="async"
              />
              <span className="art-caption">
                ONE DATA FORMAT. MANY WAYS TO SEE.
              </span>
            </div>
            <div className="project-caption">
              <div>
                <h3>OrbCharts</h3>
                <p>Data visualization / Open source</p>
                <p className="project-description">
                  為儀表板打造的 JavaScript
                  圖表函式庫。以統一的資料格式，將資料與呈現方式分離；搭配可組合的圖表圖層，讓同一份資料自由切換視角，靈活回應持續變動的需求。
                </p>
                <a
                  className="project-link"
                  href="https://bpbase.github.io/orbcharts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="探索 OrbCharts（另開分頁）"
                >
                  探索 OrbCharts <span aria-hidden="true">↗</span>
                </a>
              </div>
              <span className="project-number">01</span>
            </div>
          </article>
          <article className="project featured-project">
            <div className="project-art hologram-art">
              <div className="art-top">
                <span>NOCTURNE</span>
                <span>A CITY AFTER DARK</span>
              </div>
              <iframe
                className="hologram-preview"
                src="https://upstairs0102.github.io/nocturne-district/hologram-light/"
                title="Nocturne-district 互動全息機器人，可按住左鍵水平拖曳旋轉"
                loading="lazy"
                style={{ background: "transparent", colorScheme: "light" }}
              />
              <span className="art-caption hologram-hint">
                按住左鍵／單指水平拖曳，轉動機器人
              </span>
            </div>
            <div className="project-caption">
              <div>
                <h3>Nocturne-district</h3>
                <p>Interactive 3D / Creative coding</p>
                <p className="project-description">
                  一座向《Stray》中城致敬的原創 3D
                  城市。霓虹、老建築與全息機器人，構成七個相連的夜間街區；在瀏覽器裡拉近、轉動視角，慢慢探索科技與日常交錯的城市風景。
                </p>
                <a
                  className="project-link"
                  href="https://upstairs0102.github.io/nocturne-district/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="進入夜泊街區（另開分頁）"
                >
                  進入夜泊街區 <span aria-hidden="true">↗</span>
                </a>
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
