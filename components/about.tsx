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
        Full Stack Python Developer with <strong>5+ years of experience</strong> designing and delivering scalable SaaS platforms and web applications. Specialized in <strong>Django, FastAPI, REST APIs, PostgreSQL, Node.js, React, and Next.js</strong>. Experienced in production-ready systems, AI integration, and backend architecture for high-performance applications.
      </p>
      <p className="mb-3">
        Strong track record of end-to-end delivery from design through deployment and maintenance. Scaled 45+ SaaS platforms for 70+ international clients with 1M+ monthly API volume; maintained 99.9% uptime on production systems. Focus on Agile delivery, code quality, and technical documentation.
      </p>
    </motion.section>
  );
}
