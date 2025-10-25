import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pr1 from "@/public/pr1.png";
import pr6 from "@/public/pr6.png";
import pr2 from "@/public/pr2.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Skin Disease Classifier",
    description:
      "Built a full-stack medical imaging system that classifies 7 skin diseases",
    tags: ["Pytorch", "Transfer Learning (ResNet50)", "Modal Cloud"],
    imageUrl: pr1,
    link: "https://skin-disease-classifier-lemon.vercel.app/",
  },
  {
    title: "Shortify URL shortner",
    description:
      "Built a scalable URL shortening system with caching using Redis for high performance.",
    tags: [
      "Next js",
      "Node.js",
      "Redis",
      "Postgres",
      "Traefik",
      "Docker",
    ],
    imageUrl: pr2,
    link: "https://shortify-omega-mocha.vercel.app/",
  },
  {
    title: "WhiteBoard",
    description:
      "Enables real-time collaborative drawing with automatic shape recognition",
    tags: [
      "Next.js (App Router)",
      "Canvas API (HTML5)",
      "Heuristic Shape Recognition",
    ],
    imageUrl: pr6,
    link: "https://whiteboard-qh4a.onrender.com",
  },
] as const;

export const skillsData = [
  "Python",
  "Postgres",
  "Pytorch",
  "Docker",
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "API",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "React Query",
  "Express"
  
] as const;
