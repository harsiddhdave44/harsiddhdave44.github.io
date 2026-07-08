# Harsiddh Dave — Portfolio

Personal portfolio for Harsiddh Dave, Platform Engineer. Built with Next.js 15
(App Router) + TypeScript, no UI framework — hand-written CSS design system.

**Design concept, "The Status Page":** the site borrows the vernacular of the
systems Harsiddh operates. The hero reads like a status header, section labels
are route paths set in monospace, case studies are written as production
**runbooks** with metadata blocks (system, stack, outcome, status), and the
contact section inverts to a solid ink panel. Type is all-mono, a typeset
terminal document: Martian Mono display, JetBrains Mono body/UI. Light, dark,
and system themes via the nav toggle (persisted, no first-paint flash).
Full design rationale: `docs/superpowers/specs/2026-07-07-portfolio-design.md`.

---

## File structure

```
├── docs/superpowers/specs/        Design spec
├── src/
│   ├── content/                   ← ALL editable personal content
│   │   ├── site.ts                Name, role, email, about, capabilities, contact
│   │   └── projects.ts            Case studies (runbooks)
│   ├── app/
│   │   ├── layout.tsx             Fonts, metadata, shell (nav/footer/skip link)
│   │   ├── globals.css            Design tokens + base styles + a11y utilities
│   │   ├── page.tsx               Home: hero, about, work, capabilities, approach, contact
│   │   ├── work/[slug]/page.tsx   Case-study (runbook) pages, SSG
│   │   ├── not-found.tsx          Custom 404 ("route not found in the routing table")
│   │   ├── error.tsx              Error state with retry
│   │   ├── loading.tsx            Loading skeleton
│   │   ├── sitemap.ts, robots.ts  SEO
│   │   ├── opengraph-image.tsx    Generated social preview image
│   │   └── icon.svg               Favicon
│   └── components/                Reusable components (each with a CSS Module)
│       ├── Nav.tsx / Footer.tsx
│       ├── Section.tsx            Labeled page section (route-path eyebrow)
│       ├── Reveal.tsx             Scroll reveal (respects reduced motion)
│       ├── StatusChip.tsx         "Operational — open to new roles" indicator
│       ├── ProjectCard.tsx        Runbook index card
│       ├── ThemeToggle.tsx        Light/dark/system theme switch (persisted)
│       └── CopyEmailButton.tsx    Copy-to-clipboard with success/error states
├── next.config.ts · tsconfig.json · package.json
```

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires Node 18.18+ (built and tested on Node 22).

```bash
npm run build      # production build (fully static — every route prerenders)
npm run start      # serve the production build
```

## Deployment

The site is fully static (SSG), so it deploys anywhere Next.js runs:

- **Vercel (recommended):** push the repo to GitHub → vercel.com → Import
  project → deploy. Zero config needed.
- **Netlify / Cloudflare / Amplify:** import the repo; build command
  `npm run build`, framework preset Next.js.
- **Self-hosted:** `npm run build && npm run start` behind any reverse proxy.

Before going live, set `site.url` in `src/content/site.ts` to the real domain —
it drives canonical URLs, Open Graph URLs, the sitemap, and robots.txt.

## Editing content

Everything personal lives in `src/content/` — you never need to touch components.

| To change…                          | Edit                                    |
| ----------------------------------- | --------------------------------------- |
| Name, role, tagline, email, URL     | `site.ts` (top of file)                 |
| Availability status                 | `site.ts` → `status`                    |
| Profile links (GitHub, LinkedIn…)   | `site.ts` → `links` (add `{label, href}`) |
| About paragraphs / direction        | `site.ts` → `about`                     |
| Capability groups                   | `site.ts` → `capabilities`              |
| Working principles                  | `site.ts` → `approach`                  |
| Contact copy                        | `site.ts` → `contact`                   |
| Case studies                        | `projects.ts` — add/edit a `Project` object |

Adding a case study: copy an existing object in `projects.ts`, give it a unique
`slug`, and fill every field (TypeScript enforces all seven narrative sections).
The card and the `/work/<slug>` page are generated automatically. Use
`status: "in-progress"` for work without a shipped result. If the array is
empty, the work section shows a graceful empty state.

## Accessibility checklist

- [x] Semantic HTML: `header/nav/main/section/article/footer`, `dl` for metadata, one `h1` per page, ordered heading levels
- [x] Skip-to-content link (first tab stop)
- [x] Visible `:focus-visible` outline on all interactive elements
- [x] Full keyboard navigation; project cards are a single tab stop (stretched link)
- [x] `prefers-reduced-motion` disables hero stagger, scroll reveals, pulse, hover lift, and smooth scrolling
- [x] Copy button announces success via `aria-live=polite`; loading state uses `role="status"`
- [x] Color contrast: ink #101816 on #F5F7F6 ≈ 15.9:1; muted #57625E ≈ 5.4:1; accent-ink #095C44 ≈ 7:1 (all pass WCAG AA)
- [x] `lang="en"`, descriptive link text, `aria-label`s on nav landmarks

## Performance checklist

- [x] Fully static output — every route prerendered at build time (SSG)
- [x] First Load JS ≈ 107 kB (framework baseline; page code ≤ 1.5 kB)
- [x] Fonts self-hosted via `next/font` (no external requests, `display: swap`, zero layout shift)
- [x] No images to optimize yet — the design is typographic; OG image generated at build
- [x] Animations use only `opacity`/`transform` (compositor-friendly, no layout thrash)
- [x] No client JS except two tiny islands (`Reveal`, `CopyEmailButton`)
- [x] No third-party scripts, no trackers

## Improvements for version two

1. Real project links/screenshots and architecture diagrams inside each runbook once project details are provided.
2. GitHub and LinkedIn profile links (the `site.links` array is already wired into nav footer and contact).
3. A contact form backed by a serverless function (currently mailto + copy, which needs no backend).
5. Per-case-study OG images (`/work/[slug]/opengraph-image.tsx`).
6. A writing section — short runbook-style posts (DNS in private networks, cost as observability) for SEO reach.
7. Resume download (PDF generated from the same content source).
8. Analytics via a privacy-respecting option (e.g. Plausible) to see which runbooks recruiters read.
9. View transitions between the work index and case-study pages.
10. i18n if targeting markets beyond English.
