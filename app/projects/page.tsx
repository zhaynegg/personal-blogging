import PageLayout from "@/components/PageLayout";
import ProjectCard from "@/components/ProjectCard";
import ShadowPathDemo from "@/components/ShadowPathDemo";
import UrlShortenerDemo from "@/components/UrlShortenerDemo";

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
      <div className="space-y-10">
        <ProjectCard
          id="shadow-path-title"
          title="shadow-path"
          status="Live · Astana, Kazakhstan"
          tagline="A cooler way to walk through Astana."
          description="Summer walks gave me a reason to build a walking router. Choose a start, a destination, and a departure time; shadow-path finds a route through shade and shows what the detour costs."
          technologies={["OpenStreetMap", "Geospatial data", "Time-dependent routing"]}
          preview={<ShadowPathDemo />}
          projectUrl="https://shadow-path-web.onrender.com"
          projectLabel="Try shadow-path"
          secondaryLink={{
            href: "/posts/creating-my-second-pet-project",
            label: "Read the build story",
          }}
        >
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
        </ProjectCard>

        <ProjectCard
          id="url-shortener-title"
          title="URL shortener"
          status="Live · gettinyurl.my"
          tagline="Long links, made easy to share."
          description="An account-based tool that turns long URLs into short, shareable links. Sign in to shorten a URL and return to your saved links."
          technologies={["Python", "HTML"]}
          preview={<UrlShortenerDemo />}
          projectUrl="https://www.gettinyurl.my"
          projectLabel="Try URL shortener"
          secondaryLink={{
            href: "https://github.com/zhaynegg/URL-shortener",
            label: "View source",
            external: true,
          }}
        />
      </div>
    </PageLayout>
  );
}
