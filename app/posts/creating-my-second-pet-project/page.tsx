import Image from "next/image";
import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("creating-my-second-pet-project");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <h2>How it started</h2>
      <p>
        Astana is famous for being one of the coldest capitals in the world.
        Nobody warns you about the summer. For a few weeks it goes past 35°C,
        and the city is built wide — long avenues, big squares, young trees that
        do not shade anything yet. I also really like walking around the city,
        and the problem is that I do not have the money to duck into a café or a
        shop every time I overheat. So I would be glad to know a route where the
        sun does not spoil the walk.
      </p>
      <p>
        That is the reason I built the project. I also found it genuinely
        interesting, and I am sure that by continuing to work on it I will learn
        many more useful techniques and architectural patterns.
      </p>

      <h2>What it does</h2>
      <p>
        You tell it where you are, where you are going, and when you leave. It
        draws the city’s shadows for that moment, finds a walk that keeps you
        out of the sun, and puts the plain shortest path next to it so you can
        see what the detour costs — something like{" "}
        <em>18% longer, more than twice as much shade</em>. That comparison is
        the whole product. A shade number on its own means nothing.
      </p>

      <figure>
        <Image
          src="/images/SP-route.png"
          alt="A walking route drawn in blue across central Astana, from a start marker A to a destination marker B, following Nurzhol Boulevard"
          width={1418}
          height={912}
          sizes="(min-width: 640px) 38rem, 100vw"
          className="h-auto w-full"
        />
        <figcaption>
          A walk across the centre of Astana, from A to B along Nurzhol
          Boulevard.
        </figcaption>
      </figure>

      <h2>My expectations about the project</h2>
      <p>
        Before starting the project I had the idea that I would write everything
        myself. That was true at the beginning: I wrote it all, with a little
        help from Claude Code. After some time, though, I found that I was not
        learning much that way, and decided to hand the coding to Claude while I
        managed the architectural decisions. The result of my own work can be
        seen in the picture below.
      </p>
      <figure>
        <Image
          src="/images/SP-website-page.png"
          alt="The shadow-path web interface: a grey map of central Astana with time-of-day and shade-preference sliders in the corner, and a message saying the chosen point lies outside the mapped walking network"
          width={2940}
          height={1666}
          sizes="(min-width: 640px) 38rem, 100vw"
          className="h-auto w-full"
        />
        <figcaption>
          The app itself — time of day and shade preference on the left, and
          the message you get for a point outside the covered centre.
        </figcaption>
      </figure>
      <p>
        The result I achieved by handing the code to an LLM can be seen in the
        next picture. The difference is huge. Using an LLM I got a much better
        design, a new feature that works out the best time to set off, and tree
        detection, so canopy counts as shade too. Despite relying heavily on it,
        I am still eager to learn things myself: specifically, how to protect a
        website from attacks by setting{" "}
        <b>rate limits</b>, how to get more accurate heights for buildings and
        trees with a <b>machine learning model</b>, and how to get some practice
        with <b>Docker</b> by deploying it myself. So the most interesting tasks
        are deliberately left to me.
      </p>
      <figure>
        <Image
          src="/images/SP-website-page-2.png"
          alt="The shadow-path web interface: a colored map of central Astana with time-of-day and shade-preference sliders in the corner, and a message saying the chosen point lies outside the mapped walking network"
          width={2940}
          height={1666}
          sizes="(min-width: 640px) 38rem, 100vw"
          className="h-auto w-full"
        />
        <figcaption>
          The same page after the redesign, with the shadows drawn and the
          departure planner added.
        </figcaption>
      </figure>

      <h2>Problem 1: the one I did not expect</h2>
      <p>
        The idea is simple — buildings cast shadows, shadows fall on streets,
        and a shady walk is a shortest-path search where a sunlit metre costs
        more. That part was easy. But to cast a shadow you need a height, and I
        assumed heights would be a lookup. Of Astana’s 50,091 buildings in
        OpenStreetMap, 207 carry one.
      </p>
      <p>
        So I built a table of typical floor counts by building type and size. It
        tested beautifully, until I split the result by height and found it five
        storeys out on tall buildings — the only ones that throw a shadow worth
        routing around. What fixed it was a smaller question: not how tall a
        building of this type is anywhere in Astana, but how tall its neighbours
        are. The city went up as Soviet-planned microdistricts in uniform
        series, so a nine-storey block is usually surrounded by nine-storey
        blocks.
      </p>

      <h2>Problem 2: the sun moves while you walk</h2>
      <p>
        For most of the project the router priced a whole walk at one instant:
        the route was calculated from the shadows cast at the moment you set
        off. But the sun moves, and the shadows move with it, so anyone walking
        more than twenty minutes got a route that no longer matched the sky. The
        app would promise 88% shade on a walk that really came out at 98%.
      </p>
      <p>
        The fix was to give the search a clock, so a route is a sequence of
        places <em>and times</em>. Most of what I gained was not a better route
        — it was the app no longer lying about the route it already had.
      </p>

      <h2>Where it is now</h2>
      <p>
        It works end to end for Astana. The map opens on the current hour with
        today’s shadows over the whole city, a job rebuilds them every night,
        and you can ask it when to leave and it will scan the entire day for
        you. It is not deployed yet.
      </p>
      <p>
        Beyond the tasks I mentioned earlier, I need to deal with how much
        storage the shadows, buildings and precalculated routes take up. That
        matters because when I deploy the project, all of that data has to live
        somewhere, and not many services give free-tier users that much space.
        So for now I am limiting myself to Astana — I would rather do one city
        properly and generally, then expand to others in the near future.
      </p>
      <p>
        The second problem that bothers me is that people will not use the
        website right away. It lacks a comfortable interface and important
        features such as live geolocation and directions while you walk. Even
        with all of that in place, people may still leave, because looking at
        your phone while walking is not that convenient in the first place. I
        will think about that in my spare time.
      </p>
      <p className="italic">
        P.S. There is a small page in the project that shows me one building at a
        time so I can count its floors off satellite imagery. It deliberately
        hides its own guess from me, because if I have just read “probably nine
        floors” I am much more likely to count nine. It is oddly relaxing.
      </p>
    </PostLayout>
  );
}
