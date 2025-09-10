"use client";

import React from "react";
import { motion } from "framer-motion";

const ViewPort = () => {
  const animation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          initial={animation.initial}
          whileInView={animation.whileInView}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="grid grid-cols-3 gap-3 my-36"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-96 w-96 rounded-xl shadow-lg border ${
                index === 0
                  ? "border-black"
                  : index === 1
                  ? "border-gray-300"
                  : index === 2
                  ? "border-orange-500"
                  : "border-blue-500"
              }`}
            ></div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default ViewPort;
