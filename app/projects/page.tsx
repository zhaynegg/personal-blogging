import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Projects",
  description:
    "Two live projects: shadow-path, a shade-aware walking router for Astana, and an account-based URL shortener.",
};

const decisions = [
  {
    title: "Make the trade-off visible",
    description:
      "A shaded route sits beside the shortest path, so you can decide whether more shade is worth the extra walking distance.",
  },
  {
    title: "Work with imperfect city data",
    description:
      "Most buildings had no height in OpenStreetMap. I used nearby buildings to estimate missing heights and improve the shadows the route depends on.",
  },
  {
    title: "Give the route a clock",
    description:
      "Shadows move while you walk. The search accounts for arrival time along the route, rather than using the same shadows for the entire journey.",
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      kicker="Building"
      lead="Software shaped by problems I want to solve."
    >
      <div className="space-y-20">
        <article className="space-y-10" aria-labelledby="shadow-path-title">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Live · Astana, Kazakhstan
            </p>

            <div className="space-y-3">
              <h2 id="shadow-path-title" className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                shadow-path
              </h2>
              <p className="font-serif text-2xl leading-snug">
                A cooler way to walk through Astana.
              </p>
              <p className="max-w-2xl leading-relaxed text-muted">
                Summer walks gave me a reason to build a walking router. Choose a
                start, a destination, and a departure time; shadow-path finds a
                route through shade and shows what the detour costs.
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted" aria-label="Project focus">
              <li>OpenStreetMap</li>
              <li>Geospatial data</li>
              <li>Time-dependent routing</li>
            </ul>

            <a
              href="https://shadow-path-web.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Try shadow-path <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure>
            <div className="overflow-hidden rounded-2xl border border-line bg-line">
              <Image
                src="/images/SP-website-page-2.png"
                alt="Shadow-path showing a blue walking route through Astana, with building and tree shadows and a comparison of route distance and shade."
                width={2910}
                height={1640}
                sizes="(min-width: 768px) 45rem, calc(100vw - 3rem)"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted">
              The working app: city shadows, departure planning, and a side-by-side
              route comparison.
            </figcaption>
          </figure>

          <section aria-labelledby="engineering-decisions" className="space-y-6">
            <h3 id="engineering-decisions" className="font-serif text-2xl font-bold tracking-tight">
              A few decisions behind the map
            </h3>
            <ol className="divide-y divide-line border-y border-line">
              {decisions.map((decision, index) => (
                <li key={decision.title} className="grid grid-cols-[2rem_1fr] gap-4 py-6">
                  <span className="pt-1 font-serif text-sm text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-medium">{decision.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {decision.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <Link
            href="/posts/creating-my-second-pet-project"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            Read the build story <span aria-hidden="true">↗</span>
          </Link>
        </article>

        <article className="space-y-6 rounded-2xl border border-line bg-accent/5 p-6 sm:p-8" aria-labelledby="url-shortener-title">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 px-3 py-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Live · gettinyurl.my
            </p>

            <div className="space-y-3">
              <h2 id="url-shortener-title" className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                URL shortener
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted">
                An account-based tool that turns long URLs into short, shareable
                links. Sign in to shorten a URL and return to your saved links.
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted" aria-label="URL shortener technologies">
              <li>Python</li>
              <li>HTML</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="https://www.gettinyurl.my"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Try URL shortener <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/zhaynegg/URL-shortener"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              View source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
