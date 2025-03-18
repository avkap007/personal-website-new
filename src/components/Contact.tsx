"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const newErrors: { [key: string]: string } = {};

    form.querySelectorAll("input, textarea").forEach((input) => {
      const inputElement = input as HTMLInputElement;
      if (!inputElement.checkValidity()) {
        newErrors[inputElement.name] = inputElement.validationMessage;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault(); // ✅ Prevents form submission if errors exist
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

          {/* ✅ FormSubmit Direct Form Submission */}
          <form 
            action="https://formsubmit.co/avnikapooredu@gmail.com" 
            method="POST" 
            className="flex flex-col space-y-4"
            onSubmit={handleValidation}
          >
            {/* ✅ Name Input */}
            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="bg-primary text-writingColor px-4 py-2 rounded-md placeholder-darkAccent border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-darkAccent"
                onInvalid={(e) => e.preventDefault()}
              />
              {errors?.name && <p className="text-secondary text-sm mt-1">{errors.name}</p>}
            </div>

            {/* ✅ Email Input */}
            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="bg-primary text-writingColor px-4 py-2 rounded-md placeholder-darkAccent border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-darkAccent"
                onInvalid={(e) => e.preventDefault()}
              />
              {errors?.email && <p className="text-secondary text-sm mt-1">{errors.email}</p>}
            </div>

            {/* ✅ Message Input */}
            <div>
              <textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                className="bg-primary text-writingColor px-4 py-2 h-28 rounded-md placeholder-darkAccent border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-darkAccent"
                onInvalid={(e) => e.preventDefault()}
              />
              {errors?.message && <p className="text-secondary text-sm mt-1">{errors.message}</p>}
            </div>

            {/* ✅ Hidden Fields for Better UX */}
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> 
            <input type="hidden" name="_captcha" value="false" />

            {/* ✅ Submit Button */}
            <button 
              type="submit" 
              className="py-2 px-4 rounded-lg font-bold transition-all bg-darkAccent text-white hover:bg-writingColor"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
