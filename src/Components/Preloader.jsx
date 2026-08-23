"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 1000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const value = Math.min(
        Math.round((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (value < 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    const timer = setTimeout(() => {
      setProgress(100);

      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "";
      }, 80);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#030303]"
        >
          {/* Purple Ambient Glow */}
          <motion.div
            animate={{
              scale: [0.8, 1.15, 0.8],
              opacity: [0.08, 0.18, 0.08],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]"
          />

          {/* Outer Ring */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{
              scale: [0.7, 1, 1.1],
              opacity: [0, 0.5, 0],
              rotate: 360,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute h-40 w-40 rounded-full border border-purple-500/20 border-t-purple-500/70"
          />

          {/* Inner Ring */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: [0.6, 0.9, 1],
              opacity: [0, 0.4, 0],
              rotate: -360,
            }}
            transition={{
              duration: 0.9,
              delay: 0.05,
              ease: "easeOut",
            }}
            className="absolute h-28 w-28 rounded-full border border-purple-400/10 border-b-purple-400/50"
          />

          {/* Center */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Percentage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-baseline justify-center"
            >
              <span className="text-3xl font-light leading-none tracking-[-0.04em] text-purple-200 sm:text-4xl">
                {progress}
              </span>

              <span className="ml-0.5 text-sm font-light text-purple-500/70">
                %
              </span>
            </motion.div>

            {/* Loading */}
            <motion.p
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
              }}
              className="mt-3 text-[7px] uppercase tracking-[0.55em] text-purple-400/60"
            >
              Loading
            </motion.p>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-3 text-xs font-light tracking-[0.1em] text-neutral-400"
            >
              Md.Khalekuzzaman
            </motion.p>

            {/* Progress Line */}
            <div className="mt-5 h-[1px] w-40 overflow-hidden bg-purple-950/50">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-700 via-purple-400 to-purple-600"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;