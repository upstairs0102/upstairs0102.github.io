import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  robots: { index: false, follow: false },
};

export default function WorkRedirect() {
  return (
    <main className="page-shell">
      <meta httpEquiv="refresh" content="0; url=/journey/" />
      <p className="page-intro">
        此頁面已搬到 <a href="/journey/">/journey/</a>。
      </p>
    </main>
  );
}
