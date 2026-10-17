"use client";

import Image from "next/image";
import { BsSoundwave } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { motion } from "framer-motion";
import FactCards from "./FactCards";

export default function AboutMe() {
  const playPronunciation = () => {
    const audio = new Audio("/avni-pronounciation.mp3");
    audio.play().catch((err) => console.error("Audio play failed:", err));
  };

  return (
    <section
      id="about"
      className="py-36 flex flex-col md:flex-row items-center justify-center px-12 md:px-20 gap-16 font-serif"
    >
      {/* Flip Card Container */}
      <div className="flex flex-col items-center gap-5">
        <div className="group w-72 h-72 md:w-96 md:h-96 relative">
          <div className="flip-card w-full h-full">
            {/* Front Side */}
            <div className="flip-card-front">
              <Image
                src="/profile_avatar.gif"
                alt="Illustrated avatar with doodles"
                fill
                className="w-full h-full object-cover rounded-2xl"
                unoptimized
                priority
              />
            </div>

            {/* Back Side */}
            <div className="flip-card-back">
              <Image
                src="/profile_face.gif"
                alt="profile picture with doodles and sunglasses"
                fill
                className="w-full h-full object-cover rounded-2xl"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>

        <p className="text-writingColor/55 text-lg flex items-center gap-1">
          <span className="italic font-normal">pronunciation -</span>
          <span className="font-semibold text-writingColor">[uhv-knee]</span>
          <button
            onClick={playPronunciation}
            className="text-accent text-xl hover:text-darkAccent transition focus:ring-2 focus:ring-darkAccent focus:outline-none"
            aria-label="Play pronunciation"
          >
            <BsSoundwave />
          </button>
        </p>

        {/* Socials */}
        <div className="flex items-center gap-6 text-2xl text-writingColor">
          <a
            href="https://www.linkedin.com/in/avni-kapoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkAccent transition"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/avkap007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkAccent transition"
            aria-label="Github profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:avnikapooredu@gmail.com"
            className="hover:text-darkAccent transition"
            aria-label="Send an email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://substack.com/@avnisays"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-darkAccent transition"
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
          className="h-auto w-40"
        />
      </div>

      {/* About Text */}
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-writingColor leading-tight">
          hi, nice to meet you!
          <br />
          i&apos;m Avni.
        </h1>
        <p className="text-md md:text-lg text-darkAccent mt-2 lowercase">
          <span className="font-bold">[product manager]</span> •{" "}
          <span className="text-writingColor">[developer]</span> •{" "}
          <span className="text-darkAccent">[researcher]</span>
        </p>

        <FactCards />

        {/* Standalone Mission Statement */}
        <p className="mt-4 max-w-xl text-lg font-semibold text-writingColor leading-relaxed">
          my goal is to build <span className="text-darkAccent">intuitive</span>,  
          <span className="text-darkAccent"> accessible</span>, and  
          <span className="text-darkAccent"> impactful</span> products.
        </p>

        {/* Resume Button */}
        <motion.a
          href="/avni-kapoor-resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-med font-medium transition-all bg-accent text-darkAccent hover:bg-darkAccent hover:text-white mt-4 inline-block"
        >
          view resume
        </motion.a>
      </div>
    </section>
  );
}
