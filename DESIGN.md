# DESIGN.md

Generated from the existing codebase (src/app/globals.css and CSS Modules).

## Color
- --bg #F5F7F6 cool mist paper
- --surface #FFFFFF
- --ink #101816 green-black text
- --muted #57625E secondary text
- --line #D9E0DD hairlines
- --accent #0B6B4F operational green (status, emphasis)
- --accent-ink #095C44 accessible accent for text
- --warn #B45309 degraded/in-progress semantics only
Strategy: restrained, with ONE committed moment: the contact section inverts to a
solid ink panel via the `.tone-ink` token override in globals.css (dark tokens:
bg #0E1513, ink #F2F5F3, accent #2EBD8B). Everything else stays paper.

## Theming
Three states: light / dark / system. The ThemeToggle (in the nav) sets
data-theme on <html> and persists to localStorage; an inline script in
layout.tsx applies it before first paint. No attribute = system (media query).
Dark page tokens: bg #0D1412, surface #121B18, ink #EDF2EF, muted #93A39D,
line #223029, accent #2EBD8B / #5CD9AB. In dark mode the .tone-ink contact
panel flips to paper tokens so the inverted moment survives both themes.
The dark token blocks are intentionally duplicated (attribute selector +
media query); keep both copies identical.

## Typography (all-mono, "typeset terminal document")
- Display: Martian Mono 500/700/800, tight tracking, uppercase in hero;
  hero surname set as 2px ink outline (text-stroke), the one typographic risk
- Body + utility: JetBrains Mono 400/500/600, line-height 1.65, p max 62ch
- Two families total; hierarchy comes from the display face's width/weight
  against the body mono
- Scale: xs .75rem / sm .875rem / base 1rem / lg 1.125rem / xl→2xl clamp / hero clamp(2.4–4.5rem)

## Layout
- Shell max-width 1100px, gutter clamp(1.25–2.5rem)
- Case-study shell 820px
- Sections divided by 1px hairlines, padding-block ~half of --section-gap
- Border-radius 0–2px (999px only on the status chip)

## Components
- Section: route-path mono eyebrow + display title
- StatusChip: pulsing dot + mono label
- ProjectCard: white surface, hairline border, stretched link, hover border-accent
- Runbook metadata block: 2-col dl grid with internal hairlines
- CopyEmailButton: outlined mono button, filled green on success

## Motion
- Hero: staggered rise (700ms ease, 120ms steps)
- Scroll reveals: opacity + 12px rise, 600ms
- Status dot pulse 2.4s
- All gated by prefers-reduced-motion
