"use client";

import { motion } from "motion/react";

function InitMotion({ children }) {
  const transition = {
    duration: 0.8,
    delay: 0.3,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transition}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
export default InitMotion;
