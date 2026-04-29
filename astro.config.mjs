// @ts-check
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: "https://dvije-zarulje.hr",
  base: "/",
  // trailingSlash: 'always',
  integrations: [
    alpinejs(),
    mdx(),
    (await import("@playform/inline")).default(),
  ],
  output: "static",
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "hr",
    locales: ["en", "hr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
