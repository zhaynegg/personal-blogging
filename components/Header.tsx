import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          Zhassyn🫪
        </Link>

        <nav className="flex gap-6 text-stone-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Blog</Link>
        </nav>
      </div>
    </header>
  );
}