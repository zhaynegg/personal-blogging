import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "About",
};

const links = [
  {
    href: "https://github.com/zhaynegg",
    label: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    href: "https://www.youtube.com/@zhassyn",
    label: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  },
  {
    href: "https://www.linkedin.com/in/zhassyn/",
    label: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    href: "mailto:zhasynea@gmail.com",
    label: "Email",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  },
  {
    href: "https://t.me/zhassyn20",
    label: "Telegram",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
  },
];

export default function About() {
  return (
    <PageLayout>
      <div className="space-y-14">
        <section className="flex flex-col items-center gap-8 md:flex-row md:items-start">

          <div className="space-y-4">
            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              About Me
            </h1>

            <p className="text-lg leading-relaxed text-muted">
              Hi, I'm Zhassyn, a computer science student from Kazakhstan
              interested in artificial intelligence, competitive programming, and
              building useful software.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              I enjoy solving difficult algorithmic problems and exploring how AI
              can improve education and everyday life.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold tracking-tight">
            Achievements
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-muted">
            <li>
              Participant in the 2023, 2024, 2025 Kazakhstan National
              Championship in competitive programming.
            </li>
            <li>
              The only participant to solve one of the toughest problems in the
              competition.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-3xl font-bold tracking-tight">
            What You'll Find Here
          </h2>

          <p className="text-lg leading-relaxed text-muted">
            This blog is where I document my journey in computer science and
            share thoughts, tutorials, and projects related to:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-muted">
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Competitive Programming</li>
            <li>Software Engineering and Web Development</li>
            <li>Research and Education</li>
            <li>Personal projects and experiments</li>
            <li>My relation to physique and sports</li>
            <li>The books I find interesting</li>
            <li>Overall lifestyle I pursue</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold tracking-tight">
            Find Me Online
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-line p-4 transition hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={link.icon} alt={link.label} className="h-10 w-10" />
                <span className="text-lg font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
