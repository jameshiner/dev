# hiner.dev

Personal website (résumé, projects, photography) built with Next.js and deployed on Vercel.

@AGENTS.md

## Stack

- Next.js (App Router, TypeScript, `src/` directory), React 19
- Styling: CSS Modules + CSS custom properties (no Tailwind, no component library)
- Theme: dark by default with a light option, no library. An inline script in the root
  layout's `<head>` applies a saved `localStorage` choice as `data-theme` before first
  paint; `globals.css` overrides tokens under `[data-theme='light']`.
- Fonts: IBM Plex Sans (display) and DM Sans (text) via `next/font/google`, set in the root
  layout as `--font-display-face` / `--font-text-face`.
- Content: typed `.ts` data files (no CMS or database)
- Images: `next/image`. Icons: inline SVGs. Animation: CSS keyframes that respect
  `prefers-reduced-motion`.
- Hosting: Vercel (Hobby plan). Node 24 is pinned via `.nvmrc` and `engines`.

## Structure

- `src/app/`: routes, layouts, and route-level CSS Modules. Components used by only one
  route sit next to its page (e.g. `photography/Gallery.tsx`).
- `src/app/opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`: generated link-preview card
  and icons (must stay at the app root). Their drawing code, colors and IBM Plex Sans TTFs
  (OFL) live in `src/app/_og/`.
- `src/components/`: shared components (sidebar, footer, theme toggle, icons), each with
  its own CSS Module
- `src/data/`: typed content (`site.ts` holds name, role, links and nav items; also jobs,
  skills, education, projects)
- `src/lib/`: small helpers (e.g. date formatting)
- `src/app/api/*/route.ts`: server-side endpoints, when an API key or server fetch is needed
- `public/img/`: static images, imported statically from `src/data/` (sizes and blur
  placeholders come from the import).
- `public/img/photos/`: gallery photos, named `CODE_YYYYMMDD_NN.jpg` (four-letter bird
  banding code). Commit them pre-sized: 2000px long edge, JPEG quality 80, metadata stripped
  except the color profile. Add each one to `src/data/photos.ts`.
- Standalone sub-projects get their own route folder and `layout.tsx` so they don't
  inherit the main site's styles.
- `.claude/skills/`: `/start-ticket` and `/wrap-up-ticket` for the workflow below.
  `.claude/agents/code-reviewer.md`: read-only reviewer that `/wrap-up-ticket` runs.

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
- Pages export `metadata = pageMetadata({ title, description, path })` from
  `src/lib/metadata.ts`. Next merges metadata shallowly, so a page's `openGraph` replaces the
  layout's; the helper keeps the preview image and sets the canonical URL.
- Keep pages static. Don't add caching, revalidation, or dynamic config unless a page needs live data.
- `cacheComponents` and `partialPrefetching` are on in `next.config.ts`: uncached dynamic
  data (request APIs, uncached fetches) must sit inside `<Suspense>` or use `'use cache'`.
- Keep global CSS to tokens and resets; put component styles in CSS Modules.
- Keep dependencies minimal; prefer platform features (e.g. `<details>` over a JS accordion).
- Line endings are normalized to LF via `.gitattributes`.

## Workflow

- One Linear issue per branch. Branch off `main` using the issue's Linear branch name (it
  carries the issue ID, which links the branch and PR to the issue).
- Leave changes uncommitted while building. Before committing, run `npm run check` and a
  code review (`/wrap-up-ticket` does both), fix what it finds, then commit in small
  commits with plain imperative messages.
- PR title `BOX-N: <issue title>`; body starts with `Closes BOX-N`, then a short list of
  what changed.
- `main` is protected by a ruleset: PR required, CI `check` (`.github/workflows/ci.yml`,
  runs `npm run check`) must pass, no force pushes.
- Squash-merge only; the squash message is the PR title and head branches auto-delete.
  Merging closes the Linear issue and Vercel deploys `main` to production.
- Update this file in the same PR when stack, structure, commands or conventions change.
