import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type VideoProjectType = {
  title: string;
  description: string;
  youtubeId: string; // YouTube video ID
  tags: string[];
};

export type TestimonialType = {
  name: string;
  title: string; // Job title/company
  text: string; // Testimonial text
  youtubeId?: string; // Optional YouTube video ID for video testimonials
  image?: any; // Optional profile image
};
