import PageLayout from "@/components/PageLayout";
import { posts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Categories",
};

export default function CategoriesPage() {
  const categories = [...new Set(posts.map((post) => post.category))].sort();

  return (
    <PageLayout
      title="Categories"
      kicker="Index"
      lead="What I tend to write about."
    >
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {category}
            </p>

            <ul className="mt-2 space-y-1">
              {posts
                .filter((post) => post.category === category)
                .map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="font-serif text-lg hover:text-accent"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
