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
  /**
   * Still being written. The card on the blog index gets cordoned off with
   * barrier tape and the post itself opens on a building site.
   */
  underConstruction?: boolean;
};

export const posts: Post[] = [
  {
    slug: "creating-my-second-pet-project-pt2",
    title: "I mapped Astana’s shadows pt.2",
    date: "2026-09-15",
    displayDate: "15 September 2026",
    category: "Side Projects",
    description:
      "Finishing the project - learning new things on the way",
    underConstruction: true,
  },
  {
    slug: "creating-my-second-pet-project",
    title: "I mapped Astana’s shadows",
    date: "2026-09-15",
    displayDate: "15 September 2026",
    category: "Side Projects",
    description:
      "Building shadow-path, a walking router that keeps you out of the sun — and what the data taught me on the way.",
    hero: {
      src: "/images/shade-route-cover.svg",
      alt: "Minimalistic view of the website",
    },
  },
  {
    slug: "swimming-insights",
    title: "New insight I have learned about swimming",
    date: "2026-09-01",
    displayDate: "1 September 2026",
    category: "Sport",
    description: "The thing I would have known earlier",
    hero: {
      src: "/images/underwater-push-off.svg",
      alt: "Some creature swimming in the pool",
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
