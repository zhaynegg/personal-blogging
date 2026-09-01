import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
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
