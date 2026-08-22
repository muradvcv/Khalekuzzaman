'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 1000; // exactly 1 second
    const startTime = performance.now();

    let animationFrame;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;

      const percentage = Math.min(
        Math.floor((elapsed / duration) * 100),
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        // 100% clearly show
        setProgress(100);

        setTimeout(() => {
          setLoading(false);
        }, 80);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = '';
    }
  }, [loading]);

  const rings = Array.from({ length: 9 });

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
            transition: {
              duration: 0.45,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#050505]
          "
        >
          {/* =================================
              BACKGROUND GRID
          ================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
              [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
              [background-size:50px_50px]
            "
          />

          {/* =================================
              ORANGE AMBIENT GLOW
          ================================= */}

          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#DC2F02]/20
              blur-[110px]
            "
          />

          {/* =================================
              PORTAL
          ================================= */}

          <div
            className="
              relative
              flex
              h-[360px]
              w-[360px]
              items-center
              justify-center
            "
          >
            {/* =================================
                EXPANDING PORTAL RINGS
            ================================= */}

            {rings.map((_, index) => (
              <motion.div
                key={index}
                initial={{
                  scale: 0.25,
                  opacity: 0,
                }}
                animate={{
                  scale: [0.25, 1.35],
                  opacity: [0, 0.65, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: index * 0.18,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="
                  absolute
                  h-[110px]
                  w-[110px]
                  rounded-full
                  border
                  border-[#DC2F02]/50
                  shadow-[0_0_25px_rgba(220,47,2,0.15)]
                "
              />
            ))}

            {/* =================================
                INNER PORTAL
            ================================= */}

            <motion.div
              animate={{
                scale: [0.85, 1.08, 0.85],
                rotate: [0, 180, 360],
              }}
              transition={{
                scale: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              className="
                absolute
                h-[145px]
                w-[145px]
                rounded-full
                border
                border-[#DC2F02]/40
                border-t-[#DC2F02]
                border-r-white/20
                shadow-[0_0_50px_rgba(220,47,2,0.25)]
              "
            />

            {/* =================================
                SECOND ROTATING RING
            ================================= */}

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-white/5
                border-l-[#DC2F02]/60
                border-b-[#DC2F02]/30
              "
            />

            {/* =================================
                PORTAL CORE
            ================================= */}

            <motion.div
              animate={{
                scale: [0.8, 1.1, 0.8],
                boxShadow: [
                  '0 0 20px rgba(220,47,2,.25)',
                  '0 0 70px rgba(220,47,2,.55)',
                  '0 0 20px rgba(220,47,2,.25)',
                ],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                z-10
                flex
                h-[92px]
                w-[92px]
                items-center
                justify-center
                rounded-full
                border
                border-[#DC2F02]/60
                bg-[#080808]
              "
            >
              {/* Core Glow */}

              <div
                className="
                  absolute
                  inset-3
                  rounded-full
                  bg-[#DC2F02]/10
                  blur-xl
                "
              />

              {/* KM Logo */}

              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  z-10
                  text-3xl
                  font-black
                  tracking-tight
                "
              >
                <span className="text-[#DC2F02]">
                  KM
                </span>

                <span className="text-white">
                  .
                </span>
              </motion.div>
            </motion.div>

            {/* =================================
                PORTAL PARTICLES
            ================================= */}

            {[...Array(12)].map((_, index) => {
              const angle = index * 30;

              return (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.2],
                    x:
                      Math.cos(
                        (angle * Math.PI) / 180
                      ) * 150,
                    y:
                      Math.sin(
                        (angle * Math.PI) / 180
                      ) * 150,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.06,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="
                    absolute
                    h-1
                    w-1
                    rounded-full
                    bg-[#DC2F02]
                    shadow-[0_0_8px_#DC2F02]
                  "
                />
              );
            })}
          </div>

          {/* =================================
              PROGRESS SECTION
          ================================= */}

          <div
            className="
              absolute
              bottom-[13%]
              left-1/2
              flex
              -translate-x-1/2
              flex-col
              items-center
            "
          >
            {/* Percentage */}

            <motion.div
              className="
                text-2xl
                font-bold
                tracking-wider
                text-white
              "
            >
              {Math.floor(progress)}
              <span className="text-[#DC2F02]">
                %
              </span>
            </motion.div>

            {/* Progress Line */}

            <div
              className="
                mt-4
                h-[2px]
                w-40
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                className="
                  h-full
                  bg-[#DC2F02]
                  shadow-[0_0_12px_#DC2F02]
                "
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {/* Text */}

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="
                mt-3
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-gray-500
              "
            >
              Entering Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;