import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pr1 from "@/public/pr1.png";
import pr5 from "@/public/pr5.png";
import pr4 from "@/public/pr4.png";
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
    title: "Figma Ecommerce",
    description:
      "Built a responsive Ecom app with login, register and payment functionality",
    tags: [
      "React",
      "Tailwind",
      "React Query",
      "Node",
      "Express",
      "MongoDB",
    ],
    imageUrl: pr4,
    link: "https://figma-ecom-tau.vercel.app/",
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
