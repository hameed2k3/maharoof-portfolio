import { ContactForm } from "@/components/contact-form";
import { Parallax, Reveal } from "@/components/scroll-effects";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="grid-pattern relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-[var(--accent)]/20" />
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-5 sm:gap-10 sm:px-6 sm:py-8 lg:gap-12 lg:px-10 lg:py-10">
          <Reveal>
            <header className="section-shell-strong rounded-[1.5rem] px-4 py-4 sm:rounded-[2rem] sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="section-kicker text-xs font-semibold">
                    {portfolio.basics.location}
                  </p>
                  <h1 className="section-title mt-2 text-2xl sm:text-4xl">
                    {portfolio.basics.name}
                  </h1>
                </div>
                <nav className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-600">
                  <a href="#about" className="hover:text-[var(--surface-strong)]">
                    About
                  </a>
                  <a
                    href="#expertise"
                    className="hover:text-[var(--surface-strong)]"
                  >
                    Expertise
                  </a>
                  <a
                    href="#experience"
                    className="hover:text-[var(--surface-strong)]"
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    className="hover:text-[var(--surface-strong)]"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </header>
          </Reveal>

          <Reveal>
            <section className="hero-glow section-shell-strong draft-lines relative overflow-hidden rounded-[1.9rem] sm:rounded-[2.6rem]">
              <div className="grid gap-6 px-5 py-6 sm:px-10 sm:py-12 lg:grid-cols-[1.18fr_0.82fr] lg:px-12 lg:py-14">
                <Parallax className="relative z-10" offset={26}>
                  <div>
                    <div className="inline-flex max-w-full items-center rounded-full border border-[var(--border-soft)] bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--surface-strong)] sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                      {portfolio.hero.eyebrow}
                    </div>
                    <p className="mt-5 max-w-xl text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-[var(--accent)] sm:mt-6 sm:text-xs sm:tracking-[0.28em]">
                      {portfolio.hero.microLine}
                    </p>
                    <h2 className="section-title mt-4 max-w-5xl text-[2.65rem] sm:mt-5 sm:text-[4.2rem] lg:text-[5.5rem]">
                      {portfolio.hero.headline}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
                      {portfolio.hero.summary}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                      <a
                        href="#contact"
                        className="w-full rounded-full bg-[var(--surface-strong)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
                      >
                        Contact Maharoof
                      </a>
                      <a
                        href="/mahroof-abdullathif-resume.pdf"
                        className="w-full rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--surface-strong)] hover:-translate-y-0.5 hover:border-[var(--accent-strong)] sm:w-auto"
                      >
                        Download Resume
                      </a>
                    </div>

                    <dl className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
                      {portfolio.hero.highlights.map((item) => (
                        <div
                          key={item.label}
                          className="editorial-card rounded-[1.35rem] px-4 py-4 sm:rounded-[1.75rem] sm:px-5 sm:py-5"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                            {item.label}
                          </dt>
                          <dd className="mt-3 text-sm leading-7 text-slate-700">
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Parallax>

                <Parallax className="relative z-10 grid gap-6" offset={54}>
                  <aside>
                    <div className="grid gap-6">
                      <div className="section-shell rounded-[1.7rem] overflow-hidden sm:rounded-[2.2rem]">
                        <div className="h-24 bg-[linear-gradient(135deg,#8FA6B5_0%,#C28B48_100%)] sm:h-36" />
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8">
                          <div className="-mt-12 flex h-24 w-24 items-center justify-center rounded-[1.6rem] border-4 border-[var(--surface)] bg-[var(--surface-strong)] text-4xl font-bold tracking-[0.18em] text-white shadow-xl sm:-mt-16 sm:h-32 sm:w-32 sm:rounded-[2.2rem] sm:text-5xl">
                            MA
                          </div>
                          <div className="mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full bg-[var(--surface-soft)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--surface-strong)] sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                              Immediate Joining
                            </span>
                            <span className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                              GCC Ready
                            </span>
                          </div>
                          <p className="section-title mt-5 text-[2.15rem] sm:mt-6 sm:text-4xl">
                            Commercial precision with practical project awareness
                          </p>
                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {portfolio.insight}
                          </p>
                        </div>
                      </div>

                      <div className="section-shell rounded-[1.7rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-6 sm:py-7">
                        <p className="section-kicker text-xs font-semibold">
                          Current Availability
                        </p>
                        <p className="mt-4 text-2xl font-semibold text-[var(--surface-strong)]">
                          {portfolio.basics.availability}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          Based in {portfolio.basics.location}, open to estimator,
                          procurement, and project coordination opportunities
                          across GCC and India.
                        </p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700">
                          {portfolio.hero.trustPoints.map((point) => (
                            <li key={point} className="flex gap-3">
                              <span className="mt-2.5 h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="section-shell rounded-[1.7rem] px-5 py-6 sm:rounded-[2.2rem] sm:px-6 sm:py-7">
                        <p className="section-kicker text-xs font-semibold">
                          Direct Contact
                        </p>
                        <ul className="mt-5 space-y-4 text-sm text-slate-700">
                          <li>
                            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">
                              Email
                            </span>
                            <a
                              href={`mailto:${portfolio.basics.email}`}
                              className="mt-1 inline-block break-all font-semibold text-[var(--surface-strong)] hover:text-[var(--accent-strong)]"
                            >
                              {portfolio.basics.email}
                            </a>
                          </li>
                          <li>
                            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">
                              Phone
                            </span>
                            <a
                              href={`tel:${portfolio.basics.phoneHref}`}
                              className="mt-1 inline-block font-semibold text-[var(--surface-strong)] hover:text-[var(--accent-strong)]"
                            >
                              {portfolio.basics.phone}
                            </a>
                          </li>
                          <li>
                            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">
                              Focus
                            </span>
                            <span className="mt-1 inline-block">
                              Commercial kitchen, bakery, laundry, and
                              refrigeration equipment
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </Parallax>
              </div>
            </section>
          </Reveal>

          <section id="about" className="grid gap-6">
            <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="section-shell-strong rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
                  <p className="section-kicker text-xs font-semibold">About</p>
                  <h3 className="section-title mt-4 text-[2.55rem] sm:mt-5 sm:text-5xl">
                    Estimation depth shaped by coordination, commercial
                    judgment, and execution reality
                  </h3>
                  <p className="mt-5 border-l-2 border-[var(--accent)]/50 pl-4 text-[15px] leading-7 text-slate-700 sm:mt-6 sm:pl-5 sm:text-base sm:leading-8">
                    {portfolio.insight}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="section-shell rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
                  <p className="section-kicker text-xs font-semibold">
                    Professional Summary
                  </p>
                  <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                    {portfolio.about}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="section-shell-strong rounded-[1.8rem] px-5 py-6 sm:rounded-[2.3rem] sm:px-8 sm:py-8">
                <div className="grid gap-6 xl:grid-cols-[0.42fr_0.58fr]">
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                    <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.6rem] sm:px-5 sm:py-5">
                      <p className="section-kicker text-xs font-semibold">
                        Working Footprint
                      </p>
                      <p className="mt-3 text-[1.45rem] font-semibold leading-tight text-[var(--surface-strong)] sm:mt-4 sm:text-[1.75rem]">
                        India, UAE, Saudi Arabia
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.6rem] sm:px-5 sm:py-5">
                      <p className="section-kicker text-xs font-semibold">
                        Core Strength
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Translating tender and drawing requirements into
                        accurate commercial submissions and follow-through.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="section-kicker text-xs font-semibold">
                          How He Works
                        </p>
                        <h4 className="section-title mt-3 text-[2.2rem] sm:mt-4 sm:text-4xl">
                          From tender review to project continuity
                        </h4>
                      </div>
                      <p className="max-w-md text-sm leading-7 text-slate-600">
                        A cleaner process view that explains the commercial path
                        behind his estimation and procurement support work.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-2">
                      {portfolio.workflow.map((step, index) => (
                        <Reveal
                          key={step.title}
                          delay={0.04 * index}
                          className="h-full"
                          y={24}
                        >
                          <article className="editorial-card flex h-full flex-col rounded-[1.35rem] px-4 py-4 sm:rounded-[1.75rem] sm:px-5 sm:py-5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-[10px] font-semibold tracking-[0.16em] text-[var(--accent)] sm:h-10 sm:w-10 sm:text-xs sm:tracking-[0.2em]">
                                {step.step}
                              </span>
                              <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(143,166,181,0.45),rgba(143,166,181,0))]" />
                            </div>
                            <h5 className="mt-4 text-[1.25rem] font-semibold leading-tight text-[var(--surface-strong)] sm:mt-5 sm:text-[1.45rem]">
                              {step.title}
                            </h5>
                            <p className="mt-3 text-sm leading-7 text-slate-600">
                              {step.description}
                            </p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="expertise" className="grid gap-6">
            <div className="grid items-start gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="section-shell-strong rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
                  <p className="section-kicker text-xs font-semibold">
                    Core Expertise
                  </p>
                  <h3 className="section-title mt-4 text-[2.5rem] sm:mt-5 sm:text-5xl">
                    Structured around the commercial and technical checkpoints
                    that matter most
                  </h3>
                  <div className="mt-6 grid gap-4 sm:mt-7 sm:grid-cols-2">
                    {portfolio.expertise.map((item) => (
                      <div
                        key={item.title}
                        className="editorial-card rounded-[1.35rem] px-4 py-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5"
                      >
                        <h4 className="text-lg font-semibold text-[var(--surface-strong)] sm:text-xl">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="section-shell rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
                  <p className="section-kicker text-xs font-semibold">
                    Sectors and Scope
                  </p>
                  <div className="mt-6 grid gap-4">
                    {portfolio.sectors.map((sector) => (
                      <article
                        key={sector.title}
                        className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.6rem] sm:px-5 sm:py-5"
                      >
                        <h4 className="text-lg font-semibold text-[var(--surface-strong)]">
                          {sector.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {sector.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="section-shell rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="section-kicker text-xs font-semibold">
                      Product Familiarity
                    </p>
                    <h4 className="section-title mt-3 text-[2.2rem] sm:mt-4 sm:text-4xl">
                      A wide equipment ecosystem across hospitality and utility
                      tenders
                    </h4>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600">
                    International brand exposure across equipment ecosystems
                    commonly specified in hospitality, bakery, refrigeration,
                    and laundry tenders.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                  {portfolio.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-2 text-sm text-slate-700 shadow-sm sm:px-4"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <section
            id="experience"
            className="section-shell-strong rounded-[1.9rem] px-5 py-7 sm:rounded-[2.4rem] sm:px-8 sm:py-9"
            >
            <p className="section-kicker text-xs font-semibold">
              Experience Timeline
            </p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
              <div>
                <h3 className="section-title text-[2.55rem] sm:text-5xl">
                  Built around tender intelligence, supplier coordination, and
                  post-award continuity
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                  The career path shows consistent responsibility across
                  estimation, documentation, procurement support, and execution
                  coordination in GCC-focused environments.
                </p>
              </div>

              <div className="space-y-7">
                {portfolio.experience.map((role) => (
                  <article
                    key={`${role.company}-${role.period}`}
                    className="timeline-line relative pl-9 sm:pl-11"
                  >
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--accent-strong)] sm:h-5 sm:w-5" />
                    <div className="section-shell rounded-[1.5rem] px-4 py-5 sm:rounded-[1.9rem] sm:px-6 sm:py-6">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                            {role.period}
                          </p>
                          <h4 className="mt-3 text-[1.45rem] font-semibold text-[var(--surface-strong)] sm:text-[1.8rem]">
                            {role.title}
                          </h4>
                          <p className="mt-1 text-base font-medium text-slate-700">
                            {role.company}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {role.location}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--surface-strong)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="section-shell rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
              <p className="section-kicker text-xs font-semibold">
                Credentials
              </p>
              <div className="mt-6 space-y-7 text-sm leading-7 text-slate-600">
                <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5">
                  <h4 className="text-lg font-semibold text-[var(--surface-strong)]">
                    Education
                  </h4>
                  <p className="mt-2">{portfolio.education}</p>
                </div>
                <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5">
                  <h4 className="text-lg font-semibold text-[var(--surface-strong)]">
                    Product Training
                  </h4>
                  <p className="mt-2">{portfolio.training}</p>
                </div>
              </div>
            </div>

            <div className="section-shell-strong rounded-[1.8rem] px-5 py-7 sm:rounded-[2.3rem] sm:px-8 sm:py-9">
              <p className="section-kicker text-xs font-semibold">
                Language and Strengths
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="section-title text-[2rem] sm:text-3xl">Languages</h4>
                  <ul className="mt-4 space-y-4 text-sm text-slate-600">
                    {portfolio.languages.map((language) => (
                      <li
                        key={language.name}
                        className="rounded-[1.1rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.4rem]"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-semibold text-[var(--surface-strong)]">
                            {language.name}
                          </span>
                          <span className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <span
                                key={`${language.name}-${index}`}
                                className={`h-3 w-4 rounded-full sm:w-6 ${
                                  index < language.level
                                    ? "bg-[var(--accent)]"
                                    : "bg-slate-200"
                                }`}
                              />
                            ))}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="section-title text-[2rem] sm:text-3xl">Strengths</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {portfolio.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm text-slate-700"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </section>
          </Reveal>

          <Reveal>
            <section
            id="contact"
            className="section-shell-strong rounded-[1.9rem] px-5 py-7 sm:rounded-[2.5rem] sm:px-10 sm:py-11"
            >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker text-xs font-semibold">
                  Contact Me
                </p>
                <h3 className="section-title mt-4 text-[2.5rem] sm:mt-5 sm:text-5xl">
                  Start a conversation for estimation, tendering, procurement,
                  or project support
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600">
                  This contact area is designed to feel direct and professional,
                  while remaining deployable on Vercel with secure Gmail-based
                  email delivery.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </p>
                    <p className="mt-2 break-all text-base font-semibold text-[var(--surface-strong)] sm:text-lg">
                      {portfolio.basics.email}
                    </p>
                  </div>
                  <div className="rounded-[1.3rem] border border-[var(--border-soft)] bg-white/85 px-4 py-4 sm:rounded-[1.7rem] sm:px-5 sm:py-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Phone
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--surface-strong)]">
                      {portfolio.basics.phone}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                  {portfolio.contactNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent-strong)]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm />
            </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
