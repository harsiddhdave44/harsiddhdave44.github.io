# Harsiddh Dave — Portfolio Design Spec

Date: 2026-07-07
Status: Approved for build (autonomous goal session; spec derived directly from the /goal brief)

## Goal

Premium personal portfolio for Harsiddh Dave, Platform Engineer. Audience: recruiters and
startup founders. Job of the site: get interviews, build network, get hired.

## Concept — "The Status Page"

Harsiddh's differentiator is production-first thinking: runtime behavior, failure modes,
debuggability. The site adopts the visual vernacular of the systems he operates —
status pages, runbooks, postmortems — rendered with document-grade editorial typography.

- Hero reads like a status header: name, role, `OPERATIONAL · OPEN TO NEW ROLES` status chip.
- Section eyebrows are route paths (`/about`, `/work`, `/contact`) set in mono — structure
  that encodes something true (they are literally the site's routes/anchors).
- Case studies are presented as **runbooks**: a mono metadata header (system, stack,
  timeframe, outcome) followed by the narrative sections required by the brief
  (Problem, Target user, My role, Process, Key decisions, Final result, What I learned).
- 404 page is a mock incident entry: "route not found in the routing table."

Signature element: the runbook document format + persistent status vocabulary.
Everything else stays quiet and disciplined.

## Rejected directions

- **Terminal/CLI theme** — overdone in dev portfolios; poor recruiter legibility.
- **Dark observability dashboard** — drifts into glowing cards/clutter the brief forbids.

## Design tokens

Color (cool, precise; deliberately not warm-cream):
- `--bg` #F5F7F6 (cool mist)
- `--surface` #FFFFFF
- `--ink` #101816 (green-black)
- `--muted` #57625E
- `--line` #D9E0DD (hairlines)
- `--accent` #0B6B4F (operational green)
- `--warn` #B45309 (used only for "degraded" semantics in runbooks)

Type:
- Display: Archivo (700/800, tight tracking, tight leading)
- Body: IBM Plex Sans (400/500/600)
- Utility/metadata: IBM Plex Mono (400/500) — labels, chips, runbook metadata

Layout: max-width 1100px shell, generous vertical rhythm (96–128px sections),
hairline dividers, border-radius 0–2px only. No gradients, no glow.

Motion: one orchestrated hero load stagger; IntersectionObserver scroll reveals
(fade + 12px rise); pulsing status dot; underline slide on links. All disabled
under `prefers-reduced-motion`.

## Information architecture

- `/` — Hero → About (production-first philosophy) → Selected work (runbook index)
  → Capabilities (grouped domains) → How I work → Contact
- `/work/[slug]` — full runbook case studies (SSG via generateStaticParams)
- `not-found.tsx` — custom 404 incident page
- `loading.tsx`, `error.tsx` — loading/error states; empty state if work list is empty

## Content rules

- All personal content lives in `src/content/` (site.ts, projects.ts) — single edit point.
- Only facts stated in the brief may be claimed (e.g., AWS ~$900 → ~$300/mo, CI/CD
  modernization across GitHub Actions/GitLab CI/Jenkins, production connectivity/DNS
  resolution work, SOC2/TX-RAMP-style compliance support). No invented employers,
  testimonials, metrics, or results. The AI HR automation work is labeled an
  in-progress exploration.

## Stack

Next.js (App Router) + TypeScript, CSS custom properties + CSS Modules (no Tailwind —
precise control, zero extra deps), next/font for self-hosted Google fonts, static
export-friendly (no server actions; contact is mailto + copy-to-clipboard with
success state).

## Quality floor

Semantic HTML, skip link, visible focus rings, keyboard navigable, reduced-motion
respected, responsive 320px+, no horizontal scroll, SEO + Open Graph/Twitter metadata,
sitemap + robots.
