# Gargoyle Exterior Cleaning

Marketing site for Gargoyle — a veteran-owned, owner-operated exterior
cleaning company (gutters, roof/moss, pressure washing, windows, solar)
serving Bellevue, the Eastside, and Seattle. Built with
[Astro](https://astro.build) in a Swiss graphic style with light/dark themes.

**Live:** <https://gargoyleexteriors.com>

## Commands

| Command           | Action                                 |
| :---------------- | :------------------------------------- |
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Start dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally   |

## Deploying

Netlify builds from GitHub automatically. Push to `main` and the site
rebuilds and goes live, usually within a minute:

```sh
git add -A
git commit -m "What changed"
git push
```

There is no manual deploy step and no Netlify CLI setup required. To
confirm a change actually shipped, load the live URL rather than trusting
the build — Netlify caches, and browsers cache harder (`Cmd+Shift+R`).

Three extra domains (`gargoyleec.com`, `gargoyleexteriorcleaning.com`,
`gargoyleexterior.com`) 301-redirect to the main site via GoDaddy
forwarding. DNS is at GoDaddy; hosting is Netlify.

## Where to change things

**Business details** — [`src/consts.ts`](src/consts.ts) is the single
source of truth for name, phone, email, hours, and the service-area city
list. Change a phone number or add a city here and it updates everywhere:
header, footer, contact page, and the structured data Google reads.

One exception: the phone number is also hard-coded in the `LocalBusiness`
JSON-LD in [`src/layouts/Base.astro`](src/layouts/Base.astro) (schema.org
wants E.164 format, `+1-425-435-4195`). Change both.

**Page copy** — one file per page in `src/pages/`. Site-wide chrome lives
in `src/components/Header.astro` and `Footer.astro`.

**Photos** — `src/assets/`, with before/after job shots in
`src/assets/proof/`. Import them through Astro's `<Image>` component so
they get optimized to WebP at build time. Always write real `alt` text.

**Quote form** — not in this repo. `/contact` embeds Jobber's work
request form, so submissions create a request and a lead directly in
Jobber. Edit the fields in Jobber under Settings → Work Request form;
they update on the site with no code change and no deploy.

## Gotchas

**The Jobber embed needs `is:inline`.** Astro bundles `<script>` tags by
default and strips non-standard attributes in the process — including the
`clienthub_id` and `form_url` that carry the embed's entire configuration.
Remove that directive and the form renders as an empty space with no error
anywhere: the build passes, the script loads, and quote requests simply
stop arriving. If leads ever go quiet, check
[`src/pages/contact.astro`](src/pages/contact.astro) first.

## SEO in place

- Unique titles/descriptions per page, canonical URLs, Open Graph tags
- `LocalBusiness` JSON-LD on every page, `FAQPage` JSON-LD on `/services`
- Sitemap via `@astrojs/sitemap` + `robots.txt`
- Semantic HTML, one `h1` per page, skip link, dark mode via
  `prefers-color-scheme` with manual toggle
