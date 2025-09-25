"use client";

import { motion } from "motion/react";

function TabMotion({ children }) {
  return <motion.div layoutId="underline">{children}</motion.div>;
}
export default TabMotion;
