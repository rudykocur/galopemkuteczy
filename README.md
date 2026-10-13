# Galopem ku tęczy

Strona internetowa działalności jeździeckiej **Galopem ku tęczy** — oferta, galeria, opinie i kontakt.

**Live:** [galopemkuteczy.pl](http://galopemkuteczy.pl/)

## Stack

- React 19 + TypeScript
- TanStack Start / Router (statyczny prerender)
- Tailwind CSS v4 + shadcn/ui
- Bun + Vite
- Hosting: GitHub Pages (workflow w `.github/workflows/deploy.yml`)

## Development

Wymagane: [Bun](https://bun.sh).

```sh
git clone https://github.com/rudykocur/galopemkuteczy.git
cd galopemkuteczy
bun install
bun run dev
```

| Command | Opis |
| --- | --- |
| `bun run dev` | lokalny serwer deweloperski |
| `bun run build` | build statyczny → `.output/public` |
| `bun run preview` | podgląd builda |
| `bun run lint` | ESLint |
| `bun run format` | Prettier |

Szczegóły dla agentów / dalszego rozwoju: [`AGENTS.md`](./AGENTS.md). Plan: [`roadmap.md`](./roadmap.md).
