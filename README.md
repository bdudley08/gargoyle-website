# Gargoyle Exterior Cleaning

Marketing site for Gargoyle, an owner-operated exterior cleaning company
(gutters, windows, roof/moss) serving Seattle and the Eastside. Built with
[Astro](https://astro.build) in a Swiss graphic style with light/dark themes.

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `./dist/`    |
| `npm run preview` | Preview the production build locally      |

## Before launch — placeholders to replace

All business details live in one place: [`src/consts.ts`](src/consts.ts).

1. **Domain** — `https://www.gargoylecleaning.com` is a placeholder. Update it
   in `src/consts.ts`, `astro.config.mjs` (the `site` field), and
   `public/robots.txt`. The sitemap and canonical URLs derive from it.
2. **Phone** — `(206) 555-0134` is a fictional 555 number. Replace it in
   `src/consts.ts` and in the JSON-LD block in `src/layouts/Base.astro`.
3. **Email** — `hello@gargoylecleaning.com` is a placeholder in `src/consts.ts`.
4. **Contact form** — done. `/contact` embeds Jobber's work request form,
   so submissions create a request and a lead directly in Jobber. The
   fields are edited in Jobber (Settings → Work Request form), not here.
   The embed `<script>` must keep its `is:inline` directive — without it
   Astro bundles the script and strips the `clienthub_id` and `form_url`
   attributes, and the form silently renders as an empty space.
5. **Photos** — the site is intentionally photo-free right now. Real
   before/after job photos (with `alt` text) would strengthen both trust
   and SEO when Brandon has them.

## SEO already in place

- Unique titles/descriptions per page, canonical URLs, Open Graph tags
- `LocalBusiness` JSON-LD on every page, `FAQPage` JSON-LD on `/services`
- Sitemap via `@astrojs/sitemap` + `robots.txt`
- Semantic HTML, one `h1` per page, skip link, dark mode via
  `prefers-color-scheme` with manual toggle
