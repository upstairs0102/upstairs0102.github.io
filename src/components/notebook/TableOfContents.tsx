import type { TocItem } from "@/lib/markdown";
export function TableOfContents({
  items,
  mobile = false,
}: {
  items: TocItem[];
  mobile?: boolean;
}) {
  if (!items.length) return null;
  const links = (
    <ol>
      {items.map((item) => (
        <li key={item.id} data-depth={item.depth}>
          <a href={`#${item.id}`}>{item.text}</a>
        </li>
      ))}
    </ol>
  );
  if (mobile)
    return (
      <details className="article-toc-mobile">
        <summary>
          文章目錄 <span aria-hidden="true">＋</span>
        </summary>
        <nav aria-label="文章目錄">{links}</nav>
      </details>
    );
  return (
    <nav className="article-toc" aria-label="文章目錄">
      <p className="eyebrow">ON THIS PAGE</p>
      {links}
    </nav>
  );
}
