# hiner.dev

Personal website (résumé, projects, photography) built with Next.js and deployed on Vercel.

@AGENTS.md

## Stack

- Next.js (App Router, TypeScript, `src/` directory), React 19
- Styling: CSS Modules + CSS custom properties (no Tailwind, no component library)
- Theme: dark by default with a light option, via `next-themes` (planned for BOX-6; for
  now `globals.css` follows `prefers-color-scheme`)
- Content: typed `.ts` data files (no CMS or database)
- Images: `next/image`. Icons: inline SVGs. Animation: CSS keyframes that respect
  `prefers-reduced-motion`.
- Hosting: Vercel (Hobby plan). Node 24 is pinned via `.nvmrc` and `engines`.

## Structure

- `src/app/`: routes, layouts, and route-level CSS Modules
- `src/app/api/*/route.ts`: server-side endpoints, when an API key or server fetch is needed
- `public/img/`: static images
- Standalone sub-projects get their own route folder and `layout.tsx` so they don't
  inherit the main site's styles.

## Commands

- `npm install`
- `npm run dev`: dev server at http://localhost:3000
- `npm run build`: production build
- `npm run lint`: ESLint
- `npm run typecheck`: generates Next route types, then `tsc --noEmit`
- `npm run format` / `npm run format:check`: Prettier (single quotes, 100-char lines)
- `npm run check`: lint + typecheck + format check; run before opening a PR

## Conventions

- Server Components by default; add `"use client"` only for state, effects, or browser APIs.
- Keep pages static. Don't add caching, revalidation, or dynamic config unless a page needs live data.
- `cacheComponents` and `partialPrefetching` are on in `next.config.ts`: uncached dynamic
  data (request APIs, uncached fetches) must sit inside `<Suspense>` or use `'use cache'`.
- Keep global CSS to tokens and resets; put component styles in CSS Modules.
- Keep dependencies minimal; prefer platform features (e.g. `<details>` over a JS accordion).
- Line endings are normalized to LF via `.gitattributes`.
- Default branch is `main`; changes land through squash-merged PRs. CI
  (`.github/workflows/ci.yml`) runs `npm run check` on every PR.
