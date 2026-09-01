import Image from "next/image";
import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("my-first-camp-as-trainer");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <p>
        In 2026, I have participated in my first ever camp as a trainer. It was
        in OI Qaragay mountain resort. Explicitly in Tau Turan summer camp. The
        camp is held by M&amp;C, a yearly event where students come from all over
        the country to prepare for olympiads and enhance their skills. There are
        at this moment 14 children and 3 trainers including myself.
      </p>

      <p>
        During camp, few key events were held. I gave my 3rd interview to company
        and passed my final exam of ELCE 203. I had prepared for both of the
        events and from the feelings failed both of them. In case of the
        interview, there were lags during the interview and I could not properly
        answer the questions. In the case of final exam, I have failed because
        left one problem entirely out of all 4 problems which will give me at
        maximum 75 points.
      </p>

      <p className="italic">
        P.S. I got 53/100 and got my lowest grade C+ for the course
      </p>

      <h2>The experience I have gained</h2>

      <p>
        I can't tell that I have learned something about coaching. I am doing it
        over the last year working individually and with group of students. Here
        we exchange with groups and work with 4-5 students at a time. They solve
        their problems and all I need to do is navigate them through the
        problems. The only thing I find difficult is how strict am I need to be
        with them. They are only beginning their journey in competitive
        programming and I want them spend their time effectively without putting
        pressure on them. They need to have balance between work and rest. So, I
        feel a little bad when limit them to talk during the working processes.
      </p>

      <h2>Communication</h2>

      <p>
        Time passes quickly here because we are busy teaching the students all
        day. They are quite interesting because we share many of the same
        interests. They are passionate about programming and enjoy an active
        lifestyle, which I also like. Their jokes and positive attitude are what
        make these 10 days of work so enjoyable. The other trainers are also
        great people to talk to. All of us want to become better programmers, and
        I have found that people in software development often have interests in
        other aspects of a professional career, such as economics. I had never
        really thought about switching to a different career path because there
        are already so many interesting opportunities related to AI.
      </p>

      <h2>Entertainment</h2>

      <p>
        I was glad to meet Ilias and Lev during the camp. Their presence
        definitely made the camp more interesting, as we found ways to entertain
        ourselves. It was also nice to get to know the camp guides. Eventually, I
        became acquainted with only one person—the guide of our own cohort. In
        this regard, Ilias was luckier than I was.
      </p>

      <p>
        Besides this, the camp offered many other activities. Most of them were
        intended for the other cohorts that had come mainly to have a good time.
        Our IT cohort could rarely participate in those activities because we had
        classes for 7–8 hours a day. Fortunately, we still had opportunities for
        entertainment, such as volleyball, football, pool, capture the flag, and
        other games. The most enjoyable activity for me was football, as I had
        not played it for years. I enjoyed it so much that I kept playing even
        after I had worn down one of my toes. It was worth it.
      </p>
    </PostLayout>
  );
}
