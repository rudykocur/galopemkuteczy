import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

// Custom domain (galopemkuteczy.pl) serves from "/". Deploy sets VITE_BASE_PATH=/ .
// Only use "/<repo-name>/" if hosting as a project site without a custom domain.
const basePath = process.env["VITE_BASE_PATH"] || "/";

export default defineConfig({
  base: basePath,
  resolve: {
    tsconfigPaths: true,
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-query"],
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // SSR entry wrapper lives in src/server.ts
      server: { entry: "server" },
      // Static export: listed routes are prerendered to HTML at build time
      // so the site works on GitHub Pages with no server.
      pages: [{ path: "/" }],
      prerender: { enabled: true, autoStaticPathsDiscovery: false },
    }),
    nitro(),
    viteReact(),
  ],
});
