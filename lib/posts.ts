// lib/posts.ts
// One entry per post. Adding a post = add an object here + a folder in app/posts/.

export type Post = {
  slug: string;
  title: string;
  /** ISO date, used for sorting */
  date: string;
  /** How the date is written on the page */
  displayDate: string;
  /** Small uppercase label above the title, like a magazine kicker */
  category: string;
  /** Shown on the blog index and used as the page description */
  description: string;
  /** Full-screen image behind the title. Omit for a plain dark cover. */
  hero?: {
    src: string;
    alt: string;
    credit?: string;
  };
};

export const posts: Post[] = [
  {
    slug: "swimming-insights",
    title: "New insight I have learned about swimming",
    date: "2026-09-01",
    displayDate: "1 September 2026",
    category: "Sport",
    description: "The thing I would have known earlier",
    hero: {
      src: "/images/underwater-push-off.svg",
      alt: "Group picture from the M&C camp",
    },
  },
  {
    slug: "my-first-camp-as-trainer",
    title: "My first camp as a trainer",
    date: "2026-07-26",
    displayDate: "26 July 2026",
    category: "Coaching",
    description: "Telling about my experience in Almaty resort",
    hero: {
      src: "/images/m&c camp.jpg",
      alt: "Group picture from the M&C camp",
    },
  },
  {
    slug: "i-hate-these-books",
    title: "The books I hate",
    date: "2026-06-26",
    displayDate: "26 June 2026",
    category: "Literature",
    description:
      "Complaining about the feelings I felt while reading books.",
  },
  {
    slug: "my-journey-to-icpc",
    title: "My Journey to ICPC Finals",
    date: "2026-06-17",
    displayDate: "17 June 2026",
    category: "Competitive Programming",
    description:
      "Reflections on contests, failures and lessons learned.",
  },
];

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`No post registered for slug "${slug}" in lib/posts.ts`);
  }

  return post;
}
