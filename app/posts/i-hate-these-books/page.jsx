// app/posts/[slug]/page.tsx
'use client'
import Giscus from '@giscus/react';
export default function PostPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <article className="prose prose-stone lg:prose-lg mx-auto px-6 py-16 leading-relaxed max-w-2xl">

        {/* Title */}
        <h1 className="!mb-4 text-4xl font-bold tracking-tight">
          The books I hate
        </h1>

        {/* Meta */}
        <p className="text-sm text-stone-500 !mt-0">
          Literature • 26th June
        </p>

        <hr className="my-8 border-stone-200" />

        {/* Content */}
        <p>
            In the beginning of 2026, I created a list of 100 wishes for the coming year. One of those wishes was to read 12 books in a year—in 
            other words, one book every month. The beginning of my adventure was quite easy, as I planned one hour every day for reading. In three 
            months, I had read four books and was quite happy about it. There were more months left than books I needed to read, and it felt very 
            good. However, the only mistake I made was in the choice of books.
        </p>

        <p>
            The first book was "The Green Mile". I had watched the movie in my childhood, and I loved its sincerity. I expected the same story 
            in the book, and my expectations were met. Unfortunately, I cannot say the same about the next two books: "Frankenstein" and 
            "Wuthering Heights". There is no happiness at all. The main characters are ill-headed. The problem is that in the beginning, 
            everything is normal. We see Victor, who wants to stay alone and create innovations, and Heathcliff and his sister, who had
            not the best but still a relatively normal life. However, everything in these books becomes very dark.
        </p>

        <p>
            Frankenstein becomes a madman and starts playing with Victor by killing all the people he loved. Last chapters are full of 
            darkness where Victor progessively becomes madmen as starts to lose friends. The same goes for Heathcliff, who manipulates 
            everyone around him including Catherine Earnshaw. He is selfish person who loves harming people both physically and mentally. 
            Following the actions, ideas and emotions of these characters is unbearable, and I would never suggest people read these books,
            as there is nothing to gain except some psychological distress.
        </p>

        <p>
            A few days ago, I started reading a new book called The Razor’s Edge by William Somerset Maugham. Unfortunately, this book
            is very similar to the previous ones, as it also involves emotional and spiritual suffering. There are 70 pages left, and 
            I hope that my next book will be more soothing.
        </p>
      </article>

      <Giscus
        id="comments"
        repo="zhaynegg/personal-blogging"
        repoId="R_kgDOTA7ntQ"
        category="Announcements"
        categoryId="DIC_kwDOTA7ntc4DCJ4M"
        mapping="url"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}