"use client";

import { motion } from "motion/react";

function ButtonMotion({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
    >
      {children}
    </motion.button>
  );
}

export default ButtonMotion;
