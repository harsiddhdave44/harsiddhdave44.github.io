/**
 * Case studies ("runbooks"). Edit or add entries here — each object becomes
 * a card on the home page and a full page at /work/[slug].
 *
 * status drives the chip on the runbook header:
 *   "resolved"     — completed work with a shipped outcome
 *   "in-progress"  — active exploration, no final result yet
 */

export type ProjectStatus = "resolved" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  meta: { label: string; value: string }[];
  problem: string;
  targetUser: string;
  role: string;
  process: string[];
  keyDecisions: { decision: string; why: string }[];
  result: string;
  learned: string;
}

export const projects: Project[] = [
  {
    slug: "aws-cost-reduction",
    title: "Cutting AWS spend from ~$900 to ~$300 a month",
    summary:
      "A sustained cost-optimization effort across a production AWS environment that cut the monthly bill by roughly two-thirds without weakening reliability.",
    status: "resolved",
    meta: [
      { label: "system", value: "Production AWS environment" },
      { label: "surface", value: "Compute, storage, networking, databases" },
      { label: "outcome", value: "~$900/mo → ~$300/mo" },
    ],
    problem:
      "The AWS environment had grown organically, and the monthly bill had grown with it, reaching roughly $900 a month. Cost had never been treated as a first-class engineering signal, so nobody could say precisely which workloads were earning their spend and which were waste.",
    targetUser:
      "The business paying the bill, and the engineering team who needed the savings to come without new operational risk or degraded reliability.",
    role:
      "I owned the cost-optimization effort end to end: analysis of the environment, proposing changes, weighing each one against its reliability impact, and carrying the changes through to a stable, cheaper steady state.",
    process: [
      "Mapped what the environment was actually running and what each part cost, so decisions came from real usage, not assumptions about what 'should' be there.",
      "Evaluated every candidate saving for what it would do to the system at runtime, not just to the invoice.",
      "Removed outright waste first; traded capability for money only after that well ran dry.",
      "Applied changes one at a time and watched the environment after each, so any regression traced to a specific change.",
    ],
    keyDecisions: [
      {
        decision: "Make reliability a hard constraint, not a trade-off dial",
        why: "A cheaper environment that pages more often is a net loss. Changes that risked availability were rejected even when the savings looked attractive.",
      },
      {
        decision: "Change incrementally instead of in one sweep",
        why: "Cost work touches live infrastructure. Small, observable steps meant each change could be verified in isolation and reverted alone.",
      },
      {
        decision: "Base every cut on observed usage",
        why: "Guessing at what's unused is how outages happen. The environment's real runtime behavior decided what was safe to remove or resize.",
      },
    ],
    result:
      "Monthly AWS cost dropped from approximately $900 to approximately $300, a reduction of roughly two-thirds, while the environment kept serving production traffic.",
    learned:
      "Cost is an observability problem before it's a finance problem. Once you can see what the system actually does at runtime, most of the savings are obvious. The discipline of verifying each change incrementally is what makes them safe.",
  },
  {
    slug: "cicd-modernization",
    title: "Modernizing CI/CD across GitHub Actions, GitLab CI, and Jenkins",
    summary:
      "Bringing deployment pipelines up to modern practice across three CI systems: improving how code moves from commit to production, and how safely it lands.",
    status: "resolved",
    meta: [
      { label: "system", value: "Delivery pipelines" },
      { label: "stack", value: "GitHub Actions · GitLab CI · Jenkins" },
      { label: "outcome", value: "Safer, more routine releases" },
    ],
    problem:
      "Deployment workflows had accumulated across GitHub Actions, GitLab CI, and Jenkins, each with its own conventions and history. The pipelines moved code, but they didn't consistently reflect how the team needed to ship: predictably, safely, and without manual intervention becoming a habit.",
    targetUser:
      "The developers who ship through these pipelines every day, and the operators accountable for what those pipelines do to production.",
    role:
      "I drove the CI/CD modernization work: assessing the existing pipelines, redesigning workflows, and implementing the improvements across all three systems.",
    process: [
      "Started from the production end: what does a safe deployment look like for each service, and what does the pipeline need to guarantee to make that routine?",
      "Reviewed the existing GitHub Actions, GitLab CI, and Jenkins setups to understand what each pipeline actually did, including the undocumented steps people ran by hand around them.",
      "Redesigned workflows so the pipeline, not tribal knowledge, carried the deployment process.",
      "Rolled improvements out system by system, keeping teams shipping throughout.",
    ],
    keyDecisions: [
      {
        decision: "Treat the pipeline as part of production safety, not developer tooling",
        why: "A deployment pipeline is the mechanism by which change reaches users. Designing it with the same care as production infrastructure is what makes shipping boring, in the good way.",
      },
      {
        decision: "Meet each CI system where it is instead of forcing one tool",
        why: "GitHub Actions, GitLab CI, and Jenkins each had real workloads attached. Improving all three beat a disruptive migration that would have paused delivery.",
      },
      {
        decision: "Automate without removing operational levers",
        why: "Full automation that can't be paused, inspected, or overridden trades one failure mode for another. The workflows automate the routine path while keeping operators in control of the exceptional one.",
      },
    ],
    result:
      "The path from commit to production became more consistent across all three CI systems and less dependent on manual steps and tribal knowledge. I didn't capture before-and-after metrics on this work, so the honest claim is qualitative: releases got safer and more routine.",
    learned:
      "CI/CD modernization is 20% pipeline syntax and 80% understanding how change should flow into production. Once that flow is designed, expressing it in Actions, GitLab CI, or Jenkins is the easy part.",
  },
  {
    slug: "production-connectivity",
    title: "Resolving production connectivity failures in private networks",
    summary:
      "Debugging and fixing production connectivity issues across Route 53 private hosted zones, VPCs, Lambda, and API Gateway, where DNS doesn't behave the way the docs imply.",
    status: "resolved",
    meta: [
      { label: "system", value: "Production networking" },
      { label: "stack", value: "Route 53 · VPC · Lambda · API Gateway" },
      { label: "outcome", value: "Connectivity restored, reliability strengthened" },
    ],
    problem:
      "Production services were hitting connectivity failures rooted in the private-network layer: Route 53 private hosted zone resolution, VPC configuration, and the interaction between Lambda, API Gateway, and the network they run inside. These failures are invisible from the application's point of view: the app just sees timeouts.",
    targetUser:
      "The teams running services on top of this network, whose applications failed with symptoms that pointed everywhere except the actual cause.",
    role:
      "I was the engineer tracing these issues from symptom to root cause, through DNS resolution paths, VPC routing, and service configuration, and implementing the fixes.",
    process: [
      "Reproduced each failure and established exactly where in the path it occurred (client, DNS resolution, routing, or the service itself) instead of guessing from the error message.",
      "Traced how DNS actually resolves inside the VPC: which resolver answers, which private hosted zones are visible from where, and how that differs from public resolution.",
      "Followed the request path hop by hop, through load balancing, API Gateway, and into Lambda, checking each layer's view of the network against what the configuration claimed.",
      "Fixed root causes rather than symptoms, then verified the full path end to end.",
    ],
    keyDecisions: [
      {
        decision: "Trace the runtime path instead of auditing the config",
        why: "The configuration can look correct while the runtime behavior is wrong; private DNS is a canonical example. Observing what actually resolves, from where, finds the class of bug that config review can't.",
      },
      {
        decision: "Fix the root cause even when a workaround was faster",
        why: "Connectivity workarounds decay into permanent mysteries. Root-cause fixes are what turned these from recurring incidents into closed ones.",
      },
      {
        decision: "Leave the path more debuggable than I found it",
        why: "The real cost of these incidents was diagnosis time. Making the network path easier to trace shortens every future incident, not just this one.",
      },
    ],
    result:
      "The production connectivity issues were resolved at the root cause. The same class of failure became both rarer and faster to diagnose, which is what 'reliability improved' should actually mean.",
    learned:
      "DNS inside private networks is where mental models go to die. The lasting lesson: never debug from what the configuration says; debug from what the resolver, the route table, and the service actually do at runtime.",
  },
  {
    slug: "ai-hr-automation",
    title: "AI agents for HR and internal business workflows",
    summary:
      "An active exploration into AI-enabled enterprise automation: agents for role intake, JD generation, resume parsing, candidate comparison, and decision summaries, built on real infrastructure discipline.",
    status: "in-progress",
    meta: [
      { label: "system", value: "AI-native enterprise platform" },
      { label: "surface", value: "HR & internal business workflows" },
      { label: "outcome", value: "In active development" },
    ],
    problem:
      "HR and internal business workflows are dense with repetitive, low-value manual work: writing job descriptions, parsing resumes, comparing candidates, summarizing decisions. Teams burn skilled hours on tasks that are structured enough to automate. But automating them responsibly requires secure data handling and compliance awareness, not just an LLM call.",
    targetUser:
      "HR and operations teams inside enterprises who want to spend their time on judgment calls, not paperwork, in organizations where data handling and auditability are non-negotiable.",
    role:
      "This is my own exploration, so the role is all of them: product thinking, backend systems, LLM integration, and the infrastructure underneath.",
    process: [
      "Started from the workflows, not the technology: mapping role intake, JD generation, resume parsing, candidate comparison, and decision summarization as processes with inputs, outputs, and failure modes.",
      "Applied the same production-first lens I use on infrastructure: what happens when the agent is wrong, how is sensitive candidate data handled, and what does an auditable trail look like?",
      "Building the platform as a combination of cloud infrastructure, backend services, and LLM components, treating the LLM as one component in a system, not the system itself.",
    ],
    keyDecisions: [
      {
        decision: "Design for compliance from the start",
        why: "Having supported SOC2 and TX-RAMP-style documentation, I know retrofitting auditability into a system that handles personal data is far more expensive than designing it in.",
      },
      {
        decision: "Automate the repetitive work, keep humans on the decisions",
        why: "The value isn't replacing the hiring decision: it's removing the low-value work around it so the human decision gets more attention, not less.",
      },
      {
        decision: "Treat the LLM as an unreliable component",
        why: "Infrastructure engineering assumes components fail. Agents that parse resumes or draft JDs need the same treatment: validation, fallbacks, and observability around every model call.",
      },
    ],
    result:
      "In active development. This is an ongoing exploration rather than a shipped product; this page will be updated as it matures.",
    learned:
      "Building with LLMs has sharpened, not replaced, my infrastructure instincts. The hard problems (state, failure handling, secure data flow, observability) are the same ones production systems have always had. AI-native infrastructure is still infrastructure.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
