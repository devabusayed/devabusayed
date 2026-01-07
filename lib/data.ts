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
    name: "Video Showcase",
    hash: "#video-showcase",
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
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Interco",
    description: `Software Developer at Interco (2020–2025). During my time at Interco, I contributed to various web and desktop projects. My responsibilities included creating scalable backends, APIs, and automation tools, as well as developing cross-platform applications. I focused on streamlining workflows and delivering efficient, high-quality solutions.`,
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2025",
  },
  {
    title: "Full Stack Developer",
    location: "Upwork, Freelance",
    description: `Working at Upwork (as Freelancer) for 6+ years and contributing to web, mobile, and desktop projects. Built Django backends, React/Next.js frontends, React Native apps, and desktop tools using Tkinter and PyQtS, ensuring scalable and reliable solutions.`,
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Fiverr, Freelance",
    description: `Full-Stack Developer at Fiverr (as Freelancer) with hands-on experience in Python, Django, React, React Native, and Desktop Apps using Tkinter and PyQtS, delivering scalable and production-ready solutions.`,
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
  {
    title: "Junior Software Developer",
    location: "Id Nube",
    description: `Full-Stack Developer at Id Nube (2021) – Built scalable web and desktop applications using Python and Django. Collaborated with cross-functional teams to deliver reliable, high-quality solutions and successfully managed 3 client web projects end-to-end.`,
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2021",
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

export const videoProjectsData = [
  {
    title: "E-commerce Website with Django & React.js",
    description:
      "I built a feature-rich e-commerce website utilizing Django for the backend and React.js for the frontend. The application includes user authentication, comprehensive product management, shopping cart functionality, secure payment integration, and an intuitive admin dashboard. Designed with scalability in mind, it supports order tracking, user reviews, and dynamic category browsing.",
    youtubeId: "iUCebNJhTfM",
    tags: ["Django", "React.js", "E-commerce", "Web Development"],
  },
  {
    title: "Crypto Trading Bot with Python & Kivy",
    description:
      "I built a crypto trading bot using Python and Kivy for the UI. The bot automates crypto trades, integrates with exchange APIs, and features a real-time dashboard for monitoring trades easily from a cross-platform desktop app.",
    youtubeId: "aKQXwsW3TQE",
    tags: ["Python", "Kivy", "Crypto", "Trading Bot", "Automation"],
  },
  {
    title: "Web Scraping with Python & Selenium",
    description:
      "I built a web scraping system using Python, Selenium, and BeautifulSoup. The project demonstrates extracting data from websites, handling anti-bot measures, and efficiently collecting targeted information with robust scraping techniques.",
    youtubeId: "SS2PRIFzR04",
    tags: ["Python", "Selenium", "BeautifulSoup", "Web Scraping", "Automation"],
  },
  {
    title: "Facebook Automation Tool - Auto Group Joiner",
    description:
      "I built a Facebook automation tool that automatically joins groups. The tool streamlines the group joining process on Facebook, improving efficiency and productivity through automation.",
    youtubeId: "2aYnxB3ZSro",
    tags: ["Python", "Automation", "Facebook", "Bot"],
  },
  {
    title: "Food Ordering Desktop Application",
    description:
      "I built a desktop application for food ordering using Python. The app features a modern UI, menu browsing, order management, and seamless user experience, making food ordering efficient on desktop platforms.",
    youtubeId: "PdnDzFHrBBM",
    tags: ["Python", "Tkinter", "PyQt", "Desktop App", "Food Ordering"],
  },
  {
    title: "Google Search Automation Desktop App & Bot",
    description:
      "I built a desktop application and bot that automates Google search tasks. The tool efficiently performs web searches and data extraction, featuring a user-friendly UI and automation capabilities for repetitive Google search workflows.",
    youtubeId: "9yosFTvMl3k",
    tags: ["Python", "Automation", "Desktop App", "Bot", "Google Search"],
  },
  {
    title: "Auto Visa Slot Booking Bot",
    description:
      "I built an automated visa slot booking bot using Python, requests, and BeautifulSoup, with an integrated CAPTCHA bypass system. The bot streamlines the process of monitoring and booking visa appointment slots, efficiently managing sessions, form submissions, and automatically solving CAPTCHAs to secure appointments in high-demand scenarios.",
    youtubeId: "f858qUh09Vw",
    tags: ["Python", "Requests", "BeautifulSoup", "Captcha Bypass", "Automation", "Visa Booking", "Bot"],
  },
  {
    title: "Food Ordering & POS Desktop Application",
    description:
      "I built a desktop application for food ordering, integrated with a full POS system. The app offers menu browsing, order processing, and seamless point-of-sale operations, all within a modern desktop experience.",
    youtubeId: "gNwowPr2MlM",
    tags: ["Python", "Desktop App", "POS System", "Order Management", "Food Ordering"],
  },
  {
    title: "Music Composing Desktop Application",
    description:
      "I built a desktop application for music composing, providing a user-friendly interface for creating, editing, and managing musical compositions. The app streamlines the workflow for composers and musicians, offering tools for efficient music creation on desktop platforms.",
    youtubeId: "WwE2aSrWaNw",
    tags: ["Python", "Desktop App", "Music Composing", "Music System"],
  },
  {
    title: "Teeth Segmentation Desktop Application",
    description:
      "I built a desktop application for teeth segmentation using Python and Kivy. This tool provides an intuitive interface for segmenting and analyzing dental images, streamlining the workflow for dental professionals with efficient segmentation capabilities.",
    youtubeId: "UFV9AxvEP-4",
    tags: ["Python", "Kivy", "Desktop App", "Teeth Segmentation", "Image Processing"],
  },
] as const;

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    title: "CTO at TechStart Inc.",
    text: "Working with Abu was a game-changer for our project. His technical expertise and ability to solve complex problems efficiently saved us countless hours. The solutions he implemented were not only effective but also scalable for our future growth.",
  },
  {
    name: "Michael Rodriguez",
    title: "Founder of DataFlow",
    text: "Abu delivered our data visualization dashboard ahead of schedule and exceeded all our expectations. His attention to detail and understanding of user experience resulted in an intuitive interface that our clients love. We've seen a 40% increase in user engagement since launch.",
  },
  {
    name: "Emily Chen",
    title: "Product Manager at WebSolutions",
    text: "We hired Abu to modernize our legacy system, and the results were outstanding. He not only refactored our codebase for better performance but also introduced new features that we hadn't even considered. His proactive approach and clear communication made the entire process smooth.",
  },
  {
    name: "David Thompson",
    title: "CEO at AutomateCorp",
    text: "Abu built our web scraping and automation system, and it has transformed our business operations. His expertise in handling anti-bot measures and CAPTCHA challenges saved us months of development time. The system has been running flawlessly for over a year, extracting data from complex websites reliably. His Python automation skills are exceptional.",
  },
  {
    name: "Jessica Martinez",
    title: "Operations Director at RetailTech",
    text: "We needed a custom desktop application for our point-of-sale system, and Abu delivered beyond expectations. Using Python and PyQt, he created a beautiful, efficient desktop app that handles our daily operations seamlessly. The automation features he integrated have reduced manual work by 60%. Highly recommend his services for any desktop application development needs.",
  },
] as const;

export const skillsData = [
  "Python",
  "Python Automation",
  "Django",
  "Django REST Framework",
  "Web Scraping",
  "BeautifulSoup",
  "Scrapy",
  "Selenium",
  "Playwright",
  "Anti-Bot & CAPTCHA Handling",
  "Proxy Rotation & Rate Limiting",
  "Desktop App Development",
  "Tkinter",
  "PyQt",
  "Kivy",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  "API Development & Integration",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Linux & VPS Deployment",
  "Git",
  "GitHub",
  "Tailwind",
] as const;

