import Image from "next/image";
import Comments from "@/components/Comments";
import {
  ConeIcon,
  CrackedWall,
  DustField,
  HazardTape,
} from "@/components/ConstructionScene";
import type { Post } from "@/lib/posts";

type PostLayoutProps = {
  post: Post;
  children: React.ReactNode;
};

export default function PostLayout({ post, children }: PostLayoutProps) {
  const { title, category, displayDate, hero, underConstruction } = post;

  return (
    <article>
      {/* Cover: fills the screen below the header, title centred on top */}
      <header
        className={`relative isolate flex h-[calc(100svh-4rem)] min-h-[28rem] w-full items-center justify-center overflow-hidden ${
          underConstruction ? "bg-rubble" : "bg-night"
        }`}
      >
        {hero ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : underConstruction ? (
          <CrackedWall />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,#3d4859,#29303c_55%,#1a1f28)]" />
        )}

        {/* Scrim — keeps the title readable over any photo */}
        <div
          className={`absolute inset-0 z-0 bg-gradient-to-b ${
            underConstruction
              ? "from-black/45 via-black/30 to-black/65"
              : "from-black/55 via-black/35 to-black/70"
          }`}
        />

        {underConstruction && (
          <>
            {/* Dust still hanging in the air over the site */}
            <DustField className="z-[1]" />

            {/* Two strips of tape closing off the way in, title in between */}
            <HazardTape className="absolute inset-x-[-8%] top-[15%] z-[2] h-9 -rotate-[4deg] shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
            <HazardTape className="absolute inset-x-[-8%] bottom-[17%] z-[2] h-9 rotate-[3deg] shadow-[0_4px_12px_rgba(0,0,0,0.45)]" />
          </>
        )}

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {underConstruction && (
            <p className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-hazard px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-hazard-ink shadow-lg sm:text-xs">
              <ConeIcon className="h-3.5 w-3.5" />
              Under construction
            </p>
          )}

          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-kicker sm:text-sm">
            {category}
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[1.03] tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
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
        {underConstruction && (
          <div className="mx-auto max-w-[38rem] px-6 pt-14">
            <div className="relative overflow-hidden rounded-xl border border-hazard-line bg-hazard-paper py-4 pl-8 pr-5">
              <HazardTape className="absolute inset-y-0 left-0 w-3" />
              <span
                aria-hidden
                className="wip-hatch pointer-events-none absolute inset-0"
              />

              <p className="relative text-sm leading-relaxed text-ink">
                <strong className="font-semibold">Work in progress.</strong>{" "}
                This post is still being built — the walls are up, the writing
                is not. Come back for the finished version.
              </p>
            </div>
          </div>
        )}

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
