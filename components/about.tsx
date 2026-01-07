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
        I am an expert in Python-based Web Automation, Scraping and Web App, with extensive experience in developing scalable, reliable, and secure data extraction systems. My specialization includes Django backend development, automation pipelines, and solutions for bot-resistant scraping.
      </p>
      <p className="mb-3">
        I have successfully delivered automation tools, scraping systems, and SaaS backends for clients globally, with a strong emphasis on performance, accuracy, and long-term maintainability.
      </p>
    </motion.section>
  );
}
