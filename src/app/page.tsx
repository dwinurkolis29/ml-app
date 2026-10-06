import { organisation, yamlSkills } from "@/data/profile";
import { getProfileData } from "@/lib/profile-data";

export const revalidate = 60;

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#retrospective", label: "Retrospective" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Window({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-surface/90 shadow-xl shadow-black/40 backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed">{children}</div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">[ {eyebrow} ]</p>
      <h2 className="mt-2 mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
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

export default async function Home() {
  const { profile, experience, projects, skills, education, achievements, retrospective } =
    await getProfileData();
  return (
    <>
      <header className="sticky top-3 z-20 px-4">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur"
        >
          <a href="#top" className="shrink-0 font-mono text-sm text-accent">
            nurkolis<span className="text-muted">.dev</span>
          </a>
          <ul className="flex min-w-0 flex-1 justify-end gap-x-4 overflow-x-auto font-mono text-xs text-muted [scrollbar-width:none]">
            {nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <a href={item.href} className="hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-5">
        <section className="relative grid items-center gap-12 pb-10 pt-14 lg:grid-cols-2 lg:pt-20">
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span>&gt; status:</span>
              <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">
                {profile.status}
              </span>
            </p>
            <h1 className="mt-5 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
              Hello, I&apos;m
              <br />
              <span className="text-accent">Kolis</span>
              <span className="cursor text-accent">_</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              <span className="rounded bg-surface px-2 py-0.5 font-mono text-sm text-foreground">
                {profile.role}
              </span>{" "}
              with 3+ years of experience in native Android, Flutter, and mobile security. {profile.name}{" "}
              builds secure, production-grade apps and is now studying Data Science.
            </p>

            <Window title="skills.yml" className="mt-8 max-w-md">
              <p className="text-violet-300">expertise:</p>
              {yamlSkills.map((s) => (
                <p key={s} className="pl-3">
                  <span className="text-muted">- </span>
                  <span className="text-accent">&quot;{s}&quot;</span>
                </p>
              ))}
            </Window>

            <div
              className="mt-6 flex max-w-md items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-sm"
              role="note"
              aria-label="AI assistant, coming soon"
            >
              <span className="text-accent">&gt;</span>
              <span className="flex-1 truncate text-muted">ask_ai --about=me</span>
              <span className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                soon
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-background hover:opacity-90"
              >
                ./connect
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
          </div>

          <div aria-hidden="true" className="relative mx-auto hidden h-[460px] w-full max-w-lg lg:block">
            <div className="glow absolute inset-0" />
            <Window
              title="ProfileViewModel.kt"
              className="float absolute left-0 top-6 w-72 [--rot:-3deg]"
            >
              <p><span className="text-violet-300">class</span> ProfileViewModel : ViewModel() {"{"}</p>
              <p className="pl-3"><span className="text-violet-300">val</span> stack = listOf(</p>
              <p className="pl-6 text-accent">&quot;Kotlin&quot;, &quot;Flutter&quot;</p>
              <p className="pl-3">)</p>
              <p>{"}"}</p>
            </Window>
            <Window
              title="knox-policy.json"
              className="float absolute right-0 top-32 w-64 [--rot:2deg] [animation-delay:-2s]"
            >
              <p>{"{"}</p>
              <p className="pl-3"><span className="text-accent-2">&quot;device&quot;</span>: <span className="text-accent">&quot;managed&quot;</span>,</p>
              <p className="pl-3"><span className="text-accent-2">&quot;apps&quot;</span>: <span className="text-accent">&quot;allowlisted&quot;</span>,</p>
              <p className="pl-3"><span className="text-accent-2">&quot;encrypted&quot;</span>: <span className="text-amber-300">true</span></p>
              <p>{"}"}</p>
            </Window>
            <Window
              title="build.log"
              className="float absolute bottom-6 left-10 w-72 [--rot:-1deg] [animation-delay:-4s]"
            >
              <p className="text-muted">&gt; flutter build apk --release</p>
              <p className="text-muted">Running Gradle task...</p>
              <p className="text-accent">✓ Built app-release.apk</p>
            </Window>
          </div>
        </section>

        <Section id="experience" eyebrow="Experience" title="Where I've been building">
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

        <Section id="projects" eyebrow="Engineering Spotlight" title="Selected projects">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/60"
              >
                <p className="font-mono text-xs text-muted">{p.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="retrospective" eyebrow="Yearly Retrospective" title="Tracking progress, year by year">
          <ol className="space-y-4">
            {retrospective.map((r) => (
              <li
                key={r.year}
                className="grid gap-2 rounded-lg border border-border bg-surface p-5 sm:grid-cols-[5rem_1fr] sm:gap-6"
              >
                <p className="font-mono text-2xl text-accent">{r.year}</p>
                <div>
                  <h3 className="font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="stack" eyebrow="Stack" title="Tools I work with">
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

        <Section id="education" eyebrow="Education" title="Learning, formally">
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

          <h3 className="mb-4 mt-12 font-mono text-sm text-muted">Certifications &amp; achievements</h3>
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

        <Section id="contact" eyebrow="Connect" title="Let's talk">
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
