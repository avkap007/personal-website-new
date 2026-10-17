"use client";

import Image from "next/image";
import { BsSoundwave } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import Link from "next/link";
import FactCards from "./FactCards";

export default function AboutMe() {
  const playPronunciation = () => {
    const audio = new Audio("/avni-pronounciation.mp3");
    audio.play().catch((err) => console.error("Audio play failed:", err));
  };

  const hereClass =
    "text-darkAccent underline decoration-darkAccent/40 underline-offset-2 hover:decoration-darkAccent";

  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-6xl flex-col px-6 pt-16 pb-36 font-serif md:px-12"
    >
      <h1 className="text-left text-3xl font-extrabold leading-tight text-writingColor md:text-4xl">
        hi, nice to meet you!
        <br />
        i&apos;m Avni.
      </h1>

      <div className="mt-6 grid w-full items-start gap-x-16 gap-y-12 lg:grid-cols-2">
        <div className="text-left">
          <p className="flex items-center gap-1 text-lg text-writingColor/55">
            <span className="italic font-normal">pronunciation -</span>
            <span className="font-semibold text-writingColor">[uhv-knee]</span>
            <button
              onClick={playPronunciation}
              className="text-xl text-accent transition hover:text-darkAccent focus:outline-none focus:ring-2 focus:ring-darkAccent"
              aria-label="Play pronunciation"
            >
              <BsSoundwave />
            </button>
          </p>

          <div className="group relative mx-auto mt-4 h-72 w-72">
            <div className="flip-card h-full w-full">
              <div className="flip-card-front">
                <Image
                  src="/profile_avatar.gif"
                  alt="Illustrated avatar with doodles"
                  fill
                  className="h-full w-full rounded-2xl object-cover"
                  unoptimized
                  priority
                />
              </div>
              <div className="flip-card-back">
                <Image
                  src="/profile_face.gif"
                  alt="profile picture with doodles and sunglasses"
                  fill
                  className="h-full w-full rounded-2xl object-cover"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>

          <p className="mt-4 text-base font-normal leading-relaxed text-writingColor/80">
            one word i&apos;d use to describe myself is <span className="text-darkAccent">interdisciplinary</span>! amongst other things, i love the intersection of language and technology and hence am a top fan of my cognitive and computing science curriculum i get to enjoy learning from currently! through my education and access, my goal is to build <span className="text-darkAccent">intuitive</span>,{" "}
            <span className="text-darkAccent">accessible</span> and{" "}
            <span className="text-darkAccent">impactful</span> experiences and i am on a forever quest to be{" "}
            <span className="text-darkAccent">interested</span> and{" "}
            <span className="text-darkAccent">interesting</span>.
          </p>

          <div className="mt-6 flex items-center gap-6 text-2xl text-writingColor">
            <a
              href="https://www.linkedin.com/in/avni-kapoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-darkAccent"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/avkap007"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-darkAccent"
              aria-label="Github profile"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:avnikapooredu@gmail.com"
              className="transition hover:text-darkAccent"
              aria-label="Send an email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://substack.com/@avnisays"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-darkAccent"
              aria-label="Substack profile"
            >
              <SiSubstack />
            </a>
          </div>

          <Image
            src="/images/avni-sig.png"
            alt="Avni Kapoor signature"
            width={180}
            height={138}
            className="mt-6 h-auto w-40"
          />
        </div>

        <div>
          <FactCards />
          <p className="mt-6 text-base font-normal leading-relaxed text-writingColor/80">
            you can check out some of my projects (including research, software, etc.){" "}
            <Link href="/projects" className={hereClass}>
              here
            </Link>
            , and some of my writing{" "}
            <Link href="/writings" className={hereClass}>
              here
            </Link>
            . i&apos;m also nearing graduation, so you can check out my current resume{" "}
            <a
              href="/avni-kapoor-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={hereClass}
            >
              here
            </a>{" "}
            if you have an opportunity you think i&apos;d be a good fit for!
          </p>
        </div>
      </div>
    </section>
  );
}
