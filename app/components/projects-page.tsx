"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { videoProjectsData } from "@/lib/data";
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
          {videoProjectsData.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">{project.description}</p>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 