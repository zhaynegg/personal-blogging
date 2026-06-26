import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div className="space-y-12">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
            src="/images/profile.jpg"
            alt="Zhassyn"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
        />

        <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
            About Me
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed">
            Hi, I'm Zhassyn, a computer science student from Kazakhstan
            interested in artificial intelligence, competitive programming,
            and building useful software.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
            I enjoy solving difficult algorithmic problems and exploring
            how AI can improve education and everyday life.
            </p>
        </div>
        </section>
        <section className="space-y-4">
        <h2 className="text-3xl font-bold">Achievements</h2>

        <ul className="list-disc pl-6 space-y-2 text-stone-600">
          <li>
            Participant in the 2023, 2024, 2025 Kazakhstan National Championship in
            competitive programming.
          </li>
          <li>
            The only participant to solve one of the toughest problems in the
            competition.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">What You'll Find Here</h2>

        <p className="text-lg text-stone-600 leading-relaxed">
          This blog is where I document my journey in computer science and
          share thoughts, tutorials, and projects related to:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-stone-600">
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


      {/* Links */}
        <section className="space-y-6">
        <h2 className="text-3xl font-bold">Find Me Online</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* GitHub */}
            <a
            href="https://github.com/zhaynegg"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition"
            >
            <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="w-10 h-10"
            />
            <span className="text-lg font-medium">GitHub</span>
            </a>

            {/* YouTube */}
            <a
            href="https://www.youtube.com/@zhassyn"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition"
            >
            <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="w-10 h-10"
            />
            <span className="text-lg font-medium">YouTube</span>
            </a>

            {/* LinkedIn */}
            <a
            href="https://www.linkedin.com/in/zhassyn/"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition"
            >
            <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-10 h-10"
            />
            <span className="text-lg font-medium">LinkedIn</span>
            </a>

            {/* Email */}
            <a
            href="mailto:zhasynea@gmail.com"
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition"
            >
            <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="w-10 h-10"
            />
            <span className="text-lg font-medium">Email</span>
            </a>

            {/* Telegram */}
            <a
            href="https://t.me/zhassyn20"
            target="_blank"
            className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition"
            >
            <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Telegram"
                className="w-10 h-10"
            />
            <span className="text-lg font-medium">Telegram</span>
            </a>

        </div>
        </section>
    </div>
  );
};

export default About;
