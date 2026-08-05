// app/posts/[slug]/page.tsx

export default function PostPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <article className="prose prose-stone lg:prose-lg mx-auto px-6 py-16 leading-relaxed max-w-2xl">

        {/* Title */}
        <h1 className="!mb-4 text-4xl font-bold tracking-tight">
          My Journey to ICPC Finals
        </h1>

        {/* Meta */}
        <p className="text-sm text-stone-500 !mt-0">
          Competitive Programming • ICPC Northern Finals 2025 • 17th June
        </p>

        <hr className="my-8 border-stone-200" />

        {/* Content */}
        <p>
          In December of 2025, I participated in the ICPC Northern Finals for the first time.
          It was a great occasion where hundreds of competitive programmers from Central Asia
          gathered in one place to take part in one of the most prestigious student olympiads.
        </p>

        <p>
          Our team did not manage to qualify for the next stage — ICPC World Finals — which was okey, because I still have 3 years ahead to improve and
          gain more experience in solving challenging problems.
        </p>

        <h2>Current preparation</h2>

        <p>
          Two weeks ago, I started preparing for the next ICPC Northern Finals.
          I solve contests once every two days, and at this point I have completed
          4 past contests and upsolved more than 10 problems.
        </p>

        <p>
          To track my progress, I started recording my journey. On my YouTube channel: 
          <a
            href="https://www.youtube.com/@zhassyn"
            target="_blank"
            className="text-teal-600 hover:underline"
          >
            zhassyn
          </a>,
          I posted my first video called <strong>“Road to ICPC Finals”</strong>,
          where I explain my goals and current progress.
        </p>

        <p>
          The next video will come after a month, since competitive programming is not so exciting as 
          other sports. So it is going to have the overall progress i have made in a month. 
        </p>

      </article>
    </div>
  );
}