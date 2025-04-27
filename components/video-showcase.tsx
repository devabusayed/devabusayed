"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { VideoProjectType } from "@/lib/types";
import { videoProjectsData } from "@/lib/data";

type VideoProjectProps = {
  project: VideoProjectType;
};

function VideoProject({ project }: VideoProjectProps) {
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
      className="group mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-5">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {project.description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {project.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  const { ref } = useSectionInView("Video Showcase");

  return (
    <section ref={ref} id="video-showcase" className="scroll-mt-28 mb-28">
      <SectionHeading>Project Showcase</SectionHeading>
      <div className="flex flex-col items-center">
        {videoProjectsData.map((project, index) => (
          <VideoProject key={index} project={project} />
        ))}
      </div>
    </section>
  );
} 