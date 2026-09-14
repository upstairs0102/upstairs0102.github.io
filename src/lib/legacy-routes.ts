import inventory from "../../docs/migration-inventory.json";

export const legacyRoutes: Record<string, string> = {
  "/docs": "/notebook/",
  ...Object.fromEntries(
    inventory.documents
      .filter((doc) => !doc.draft)
      .map((doc) => [
        doc.legacyPath.replace(/\/$/, ""),
        doc.plannedPath.replace(/\/$/, "") + "/",
      ]),
  ),
};

/** Only rewrite known legacy routes on our own origin. Preserve queries/anchors. */
export function rewriteLegacyHref(href: string): string {
  if (!href.startsWith("/") && !/^https?:\/\//.test(href)) return href;
  const url = new URL(href, "https://upstairs0102.github.io");
  if (
    url.origin !== "https://upstairs0102.github.io" &&
    url.origin !== "http://upstairs0102.github.io"
  )
    return href;
  const target = legacyRoutes[url.pathname.replace(/\/$/, "")];
  return target ? target + url.search + url.hash : href;
}
