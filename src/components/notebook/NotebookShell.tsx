"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { Dialog } from "@base-ui/react/dialog";
import {
  searchNavigation,
  type NavigationCategory,
} from "@/lib/notebook-navigation";

interface NavigationProps {
  categories: NavigationCategory[];
  pathname: string;
  query: string;
  setQuery: (value: string) => void;
  expanded: string[];
  toggleCategory: (id: string) => void;
  onNavigate?: () => void;
  scrollRef: RefObject<HTMLDivElement | null>;
  savedScroll: RefObject<number>;
}
function Navigation({
  categories,
  pathname,
  query,
  setQuery,
  expanded,
  toggleCategory,
  onNavigate,
  scrollRef,
  savedScroll,
}: NavigationProps) {
  const id = useId();
  const locatedPath = useRef<string | null>(null);
  const results = searchNavigation(categories, query);
  const searching = query.trim().length > 0;
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = savedScroll.current;
  }, [scrollRef, savedScroll]);
  useEffect(() => {
    if (locatedPath.current === pathname) return;
    const container = scrollRef.current;
    const current = container?.querySelector<HTMLElement>(
      '[aria-current="page"]',
    );
    if (
      !container ||
      !current ||
      container.clientHeight === 0 ||
      current.getClientRects().length === 0
    )
      return;
    locatedPath.current = pathname;
    const rect = current.getBoundingClientRect();
    const bounds = container.getBoundingClientRect();
    if (rect.top < bounds.top || rect.bottom > bounds.bottom)
      container.scrollTop += rect.top - bounds.top - 50;
  }, [pathname, expanded, scrollRef]);
  return (
    <>
      <div className="notebook-search">
        <label htmlFor={`${id}-search`}>搜尋筆記</label>
        <div>
          <input
            id={`${id}-search`}
            type="search"
            placeholder="標題、分類或標籤"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="清除搜尋"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div
        className="notebook-nav-scroll"
        ref={scrollRef}
        onScroll={(event) => {
          savedScroll.current = event.currentTarget.scrollTop;
        }}
      >
        <nav aria-label="所有筆記">
          <Link
            className="notebook-overview-link"
            href="/notebook/"
            aria-current={
              pathname === "/notebook" || pathname === "/notebook/"
                ? "page"
                : undefined
            }
            onClick={onNavigate}
          >
            Notebook 首頁 <span aria-hidden="true">↗</span>
          </Link>
          {searching ? (
            <div className="notebook-search-results">
              <p className="nav-result-count" role="status">
                找到 {results.length} 篇筆記
              </p>
              {results.length ? (
                <ul>
                  {results.map((note) => (
                    <li key={note.slug}>
                      <Link
                        href={`/notebook/${note.slug}/`}
                        aria-current={
                          pathname.replace(/\/$/, "") ===
                          `/notebook/${note.slug}`
                            ? "page"
                            : undefined
                        }
                        onClick={onNavigate}
                      >
                        <span className="nav-result-category">
                          {note.category}
                        </span>
                        {note.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="nav-no-results">試試其他標題、分類或標籤。</p>
              )}
            </div>
          ) : (
            <>
              {(["technical", "series"] as const).map((collection) => (
                <section
                  key={collection}
                  className="notebook-nav-group"
                  aria-labelledby={`${id}-${collection}`}
                >
                  <h2 id={`${id}-${collection}`}>
                    {collection === "technical" ? "技術筆記" : "系列文章"}
                  </h2>
                  <ul>
                    {categories
                      .filter((category) => category.collection === collection)
                      .map((category) => {
                        const open = expanded.includes(category.id);
                        const active = category.notes.some(
                          (note) =>
                            pathname.replace(/\/$/, "") ===
                            `/notebook/${note.slug}`,
                        );
                        return (
                          <li
                            className="notebook-nav-category"
                            key={category.id}
                          >
                            <button
                              type="button"
                              className="nav-category-toggle"
                              aria-expanded={open}
                              aria-controls={`${id}-${category.id}`}
                              data-active={active || undefined}
                              onClick={() => toggleCategory(category.id)}
                            >
                              <span className="nav-chevron" aria-hidden="true">
                                ›
                              </span>
                              <span>{category.label}</span>
                              <span className="nav-category-count">
                                {category.articleCount}
                              </span>
                            </button>
                            <ul id={`${id}-${category.id}`} hidden={!open}>
                              {category.notes.map((note) => (
                                <li key={note.slug}>
                                  <Link
                                    href={`/notebook/${note.slug}/`}
                                    aria-current={
                                      pathname.replace(/\/$/, "") ===
                                      `/notebook/${note.slug}`
                                        ? "page"
                                        : undefined
                                    }
                                    onClick={onNavigate}
                                  >
                                    {note.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      })}
                  </ul>
                </section>
              ))}
              <Link
                className="notebook-about-link"
                href="/notebook/about/"
                aria-current={
                  pathname.replace(/\/$/, "") === "/notebook/about"
                    ? "page"
                    : undefined
                }
                onClick={onNavigate}
              >
                關於這些筆記
              </Link>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
export function NotebookShell({
  categories,
  children,
}: {
  categories: NavigationCategory[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  const activeCategory = categories.find((category) =>
    category.notes.some(
      (note) => pathname.replace(/\/$/, "") === `/notebook/${note.slug}`,
    ),
  )?.id;
  const [expanded, setExpanded] = useState<string[]>(
    activeCategory ? [activeCategory] : [],
  );
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopScroll = useRef(0);
  const mobileScroll = useRef(0);
  useEffect(() => {
    if (activeCategory)
      setExpanded((previous) =>
        previous.includes(activeCategory)
          ? previous
          : [...previous, activeCategory],
      );
    setOpen(false);
  }, [pathname, activeCategory]);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);
  const props = {
    categories,
    pathname,
    query,
    setQuery,
    expanded,
    toggleCategory: (id: string) =>
      setExpanded((previous) =>
        previous.includes(id)
          ? previous.filter((item) => item !== id)
          : [...previous, id],
      ),
  };
  return (
    <div className="notebook-shell">
      <aside className="notebook-sidebar">
        <p className="notebook-sidebar-title">THE NOTEBOOK</p>
        <Navigation
          {...props}
          scrollRef={desktopRef}
          savedScroll={desktopScroll}
        />
      </aside>
      <div className="notebook-mobile-toolbar">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="notebook-menu-trigger">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path
                d="M2 4h14M2 9h14M2 14h14"
                stroke="currentColor"
                fill="none"
              />
            </svg>
            所有筆記{" "}
            <span>
              {categories.reduce(
                (total, category) => total + category.articleCount,
                0,
              )}
            </span>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="notebook-drawer-backdrop" />
            <Dialog.Popup className="notebook-drawer">
              <div className="notebook-drawer-heading">
                <Dialog.Title>所有筆記</Dialog.Title>
                <Dialog.Close aria-label="關閉筆記選單">×</Dialog.Close>
              </div>
              <Dialog.Description className="notebook-drawer-description">
                依分類瀏覽，或搜尋文章標題與標籤。
              </Dialog.Description>
              <Navigation
                {...props}
                scrollRef={mobileRef}
                savedScroll={mobileScroll}
                onNavigate={() => setOpen(false)}
              />
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <div className="notebook-content">{children}</div>
    </div>
  );
}
