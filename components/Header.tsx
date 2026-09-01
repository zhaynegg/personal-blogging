import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          Zhassyn🫪
        </Link>

        <nav className="flex gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/posts" className="hover:text-ink">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
