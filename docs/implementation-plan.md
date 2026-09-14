# Stages and review boundary

1. Freeze prototype and record all legacy document paths, Work categories and draft status.
2. Build Next.js App Router + TypeScript + Tailwind v4 with equivalent homepage and inner-page shell. Home/Contact stay illustrative.
3. Build an SSG Markdown template with four representative originals: RxJS prose/code, Vue course callouts, D3 local images, long Next.js article with GFM tables. Add a renderer fixture for explicit/duplicate heading IDs and highlighting.
4. After review: migrate remaining Notebook articles and six Work sections, preserving words, links and dates; resolve legacy URLs.
5. After review: finish Home/Contact, production SEO, GitHub Actions and main-branch cutover.

Use next-mdx-remote/rsc, gray-matter once, remark-gfm, directives, heading IDs and Shiki through rehype-pretty-code. Compile trusted authored files during build. No runtime remote content API.

Work is a layout placeholder through stage 3. Commented-out original Work entries remain unpublished. _wip stays draft. Separate 26 Blog documents remain outside scope.
