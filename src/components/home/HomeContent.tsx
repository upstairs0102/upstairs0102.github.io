import { Hero } from "./Hero";

export function HomeContent() {
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
            <article>
              <span className="note-index">01</span>
              <div>
                <span className="note-category">ENGINEERING</span>
                <h3>Making complex things feel simple.</h3>
                <p>
                  Notes on interfaces, systems, and the craft of building for
                  the web.
                </p>
              </div>
            </article>
            <article>
              <span className="note-index">02</span>
              <div>
                <span className="note-category">PHOTOGRAPHY</span>
                <h3>A different way of seeing.</h3>
                <p>Light, quiet moments, and the details worth stopping for.</p>
              </div>
            </article>
            <article>
              <span className="note-index">03</span>
              <div>
                <span className="note-category">LIFE OUTSIDE</span>
                <h3>Taking the longer way home.</h3>
                <p>Two wheels, fresh air, and a little room for curiosity.</p>
              </div>
            </article>
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
