"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a full-stack web developer with expertise in <span className="font-medium"> React, Next.js, Node.js, and MongoDB</span>. I am also proficient in TypeScript and Prisma and continually strive to learn new technologies to enhance my skill set. My favorite part of programming is solving complex problems—I love the thrill of finding solutions to challenging issues. I am currently seeking a full-time position as a software developer.
        When I'm not coding, I enjoy playing video games, watching movies, and exploring new hobbies. Recently, I've been diving into history and philosophy to broaden my perspective. I'm also learning to play the guitar, which has been a rewarding creative outlet.
      </p>

     
    </motion.section>
  );
}
