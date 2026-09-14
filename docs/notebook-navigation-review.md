# Notebook navigation revision

Approved after the stage-3 review: a complete Notebook menu, search by title/category/tag, responsive side navigation, a 900px Work breakpoint, and latest articles selected by publication date. Adam requested that both legacy dates remain empty.

The complete Notebook now has 76 migrated original Markdown files: 75 public documents (72 articles and 3 introduction pages) and one draft excluded from both navigation and export. A separate format fixture remains available. Work content migration is still pending.

The migration preserves all original article wording and code. Only frontmatter metadata and parsed image/link destinations are converted. The migration ledger stores reversible edits and content/image hashes. Image matching also resolves the original Day1-2 / day1-2 case discrepancy. Source mistakes that are plain Markdown text remain as authored.

Dates use publishedAt and updatedAt, both null for all legacy documents. Latest Notes shows up to six dated articles, sorted by publishedAt with a deterministic slug tie-breaker. No Git dates, file timestamps or migration dates are inferred. Drafts, examples, introductions and future publication dates are excluded. An empty result shows a link to browse the complete archive.

Navigation has 9 technical categories and 2 series. Series introductions precede lessons; numeric lesson/Day ordering is preserved. The shared Notebook layout retains search, expanded categories and scroll state between article routes. Base UI Dialog provides the mobile drawer behavior; source navigation and article TOC are separate landmarks.

Responsive rules:
- Work: one column below 900px; two at 900px and above.
- Notebook: 264px navigation and right-hand TOC at 1440px and above.
- 1024–1439px: 240px navigation; collapsible article TOC above the body.
- Below 1024px: navigation drawer; collapsible article TOC above the body.

Validation: production SSG build, TypeScript, seven content/navigation/date tests, and all exported local links/images/anchors. No browser screenshot or physical device comparison is claimed for this revision.
