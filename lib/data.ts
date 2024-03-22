import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pr1 from "@/public/pr1.png";
import pr2 from "@/public/pr2.png";
import pr3 from "@/public/pr3.png";

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
    title: "FitNGym",
    description:
      "Built a fully responsive webpage with react using typescript for type safety",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    imageUrl: pr2,
    link: "https://fitngym-five.vercel.app/",
  },
  {
    title: "Booking App",
    description:
      "Built a responsive booking app where user can book and places",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: pr3,
    link: "https://airbmb-ten.vercel.app/",
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
