
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile picture */}
        <Image
          src="/images/profile2.jpeg"
          alt="Zhassyn Yegnay"
          width={220}
          height={220}
          className="rounded-full object-cover shadow-lg"
        />

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, I'm Zhassyn Yegnay.
          </h1>

          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            Computer Science student, competitive programmer, and AI enthusiast.
            I write about software engineering, algorithms, and the projects I'm
            building.
          </p>

          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
            Here, I am going to share my thoughts and experiences, so feel free
            to explore my blog.
          </p>
        </div>
      </section>
    </div>
  );
}