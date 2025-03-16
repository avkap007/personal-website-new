"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { BsSoundwave } from "react-icons/bs";

export default function AboutMe() {
  const words = useMemo(
    () => [
      "Living vicariously, ideating & creating 🎨.",
      "Convincing friends to go to Big Way 🍲.",
      "Overwhelming myself by picking up a 76th hobby 🎭.",
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
        setText((prev) => currentWord.slice(0, prev.length + 1));
        if (text.length === currentWord.length) {
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
      className="py-40 flex flex-col md:flex-row items-center justify-center px-12 md:px-20 gap-16 font-serif bg-primary"
    >
      {/* Flip Card Container */}
      <div className="group w-72 h-72 md:w-96 md:h-96 relative">
        <div className="flip-card w-full h-full">
          {/* Front Side */}
          <div className="flip-card-front">
            <Image
              src="/my-notion-face-transparent.png"
              alt="Avni Kapoor"
              layout="fill"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <Image
              src="/images/profilepic.png"
              alt="Avni Kapoor Back"
              layout="fill"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* About Text */}
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-writingColor">
          Hi, Nice to meet you! <br />
          I'm Avni <span className="text-accent">&lt;3</span>{" "}
          <span className="text-gray-500 text-lg flex items-center gap-1">
            <span className="font-normal">pronounciation -</span> 
            <span className="font-semibold">[uhv-knee]</span>
            <button
              onClick={playPronunciation}
              className="text-accent text-xl hover:text-darkAccent transition"
            >
              <BsSoundwave />
            </button>
          </span>
        </h1>

        <p className="text-md md:text-lg text-darkAccent mt-2">
          I'm a{" "}
          <span className="font-bold">[Product Manager]</span> •{" "}
          <span className="font-semibold">[Developer]</span> •{" "}
          <span className="font-semibold">[Researcher]</span>
        </p>

        {/* Typing Animation */}
        <p className="mt-4 max-w-xl text-lg text-secondary leading-relaxed">
          And am always - {text}
          <span className="animate-blink">|</span>
        </p>

        {/* Bio Description */}
        <p className="mt-4 max-w-xl text-med text-writingColor leading-relaxed">
          Final-year Computing & Cognitive Science student at SFU.  
          My goal is to be a builder of products that are intuitive,
          accessible, and impactful. <br/>
          I hope this website gives you a glimpse of who I am and what I do - and that then we get to chat!
        </p>

        <a
          href="/avni-kapoor-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-lg font-lg transition-all bg-accent text-darkAccent hover:bg-darkAccent hover:text-white mt-4 inline-block"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}