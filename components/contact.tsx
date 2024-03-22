"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
    >
      <h2 className="text-3xl text-center font-medium capitalize mb-4">
        Contact me
      </h2>
      <p className="text-gray-700 text-center dark:text-white">
        Please contact me directly at my{" "}
        <a className="underline" href="mailto:rahulkumar23.me@outlook.com">
          email
        </a>{" "}
        or through this form.
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack text-black"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 p-4 my-3 rounded-lg borderBlack text-black"
          placeholder="Your message"
          name="message"
          required
          maxLength={1500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
