/**
 * All UI copy and in-app links that aren't personal/case-study content
 * (see site.ts and projects.ts for those) live here: nav items, section
 * titles, empty/error/loading states, and button labels.
 */

export const ui = {
  skipLinkLabel: "Skip to content",
  nav: {
    brandSuffix: ".dave",
    items: [
      { href: "/#about", label: "/about" },
      { href: "/#work", label: "/work" },
      { href: "/#experience", label: "/experience" },
      { href: "/#education", label: "/education" },
      { href: "/#contact", label: "/contact" },
    ],
  },
  footer: {
    tagline: "built with Next.js · fully static · no trackers",
  },
  home: {
    workTitle: "Selected work, written as runbooks",
    workEmptyLabel: "/work: no entries yet",
    workEmptyBody:
      "Case studies are being written up. Email me and I'll walk you through the work directly.",
    workIntro:
      "I document projects the way I'd document production systems: what broke or needed to change, what I decided and why, and what the system looked like afterwards.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    capabilitiesTitle: "What I operate",
  },
  projectCard: {
    resolvedLabel: "resolved",
    inProgressLabel: "in progress",
    outcomeLabel: "outcome:",
    readCue: "Read the runbook →",
  },
  projectPage: {
    sections: [
      { key: "problem", route: "/problem", title: "Problem" },
      { key: "targetUser", route: "/target-user", title: "Target user" },
      { key: "role", route: "/my-role", title: "My role" },
    ] as { key: "problem" | "targetUser" | "role"; route: string; title: string }[],
    process: { route: "/process", title: "Process" },
    decisions: { route: "/key-decisions", title: "Key decisions" },
    result: { route: "/result", title: "Final result" },
    learned: { route: "/learned", title: "What I learned" },
    resolvedStatus: "● resolved",
    inProgressStatus: "◐ in progress",
    backLink: "← Back to all work",
    askLink: "Ask me about this project",
  },
  notFound: {
    metaTitle: "404: route not found",
    route: "/incident/404",
    title: "Route not found",
    statusLabel: "◌ 404: no matching entry in the routing table",
    impact: "This page only. The rest of the site is operational.",
    homeLinkLabel: "/",
    workLinkLabel: "/work",
  },
  error: {
    route: "/incident/500",
    title: "Something failed",
    statusLabel: "● unexpected error while rendering this page",
    retryLabel: "Retry the request",
    retrySuffix: "or reload the page if it happens again.",
  },
  loading: {
    label: "loading…",
  },
  copyEmail: {
    idle: "Copy email address",
    copied: "Copied to clipboard",
    error: "Copy failed, use the link",
    srCopied: "Email address copied",
  },
} as const;
