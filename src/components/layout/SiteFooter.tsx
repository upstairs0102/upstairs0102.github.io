import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="wordmark">
        ADAM YOU.
      </Link>
      <span>© {new Date().getFullYear()} Adam You</span>
      <span>Built with curiosity.</span>
    </footer>
  );
}
