"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return; // Prevent empty submissions
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
    setEmail(""); // Clear input fields
    setMessage("");
  };

  return (
    <footer className="bg-pink-200 text-white py-16 px-8 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Let's Connect + Socials */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-400 mb-6">Reach out through my socials or drop a message!</p>
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.linkedin.com/in/avni-kapoor/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/avkap007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="mailto:avnikapooedu@gmail.com" className="hover:text-gray-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Email Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea 
              placeholder="Your message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className="bg-gray-800 text-white px-4 py-2 h-28 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button 
              type="submit" 
              className="bg-accent text-white font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition"
              disabled={submitted} // Prevent multiple submissions
            >
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
