/**
 * All personal/site content lives in src/content/.
 * Edit this file to change name, role, contact details, and copy.
 */

export const site = {
  name: "Harsiddh Dave",
  shortName: "Harsiddh",
  role: "Platform Engineer",
  // The one-line pitch used in the hero and metadata.
  tagline:
    "I build and operate production-grade cloud infrastructure. I care about what happens at runtime, not just what's in the config.",
  email: "harsiddhdave44@outlook.com",
  // Set to your deployed URL before going live (used for canonical/OG metadata).
  url: "https://harsiddhdave44.github.io/",
  status: {
    label: "Operational · open to new roles",
    compactLabel: "open to roles",
    available: true,
  },
  // Add profile links here as { label, href }. They render in the nav footer and contact.
  links: [] as { label: string; href: string }[],
  hero: {
    // Mono metadata strip under the hero headline.
    meta: [
      { label: "focus", value: "Platform engineering · systems architecture" },
      { label: "core", value: "AWS · Kubernetes · CI/CD · Linux" },
      { label: "direction", value: "Distributed systems · AI-native infrastructure" },
    ],
  },
  about: {
    heading: "Production-first, config-second",
    paragraphs: [
      "I'm a software and DevOps engineer focused on building and operating production-grade cloud infrastructure: AWS, Kubernetes, CI/CD, Linux, databases, networking, observability, security, and automation. Day to day that has meant managing AWS environments, running ECS and EKS workloads, operating RDS/MySQL/PostgreSQL, shipping through CloudFront and S3, untangling Route 53 and private hosted zones, and debugging Lambda, API Gateway, and VPC issues in production.",
      "I think beyond configuration and focus on what happens at runtime: how traffic flows through load balancers, how containers are scheduled, how DNS behaves inside private networks, how databases fail under replication or latency pressure, and how deployment pipelines affect production safety. Observability, security, cost, and reliability aren't separate checklists. They interact, and good platform work accounts for all four at once.",
      "My work is grounded in production-first thinking: understand the failure modes, separate the control plane from the data plane, design systems that are debuggable, and build automation that raises developer productivity without weakening operational control. I've also supported SOC2 and TX-RAMP-style compliance documentation, so I know what it takes to make infrastructure auditable, not just functional.",
    ],
    direction:
      "Where I'm heading: platform engineering, systems architecture, distributed systems, and AI-native infrastructure, including AI agents for enterprise workflows like HR role intake, JD generation, resume parsing, and candidate comparison. The goal is practical platforms that combine cloud infrastructure, backend systems, LLMs, secure data handling, and compliance awareness so teams spend less time on low-value manual work.",
  },
  capabilities: [
    {
      area: "Cloud & compute",
      items: [
        "AWS environment management",
        "ECS & EKS workloads",
        "Lambda, API Gateway & VPC debugging",
        "CloudFront & S3 deployments",
      ],
    },
    {
      area: "Data & networking",
      items: [
        "RDS, MySQL & PostgreSQL operations",
        "Route 53 & private hosted zones",
        "DNS behavior in private networks",
        "Load balancing & traffic flow",
      ],
    },
    {
      area: "Delivery & automation",
      items: [
        "GitHub Actions, GitLab CI & Jenkins",
        "CI/CD modernization",
        "Deployment workflow design",
        "Linux administration & scripting",
      ],
    },
    {
      area: "Reliability & governance",
      items: [
        "Observability & debugging in production",
        "Failure-mode analysis",
        "Cloud cost optimization",
        "SOC2 / TX-RAMP-style compliance support",
      ],
    },
  ],
  approach: {
    heading: "How I work",
    principles: [
      {
        title: "Runtime over configuration",
        body: "A YAML file that applies cleanly tells you almost nothing. I reason about what the system does under load, during failover, and while deploying, then work backwards to the config.",
      },
      {
        title: "Control plane ≠ data plane",
        body: "Keeping the two separate is how you build systems where an orchestration failure doesn't take user traffic down with it. It's a lens I apply to everything from Kubernetes to CI/CD design.",
      },
      {
        title: "Debuggable by design",
        body: "If an on-call engineer can't trace a request through the system at 3 a.m., the architecture isn't done. Observability is a design input, not an add-on.",
      },
      {
        title: "Automation with operational control",
        body: "Automation should make developers faster without removing the levers operators need. Guardrails, not gates. But never zero levers.",
      },
    ],
  },
  contact: {
    heading: "Route a request to me",
    body: "I'm looking for platform engineering and infrastructure roles, and I'm always glad to talk systems with founders building something real. Email is the fastest path.",
  },
} as const;
