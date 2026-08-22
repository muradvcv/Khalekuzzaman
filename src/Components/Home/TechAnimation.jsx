'use client';

import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

const nodes = [
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    x: 110,
    y: 275,
    color: '#47A248',
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
    x: 165,
    y: 145,
    color: '#ffffff',
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    x: 295,
    y: 90,
    color: '#38BDF8',
  },
  {
    name: 'Node.js',
    Icon: SiNodedotjs,
    x: 425,
    y: 145,
    color: '#5FA04E',
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    x: 490,
    y: 275,
    color: '#ffffff',
  },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    x: 425,
    y: 405,
    color: '#F7DF1E',
  },
  {
    name: 'React',
    Icon: SiReact,
    x: 300,
    y: 455,
    color: '#61DAFB',
  },
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    x: 175,
    y: 405,
    color: '#3178C6',
  },
];

const particles = [
  { x: 70, y: 100, size: 3 },
  { x: 95, y: 390, size: 5 },
  { x: 160, y: 470, size: 3 },
  { x: 250, y: 40, size: 4 },
  { x: 340, y: 65, size: 3 },
  { x: 505, y: 100, size: 5 },
  { x: 535, y: 280, size: 3 },
  { x: 475, y: 470, size: 4 },
  { x: 390, y: 505, size: 3 },
  { x: 65, y: 250, size: 4 },
];

const TechAnimation = () => {
  return (
    <div className="relative mx-auto flex h-[500px] w-full max-w-[600px] items-center justify-center overflow-hidden sm:h-[550px]">
      {/* SVG Background */}
      <motion.svg
        viewBox="0 0 600 550"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Glow */}
          <filter id="techGlow">
            <feGaussianBlur
              stdDeviation="5"
              result="coloredBlur"
            />

            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center Gradient */}
          <radialGradient id="centerGradient">
            <stop
              offset="0%"
              stopColor="#DC2F02"
              stopOpacity="0.45"
            />

            <stop
              offset="50%"
              stopColor="#DC2F02"
              stopOpacity="0.12"
            />

            <stop
              offset="100%"
              stopColor="#DC2F02"
              stopOpacity="0"
            />
          </radialGradient>

          {/* Line Gradient */}
          <linearGradient
            id="lineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#DC2F02"
              stopOpacity="0.1"
            />

            <stop
              offset="50%"
              stopColor="#DC2F02"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#DC2F02"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>

        {/* Main Red Glow */}
        <motion.circle
          cx="300"
          cy="275"
          r="170"
          fill="url(#centerGradient)"
          animate={{
            r: [150, 180, 150],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Outer Dotted Circle */}
        <motion.circle
          cx="300"
          cy="275"
          r="225"
          fill="none"
          stroke="#DC2F02"
          strokeWidth="1.5"
          strokeDasharray="4 12"
          opacity="0.45"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: '300px 275px',
          }}
        />

        {/* Inner Circle */}
        <motion.circle
          cx="300"
          cy="275"
          r="170"
          fill="none"
          stroke="#DC2F02"
          strokeWidth="1"
          strokeDasharray="3 8"
          opacity="0.2"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformOrigin: '300px 275px',
          }}
        />

        {/* Decorative Technology Network */}
        <motion.g
          animate={{
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            transformOrigin: '300px 275px',
          }}
        >
          {/* Main Network */}
          <motion.path
            d="
              M105 275
              L145 145
              L275 90
              L425 145
              L490 275
              L425 405
              L300 455
              L175 405
              Z
            "
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="10 10"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* MongoDB → Center → Express */}
          <path
            d="M105 275 L300 275 L145 145"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.35"
          />

          {/* Express → Center → Tailwind */}
          <path
            d="M145 145 L300 275 L275 90"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Tailwind → Center → Node */}
          <path
            d="M275 90 L300 275 L425 145"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Node → Center → Next */}
          <path
            d="M425 145 L300 275 L490 275"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Next → Center → JavaScript */}
          <path
            d="M490 275 L300 275 L425 405"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* JavaScript → Center → React */}
          <path
            d="M425 405 L300 275 L300 455"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* React → Center → TypeScript */}
          <path
            d="M300 455 L300 275 L175 405"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* TypeScript → Center → MongoDB */}
          <path
            d="M175 405 L300 275 L105 275"
            fill="none"
            stroke="#DC2F02"
            strokeWidth="1"
            opacity="0.3"
          />
        </motion.g>

        {/* Center Circle */}
        <motion.circle
          cx="300"
          cy="275"
          r="72"
          fill="#080808"
          stroke="#DC2F02"
          strokeWidth="1.5"
          filter="url(#techGlow)"
          animate={{
            r: [68, 74, 68],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Center Rings */}
        <circle
          cx="300"
          cy="275"
          r="55"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.08"
        />

        <circle
          cx="300"
          cy="275"
          r="90"
          fill="none"
          stroke="#DC2F02"
          strokeOpacity="0.15"
        />

        {/* Particles */}
        {particles.map((particle, index) => (
          <motion.circle
            key={index}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="#DC2F02"
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2 + (index % 3),
              delay: index * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.svg>

      {/* Center MERN */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute z-20
          flex h-28 w-28
          items-center justify-center
          rounded-full
          border border-[#DC2F02]/50
          bg-[#080808]/90
          shadow-[0_0_50px_rgba(220,47,2,0.25)]
          backdrop-blur-md
        "
      >
        <span className="bg-gradient-to-br from-white to-[#DC2F02] bg-clip-text text-3xl font-black tracking-wider text-transparent">
        MERN
        </span>
      </motion.div>

      {/* Floating Technology Nodes */}
      {nodes.map(({ Icon, x, y, color, name }, index) => (
        <motion.div
          key={name}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: {
              duration: 0.5,
              delay: index * 0.1,
            },
            scale: {
              duration: 0.5,
              delay: index * 0.1,
            },
            y: {
              duration: 3 + index * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            },
          }}
          whileHover={{
            scale: 1.18,
          }}
          style={{
            left: `${(x / 600) * 100}%`,
            top: `${(y / 550) * 100}%`,
          }}
          className="
            group
            absolute z-30
            flex h-14 w-14
            -translate-x-1/2
            -translate-y-1/2
            cursor-pointer
            items-center justify-center
            rounded-2xl
            border border-white/10
            bg-[#111]/90
            shadow-[0_0_25px_rgba(220,47,2,0.12)]
            backdrop-blur-md
            transition-colors
            hover:border-[#DC2F02]/70
            hover:bg-[#DC2F02]/10
            sm:h-16
            sm:w-16
          "
        >
          <Icon
            className="h-6 w-6 sm:h-8 sm:w-8"
            style={{ color }}
          />

          {/* Tooltip */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-9
              left-1/2
              z-50
              -translate-x-1/2
              whitespace-nowrap
              rounded-md
              border border-white/10
              bg-[#111]
              px-2
              py-1
              text-[10px]
              text-gray-300
              opacity-0
              shadow-lg
              transition-opacity
              duration-200
              group-hover:opacity-100
            "
          >
            {name}
          </div>
        </motion.div>
      ))}

      {/* Online Badge */}
      <motion.div
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          right-[7%]
          top-[7%]
          z-40
          flex
          items-center
          gap-2
          rounded-full
          border border-green-400/30
          bg-green-400/10
          px-3
          py-1.5
          text-xs
          font-medium
          text-green-400
          backdrop-blur-md
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
        </span>

        Available
      </motion.div>
    </div>
  );
};

export default TechAnimation;