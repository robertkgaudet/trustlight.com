# Trustlight

Marketing site for **Trustlight** — a senior AI & software consultancy.
Built with [Astro](https://astro.build) (static output), skinned in the **Victora**
design system (Skin A: *Old-Money Ledger*).

Originally scaffolded from the Homer Astro template, then stripped down to just the
Trustlight site.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

```
src/
  styles/victora.css            Design system: tokens, type, components (Old-Money Ledger)
  layouts/SiteLayout.astro      Standalone page shell — head/SEO/fonts + header + footer
  components/site/
    Header.astro                T monogram + TRUSTLIGHT lockup + nav (hairline border)
    Footer.astro                Domain + nav repeat (hairline border)
  pages/
    index.astro                 Home (/)
    about.astro                 About (/about)
    services.astro              Services (/services)
    contact.astro               Contact (/contact)
public/assets/images/favicon.ico
```

## Design system — Victora (Skin A: Old-Money Ledger)

Paper + ink, 1px hairlines, rectangular, **no** shadows/gradients/pills. One rationed
accent (oxblood `#7A2E2E`). Type: **Spectral** (display + body) + **IBM Plex Mono**
(all figures/labels, tabular). All tokens live as CSS custom properties at the top of
`src/styles/victora.css`.

## Before launch — placeholders to replace

- **Credibility proof points** (`src/pages/index.astro`) — real numbers for `15+ / 40+ / 99.9%`.
- **Contact details** (`src/pages/contact.astro`) — real email, a working form endpoint
  (currently a dummy Formspree `action`), and any phone/location.
