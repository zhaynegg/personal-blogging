import PageLayout from "@/components/PageLayout";
import PostCard from "@/components/PostCard";
import { sortedPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Thoughts and experiences, written down.",
};

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      kicker="Writing"
      lead="Thoughts and experiences, written down as they happen."
    >
      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </PageLayout>
  );
}
