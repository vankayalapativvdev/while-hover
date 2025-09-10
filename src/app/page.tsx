"use client";

import ViewPort from "@/components/ViewPort";
import { motion } from "motion/react";

export default function Home() {
  const variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full my-32">
      <div className="flex flex-row items-center justify-center gap-4 w-3/5">
        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 text-black dark:text-white ">
          Email
        </label>
        <motion.input
          whileFocus={{
            scale: 1.01,
            transition: { duration: 0.5 },
          }}
          className="border border-black dark:border-white rounded-md px-4 py-2 placeholder:text-gray-500 dark:placeholder:text-gray-300/50 w-4/5 focus:outline-none focus:border-black"
          placeholder="Enter your Email"
        />
      </div>
      <div>
        <motion.button
          variants={variants}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
          className="px-4 py-2 rounded-full dark:hover:bg-blue-500 cursor-pointer dark:bg-blue-700 bg-blue-500 hover:bg-blue-700 text-white"
        >
          Submit
        </motion.button>
      </div>
      <ViewPort />
    </div>
  );
}
