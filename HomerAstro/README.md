# Homer — Astro Template

Homer v3.1.0 (Bootstrap 5 admin theme by WebAppLayers) converted into a reusable
Astro template. All 110 pages build as static routes; the shared chrome is
componentized; the theme variants are collapsed into a single config.

> **License:** Homer is a commercial template. You must hold a valid Homer license
> (purchased from WrapBootstrap / WebAppLayers) to use this. This conversion does
> not grant a license.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Project structure

```
src/
  config/theme.ts          Theme settings (collapses sidebar/topbar variants)
  layouts/
    Layout.astro           <html>/<head>/scripts + theme attributes
    AdminLayout.astro      Full admin shell: wrapper + menu + content + footer + customizer
    BlankLayout.astro      Full-page layout for auth/error/landing screens
  components/
    Menu.astro             Sidenav + Topbar wrapper
    Sidenav.astro          Left sidebar navigation
    Topbar.astro           Top navigation bar
    Footer.astro           Page footer
    Customizer.astro       Theme customizer offcanvas
    PageTitle.astro        Breadcrumb / page heading (props: title, subtitle)
  pages/                   110 routes (one .astro per Homer page)
  content-fragments/       Raw HTML body of each page (injected via set:html)
public/
  assets/                  All CSS, JS, plugins, images, fonts (paths unchanged)
```

## How pages work

Each admin page is thin — it imports its content fragment and drops it into the shell:

```astro
---
import AdminLayout from "../layouts/AdminLayout.astro";
import content from "../content-fragments/analytics.html?raw";
---
<AdminLayout title="Analytics" pageTitle="Analytics">
  <Fragment set:html={content} />
  <Fragment slot="page-scripts">
    <script is:inline src="/assets/js/pages/analytics.js"></script>
  </Fragment>
</AdminLayout>
```

Page body HTML lives in `content-fragments/` and is injected with `set:html` so
Homer's inline scripts, style attributes, and `{}` characters pass through
untouched (Astro would otherwise parse them as JSX expressions).

### Building a brand-new page

Create `src/pages/my-page.astro`:

```astro
---
import AdminLayout from "../layouts/AdminLayout.astro";
---
<AdminLayout title="My Page" pageTitle="My Page" pageSubtitle="Section">
  <div class="row">
    <div class="col-12"><div class="card"><div class="card-body">
      Hello from my new page.
    </div></div></div>
  </div>
</AdminLayout>
```

## Theming (replaces the sidebar-dark/gray/topbar-dark/gray demo pages)

Those four demo pages were the same layout with different `data-*` attributes.
Edit `src/config/theme.ts` to set the look once for the whole app:

```ts
export const themeConfig: HomerTheme = {
  theme: 'light',        // 'light' | 'dark'
  sidenavColor: 'light', // 'light' | 'dark' | 'gray' | 'brand' | 'gradient'
  sidenavSize: 'default',
  topbarColor: 'light',  // 'light' | 'dark' | 'gray'
  layoutPosition: 'fixed',
  // ...
};
```

The runtime customizer (gear icon) still works for per-session overrides, exactly
as in stock Homer.

## Notes

- **Assets** are copied as-is to `public/assets/` with original paths, so Homer's
  plugin JS and image references resolve without modification.
- **Internal links** were rewritten from `page.html` to clean routes (`/page`).
- **Interactive widgets** (DataTables, charts, calendar, maps, editors) remain
  client-side JS loaded via `is:inline` script tags — no behavior changed.
- **Source SCSS** lives in the original Homer `src/assets/scss/` if you want to
  rebuild `app.css`; this template ships the pre-compiled `app.min.css`.
