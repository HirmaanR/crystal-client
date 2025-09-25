"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "motion/react";

function DynamicTabs({ tabsArr }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <nav className="tabs tabs-lift justify-center relative">
        {tabsArr.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <button
              key={index}
              className={`tab capitalize text-[14px] gap-3 border-none relative ${
                isSelected ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => setSelectedIndex(index)}
              style={{ position: "relative", zIndex: 1 }}
            >
              {item.iconName && (
                <Icon icon={item.iconName} className="text-2xl" />
              )}
              <span className="tab-title">{item.title}</span>

              {/* Animate underline */}
              {isSelected && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="tab-content bg-base-200 p-10 rounded-3xl mt-5 min-h-[150px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="flex flex-col justify-center items-center w-full text-center">
              {tabsArr[selectedIndex].content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DynamicTabs;
