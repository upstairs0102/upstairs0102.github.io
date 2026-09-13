# Project instructions

- Development branch: `feat/nextjs-portfolio`. Commit and push every completed logical change batch, including fixes. Verify the remote branch after pushing.
- Never merge into main, modify GitHub Pages settings, or add GitHub Actions until Adam requests the final cutover.
- Stage 3 was reviewed. Adam approved the 900px Work breakpoint, complete Notebook navigation/search/drawer, and latest-note selection with empty legacy dates. Notebook migration is included to make the complete menu readable. Work content, final Home/Contact, old URL compatibility and deployment cutover remain for later approval.
- Preserve `reference/prototype/` as an immutable visual baseline. Preserve article wording and code; record syntax/path conversions.
- Source in `src/`, content in `content/`, assets in `public/`. No build output, dependencies or credentials in Git.
- Use actual Next.js App Router, TypeScript and Tailwind v4; do not substitute a compatible framework.
- UI follows the prototype. Prefer native elements; use unstyled Base UI when complex interaction needs it.
