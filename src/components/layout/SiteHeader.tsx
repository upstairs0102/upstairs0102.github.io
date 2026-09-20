"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Journey", "/journey/"],
  ["Notebook", "/notebook/"],
  ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let frame = 0;
    let previous: boolean | undefined;
    const update = () => {
      frame = 0;
      const next = window.scrollY > 24;
      if (next !== previous) {
        previous = next;
        setScrolled(next);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("pageshow", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("pageshow", schedule);
    };
  }, [pathname]);
  return (
    <header className="site-header" id="page-top" data-scrolled={scrolled}>
      <Link href="/" className="wordmark" aria-label="Adam You home">
        ADAM YOU<span className="logo-period">.</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname.startsWith(href.slice(0, -1)) ? "page" : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
