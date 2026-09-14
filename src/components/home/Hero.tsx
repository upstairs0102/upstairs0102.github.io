"use client";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const title = hero.querySelector<HTMLElement>(".title-layer")!;
    const portrait = hero.querySelector<HTMLElement>(".portrait-layer")!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const paint = () => {
      frame = 0;
      const y = Math.max(0, Math.min(window.scrollY, hero.offsetHeight));
      const mobile = window.innerWidth <= 700;
      title.style.transform = reduced.matches
        ? "none"
        : `translate3d(0,${y * (mobile ? 0.085 : 0.16)}px,0)`;
      portrait.style.transform = reduced.matches
        ? "none"
        : `translate3d(0,${y * (mobile ? -0.025 : -0.04)}px,0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <section
      ref={heroRef}
      id="top"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-stage">
        <div className="hero-eyebrow">
          <span>ENGINEERING / EVERYDAY CURIOSITY</span>
          <span className="edition">TAIPEI, TAIWAN</span>
        </div>
        <div className="title-layer">
          <h1 id="hero-title">
            <span>ADAM</span>
            <span>YOU</span>
          </h1>
        </div>
        <div className="portrait-layer">
          <img
            className="portrait"
            src="/images/adam-camera.webp"
            alt="Adam You, standing and holding a Canon camera up to take a photograph"
            width="1024"
            height="1536"
            fetchPriority="high"
          />
        </div>
        <div className="hero-bottom">
          <p className="roles">
            <span>Senior Software Engineer</span>
            <i>/</i>
            <span>Shutterbug</span>
            <i>/</i>
            <span>Cycling Lover</span>
          </p>
          <a className="scroll-cue" href="#work">
            <span>SCROLL TO EXPLORE</span>
            <svg viewBox="0 0 20 24" aria-hidden="true">
              <path d="M10 1v20M3 14l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
