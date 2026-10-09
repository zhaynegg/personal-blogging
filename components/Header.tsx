import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1168px] items-center justify-between gap-4 px-5 sm:px-6">
        <Link href="/" aria-label="Zhassyn Yegnay — home" className="flex items-center gap-2.5 font-serif text-2xl font-semibold tracking-tight">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span>Zhassyn<span className="text-accent">.</span></span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-4 text-xs text-muted sm:gap-7 sm:text-sm">
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link href="/posts" className="hover:text-accent">
            Blog
          </Link>
          <Link href="/#contact" className="hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
