import Link from "next/link";
import type { Post } from "@/lib/posts";
import { ConeIcon, HazardTape } from "@/components/ConstructionScene";

/** A post that is still being written: a plot fenced off with barrier tape. */
function ConstructionCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="wip-card relative block overflow-hidden rounded-2xl border border-hazard-line bg-hazard-paper px-6 pb-20 pt-8 transition hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg"
    >
      {/* Tape along the top and bottom edge of the plot... */}
      <HazardTape className="absolute inset-x-0 top-0 h-2.5" />
      <HazardTape className="absolute inset-x-0 bottom-0 h-2.5" />

      {/* ...and one strip stretched across it, closing the way in. */}
      <HazardTape className="absolute bottom-9 left-[-6%] h-7 w-[112%] -rotate-[3deg] shadow-[0_3px_8px_rgba(0,0,0,0.18)]" />

      <span aria-hidden className="wip-hatch pointer-events-none absolute inset-0" />

      <div className="relative space-y-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-hazard px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-hazard-ink">
            <ConeIcon />
            Under construction
          </span>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {post.category}
          </p>

          <p className="ml-auto text-sm text-muted">{post.displayDate}</p>
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-tight">
          {post.title}
        </h3>

        <p className="leading-relaxed text-muted">{post.description}</p>

        <p className="text-sm font-medium text-[#8a6d09]">
          Still going up — step past the tape anyway →
        </p>
      </div>
    </Link>
  );
}

export default function PostCard({ post }: { post: Post }) {
  if (post.underConstruction) {
    return <ConstructionCard post={post} />;
  }

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block rounded-2xl border border-line p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {post.category}
          </p>
          <p className="text-sm text-muted">{post.displayDate}</p>
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-tight">
          {post.title}
        </h3>

        <p className="leading-relaxed text-muted">{post.description}</p>
      </div>
    </Link>
  );
}
