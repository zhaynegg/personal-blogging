// app/posts/[slug]/page.tsx

export default function PostPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <article className="prose prose-stone lg:prose-lg mx-auto px-6 py-16 leading-relaxed max-w-2xl">

        {/* Title */}
        <h1 className="!mb-4">
          How do I met deep learning
        </h1>

        {/* Meta */}
        <p className="text-sm text-stone-500 !mt-0">
          Deep learning • FastAI
        </p>

        <hr className="my-8 border-stone-200" />

        {/* Content */}
        <p>
          No content
        </p>

      </article>
    </div>
  );
}