"use client";
import { useEffect } from "react";
import Link from "next/link";

export function LegacyRedirect({ target }: { target: string }) {
  useEffect(() => {
    window.location.replace(
      target + window.location.search + window.location.hash,
    );
  }, [target]);
  return (
    <main className="page-shell">
      <p className="overline">NOTEBOOK</p>
      <div className="page-intro">
        <h1>筆記搬家了。</h1>
        <p>正在前往新版文章。如果沒有自動跳轉，請使用下方連結。</p>
        <Link className="quiet-link" href={target}>
          前往新版 Notebook →
        </Link>
      </div>
    </main>
  );
}
