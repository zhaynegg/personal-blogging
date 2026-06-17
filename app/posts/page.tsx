import Link from "next/link";

export default function PostCard() {
  return (
    <Link
      href="/posts/my-journey-to-icpc"
      className="
      block
      rounded-2xl
      border
      border-stone-200
      p-6
      hover:-translate-y-1
      hover:shadow-lg
      transition
      "
    >
      <div className="space-y-3">
        <p className="text-sm text-stone-500">
          June 17, 2026
        </p>

        <h3 className="text-2xl font-semibold">
          My Journey to ICPC Finals
        </h3>

        <p className="text-stone-600 leading-relaxed">
          Reflections on contests, failures and lessons learned.
        </p>
      </div>
    </Link>
  );
}