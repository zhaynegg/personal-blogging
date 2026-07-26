// app/posts/[slug]/page.tsx

export default function PostPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <article className="prose prose-stone lg:prose-lg mx-auto px-6 py-16 leading-relaxed max-w-2xl">

        {/* Title */}
        <h1 className="!mb-4">
          My first camp as a trainer
        </h1>

        {/* Meta */}
        <p className="text-sm text-stone-500 !mt-0">
          Competitive Programming • Coaching • 26th July
        </p>

        <hr className="my-8 border-stone-200" />

        {/* Content */}
        <p>
          In 2026, I have participated in my first ever camp as a trainer. It was in OI Qaragay mountain resort. Explicitly in 
          Tau Turan summer camp. The camp is held by M&C, a yearly event where students come from all over the country to 
          prepare for olympiads and enhance their skills. There are at this moment 14 children and 3 trainers including myself.
        </p>
        <p>
          During camp, few key events were held. I gave my 3rd interview to company and passed my final exam of ELCE 203. 
          I had prepared for both of the events and from the feelings failed both of them. In case of the interview, there were
          lags during the interview and I could not properly answer the questions. In the case of final exam, I have failed because
          left one problem entirely out of all 4 problems which will give me at maximum 75 points. 
        </p>
        <h1> The experience I have gained </h1>
        <p>
          I can't tell that I have learned something about coaching. I am doing it over the last year working individually and 
          with group of students. Here we exchange with groups and work with 4-5 students at a time. They solve their problems and
          all I need to do is navigate them through the problems. The only thing I find difficult is how strict am I need to be with them.
          They are only beginning their journey in competitive programming and I want them spend their time effectively without putting pressure
          on them. They need to have balance between work and rest. So, I feel a little disturbed when limit even talking during 
          the working processes.
        </p>

        <h1>Communication</h1>
        <p>
          The time here passes fast as we are busy all day teaching guys. They are guite interesting as our interests overlap.
          They are fond of programming and active lifestyle that i like. Their jokes and attitude is what makes 10 days of work
          fantastic. Other trainers are also good people to talk with. All of us want to became better programmer and I found that
          people who develop may have interest in other aspects of profeccsional career such as economics. I have never thoght about
          moving to another career path as there are already bunch of interesting AI related jobs.
        </p>
      </article>
    </div>
  );
}