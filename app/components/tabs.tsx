"use client";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "/", label: "Works" },
  { id: "/about", label: "About" },
  { id: "/feed", label: "Feed" },
];

export function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="bg-yask gap-1 transition-transform transition-gpu rounded-xl p-0.5 inline-flex justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative  px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute rounded-[10px] inset-0 z-10 bg-white mix-blend-difference"
              //   style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
