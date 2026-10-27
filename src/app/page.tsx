import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { ProjectCard } from "@/components/ProjectCard";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { TypedText } from "@/components/TypedText";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Introduction">
        <div className="shell">
          <div className={styles.heroStatus}>
            <StatusChip />
          </div>
          <h1 className={styles.heroTitle}>
            {site.name.split(" ")[0]}
            <br />
            <span className={styles.heroSurname}>{site.name.split(" ")[1]}</span>
          </h1>
          <p className={styles.heroRole}>{site.role}</p>
          <p className={styles.heroTagline}>
            <TypedText text={site.tagline} />
          </p>
          <dl className={styles.heroMeta}>
            {site.hero.meta.map((m) => (
              <div key={m.label} className={styles.heroMetaItem}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <Section id="about" route="/about" title={site.about.heading}>
        <div className={styles.aboutGrid}>
          <Reveal className={styles.aboutBody}>
            {site.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={120} className={styles.aboutAside}>
            <p className="route">/about/direction</p>
            <p>{site.about.direction}</p>
          </Reveal>
        </div>
      </Section>

      {/* ── Selected work ────────────────────────────────────── */}
      <Section id="work" route="/work" title={ui.home.workTitle}>
        {projects.length === 0 ? (
          <div className={styles.empty}>
            <p className="mono">{ui.home.workEmptyLabel}</p>
            <p>{ui.home.workEmptyBody}</p>
          </div>
        ) : (
          <>
            <p className={styles.workIntro}>{ui.home.workIntro}</p>
            <ul className={styles.workGrid}>
              {projects.map((project, i) => (
                <Reveal as="li" key={project.slug} delay={i * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </Section>

      {/* ── Experience ────────────────────────────────────────── */}
      <Section
        id="experience"
        route="/experience"
        title={ui.home.experienceTitle}
      >
        <ol className={styles.experienceList}>
          {site.experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.company}
              delay={i * 80}
              className={styles.experienceItem}
            >
              <article>
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceRole}>{job.role}</h3>
                    <p className={styles.experienceCompany}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className={styles.experienceDates}>{job.dates}</p>
                </div>
                <ul className={styles.experienceHighlights}>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Education ─────────────────────────────────────────── */}
      <Section
        id="education"
        route="/education"
        title={ui.home.educationTitle}
      >
        <dl className={styles.educationList}>
          {site.education.map((item) => (
            <div key={item.institution} className={styles.educationItem}>
              <dt className={styles.educationDegree}>{item.degree}</dt>
              <dd className={styles.educationMeta}>
                {item.institution} · {item.location} · {item.dates}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Capabilities ─────────────────────────────────────── */}
      <Section
        id="capabilities"
        route="/capabilities"
        title={ui.home.capabilitiesTitle}
      >
        {/* Manifest rows, not cards: an inventory of what's under management. */}
        <dl className={styles.manifest}>
          {site.capabilities.map((cap, i) => (
            <Reveal key={cap.area} delay={i * 60}>
              <div className={styles.manifestRow}>
                <dt className={styles.manifestArea}>{cap.area}</dt>
                <dd className={styles.manifestItems}>
                  {cap.items.map((item, j) => (
                    <span key={item}>
                      {item}
                      {j < cap.items.length - 1 && (
                        <span className={styles.manifestSep} aria-hidden="true">
                          {" · "}
                        </span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ── How I work ───────────────────────────────────────── */}
      <Section id="approach" route="/approach" title={site.approach.heading}>
        <dl className={styles.principles}>
          {site.approach.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <dt className={styles.principleTitle}>{p.title}</dt>
              <dd className={styles.principleBody}>{p.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <Section
        id="contact"
        route="/contact"
        title={site.contact.heading}
        tone="ink"
      >
        <Reveal>
          <p className={styles.contactBody}>{site.contact.body}</p>
          <div className={styles.contactActions}>
            <a className={styles.contactEmail} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <CopyEmailButton email={site.email} />
          </div>
          {site.links.length > 0 && (
            <ul className={styles.contactLinks}>
              {site.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Section>
    </>
  );
}
