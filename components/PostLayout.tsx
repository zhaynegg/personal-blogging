import Image from "next/image";
import Comments from "@/components/Comments";
import type { Post } from "@/lib/posts";

type PostLayoutProps = {
  post: Post;
  children: React.ReactNode;
};

export default function PostLayout({ post, children }: PostLayoutProps) {
  const { title, category, displayDate, hero } = post;

  return (
    <article>
      {/* Cover: fills the screen below the header, title centred on top */}
      <header className="relative isolate flex h-[calc(100svh-4rem)] min-h-[28rem] w-full items-center justify-center overflow-hidden bg-night">
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,#3d4859,#29303c_55%,#1a1f28)]" />
        )}

        {/* Scrim — keeps the title readable over any photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-kicker sm:text-sm">
            {category}
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[1.03] tracking-[-0.02em] text-white">
            {title}
          </h1>

          <p className="mt-8 text-sm text-white/70">{displayDate}</p>
        </div>

        {hero?.credit && (
          <p className="absolute bottom-3 right-4 z-10 text-[11px] text-white/60">
            Credit: {hero.credit}
          </p>
        )}

        <a
          href="#post-body"
          aria-label="Skip to the article"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 hover:text-white"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </header>

      {/* Body */}
      <div id="post-body" className="scroll-mt-16">
        <div className="post-body prose prose-stone mx-auto max-w-[38rem] px-6 py-16 md:py-24">
          {children}
        </div>

        <div className="mx-auto max-w-[38rem] px-6 pb-20">
          <Comments />
        </div>
      </div>
    </article>
  );
}
