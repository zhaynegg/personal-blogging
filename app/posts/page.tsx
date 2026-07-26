import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <PostCard
        href="/posts/my-first-camp-as-trainer"
        date="July 26, 2026"
        title="My first camp as a trainer"
        description="Telling about my experience in Almaty resort"
      />
      <PostCard
        href="/posts/i-hate-these-books"
        date="June 26, 2026"
        title="The books I hate"
        description="Complaining about the feelings I felt while reading books."
      />
      <PostCard
        href="/posts/my-journey-to-icpc"
        date="June 17, 2026"
        title="My Journey to ICPC Finals"
        description="Reflections on contests, failures and lessons learned."
      />
    </div>
  );
}