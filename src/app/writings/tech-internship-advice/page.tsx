import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "in honour of advice season | Avni Kapoor",
  description: "Some tangible pieces of advice for tech internships.",
};

const h2 = "mt-12 text-xl font-bold text-writingColor";
const h3 = "mt-8 text-base font-semibold text-writingColor";
const p = "mt-5";
const ul = "mt-5 space-y-3 list-disc pl-5 marker:text-darkAccent/60";
const ol = "mt-5 space-y-6 list-decimal pl-5 marker:text-darkAccent/60 marker:font-semibold";

export default function TechInternshipAdvice() {
  return (
    <ArticleLayout
      title="in honour of advice season - some tangible pieces of advice for tech internships"
      date="August 2026"
    >
      <p>
        In anticipation of the upcoming (or more like the never ending) recruiting season, a few
        people have reached out for advice. And while it warms my heart every time because I
        recall being on the other side not too long ago, it also makes me realise a lot of what I
        have to say will inevitably become repetitive (to me) and I worry that then I&rsquo;ll
        share whatever I have to offer with less enthusiasm. With this article I&apos;m hoping to
        give a tldr on my experience and my advice basis my learning from it.
      </p>
      <p className={p}>
        The focus here is on interviewing, but I have a little bit of anecdotal advice on
        applications too. As most of my experience spans product and a little bit software
        &ndash; I&rsquo;ve solicited some sections of this piece from friends who have more
        pronounced experience in other prominent tech job families, namely SWE and Design.
      </p>
      <p className={p}>
        Before I begin, I shall add a disclaimer here that all advice is subjective, from both the
        pov of the writer and that of the reader. Make of everything you read what you want, with
        a sole focus on taking what HELPS you and dropping all else.
      </p>

      <h2 className={h2}>the sectors</h2>
      <p className={p}>
        I worked across 3 sectors over 6 terms: start ups, public sector, and big tech. When I
        started out, I focused on company size, and not so much the industry (fintech, health,
        etc). That was primarily because my signals for whether work is a fit for me are very
        people related, and I wanted to gauge how the size of the group impacts things at larger
        scales. Your reasons for picking roles you apply to can be as arbitrary or specific as you
        want. The only thing I would urge you to do is to have a pov on it - I will talk more
        about this more in a later section.
      </p>
      <p className={p}>
        There are various other sectors and industries you can look into too! If someone reading
        this knows of a good resource that provides a list, please add to the comment!
      </p>
      <p className={p}>here&apos;s the short version of what each gave me:</p>
      <ul className={ul}>
        <li>
          <strong>start up</strong> &ndash; friends for life, mentors for life. radical ownership
          is a guarantee, because they are often lean. you learn the full stack, and also LOTS of
          buzzwords, because you are working with sales, GTM, product marketing etc. you cannot
          stray away from the art of selling, which is a very important skill to learn in life and
          start ups harbour an environment that will inevitably make you better at it because most
          of them are sales led.
        </li>
        <li>
          <strong>public sector</strong> &ndash; lowkey, you cannot really argue with the value
          prop. you really are working on things that directly impact you on a day to day eg.
          transit, labour laws, pension funds etc. lots of job security. less autonomy, and the
          tech is archaic. but the people are really nice, and they take a lot of pride in their
          work, and there&apos;s a lot of value in that.
        </li>
        <li>
          <strong>big tech</strong> &ndash; they have the secret sauce: money, and a very high
          density of really smart people to learn from. On a flip side, a lot of what impacts your
          team is not in your control (or your manager&apos;s, or your manager&apos;s
          manager&apos;s...), which some people find discouraging and some find comforting. It
          does make recruiting easier, so if your goal is collecting prestige early on, it is a
          worthwhile one to hone in on.
        </li>
      </ul>

      <h2 className={h2}>blanket advice (works for any discipline)</h2>
      <ul className={ul}>
        <li>
          <strong>spend time on your resume, but not too much.</strong> You really should just be
          listing out your experiences and your impact. Most of the bullet points should lead with
          impact (and not duties), and should be skim-able. I don&rsquo;t have much else to say
          about this one.
        </li>
        <li>
          <strong>have two projects you know really well.</strong> These will hold up for any kind
          of presentation-esque interview, any &ldquo;walk me through something&rdquo; ask. Know
          them in a technically sound way, but also know the social aspect: what the learnings
          were, how the team dynamics played out, what you&apos;d do differently.
        </li>
        <li>
          <strong>mock with people at your level and people better than you.</strong> don&apos;t
          have an archetype for who you mock with.
        </li>
        <li>
          <strong>referrals:</strong> I can&apos;t personally speak to these. I never got any of my
          internships through referrals. I&apos;ve heard they work for a lot of places, and for
          some companies a referral apparently at least guarantees your application gets looked
          at. but this is something i cannot comment on from experience, so i invite people to
          comment on this one.
        </li>
        <li>
          <strong>timelines:</strong> same caveat. The general advice is apply early. However, my
          experience has not been that. I&apos;ve just sort of applied whenever I saw the job.
        </li>
      </ul>

      <h2 className={h2}>product: a full cycle, from my own runs</h2>
      <p className={p}>
        Product is where I have the richest experience (3 product internships, 1 software).
        Here&apos;s the full cycle you&apos;ll usually go through, plus or minus one round:
      </p>

      <ol className={ol}>
        <li>
          <p className="font-semibold text-writingColor">recruiter Screen</p>
          <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-darkAccent/60">
            <li>
              <strong>what to expect:</strong> mostly straight up qualification questions. this is
              where they check that what&apos;s on your resume is actually correct and matches
              current business needs. work authorization, timeline, availability. this round
              doesn&apos;t vary much across job families.
            </li>
            <li>
              <strong>how to prep:</strong> know your resume really well and be ready to talk
              about your projects at a surface level. have a specific answer ready for logistics
              questions like &ldquo;can you extend if it comes to it,&rdquo; because your answers
              give them a sense of how hard to vouch for you and how likely you are to accept if
              things go right.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-semibold text-writingColor">hiring manager round</p>
          <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-darkAccent/60">
            <li>
              <strong>what to expect:</strong> make or break. pm is hard to recruit for because
              they&apos;re kind of looking for a unicorn: technically sound, strong pov, and the
              secret sauce that makes people like you. pm lives on the rapport you build with eng,
              design, and sister teams. every role needs that, but for pm it&apos;s 3x.
            </li>
            <li>
              <strong>how to prep:</strong> this is where knowing your job family pays off. for
              product, have a pov on products you like, understand the business you&apos;re
              applying to, and be able to speak to how you&apos;d fit. your main value as a pm is
              that you can rally people together and move across domains with a decent amount of
              fluency, and that mix is rare, so that&apos;s what they&apos;re gauging. come in with
              opinions on a few products and on the space your work experience has been in.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-semibold text-writingColor">engineering manager round</p>
          <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-darkAccent/60">
            <li>
              <strong>what to expect:</strong> usually with the em of the team, or a few devs
              depending on bandwidth. some have a coding or debugging element, though in my
              experience the coding portion for pm roles is usually a hackerrank or other OA
              before you meet the team. they mostly want to see how fast you catch up on context.
              if you&apos;re going to be a platform pm on a fairly technical team (which was my
              case at both intuit and my current role), the technical bar is higher.
            </li>
            <li>
              <strong>how to prep:</strong> they will almost always ask about conflict management,
              because pm x eng x design means lots of opinions and a lot of them are usually
              right. having the vocabulary to communicate your cool headedness is key.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-semibold text-writingColor">analytical round</p>
          <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-darkAccent/60">
            <li>
              <strong>what to expect:</strong> wild card questions and hypotheticals, either based
              on the company&apos;s own product or something out of left field. one of mine was
              about turbotax: customers are dropping off on the checkout page after finishing
              their documents, why? another time i got &ldquo;design a check-in system for a
              hospital.&rdquo; they&apos;re watching what questions you ask and how you break the
              problem down.
            </li>
            <li>
              <strong>how to prep:</strong> if you want to be a pm, just use the apps. there will
              always be a variation of &ldquo;favorite app,&rdquo; &ldquo;app you&apos;d
              improve,&rdquo; or &ldquo;least favorite product,&rdquo; and you have to have
              something to say. build up points of reference so you&apos;re never reasoning from
              zero.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-semibold text-writingColor">culture fit</p>
          <ul className="mt-2 space-y-2 list-disc pl-5 marker:text-darkAccent/60">
            <li>
              <strong>what to expect:</strong> usually with someone higher up, a vp or a director
              at the very least. questions wise this is the easiest round, but it&apos;s
              absolutely a round you can lose. at a startup or midsized company especially, fit
              matters a lot because even at a sub 500 person company you&apos;ll touch hundreds of
              people during your time there. if this person says no, the hiring manager often
              can&apos;t override it.
            </li>
            <li>
              <strong>how to prep:</strong> honestly, be normal and be yourself. the vibes are the
              interview.
            </li>
          </ul>
        </li>
      </ol>

      <h2 className={h2}>software</h2>
      <p className={p}>
        the short version: you grind system design, you grind leetcode.
      </p>
      <p className={p}>
        the longer version comes from my friends emily, ronney, and terry, who have interviewed
        across various companies and are currently working across google, amazon, and unicorn
        startups.
      </p>

      <h3 className={h3}>on what to prep</h3>
      <ul className={ul}>
        <li>
          <strong>scope your grind.</strong> For most Canadian internships, focus on 4-5
          behavioural stories about your dev experience, leetcode 75 (150 in the long run) plus
          company tagged questions, and relevant tech trivia / class design. The order among these
          depends on the company and role. Spend the rest of your time on system design in case of
          a curveball, and to prep ahead for new grad.
        </li>
        <li>
          <strong>leetcode with spaced repetition.</strong> Terry&apos;s main method was spaced
          repetition, similar to how anki does it. For each question, really push yourself to
          understand the tradeoffs of the data structure or algorithm, not just the solution.
        </li>
        <li>
          <strong>tech trivia is not memorization.</strong> Prepare well formed answers that you
          actually understand, and answer frameworks, not memorized blobs from geeksforgeeks.
        </li>
        <li>
          <strong>class design comes in two flavours.</strong> design from scratch, or fix a bug
          in a class. from scratch, look into the classic leetcode questions and learn HOW to do
          it (like requirements gathering with the interviewer), not the one &ldquo;right&rdquo;
          answer. For bug fixes, get familiar with the language if it&apos;s language specific.
        </li>
        <li>
          <strong>prep your technical stories.</strong> have 2 stories ready where you solved a
          hard problem and it taught you something important, and be prepared to answer what
          alternatives you could have gone with. showing you understand tradeoffs and can select
          the best option among them is a senior level skill.
        </li>
        <li>
          <strong>behavioural needs depth.</strong> be ready for follow ups, the whys and hows.
          prep enough behavioural and technical detail that it sounds like a well-rounded
          real-life story. An interesting anecdote from an amazon interviewer: if the candidate
          answers the behavioural and technical follow ups well, they probably did enough homework
          to have the right skills and mindset for the job. It&apos;s not solely about whether the
          story is real.
        </li>
      </ul>

      <h3 className={h3}>on running the interview</h3>
      <p className={p}>here&apos;s Emily&apos;s walkthrough of how to actually run the interview once you&apos;re in it:</p>
      <ol className={ol}>
        <li>
          <strong>start with brute force.</strong> Talk through your brute force solution first.
          Some people ask the interviewer if they can implement it or if they should look for
          something more optimal. Emily prefers to ask, but assess the situation. depending on
          time and your confidence in the question, you might go either way.
        </li>
        <li>
          <strong>watch the clock.</strong> If you&apos;re able to express your optimal solution
          (maybe with some comments, not full pseudocode) and they understand your approach, you
          should probably just start coding and solve things on the go.
        </li>
        <li>
          <strong>narrate everything.</strong> Some people write pseudocode in comments before
          coding, some just start coding. Neither is fine, but talk through your entire thought
          process as you go, and practice doing this out loud when you mock. It&apos;s a separate
          skill from solving the problem and it doesn&apos;t develop on its own.
        </li>
        <li>
          <strong>verify at the end.</strong> walk through your solution against the test cases
          you set up at the beginning and make sure they come out correctly. Some people go line
          by line and write out variable values as they trace. Whether you do the full trace
          depends on time and the vibe of the interviewer.
        </li>
        <li>
          <strong>ask a real question.</strong> The interviewer should close by asking if you have
          questions. you can ask about when you&apos;ll hear back or anything else about the
          company. researching beforehand and asking a genuine question is a nice touch but
          don&apos;t stress about this part.
        </li>
      </ol>

      <h3 className={h3}>across all rounds</h3>
      <p className={p}>
        The important qualities are clear communication and understanding technical + operational
        tradeoffs (and vibes). While the technical part is important, it helps a lot when you can
        speak eloquently, especially when breaking down systems for your interviewer. Emphasize
        technical terms when explaining, and don&apos;t over contribute.
      </p>

      <h2 className={h2}>design</h2>
      <p className={p}>
        If you have worked with a great designer, you know they are super thorough. So here is
        some super thorough advice from some of my friends who have done design internships.
      </p>
      <p className={p}>
        First set comes from my friend Christina, who has interned/landed offers at asana, google,
        and patreon, and went to the amazing silicon valley design school. Her advice covers both
        getting the interview and the interview itself, because for design, getting the interview
        is the hard part.
      </p>

      <h3 className={h3}>on the portfolio and resume</h3>
      <ul className={ul}>
        <li>
          <strong>your portfolio gets you interviews.</strong> Unfortunately it&apos;s very biased
          towards visual design, so the fundamentals like typography, spacing, and hierarchy
          really matter. Whoever&apos;s looking at it has probably seen a thousand portfolios, so
          you need something that makes you stand out, whether that&apos;s intentionally typeset
          text, animations, or cool interactions.
        </li>
        <li>
          <strong>Case studies are for the hiring manager.</strong> Recruiters only scan them. The
          hiring manager is the one who reads them in depth, so write for both audiences.
        </li>
        <li>
          <strong>don&apos;t design your resume in figma.</strong> it&apos;s not machine readable.
          design it in google docs or word instead. The challenge is making it look nice while
          formatting it appropriately and hitting the right keywords. I (Christina) keeps separate
          resumes for submitting to a human vs cold applying.
        </li>
        <li>
          <strong>cold applying works.</strong> from my past two recruiting seasons: 2 interviews
          through network, 1 through messaging recruiters on linkedin (1 in ~40 messages, so not
          great odds), and 5 through cold applying. My last two internships, google and asana,
          both came from cold applying.
        </li>
      </ul>

      <h3 className={h3}>on the interview rounds</h3>
      <p className={p}>
        smaller local companies sometimes do just one round with behavioural questions or a
        project presentation. More established design teams run 4-5 rounds, usually some mix of
        these:
      </p>
      <ul className={ul}>
        <li>
          <strong>portfolio presentation.</strong> spend ~3 minutes on an intro about yourself,
          then present projects depending on time (15 min = 1 project, 30+ min = 2). Your projects
          need to show good visual design, good decision making, how you iterated, how you
          collaborated with stakeholders like devs and pms, how you navigated constraints
          (technical, time, budget, people), and the results. did it ship? if it didn&apos;t, can
          you articulate why the work still matters?
        </li>
        <li>
          <strong>show iteration, not just output.</strong> Interviewers always want to see
          projects from previous internships. I got rejected from Intuit in 2024 after presenting
          a hackathon project, and the feedback was that it&apos;s important to show how you
          iterate your designs from feedback.
        </li>
        <li>
          <strong>app critique.</strong> you&apos;re asked to critique an app (she did spotify for
          her patreon interview). mostly visual and interaction design, but you can show off
          systems thinking and product understanding too. if you can critique while understanding
          the constraints the designers were working under, communicate your thinking, and
          articulate what you&apos;d change and why (and distinguish a real ux problem from
          personal preference), you&apos;re golden.
        </li>
        <li>
          <strong>whiteboard design challenge.</strong> a doozy. you get a prompt, detailed or
          short, like &ldquo;design an expense splitting app for roommates.&rdquo; they&apos;re
          watching whether you understand the problem and users, make reasonable assumptions, and
          communicate. Ask your interviewer a lot of questions, then present some sketches of a
          solution.
        </li>
      </ul>

      <h3 className={h3}>on standing out and prepping</h3>
      <ul className={ul}>
        <li>
          <strong>ask about their design practice.</strong> thoughtful questions about the design
          team really stand out. Mentorship matters a lot as a designer, and if you&apos;re the
          only designer embedded in a team, it&apos;ll be hard to grow.
        </li>
        <li>
          <strong>youtube is surprisingly good.</strong> look up how designers prep for portfolio
          presentations, app critiques, and whiteboards. A lot of that advice helped her land
          asana, patreon, and google. one caveat: she&apos;s heard some companies now ask you to
          use ai in your design process to show you can get to a polished solution faster, but she
          hasn&apos;t personally done an interview like that yet.
        </li>
        <li>
          <strong>work with the recruiter.</strong> Ask them directly what the steps of the
          interview process are so you&apos;re never guessing.
        </li>
      </ul>

      <h2 className={h2}>general advice / parting words</h2>
      <p className={p}>
        I see people in bridging roles (i have definitely been there too) where they&apos;re not
        very excited about the company, or they&apos;re just not happy there, and all they&apos;re
        waiting for is the next job. I would urge you: like the job you have (or find an aspect of
        it that you like) to get the job that you like.
      </p>
      <p className={p}>
        something one of my managers said to me that stuck with me: yes, early career can be one
        of the best accelerating points, but you also have a lonngg career ahead of you and you
        will have many jobs, so you can change course any time you want.
      </p>
      <p className={p}>
        and the last piece (that i alluded to at the start of the article), which can sound a
        little cringe, but one i really believe in: have a pov on where you are going, where you
        want to be, etc. work can make you feel all kinds of things, and it is very closely
        attached to both your personal and perceived identity. So knowing where you are going, and
        how the current experience does and does not inform it, is crucial.
      </p>
      <p className={p}>
        you maybe don&apos;t have control over what will happen, but you have control over the
        intentionality it takes to get there. don&apos;t just have a blanket idea of &ldquo;i want
        to go to this place because everyone does.&rdquo; I have a reason. have a pov on it. and
        think in terms of &ldquo;I want to work there,&rdquo; not just &ldquo;this place will get
        me to this other place.&rdquo; That&apos;s a fair thing to think about, but even if your
        goal is one layer removed from the thing you actually want, don&apos;t do it blindly. You
        are going to spend four or eight months, forty hours a week, with these people. That is
        time you&apos;ll never get back, time you could have done something else with. You really
        do have a very limited amount of time, and what you do with it matters a lot.
      </p>
    </ArticleLayout>
  );
}
