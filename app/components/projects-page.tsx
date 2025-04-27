"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsWithVideosData } from "@/lib/data";
import ProjectWithVideo from "./project-with-video";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <section className="scroll-mt-28 mb-28 max-w-[50rem] w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading>My Projects</SectionHeading>
        <p className="text-center mb-10 text-gray-700 dark:text-white/70">
          Explore my previous projects with video demonstrations. These showcase my skills and experience in various technologies.
        </p>
        <div className="grid gap-8">
          {projectsWithVideosData.map((project, index) => (
            <ProjectWithVideo key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
} 