import {
  achievements,
  education,
  experience,
  organisation,
  profile,
  projects,
  skills,
  stats,
} from "@/data/profile";

const nav = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
        <span className="text-muted">{"// "}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-accent-2">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3"
        >
          <a href="#top" className="font-mono text-sm text-accent">
            ~/nurkolis
          </a>
          <ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 font-mono text-xs text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-4xl px-5">
        <section className="pb-6 pt-16 sm:pt-24">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">$</span> whoami
            <span className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-accent-2 sm:text-xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.currently}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-background hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-foreground hover:border-accent hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-surface p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl text-accent sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" title="about">
          <p className="max-w-3xl leading-relaxed text-foreground/90">{profile.summary}</p>
          <p className="mt-4 font-mono text-xs text-muted">📍 {profile.location}</p>
        </Section>

        <Section id="experience" title="experience">
          <ol className="relative space-y-10 border-l border-border pl-6">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.title} <span className="text-accent-2">@ {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                </div>
                <p className="text-sm text-muted">{job.place}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/85 marker:text-muted">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`flex flex-col rounded-lg border border-border bg-surface p-5 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <p className="font-mono text-xs text-muted">{p.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="skills">
          <div className="space-y-5">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <h3 className="font-mono text-sm text-muted">{g.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="education">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-foreground">{e.degree}</h3>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                </div>
                <p className="text-sm text-accent-2">{e.school}</p>
                <p className="text-sm text-muted">
                  {e.place}
                  {e.note ? ` · ${e.note}` : ""}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-12 font-mono text-sm text-muted">Certifications & achievements</h3>
          <ul className="space-y-2 text-sm">
            {achievements.map((a) => (
              <li key={a.name} className="flex gap-3">
                <span className="font-mono text-xs text-muted">{a.year}</span>
                <span className="text-foreground/90">{a.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-12 font-mono text-sm text-muted">Organisational experience</h3>
          <p className="font-semibold text-foreground">
            {organisation.role} <span className="text-accent-2">· {organisation.name}</span>
          </p>
          <p className="text-sm text-muted">{organisation.place}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85 marker:text-muted">
            {organisation.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="contact">
          <p className="max-w-xl text-foreground/90">
            Open to conversations about mobile development, application security, and data science.
          </p>
          <ul className="mt-5 space-y-2 font-mono text-sm">
            <li>
              <span className="text-muted">email </span>
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              <span className="text-muted">linkedin </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                in/mokhammad-dwi-nurkolis
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="mt-10 border-t border-border py-8 text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name} · built with Next.js, deployed on Vercel
      </footer>
    </>
  );
}
