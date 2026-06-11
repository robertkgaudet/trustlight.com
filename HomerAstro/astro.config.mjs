// @ts-check
import { defineConfig } from 'astro/config';

// Homer Astro template configuration.
// Assets live in /public/assets and are referenced with root-relative paths
// (e.g. /assets/css/app.min.css) so Homer's plugin/JS expectations stay intact.
export default defineConfig({
  // Deployment URL — used for canonical links, sitemap, and OG tags.
  site: 'https://trustlight.com',

  // Static output by default — this is a static template (no data layer).
  output: 'static',

  // Trailing slash off keeps clean /page URLs matching Homer's *.html routes.
  trailingSlash: 'ignore',
});
