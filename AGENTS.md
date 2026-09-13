# Project instructions

- Development branch: `feat/nextjs-portfolio`. Commit and push every completed logical change batch, including fixes. Verify the remote branch after pushing.
- Never merge into main, modify GitHub Pages settings, or add GitHub Actions until Adam requests the final cutover.
- Current scope ends at stage 3: design baseline, Next.js homepage scaffold, representative Markdown templates. Full migration requires review first.
- Preserve `reference/prototype/` as an immutable visual baseline. Preserve article wording and code; record syntax/path conversions.
- Source in `src/`, content in `content/`, assets in `public/`. No build output, dependencies or credentials in Git.
- Use actual Next.js App Router, TypeScript and Tailwind v4; do not substitute a compatible framework.
- UI follows the prototype. Prefer native elements; use unstyled Base UI when complex interaction needs it.
