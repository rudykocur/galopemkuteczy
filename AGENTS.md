# Agent notes — Galopem ku tęczy

Landing page for the equestrian business **Galopem ku tęczy**. Static site hosted on GitHub Pages (custom domain: `galopemkuteczy.pl`).

## Stack

| Layer | Choice |
| --- | --- |
| Runtime / package manager | **Bun** (`bun.lock`, `bunfig.toml`) |
| UI | React 19 + TypeScript |
| Framework | **TanStack Start** (`@tanstack/react-start`) + **TanStack Router** (file-based routes) |
| Data | TanStack Query (wired in `src/router.tsx` / `__root.tsx`; mostly unused today) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `src/styles.css`) |
| Components | shadcn/ui (New York) under `src/components/ui/` — `components.json` |
| Icons | `lucide-react` |
| Build | Vite 8 + Nitro + TanStack prerender |
| Deploy | `.github/workflows/deploy.yml` → GitHub Pages from `.output/public` (fallback: `dist/client`) |

Scripts: `bun run dev` · `bun run build` · `bun run preview` · `bun run lint` · `bun run format`.

## Layout

```
src/
  assets/          # real media files (import in components — never CDN pointers)
  components/ui/   # shadcn primitives
  hooks/
  lib/             # utils, contact submit stub, SSR error helpers
  routes/          # file-based routes (see src/routes/README.md)
  router.tsx       # createRouter + QueryClient
  server.ts        # SSR entry wrapper (error page for catastrophic failures)
  start.ts         # Start middleware (error + CSRF)
  styles.css       # Tailwind + design tokens (rainbow palette, fonts)
public/            # favicon, robots.txt, .nojekyll
```

- Single page today: `src/routes/index.tsx` (sections via hash anchors).
- `src/routeTree.gen.ts` is generated — do not edit by hand.
- Path alias: `@/*` → `src/*` (tsconfig + Vite `resolve.tsconfigPaths`).

## Static export (GitHub Pages) — hard constraints

- Fully static: **no server functions, no backend calls** in production.
- `vite.config.ts` prerenders `/` (`pages` + `autoStaticPathsDiscovery: false`).
- Deployable folder after `bun run build`: **`.output/public`** (HTML + assets). Workflow falls back to `dist/client` if present.
- Media must be real files in `src/assets/` imported directly.
- Project Pages base path: builds set `VITE_BASE_PATH` to `/<repo-name>/` (see deploy workflow). Custom domain / local default is `/`.

When adding routes that must be public HTML, list them in `tanstackStart.pages` (or turn on discovery carefully).

## Conventions to keep

- Polish copy on the marketing page; keep tone warm and inclusive.
- Design tokens live as CSS variables in `src/styles.css` (`--rainbow-*`, fonts). Prefer tokens over one-off colors.
- Contact form is gated by `CONTACT_FORM_ENABLED` in `index.tsx`; submit logic stays in `src/lib/contactSubmit.ts` (client-only stub until an email provider is chosen — see `roadmap.md`).
- Prefer editing existing section structure in `index.tsx` over introducing card-heavy dashboards or new frameworks.
- shadcn: add via the usual CLI into `src/components/ui/`; don’t invent a parallel component system.
- Do not rewrite published git history on shared branches (force-push / rebase-amend of pushed commits).

## Useful local checks

```sh
bun install
bun run build
# with GitHub Pages base path:
VITE_BASE_PATH=/galopemkuteczy/ bun run build
```
