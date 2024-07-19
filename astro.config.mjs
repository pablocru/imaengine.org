import { defineConfig } from "astro/config";
import { SITE_URL, shouldExcludePageFromSitemap } from "./seo-url-handling";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap({ filter: shouldExcludePageFromSitemap })],
});
