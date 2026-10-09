import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sortedPosts } from "@/lib/posts";
import styles from "./home.module.css";

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

export default function Home() {
  const recentPosts = sortedPosts.filter((post) => !post.underConstruction).slice(0, 3);

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
