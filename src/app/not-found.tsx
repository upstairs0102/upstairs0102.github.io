import Link from "next/link";
export default function NotFound() {
  return (
    <main className="page-shell">
      <p className="overline">404 / NOT FOUND</p>
      <div className="page-intro">
        <h1>
          A page
          <br />
          not found.
        </h1>
        <p>這個頁面目前不存在，或尚未整理完成。</p>
      </div>
      <Link className="quiet-link" href="/notebook/">
        回到 Notebook →
      </Link>
    </main>
  );
}
