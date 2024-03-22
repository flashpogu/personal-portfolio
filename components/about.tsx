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
        As I embark on my journey in{" "}
        <span className="font-medium">web development</span>, I&apos;ve
        dedicated myself to mastering fundamental technologies crucial for
        today&apos;s digital landscape. Notably, I&apos;ve invested significant
        effort into becoming proficient in{" "}
        <span className="font-medium">React</span>, utilizing its capabilities
        to design captivating and user-centric interfaces. For instance, in a
        recent project,{" "}
        <span className="italic">
          I utilized React to develop an interactive blog application
        </span>
        , implementing features such as seamless navigation, dynamic content
        rendering, and user authentication for an enriched reading experience.
        Moreover, I&apos;m familiar with{" "}
        <span className="font-medium">TypeScript</span>, leveraging its strong
        typing system to enhance code readability and maintainability in my
        projects.
      </p>
      <p>
        I am currenty looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer where{" "}
        <span className="italic">
          {" "}
          I can continually enhance my knowledge and skills.
        </span>{" "}
        I am eager to deepen my understanding of cutting-edge{" "}
        <span className="font-medium">technologies</span>, collaborate with
        talented <span className="italic">individuals</span>, and embark on a
        journey of professional development.
      </p>
    </motion.section>
  );
}
