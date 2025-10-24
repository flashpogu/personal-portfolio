"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
  className="my-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
  ref={ref}
>
  <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>

  <p className="mb-3">
    I’m a <span className="font-semibold">Versatile Full-Stack AI Engineer</span> with expertise in 
    <span className="font-medium"> machine learning, backend APIs, frontend development,</span> and 
    <span className="font-medium"> DevOps tools.</span> I build 
    <span className="italic"> scalable AI-powered applications</span> by integrating deep learning models
    into production systems.
  </p>

  <p>
    I’m a fast learner with a strong 
    <span className="font-medium"> problem-solving</span> mindset, passionate about building impactful AI-driven 
    solutions and continuously improving my skills in{" "}
    <span className="font-semibold">MLOps, cloud automation,</span> and emerging technologies.
  </p>
  
</motion.section>

  );
}
