import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <PostCard
        href="/posts/my-journey-to-icpc"
        date="June 17, 2026"
        title="My Journey to ICPC Finals"
        description="Reflections on contests, failures and lessons learned."
      />
    </div>
  );
}