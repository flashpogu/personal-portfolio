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
      {/* Section heading */}
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3">
        Adept at crafting <span className="italic">user-centric</span>{" "}
        interfaces that prioritize clarity and functionality. Skilled in
        building complex applications with{" "}
        <span className="font-medium">Redux Toolkit</span> for state management
        and <span className="font-medium">React Query</span> for efficient data
        fetching. My expertise encompasses designing aesthetically pleasing and
        intuitive <span className="italic">user interfaces</span>{" "}
        <span className="font-bold">(UI)</span>. I&apos;m always eager to{" "}
        <span className="font-bold">learn</span> new technologies and expand my
        skillset.
      </p>
      <p>
        Seeking a <span className="font-medium">full-time</span> software
        developer position to utilize my React expertise and collaborate with a
        talented team. Passionate about staying ahead of the curve by learning
        cutting-edge <span className="font-medium">technologies</span> like
        <span className="italic">(mentioned below)</span> and contributing to
        the company&apos;s success.
      </p>
    </motion.section>
  );
}
