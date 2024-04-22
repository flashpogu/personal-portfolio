import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pr1 from "@/public/pr1.png";
import pr5 from "@/public/pr5.png";
import pr4 from "@/public/pr4.png";

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
    title: "BlogApp",
    description:
      "Built blog app using react as a frontend and node + express as a backend with google OAuth",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express"],
    imageUrl: pr1,
    link: "https://blog-app-0c7q.onrender.com/",
  },
  {
    title: "Figma Store",
    description:
      "Built a responsive Ecom app with login, register and payment functionality",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Framer",
      "Redux",
      "Stripe",
    ],
    imageUrl: pr4,
    link: "https://figmaecom.onrender.com/",
  },
  {
    title: "BookME",
    description:
      "Built a fully func Booking App with Sorting and Filter functionality, Both frontend and backend with Typescript for type safety",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "React Query",
      "Node",
      "Express",
      "MongoDB",
    ],
    imageUrl: pr5,
    link: "https://bookme-f6pk.onrender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
