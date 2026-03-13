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
    title: "Founder & Lead Developer",
    location: "Softadom",
    description: `Launched 12+ SaaS products and AI platforms used by 55K+ global users. Designed backend systems and 20+ APIs for scalable web applications serving 100K+ monthly requests. Engineered 4+ AI-powered tools (document chat, automation) processing 50K+ user requests/month. Managed full product lifecycle for 12+ products from development through deployment and maintenance. Led a remote engineering team of 3–5, streamlining collaboration and accelerating 15+ feature releases per year.`,
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - Present",
  },
  {
    title: "Senior Full Stack Python Developer",
    location: "Interco · Remote-USA",
    description: `Shipped 25+ full-stack product features using Django, PostgreSQL, and React/Next.js (API + UI). Built 15+ REST APIs for internal and production use, maintaining 99.9% uptime at scale. Established automation for 8+ services on 5+ Linux servers (Docker, Nginx, Gunicorn). Partnered with product and design to bring 20+ new features to production. Accelerated application performance by 40% via backend and database query tuning. Led migration of 3+ legacy codebases to modern frameworks.`,
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 - Dec 2025",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Freelance (Upwork & Fiverr) · Remote",
    description: `Spearheaded 45+ SaaS platforms end-to-end for 70+ international clients (frontend, backend, DB, deployment); systems serve 1M+ API requests/month. Designed 35+ production REST APIs (Django/FastAPI) achieving under-200ms response times and 50K+ concurrent-user capacity. Introduced UI and application flows for 45+ SaaS products using React/Next.js alongside Python backends. Integrated 15+ third-party APIs (AI services, Stripe, analytics). Hosted 45+ applications on Docker and cloud infrastructure (AWS, Linux). 95%+ client retention and repeat engagement.`,
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2020 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Id Nube · Remote-Mexico",
    description: `Completed 5+ web applications end-to-end (Django + frontend), cutting processing time 60% via query and schema tuning. Tuned 15+ REST APIs for 45% performance gain; rolled out 5+ production apps with no critical production incidents. Worked with product and QA to deliver 10+ features on schedule; 100% on-time releases with maintained quality.`,
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 - Jun 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Pidoca — AI Document Chat Platform",
    description:
      "AI-powered SaaS platform supporting 4+ document types (PDF, DOCX, XLSX, TXT); 5K+ monthly queries. Integrated document parsing and vector search pipelines; under-2s average response for contextual answers. Integrated OpenAI APIs for intelligent question answering across 10K+ processed documents. Implemented 8+ scalable backend APIs; streamlined query performance by 35%.",
    tags: ["Python", "Django/FastAPI", "OpenAI", "Vector Search", "SaaS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Risebot — AI Automation Platform",
    description:
      "Platform enabling 100+ automated AI bots and 500+ workflow runs/month. Defined backend services for 3 core entities (tasks, triggers, pipelines) and 5+ integration types. Set up 12+ API endpoints for bot orchestration and third-party integrations. Tuned performance to under-500ms for real-time task execution.",
    tags: ["Python", "FastAPI", "AI/LLM", "Automation", "REST APIs"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Brainytica — AI Tools Platform",
    description:
      "Platform offering 8+ AI tools (chatbots, image generation, automation); 20K+ monthly API calls. Rolled out 10+ scalable backend services using Python and modern web frameworks. Integrated 3 AI API providers (text, image, automation) across 8+ product features. Produced 8+ responsive frontend interfaces; 50% faster tool load times post-optimization.",
    tags: ["React", "Next.js", "Python", "AI APIs", "Django"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Bismito — AI Companion Platform",
    description:
      "AI character chat platform; users created 1K+ virtual companions; 15K+ monthly messages. Developed 6+ chat APIs and conversation management for 10K+ stored conversations. Deployed auth (JWT/OAuth) and scalable backend supporting 2K+ concurrent sessions. Real-time interaction with under-300ms message delivery latency.",
    tags: ["Django", "React", "JWT/OAuth", "Real-time", "PostgreSQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Toolsica — Developer Tools SaaS",
    description:
      "Multi-tool SaaS platform with 12+ developer and productivity tools; 3K+ monthly active users. Introduced 15+ backend APIs and 12+ interactive tool interfaces. Modular architecture supporting 12+ tools in one platform; 30% faster feature rollout. Streamlined deployment to under-10min release cycles; 40% fewer deployment incidents.",
    tags: ["Django", "React", "SaaS", "Docker", "CI/CD"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Web App Builder",
    description:
      "Drag-and-drop website builder with 20+ components; 2K+ sites generated. Launched 20+ dynamic UI components and 5 template categories. Backend configuration and storage for 2K+ user projects; 99.5% data integrity. Enabled 1K+ users to generate websites without coding; 60% faster build time vs. manual.",
    tags: ["React", "Node.js", "PostgreSQL", "Drag-and-Drop", "SaaS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Hospital Management System",
    description:
      "Django-based hospital management platform for 5+ departments. Developed 6+ modules (patient records, scheduling, appointments, billing, inventory, reporting). Secure auth and 4 role-based access levels (admin, doctor, nurse, reception). 5+ dashboards and 20+ reports; 50% reduction in manual reporting time.",
    tags: ["Django", "PostgreSQL", "RBAC", "Reporting", "REST APIs"],
    imageUrl: corpcommentImg,
  },
] as const;

export const videoProjectsData = [
  {
    title: "Pidoca — AI Document Chat Platform",
    description: [
      "Developed an AI-powered SaaS platform that allows users to chat with documents such as PDF, DOCX, XLSX, and TXT.",
      "Implemented document parsing and vector search pipelines enabling contextual AI responses across 10K+ processed documents.",
      "Integrated OpenAI APIs for intelligent question answering with under-2s average response time.",
      "Designed 8+ scalable backend APIs for document ingestion, embedding generation, and query processing.",
      "Optimized retrieval and response pipeline improving query performance by 35%.",
      "Tech stack: Django for backend development, OpenAI API for AI responses, vector database for semantic search, PostgreSQL for structured data, Docker for containerization, and Nginx for production deployment."
    ].join(" "),
    youtubeId: "f1POK73Atzc",
    tags: [
      "Python",
      "Django",
      "OpenAI",
      "Vector Search",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "AI/LLM",
      "SaaS",
      "Document AI",
      "REST APIs"
    ],
  },

  {
    title: "Risebot — AI Automation Platform",
    description: [
      "Piloted a platform enabling 100+ automated AI bots and 500+ workflow runs/month.",
      "Defined backend services for 3 core entities (tasks, triggers, pipelines) and 5+ integration types.",
      "Set up 12+ API endpoints for bot orchestration and third-party integrations.",
      "Tuned performance to under-500ms for real-time task execution.",
      "Tech stack: Django for the backend, React.js for the frontend, FastAPI for high-performance APIs, PostgreSQL for database management, Celery for background tasks, Docker for containerization, and Nginx for production deployments."
    ].join(" "),
    youtubeId: "p4OYKlKgQf4",
    tags: ["Python", "Django", "React.js", "FastAPI", "PostgreSQL", "Celery", "Docker", "Nginx", "AI/LLM", "Automation", "REST APIs"],
  },
  {
    title: "Brainytica — AI Multi-Tools Platform",
    description: [
      "Developed an AI-powered multi-tool platform providing chatbot, image generation, music generation, video generation, and code generation capabilities.",
      "Integrated multiple AI APIs to support real-time content generation for diverse use cases.",
      "Designed scalable backend architecture supporting thousands of AI requests and multi-tool workflows.",
      "Implemented secure API services and optimized response pipelines for fast AI interactions.",
      "Tech stack: Django for backend services, React.js for frontend interface, OpenAI APIs for AI capabilities, PostgreSQL for data management, Docker for containerized deployments, and Nginx for production infrastructure."
    ].join(" "),
    youtubeId: "6tjEfrp9j9U",
    tags: [
      "Python",
      "Django",
      "React.js",
      "OpenAI",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "AI/LLM",
      "SaaS",
      "AI Tools",
      "REST APIs"
    ],
  },
  
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
  "Django",
  "Django REST Framework",

  "FastAPI",
  "Flask",
  "Node.js",
  "Express.js",
  "TypeScript",
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "Redux/State Management",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Django ORM",
  "Prisma",
  "Docker",
  "Linux",
  "AWS (EC2, S3, Lambda)",
  "Nginx",
  "Gunicorn",
  "CI/CD",
  "Shell scripting",
  "REST APIs",
  "GraphQL",
  "SaaS Systems",
  "Celery",
  "Microservices",
  "JWT/OAuth",
  "Git",

  "Web Scraping",
  "BeautifulSoup",
  "Scrapy",
  "Selenium",
  "Playwright",
  "Desktop App Development",
  "Tkinter",
  "PyQt",
  "Kivy",

  "Stripe API",
  "AI/LLM Integration",
  "OpenAPI/Swagger",
  "pytest",
  "Jest",
  "Test Automation",
] as const;

