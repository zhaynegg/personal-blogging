import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("i-hate-these-books");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <p>
        In the beginning of 2026, I created a list of 100 wishes for the coming
        year. One of those wishes was to read 12 books in a year—in other words,
        one book every month. The beginning of my adventure was quite easy, as I
        planned one hour every day for reading. In three months, I had read four
        books and was quite happy about it. There were more months left than
        books I needed to read, and it felt very good. However, the only mistake
        I made was in the choice of books.
      </p>

      <p>
        The first book was &quot;The Green Mile&quot;. I had watched the movie in my
        childhood, and I loved its sincerity. I expected the same story in the
        book, and my expectations were met. Unfortunately, I cannot say the same
        about the next two books: &quot;Frankenstein&quot; and &quot;Wuthering Heights&quot;. There
        is no happiness at all. The main characters are ill-headed. The problem
        is that in the beginning, everything is normal. We see Victor, who wants
        to stay alone and create innovations, and Heathcliff and his sister, who
        had not the best but still a relatively normal life. However, everything
        in these books becomes very dark.
      </p>

      <p>
        Frankenstein becomes a madman and starts playing with Victor by killing
        all the people he loved. Last chapters are full of darkness where Victor
        progessively becomes madmen as starts to lose friends. The same goes for
        Heathcliff, who manipulates everyone around him including Catherine
        Earnshaw. He is selfish person who loves harming people both physically
        and mentally. Following the actions, ideas and emotions of these
        characters is unbearable, and I would never suggest people read these
        books, as there is nothing to gain except some psychological distress.
      </p>

      <p>
        A few days ago, I started reading a new book called The Razor’s Edge by
        William Somerset Maugham. Unfortunately, this book is very similar to the
        previous ones, as it also involves emotional and spiritual suffering.
        There are 70 pages left, and I hope that my next book will be more
        soothing.
      </p>
    </PostLayout>
  );
}
