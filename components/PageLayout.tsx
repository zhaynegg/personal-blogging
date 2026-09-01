type PageLayoutProps = {
  /** Omit to get just the container, for pages that bring their own heading */
  title?: string;
  kicker?: string;
  lead?: string;
  children: React.ReactNode;
};

export default function PageLayout({
  title,
  kicker,
  lead,
  children,
}: PageLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      {title && (
        <header className="mb-12">
          {kicker && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              {kicker}
            </p>
          )}

          <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            {title}
          </h1>

          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {lead}
            </p>
          )}

          <hr className="mt-10 border-line" />
        </header>
      )}

      {children}
    </div>
  );
}
