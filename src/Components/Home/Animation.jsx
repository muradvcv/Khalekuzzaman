'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Terminal,
  Cpu,
  Fingerprint,
  Database,
  Server,
  Activity,
  Zap,
  ScanLine,
  ShieldCheck,
  Network,
  Radio,
  Code2,
  CircleDot,
  Waves,
} from 'lucide-react';

const Animation = () => {
  // =====================================================
  // ORBIT DOTS
  // =====================================================

  const orbitDots = [
    { angle: 0, delay: 0 },
    { angle: 45, delay: 0.3 },
    { angle: 90, delay: 0.6 },
    { angle: 135, delay: 0.9 },
    { angle: 180, delay: 1.2 },
    { angle: 225, delay: 1.5 },
    { angle: 270, delay: 1.8 },
    { angle: 315, delay: 2.1 },
  ];

  // =====================================================
  // PARTICLES
  // =====================================================

  const particles = [
    { x: '12%', y: '18%', delay: 0 },
    { x: '84%', y: '16%', delay: 0.7 },
    { x: '8%', y: '62%', delay: 1.2 },
    { x: '90%', y: '67%', delay: 1.8 },
    { x: '20%', y: '82%', delay: 2.2 },
    { x: '78%', y: '84%', delay: 2.8 },
    { x: '50%', y: '8%', delay: 1.5 },
    { x: '50%', y: '92%', delay: 3 },
  ];

  return (
    <div className="w-full">
      {/* =====================================================
          MAIN ANIMATION
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative hidden h-[540px] items-center justify-center lg:flex"
      >
        {/* =====================================================
            BACKGROUND GRID
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Ambient Glow */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC2F02] blur-[120px]"
          />
        </div>

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="absolute left-0 top-0 flex items-center gap-2 text-[9px] uppercase tracking-[0.32em] text-gray-600">
          <Terminal
            size={12}
            className="text-[#DC2F02]"
          />

          <span>Portfolio Neural Interface</span>

          <span className="ml-2 h-1 w-1 animate-pulse rounded-full bg-[#DC2F02]" />
        </div>

        {/* =====================================================
            MAIN SYSTEM
        ====================================================== */}

        <div className="relative flex h-[390px] w-[390px] items-center justify-center">

          {/* =================================================
              OUTER TECH FRAME
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 rounded-full border border-white/[0.07]"
          >
            <span className="absolute left-1/2 top-[-2px] h-2 w-8 -translate-x-1/2 bg-[#DC2F02]" />

            <span className="absolute bottom-[-2px] left-1/2 h-2 w-8 -translate-x-1/2 bg-[#DC2F02]/40" />

            <span className="absolute left-[-2px] top-1/2 h-8 w-2 -translate-y-1/2 bg-[#DC2F02]/50" />

            <span className="absolute right-[-2px] top-1/2 h-8 w-2 -translate-y-1/2 bg-[#DC2F02]/50" />
          </motion.div>

          {/* =================================================
              OUTER DASH RING
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-[12px] rounded-full border border-dashed border-[#DC2F02]/20"
          />

          {/* =================================================
              SECOND ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-[30px] rounded-full border border-[#DC2F02]/20"
          >
            <motion.span
              animate={{
                boxShadow: [
                  '0 0 5px #DC2F02',
                  '0 0 20px #DC2F02',
                  '0 0 5px #DC2F02',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#DC2F02]"
            />
          </motion.div>

          {/* =================================================
              RADAR RING
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-[55px] rounded-full border border-[#DC2F02]/25"
          >
            <div className="absolute left-1/2 top-1/2 h-1/2 w-[1px] origin-bottom -translate-x-1/2 -translate-y-full bg-gradient-to-t from-transparent via-[#DC2F02] to-transparent shadow-[0_0_15px_#DC2F02]" />
          </motion.div>

          {/* =================================================
              INNER DASH RING
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.02, 1],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="absolute inset-[78px] rounded-full border border-dashed border-[#DC2F02]/40"
          />

          {/* =================================================
              PULSE WAVES
          ================================================= */}

          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{
                scale: 0.4,
                opacity: 0.45,
              }}
              animate={{
                scale: 1.45,
                opacity: 0,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item * 1.3,
                ease: 'easeOut',
              }}
              className="absolute h-[130px] w-[130px] rounded-full border border-[#DC2F02]/30"
            />
          ))}

          {/* =================================================
              ORBIT DOTS
          ================================================= */}

          {orbitDots.map((dot) => (
            <motion.span
              key={dot.angle}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                delay: dot.delay,
              }}
              style={{
                transform: `rotate(${dot.angle}deg) translateY(-195px)`,
              }}
              className="absolute flex h-2 w-2 items-center justify-center rounded-full"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC2F02] shadow-[0_0_14px_#DC2F02]" />
            </motion.span>
          ))}

          {/* =================================================
              PARTICLES
          ================================================= */}

          {particles.map((particle, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
              style={{
                left: particle.x,
                top: particle.y,
              }}
              className="absolute h-1 w-1 rounded-full bg-[#DC2F02]"
            />
          ))}

          {/* =================================================
              HORIZONTAL ENERGY LINE
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scaleX: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute h-[1px] w-[310px] bg-gradient-to-r from-transparent via-[#DC2F02]/60 to-transparent"
          />

          {/* =================================================
              VERTICAL ENERGY LINE
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scaleY: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute h-[310px] w-[1px] bg-gradient-to-b from-transparent via-[#DC2F02]/50 to-transparent"
          />

          {/* =================================================
              CENTER GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [0.8, 1.25, 0.8],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute h-[220px] w-[220px] rounded-full bg-[#DC2F02]/20 blur-[65px]"
          />

          {/* =====================================================
              CENTER CORE
          ===================================================== */}

          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(220,47,2,0.1)',
                '0 0 45px rgba(220,47,2,0.25)',
                '0 0 80px rgba(220,47,2,0.12)',
                '0 0 20px rgba(220,47,2,0.1)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-30 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-full border border-[#DC2F02]/50 bg-[#050505]"
          >
            {/* Inner Border */}

            <div className="absolute inset-[8px] rounded-full border border-white/[0.05]" />

            {/* Rotating Core Border */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full border border-transparent border-r-[#DC2F02]/30 border-t-[#DC2F02]"
            />

            {/* =================================================
                LOTTIE JSON
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="relative z-20 flex h-[105px] w-[105px] items-center justify-center"
            >
              <DotLottieReact
                src="/gif.json"
                loop
                autoplay
                className="h-full w-full"
              />
            </motion.div>

            {/* =================================================
                CORE SCAN LINE
            ================================================= */}

            <motion.div
              animate={{
                y: [-60, 60, -60],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="pointer-events-none absolute left-0 right-0 z-40 h-[1px] bg-gradient-to-r from-transparent via-[#DC2F02] to-transparent shadow-[0_0_10px_#DC2F02]"
            />
          </motion.div>

          {/* =================================================
              CPU NODE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-[-18px] top-[82px] flex h-11 w-11 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-black/70 text-[#DC2F02] shadow-[0_0_20px_rgba(220,47,2,0.08)] backdrop-blur-xl"
          >
            <Cpu size={17} />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#DC2F02] shadow-[0_0_8px_#DC2F02]" />
          </motion.div>

          {/* =================================================
              FINGERPRINT NODE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-[-18px] top-[95px] flex h-11 w-11 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-black/70 text-[#DC2F02] shadow-[0_0_20px_rgba(220,47,2,0.08)] backdrop-blur-xl"
          >
            <Fingerprint size={17} />

            <span className="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse rounded-full bg-green-500" />
          </motion.div>

          {/* =================================================
              DATABASE NODE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -9, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-[58px] left-[18px] flex h-11 w-11 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-black/70 text-[#DC2F02] backdrop-blur-xl"
          >
            <Database size={17} />
          </motion.div>

          {/* =================================================
              SERVER NODE
          ================================================= */}

          <motion.div
            animate={{
              y: [0, 9, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-[48px] right-[18px] flex h-11 w-11 items-center justify-center rounded-xl border border-[#DC2F02]/20 bg-black/70 text-[#DC2F02] backdrop-blur-xl"
          >
            <Server size={17} />
          </motion.div>

          {/* =================================================
              SIGNAL LABEL
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-[30px] top-[145px] flex items-center gap-1.5 text-[6px] uppercase tracking-widest text-gray-600"
          >
            <Radio
              size={9}
              className="text-[#DC2F02]"
            />

            SIGNAL ACTIVE
          </motion.div>

          {/* =================================================
              NETWORK LABEL
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute right-[25px] top-[155px] flex items-center gap-1.5 text-[6px] uppercase tracking-widest text-gray-600"
          >
            <Network
              size={9}
              className="text-[#DC2F02]"
            />

            NETWORK
          </motion.div>

          {/* =================================================
              DATA CODE
          ================================================= */}

          <div className="absolute bottom-[105px] left-[62px] flex items-center gap-1 text-[6px] text-gray-700">
            <Code2
              size={9}
              className="text-[#DC2F02]/70"
            />

            0x4F2A
          </div>

          {/* =================================================
              SECURE
          ================================================= */}

          <div className="absolute bottom-[95px] right-[55px] flex items-center gap-1 text-[6px] text-gray-700">
            <ShieldCheck
              size={9}
              className="text-green-500/70"
            />

            SECURE
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATUS
        ====================================================== */}

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-2 border-t border-white/5 pt-4">

          {/* STATUS */}

          <motion.div
            whileHover={{
              y: -3,
            }}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-green-500/20"
          >
            <div className="flex items-center gap-1.5">
              <Activity
                size={11}
                className="text-green-500"
              />

              <span className="text-[8px] tracking-wider text-gray-500">
                STATUS
              </span>

              <span className="ml-auto h-1 w-1 animate-pulse rounded-full bg-green-500" />
            </div>

            <p className="mt-1 text-[9px] tracking-wider text-green-500/80">
              OPERATIONAL
            </p>
          </motion.div>

          {/* SECURITY */}

          <motion.div
            whileHover={{
              y: -3,
            }}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-[#DC2F02]/30"
          >
            <div className="flex items-center gap-1.5">
              <Zap
                size={11}
                className="text-[#DC2F02]"
              />

              <span className="text-[8px] tracking-wider text-gray-500">
                SECURITY
              </span>

              <span className="ml-auto h-1 w-1 animate-pulse rounded-full bg-[#DC2F02]" />
            </div>

            <p className="mt-1 text-[9px] tracking-wider text-[#DC2F02]">
              ENCRYPTED
            </p>
          </motion.div>

          {/* ACCESS */}

          <motion.div
            whileHover={{
              y: -3,
            }}
            className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-[#DC2F02]/30"
          >
            <div className="flex items-center gap-1.5">
              <ScanLine
                size={11}
                className="text-[#DC2F02]"
              />

              <span className="text-[8px] tracking-wider text-gray-500">
                ACCESS
              </span>

              <CircleDot
                size={9}
                className="ml-auto text-[#DC2F02]"
              />
            </div>

            <p className="mt-1 text-[9px] tracking-wider text-gray-400">
              ADMIN ONLY
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DECORATION
        ====================================================== */}

        <motion.div
          animate={{
            width: ['20%', '40%', '20%'],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-12px] left-1/2 h-px -translate-x-1/2 bg-[#DC2F02]"
        />

        <Waves
          size={11}
          className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 text-[#DC2F02]/50"
        />
      </motion.div>
    </div>
  );
};

export default Animation;