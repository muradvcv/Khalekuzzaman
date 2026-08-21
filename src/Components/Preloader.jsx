'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while preloader is visible
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // Make sure scroll unlocks once loading state turns false
  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black
          "
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="
                text-6xl
                font-bold
                tracking-tight
                text-white
              "
            >
              <span className="text-[#DC2F02]">KM</span>.
            </motion.div>

            {/* Loading Line */}
            <div
              className="
                mt-6
                h-[2px]
                w-40
                overflow-hidden
                bg-white/10
              "
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  h-full
                  w-1/2
                  bg-[#DC2F02]
                "
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              className="
                mt-4
                text-xs
                uppercase
                tracking-[0.35em]
                text-gray-500
              "
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;