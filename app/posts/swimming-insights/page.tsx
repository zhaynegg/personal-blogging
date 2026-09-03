import Image from "next/image";
import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("swimming-insights");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <h2>Background</h2>
      <p>
        I know how to swim since my childhood. When I was around 6-7 years I went to 
        swimming club for children of my age. There I have shown myself from better perspective
        since I could on my own swim all 50 meters of the swimming pool. I have attended swimming 
        club only for a few months, then my swimming skills were supported only with rare trips
        to beaches, swimming pools and aquaparks. 
      </p>

      <h2> Recent return to the swimming routine</h2>

      <p>
        In 2025 I have enrolled to Nazarbayev University. Fortunately, it has a large swimming 
        pool with the length of 50 meters and a sauna. I immediately started attending pool as frequent
        as possible as it not only was relaxing, but strengthened my back and arms. For the whole academic
        year I attended swimming pool enhancing my skills in freestyle and breaststroke. At the beginning
        I could not even approach 50 meters in one swimming attempt as it was really hard to come
        to this sport after of that long pause. However, I still continued by closing 50-100 meters, learning
        other 2 styles - butterfly and backstroke. It was a great journey as I learned to swim in all four styles, 
        make turns and push off from the wall correctly.
      </p>

      <h2> Current situation</h2>

      <p>
        In 2026, I am going to continue my swimming journey. For this year, I have a real
        goal closing 50 meters within 30 seconds. This will allow me to join swimming club that
        participates in swimming competitions. At the moment of me writing this post, I spend 40 seconds
        to swim 50 meters. I do not have any coach who could possibly point my weaknesses. That is why, I started reading a book
        called "Swim speed secrets for swimmers and thriathletes" by Sheila Taormina. She is 4 time olympian and thriatlon
        world champion. The first thing I found in her book is that the most important element in swimming is pull
        that moves you forward. That pull should to be strong to swim faster. It seems obvious, but how to make
        my pull stronger if it did not change after the whole year of swimming. Fortunately, I did my pull 
        incorrectly and it means that I have a room for improvemnts!! 
      </p>

      <figure>
        <Image
          src="/images/freestyle_swimmer_high_elbow_catch.png"
          alt="Freestyle swimmer holding a high elbow while catching the water at the front of the pull"
          width={2720}
          height={1320}
          sizes="(min-width: 640px) 38rem, 100vw"
          className="h-auto w-full"
        />
        <figcaption>
          The high elbow catch: the forearm points straight down while the elbow
          stays near the surface.
        </figcaption>
      </figure>

      <h2> New Insight</h2>
      <p>
        When you make a pull, your elbow should stay high. The element can be seen in the picture above.
        As I understood from the book, olympains may have other strange elements in their swimming, but the only
        thing that is similar in top swimmers is a pull with high elbow
      </p>
      <p className="italic">
        P.S. I started swimming using this elements for a week
        and gradually getting used to it. It seems like, nothing happened but I hope it is because I am not fully used to it. Aaand 
        my recent achievement is 500 meters non-stop. I will push only further this academic year😁.
      </p>
    </PostLayout>
  );
}
