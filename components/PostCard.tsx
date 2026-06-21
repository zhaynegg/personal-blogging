import Link from "next/link";

type PostCardProps = {
  href: string;
  date: string;
  title: string;
  description: string;
};

export default function PostCard({
  href,
  date,
  title,
  description,
}: PostCardProps) {
  return (
    <Link
      href={href}
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
        <p className="text-sm text-stone-500">{date}</p>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="text-stone-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}