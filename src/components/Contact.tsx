"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLParagraphElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await fetch("https://formsubmit.co/avnikapooredu@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        successRef.current?.focus();
      }, 3000);
      
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <footer className="bg-accent text-darkAccent py-16 px-8 md:px-20 rounded-lg">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Socials */}
        <div>
          <h2 className="text-3xl font-bold mb-4">let’s connect</h2>
          <p className="text-darkAccent/80 mb-6">reach out through my socials or drop a message!</p>
          <div className="flex space-x-6 text-2xl text-writingColor">
            <a href="https://www.linkedin.com/in/avni-kapoor/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition" aria-label="LinkedIn profile">
              <FaLinkedin />
            </a>
            <a href="https://github.com/avkap007" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition" aria-label="Github profile">
              <FaGithub />
            </a>
            <a href="mailto:avnikapooredu@gmail.com" className="hover:text-secondary transition" aria-label="Send an email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">write me something nice below :)</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            
            <input 
              type="text" 
              placeholder="your name" 
              aria-label="Enter your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="bg-primary text-writingColor px-4 py-2 rounded-md placeholder-darkAccent focus:outline-none focus:ring-2 focus:ring-darkAccent"
            />
            
            <input 
              type="email" 
              placeholder="your email" 
              aria-label="Enter your email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-primary text-writingColor px-4 py-2 rounded-md placeholder-darkAccent focus:outline-none focus:ring-2 focus:ring-darkAccent"
            />
            
            <textarea 
              placeholder="your message" 
              aria-label="Enter your message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className="bg-primary text-writingColor px-4 py-2 h-28 rounded-md placeholder-darkAccent focus:outline-none focus:ring-2 focus:ring-darkAccent"
            />
            
            {/* Submit Button (Styled like Contact Button) */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              disabled={submitted}
              className={`px-4 py-2 rounded-lg text-med font-medium transition-all ${
                submitted ? "bg-writingColor text-white cursor-not-allowed" : "bg-accent text-darkAccent hover:bg-darkAccent hover:text-white"
              }`}
            >
              {submitted ? "sent!" : "send"}
            </motion.button>
          </form>
        </div>
      </div>
    </footer>
  );
}
