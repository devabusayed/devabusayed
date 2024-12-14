import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Interco, USA",
    description: `Developed and optimized scalable software solutions using Python and JavaScript, improving system performance by 30%.
Collaborated with cross-functional teams to meet project deadlines, ensuring high-quality product delivery.
Focused on enhancing backend systems and troubleshooting performance bottlenecks.`,
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 - Present",
  },
  {
    title: "Junior Full Stack Developer",
    location: "Id Nube, Mexico",
    description: `Built web apps with React.js, Django, and Flask, boosting performance by 40%.
Optimized MySQL, PostgreSQL, and MongoDB databases, reducing query times by 35%.
Led a team of 5 developers, conducting 30+ code reviews monthly.`,
    icon: React.createElement(CgWorkAlt),
    date: "Apr, 2021 - Jun, 2021",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Fiverr, Freelance",
    description: `Delivered 50+ applications using Python (Django, Flask) and JavaScript (React.js, Next.js), achieving 95%+ client satisfaction.
Developed web scraping tools with Selenium, BeautifulSoup, and Scrapy.
Optimized web apps to handle 100,000+ users.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jul, 2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Docker",
  "AWS",
  "CI/CD",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "GraphQL",
  "Selenium",
  "BeautifulSoup",
  "Scrapy",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Tkinter",
  "PyQt5",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;

