"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;

    // Use FormSubmit to send the email
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    try {
      await fetch("https://formsubmit.co/your-email@example.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
      setMessage("");
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
            <a href="https://www.linkedin.com/in/avni-kapoor/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/avkap007" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">
              <FaGithub />
            </a>
            <a href="mailto:avnikapooedu@gmail.com" className="hover:text-secondary transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">write me something nice below :)</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="bg-primary text-writingColor px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-darkAccent"
            />
            <textarea 
              placeholder="your message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              className="bg-primary text-writingColor px-4 py-2 h-28 rounded-md focus:outline-none focus:ring-2 focus:ring-darkAccent"
            />
            <button 
              type="submit" 
              className={`py-2 px-4 rounded-lg font-bold transition-all ${
                submitted ? "bg-highlight text-writingColor cursor-not-allowed" : "bg-darkAccent text-white hover:bg-writingColor"
              }`}
              disabled={submitted}
            >
              {submitted ? "sent!" : "send"}
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
