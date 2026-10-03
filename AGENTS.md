<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Static export (GitHub Pages)

- The site must keep working as a fully static build: no server functions, no backend calls. `vite.config.ts` prerenders `/` (pages list + `autoStaticPathsDiscovery: false`); the deployable static folder is `dist/client`.
- Media must be real files in `src/assets/` imported directly, NOT `.asset.json` Lovable pointers — pointers resolve to `/__l5e/...` which only works on Lovable hosting and 404s on GitHub Pages. Why: static hosting has no Lovable asset CDN.
- GitHub Pages project sites serve under `/<repo-name>/`; builds set `VITE_BASE_PATH` to that path (see `.github/workflows/deploy.yml`). Lovable hosting uses the default `/`.
