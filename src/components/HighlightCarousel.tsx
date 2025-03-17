"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// ✅ Updated Type for Highlights
type Resource = {
  type: string;
  url: string;
};

type Highlight = {
  id: number;
  image: string;
  title?: string;
  description?: string;
  resources?: Resource[]; // ✅ New field for links
};

export default function HighlightCarousel() {
  // ✅ Explicitly define `useState` type
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    fetch("/data/highlight.json")
      .then((response) => response.json())
      .then((data: Highlight[]) => setHighlights(data)) // ✅ Tell TypeScript it's an array of Highlight
      .catch((error) => console.error("Error loading highlight data:", error));
  }, []);

  return (
    <section className="py-10 relative w-full">
      <h1 className="text-3xl font-bold text-center mb-4 text-writingColor">Recent Highlights</h1>
      {/* ✅ New byline below heading */}
      <p className="text-center text-gray-700 text-md max-w-2xl mx-auto mb-8">
        I do a lot, and pictures are so much more fun to convey the message! <br/> 
        Here are a few snapshots of what I've been up to recently. 🎞️
      </p>

      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={false}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: "auto", spaceBetween: 15 },
            1024: { slidesPerView: "auto", spaceBetween: 20 },
            1440: { slidesPerView: "auto", spaceBetween: 30 },
          }}
          className="w-full"
        >
          {highlights.map((item) => (
            <SwiperSlide key={item.id} className="relative group cursor-pointer" style={{ maxWidth: "450px" }}>
              {/* Image container */}
              <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title || "Highlight Image"}
                  width={450} // Explicit width
                  height={320}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                />

                {/* Hover overlay (now perfectly aligned and scaling together) */}
                {item.description && (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex flex-col items-center justify-center rounded-lg group-hover:scale-105 px-4">
                    <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all">
                      {item.title && <h3 className="text-lg font-bold">{item.title}</h3>}
                      <p className="text-sm mb-2">{item.description}</p>

                      {/* ✅ Resource Links */}
                      {item.resources && (
                        <div className="mt-2">
                          {item.resources.map((resource, index) => (
                            <a
                              key={index}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-300 hover:text-blue-400 underline block text-sm"
                            >
                              {resource.type}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
