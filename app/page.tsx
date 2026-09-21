import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <section className="flex flex-col items-center gap-10 md:flex-row">
        {/* Profile picture */}
        <Image
          src="/images/profile22.jpg"
          alt="Zhassyn Yegnay"
          width={220}
          height={220}
          className="rounded-full object-cover shadow-lg"
          priority
        />

        {/* Text */}
        <div className="space-y-4">
          <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Hi, I'm Zhassyn Yegnay.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Computer Science student, competitive programmer, and AI enthusiast.
            I write about software engineering, algorithms, and the projects I'm
            building.
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Here, I am going to share my thoughts and experiences, so feel free
            to explore my blog.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
