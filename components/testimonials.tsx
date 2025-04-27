"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TestimonialType } from "@/lib/types";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { testimonialsData } from "@/lib/data";

type SingleTestimonialProps = {
  testimonial: TestimonialType;
};

function SingleTestimonial({ testimonial }: SingleTestimonialProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="w-full"
    >
      <div className="bg-gray-100 border border-black/5 rounded-lg p-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <FaQuoteLeft className="text-gray-400 absolute top-4 left-4 text-2xl opacity-20" />
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {testimonial.youtubeId ? (
            <div className="w-full md:w-1/3 aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${testimonial.youtubeId}`}
                title={`${testimonial.name}'s testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
          
          <div className="flex-1">
            <p className="text-gray-700 dark:text-white/70 mb-4 italic">
              "{testimonial.text}"
            </p>
            
            <div className="flex items-center gap-4">
              {testimonial.image && (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-white/50 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FaQuoteRight className="text-gray-400 absolute bottom-4 right-4 text-2xl opacity-20" />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section ref={ref} id="testimonials" className="scroll-mt-28 mb-28">
      <SectionHeading>Client Testimonials</SectionHeading>
      
      {testimonialsData.length > 0 ? (
        <div className="max-w-[54rem] mx-auto">
          <SingleTestimonial testimonial={testimonialsData[currentIndex]} />
          
          {testimonialsData.length > 1 && (
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={handlePrevious}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Previous testimonial"
              >
                <BsChevronLeft />
              </button>
              
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-700 dark:bg-white' : 'bg-gray-300 dark:bg-white/30'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Next testimonial"
              >
                <BsChevronRight />
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-white/50">No testimonials yet.</p>
      )}
    </section>
  );
} 