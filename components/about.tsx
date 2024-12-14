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
        I am a passionate and results-driven Full-Stack Developer with expertise
        in building robust, scalable, and user-centric applications. With a
        solid foundation in Python, JavaScript, and modern frameworks like
        Django, React, and Next.js, I specialize in creating seamless user
        experiences across web, mobile, and desktop platforms. My approach
        combines a deep understanding of both frontend and backend technologies,
        allowing me to manage end-to-end development processes effectively. I am
        proficient in database management with MySQL, PostgreSQL, and MongoDB,
        and I ensure high-quality, maintainable code through best practices like
        CI/CD pipelines and version control with Git and GitHub. In addition to
        technical skills, I am committed to continuous learning, adapting to new
        tools, and fostering collaborative relationships with teams and clients.
        Whether it's designing responsive UI with Tailwind CSS, automating tasks
        with Selenium, or optimizing performance with Docker and AWS, I bring a
        proactive mindset to every project. Driven by challenges, I thrive in
        dynamic, fast-paced environments and always aim to deliver innovative
        solutions that meet user needs and exceed expectations.
      </p>
    </motion.section>
  );
}
