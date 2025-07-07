"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { BsSoundwave } from "react-icons/bs";
import { motion } from "framer-motion";

export default function AboutMe() {
  const words = useMemo(
    () => [
      <span key="1" className="font-emoji">trying to fit travel & adventure into my schedule ✈️.</span>,
      <span key="2" className="font-emoji">convincing friends to go to big way 🍲.</span>,
      <span key="3" className="font-emoji">picking up yet another hobby 🎭.</span>,
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  const currentWord = useMemo(() => words[index], [index, words]);

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.props.children.slice(0, prev.length + 1));
        if (text.length === currentWord.props.children.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, currentWord]);

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

      {/* About Text */}
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-writingColor">
          hi, nice to meet you! <br />
          i'm Avni.{" "}
          <span className="text-gray-500 text-lg flex items-center gap-1">
            <span className="italic font-normal">pronunciation -</span> 
            <span className="font-semibold">[uhv-knee]</span>
            <button
              onClick={playPronunciation}
              className="text-accent text-xl hover:text-darkAccent transition focus:ring-2 focus:ring-darkAccent focus:outline-none"
            >
              <BsSoundwave />
            </button>
          </span>
        </h1>

        <p className="text-md md:text-lg text-darkAccent mt-2 lowercase">
          <span className="font-bold">[product manager]</span> •{" "}
          <span className="text-writingColor">[developer]</span> •{" "}
          <span className="text-darkAccent">[researcher]</span>
        </p>

        {/* Typing Animation */}
        <p className="mt-4 max-w-xl text-med text-gray-500 leading-relaxed" aria-live="polite">
          and am always - {text}
          <span className="animate-blink">|</span>
        </p>

        {/* Short Intro */}
        <p className="mt-4 max-w-xl text-med text-writingColor leading-relaxed">
          a final-year computing and cognitive science honours student at Simon Fraser University.
        </p>

        {/* Standalone Mission Statement */}
        <p className="mt-4 max-w-xl text-lg font-semibold text-writingColor leading-relaxed">
          my goal is to build <span className="text-darkAccent">intuitive</span>,  
          <span className="text-darkAccent"> accessible</span>, and  
          <span className="text-darkAccent"> impactful</span> products.
        </p>

        {/* Resume Button */}
        <motion.a
          href="/avni_kapoor_resume.pdf"
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
