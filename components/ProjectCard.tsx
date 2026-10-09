import Link from "next/link";

type ProjectCardProps = {
  id: string;
  title: string;
  status: string;
  tagline: string;
  description: string;
  technologies: string[];
  preview: React.ReactNode;
  projectUrl: string;
  projectLabel: string;
  secondaryLink: { href: string; label: string; external?: boolean };
  children?: React.ReactNode;
};

export default function ProjectCard({
  id,
  title,
  status,
  tagline,
  description,
  technologies,
  preview,
  projectUrl,
  projectLabel,
  secondaryLink,
  children,
}: ProjectCardProps) {
  const secondaryClassName =
    "inline-flex items-center gap-2 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent";

  return (
    <article
      className="space-y-8 rounded-2xl border border-line bg-accent/5 p-6 sm:p-8"
      aria-labelledby={id}
    >
      <div className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {status}
        </p>

        <div className="space-y-3">
          <h2 id={id} className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="font-serif text-2xl leading-snug">{tagline}</p>
          <p className="max-w-2xl leading-relaxed text-muted">{description}</p>
        </div>

        <ul
          className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-muted"
          aria-label={`${title} technologies`}
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      {preview}

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          {projectLabel} <span aria-hidden="true">↗</span>
        </a>
        {secondaryLink.external ? (
          <a
            href={secondaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryClassName}
          >
            {secondaryLink.label} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link href={secondaryLink.href} className={secondaryClassName}>
            {secondaryLink.label} <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>

      {children}
    </article>
  );
}
