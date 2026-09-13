"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["Work", "/work/"],
  ["Notebook", "/notebook/"],
  ["Contact", "/contact/"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header" id="page-top">
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
