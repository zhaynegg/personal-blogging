import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sortedPosts } from "@/lib/posts";
import { getProblemSolvingStats, type PlatformStat } from "@/lib/problemSolving";
import styles from "./home.module.css";

// Rebuild the page every 12 hours so the problem-solving counts stay current.
export const revalidate = 43200;

export const metadata: Metadata = {
  title: { absolute: "Zhassyn Yegnay — Algorithms, software & curiosity" },
  description:
    "I'm Zhassyn, a computer science student and competitive programmer from Kazakhstan. I turn difficult problems into useful software and write about what I learn.",
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h16m-6-6 6 6-6 6" />}
    </svg>
  );
}

function formatList(items: string[]) {
  return items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function PlatformCard({ platform }: { platform: PlatformStat }) {
  const content = (
    <>
      <span className={styles.platformName}>
        {platform.name}
        {platform.url && <Arrow diagonal />}
      </span>
      <span className={styles.platformCount}>
        {platform.solved.toLocaleString("en-US")}
        {platform.outOf ? (
          <span className={styles.platformOutOf}> / {platform.outOf}</span>
        ) : (
          <span className={styles.platformUnit}>solved</span>
        )}
      </span>
      {platform.detail && (
        <span className={styles.platformDetail}>
          {platform.rankColor && <i aria-hidden="true" />}
          {platform.detail}
        </span>
      )}
      {platform.subDetail && <span className={styles.platformSubDetail}>{platform.subDetail}</span>}
    </>
  );

  const className = platform.rankColor ? `${styles.platformCard} ${styles.ranked}` : styles.platformCard;
  const style = platform.rankColor ? ({ "--rank": platform.rankColor } as CSSProperties) : undefined;

  return platform.url ? (
    <a href={platform.url} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {content}
    </a>
  ) : (
    <div className={className} style={style}>{content}</div>
  );
}

export default async function Home() {
  const recentPosts = sortedPosts.filter((post) => !post.underConstruction).slice(0, 3);
  const solving = await getProblemSolvingStats();
  const liveSources = solving.platforms.filter((p) => p.live).map((p) => p.name);

  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="intro-heading">
        <div className={styles.portraitColumn}>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/profile22.jpg"
              alt="Zhassyn Yegnay by the water at dusk"
              fill
              sizes="(min-width: 1100px) 390px, (min-width: 800px) 34vw, (min-width: 480px) 300px, 240px"
              className={styles.portrait}
              preload
            />
          </div>
          <p className={styles.location}><span aria-hidden="true" /> Based in Kazakhstan</p>
        </div>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>Computer science. A little curiosity. A lot of doing.</p>
          <h1 id="intro-heading" className={styles.greeting}>Hello,<br />I&apos;m Zhassyn<span>.</span></h1>
          <p className={styles.hook}>I turn difficult problems into useful software.</p>
          <p className={styles.bio}>
            A computer science student, competitive programmer, and curious
            builder interested in AI. From finding a shadier walk through Astana to teaching
            algorithms, I like putting what I learn to work.
          </p>

          <div className={styles.circleLinks} aria-label="Explore my website">
            <Link href="/projects" className={`${styles.circle} ${styles.projects}`}>Projects <Arrow diagonal /></Link>
            <Link href="/posts" className={`${styles.circle} ${styles.blog}`}>The blog <Arrow diagonal /></Link>
            <a href="#contact" className={`${styles.circle} ${styles.contactCircle}`}>Contact <Arrow diagonal /></a>
          </div>
        </div>
      </section>

      <div className={styles.highlights} aria-label="A little of my experience">
        <div className={styles.highlight}>
          <span className={styles.highlightLabel}>The problem solver</span>
          <span className={styles.highlightTitle}>Competitive programmer</span>
          <span className={styles.highlightDetail}>National championships · 2023–2025</span>
        </div>
        <div className={styles.highlight}>
          <span className={styles.highlightLabel}>The builder</span>
          <span className={styles.highlightTitle}>Ideas into working software</span>
          <span className={styles.highlightDetail}>Two projects, live on the web</span>
        </div>
        <div className={styles.highlight}>
          <span className={styles.highlightLabel}>The teacher</span>
          <span className={styles.highlightTitle}>Learning goes both ways</span>
          <span className={styles.highlightDetail}>M&amp;C programming camp · 2026</span>
        </div>
      </div>

      {solving.platforms.length > 0 && (
        <section className={styles.solving} aria-labelledby="solving-heading">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Problem solving</p>
              <h2 id="solving-heading">
                <span className={styles.solvingTotal}>{solving.totalSolved.toLocaleString("en-US")}</span> problems
                solved, and counting.
              </h2>
            </div>
          </div>
          <ul className={styles.platformGrid} aria-label="Problems solved by platform">
            {solving.platforms.map((platform) => (
              <li key={platform.name}><PlatformCard platform={platform} /></li>
            ))}
          </ul>
          {liveSources.length > 0 && (
            <p className={styles.solvingNote}>
              {formatList(liveSources)} {liveSources.length === 1 ? "updates" : "update"} automatically every 12 hours.
            </p>
          )}
        </section>
      )}

      <section className={styles.work} aria-labelledby="work-heading">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Selected work</p><h2 id="work-heading">Curiosity, made useful.</h2></div>
        </div>
        <article className={styles.projectCard}>
          <div className={styles.projectCopy}>
            <p className={styles.projectName}>shadow-path</p>
            <h3>Find the shade.<br />Enjoy the walk.</h3>
            <p className={styles.projectDescription}>
              A walking router for Astana that finds a shadier route and shows
              what the detour costs. It accounts for buildings, trees, and the
              sun moving while you walk.
            </p>
            <ul className={styles.tags} aria-label="Project focus"><li>Algorithms</li><li>OpenStreetMap</li><li>Geospatial data</li></ul>
            <p className={styles.projectStatus}>Live · Astana, Kazakhstan</p>
            <a href="https://shadow-path-web.onrender.com" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Try shadow-path <Arrow diagonal /></a>
          </div>
          <figure className={styles.projectVisual}>
            <Image
              src="/images/SP-website-page-2.png"
              alt="Shadow-path showing a shaded walking route across Astana and comparing its distance and shade with the direct route"
              width={2910}
              height={1640}
              sizes="(min-width: 1180px) 620px, (min-width: 800px) 53vw, calc(100vw - 80px)"
              className={styles.projectImage}
            />
            <figcaption className={styles.visualCaption}>A small idea. A city&apos;s worth of shadows.</figcaption>
          </figure>
        </article>

        <article className={styles.secondaryProjectCard}>
          <div>
            <p className={styles.projectName}>URL shortener</p>
            <h3>Long links, made shareable.</h3>
            <p className={styles.projectDescription}>
              An account-based tool that turns long URLs into short, shareable
              links, with a dedicated page for the links you create.
            </p>
            <p className={styles.projectStatus}>Live · Python &amp; HTML · Sign-in required</p>
          </div>
          <a href="https://www.gettinyurl.my" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Try the shortener <Arrow diagonal /></a>
        </article>
      </section>

      <section className={styles.writing} aria-labelledby="writing-heading">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>From the blog</p><h2 id="writing-heading">Notes along the way.</h2></div>
        </div>
        <div className={styles.postGrid}>
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className={styles.postCard}>
              <span className={styles.postCategory}>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className={styles.postMeta}><time dateTime={post.date}>{post.displayDate}</time><Arrow /></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
        <div>
          <p className={styles.eyebrow}>Let&apos;s connect</p>
          <h2 id="contact-heading">Have a problem worth solving?</h2>
          <p>I&apos;d love to hear about your team, a project, or an opportunity to build something useful together.</p>
        </div>
        <a href="mailto:zhasynea@gmail.com" className={styles.contactLink}>Say hello <Arrow diagonal /><span>zhasynea@gmail.com</span></a>
      </section>
    </div>
  );
}
