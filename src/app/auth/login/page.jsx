'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Terminal,
  CircleCheck,
  Sparkles,
} from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-oswald tracking-wider">

      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

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

      {/* =========================================
          MAIN GLOW
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#DC2F02]/15
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.16, 0.06],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#DC2F02]/10
          blur-[110px]
        "
      />

      {/* =========================================
          BACK TO PORTFOLIO
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          absolute
          left-4
          top-4
          z-50
          md:left-7
          md:top-7
        "
      >
        <Link
          href="/"
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/[0.035]
            px-3.5
            py-2
            text-[11px]
            font-medium
            text-gray-400
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#DC2F02]/50
            hover:bg-[#DC2F02]/10
            hover:text-white
          "
        >
          <ArrowLeft
            size={14}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to Portfolio
        </Link>
      </motion.div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          py-14
          lg:px-8
          lg:py-10
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* ==================================================
              LEFT SIDE — FUTURISTIC PORTAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              hidden
              h-[450px]
              items-center
              justify-center
              lg:flex
            "
          >

            {/* Top Label */}

            <div
              className="
                absolute
                left-2
                top-2
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
            >
              <Terminal
                size={12}
                className="text-[#DC2F02]"
              />

              Portfolio Control Center
            </div>

            {/* =================================
                PORTAL
            ================================= */}

            <div
              className="
                relative
                flex
                h-[350px]
                w-[350px]
                items-center
                justify-center
              "
            >

              {/* Outer Ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-dashed
                  border-white/10
                "
              />

              {/* Orange Ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-[30px]
                  rounded-full
                  border
                  border-dashed
                  border-[#DC2F02]/30
                "
              />

              {/* Inner Ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  inset-[65px]
                  rounded-full
                  border
                  border-[#DC2F02]/20
                  border-t-[#DC2F02]
                "
              />

              {/* Orbit Dots */}

              {[0, 60, 120, 180, 240, 300].map(
                (angle, index) => (
                  <motion.span
                    key={index}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      transformOrigin: '175px 175px',
                      transform: `rotate(${angle}deg)`,
                    }}
                    className="
                      absolute
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#DC2F02]
                      shadow-[0_0_10px_#DC2F02]
                    "
                  />
                )
              )}

              {/* Core Glow */}

              <motion.div
                animate={{
                  scale: [0.85, 1.1, 0.85],
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  h-[200px]
                  w-[200px]
                  rounded-full
                  bg-[#DC2F02]/20
                  blur-[65px]
                "
              />

              {/* Core */}

              <motion.div
                animate={{
                  scale: [0.97, 1.03, 0.97],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  z-10
                  flex
                  h-[135px]
                  w-[135px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#DC2F02]/40
                  bg-[#070707]
                  shadow-[0_0_50px_rgba(220,47,2,0.18)]
                "
              >

                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    border
                    border-white/5
                  "
                />

                <div className="text-center">

                  <p className="text-3xl font-black">

                    <span className="text-[#DC2F02]">
                      KM
                    </span>

                    <span className="text-white">
                      .
                    </span>

                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[7px]
                      uppercase
                      tracking-[0.35em]
                      text-gray-600
                    "
                  >
                    Secure Portal
                  </p>

                </div>

              </motion.div>

            </div>

            {/* =================================
                LEFT BOTTOM INFO
            ================================= */}

            <div
              className="
                absolute
                bottom-2
                left-2
                right-2
                flex
                items-center
                justify-between
                border-t
                border-white/5
                pt-4
              "
            >

              <div>

                <p className="text-[11px] font-semibold text-gray-300">
                  Portfolio Administration
                </p>

                <p className="mt-1 text-[9px] text-gray-600">
                  Manage your digital workspace securely
                </p>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-green-500/10
                  bg-green-500/5
                  px-2.5
                  py-1
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-green-500
                  "
                />

                <span className="text-[8px] text-green-500/70">
                  Online
                </span>

              </div>

            </div>

          </motion.div>

          {/* ==================================================
              RIGHT SIDE — LOGIN
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto w-full max-w-md"
          >

            {/* Header */}

            <div className="mb-5">

              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#DC2F02]/20
                  bg-[#DC2F02]/5
                  px-2.5
                  py-1
                "
              >

                <Sparkles
                  size={11}
                  className="text-[#DC2F02]"
                />

                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-[#DC2F02]
                  "
                >
                  Admin Access
                </span>

              </div>

              <h1
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  md:text-3xl
                "
              >
                Welcome
                <span className="text-[#DC2F02]">
                  .
                </span>
              </h1>

              <p className="mt-1.5 text-xs text-gray-500">
                Continue to your portfolio control center.
              </p>

            </div>

            {/* =================================
                LOGIN CARD
            ================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                p-5
                shadow-2xl
                backdrop-blur-2xl
                md:p-6
              "
            >

              {/* Top Orange Line */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-2/3
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#DC2F02]
                  to-transparent
                "
              />

              {/* =================================
                  SECURITY BOX
              ================================= */}

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/5
                  bg-black/20
                  p-2.5
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#DC2F02]/10
                    text-[#DC2F02]
                  "
                >
                  <ShieldCheck size={17} />
                </div>

                <div className="flex-1">

                  <p className="text-[11px] font-semibold text-gray-200">
                    Secure Admin Access
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-600">
                    Authorized personnel only
                  </p>

                </div>

                <CircleCheck
                  size={15}
                  className="text-green-500/70"
                />

              </div>

              {/* =================================
                  FORM
              ================================= */}

              <form className="space-y-4">

                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      text-[10px]
                      font-medium
                      text-gray-400
                    "
                  >
                    Email Address
                  </label>

                  <div className="group relative">

                    <Mail
                      size={15}
                      className="
                        absolute
                        left-3.5
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-gray-600
                        transition
                        group-focus-within:text-[#DC2F02]
                      "
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      className="
                        h-11
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-black/25
                        pl-10
                        pr-4
                        text-xs
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-gray-700
                        hover:border-white/15
                        focus:border-[#DC2F02]/50
                        focus:bg-black/40
                        focus:ring-4
                        focus:ring-[#DC2F02]/5
                      "
                    />

                  </div>

                </div>

                {/* PASSWORD */}

                <div>

                  <div className="mb-1.5 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="
                        text-[10px]
                        font-medium
                        text-gray-400
                      "
                    >
                      Password
                    </label>

                    <Link href={'/auth/register'}
                      type="button"
                      className="
                        text-[9px]
                        text-[#DC2F02]
                        transition
                        hover:text-[#ef3b0a]
                      "
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <div className="group relative">

                    <Lock
                      size={15}
                      className="
                        absolute
                        left-3.5
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-gray-600
                        transition
                        group-focus-within:text-[#DC2F02]
                      "
                    />

                    <input
                      id="password"
                      type={
                        showPassword
                          ? 'text'
                          : 'password'
                      }
                      placeholder="••••••••"
                      className="
                        h-11
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-black/25
                        pl-10
                        pr-11
                        text-xs
                        text-white
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-gray-700
                        hover:border-white/15
                        focus:border-[#DC2F02]/50
                        focus:bg-black/40
                        focus:ring-4
                        focus:ring-[#DC2F02]/5
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
                      }
                      className="
                        absolute
                        right-3.5
                        top-1/2
                        -translate-y-1/2
                        text-gray-600
                        transition
                        hover:text-gray-300
                      "
                    >
                      {showPassword ? (
                        <EyeOff size={15} />
                      ) : (
                        <Eye size={15} />
                      )}
                    </button>

                  </div>

                </div>

                {/* REMEMBER */}

                <div className="flex items-center justify-between">

                  <label
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      text-[10px]
                      text-gray-500
                    "
                  >

                    <input
                      type="checkbox"
                      className="
                        h-3
                        w-3
                        cursor-pointer
                        accent-[#DC2F02]
                      "
                    />

                    Remember me

                  </label>

                  <span className="text-[8px] text-gray-700">
                    SSL Protected
                  </span>

                </div>

                {/* =================================
                    LOGIN BUTTON
                ================================= */}

                <motion.button
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="
                    group
                    relative
                    flex
                    h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-xl
                    bg-[#DC2F02]
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_0_25px_rgba(220,47,2,0.18)]
                    transition
                    hover:bg-[#ef3b0a]
                    hover:shadow-[0_0_35px_rgba(220,47,2,0.3)]
                  "
                >

                  {/* Button Shine */}

                  <motion.span
                    animate={{
                      x: ['-120%', '120%'],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-16
                      rotate-12
                      bg-white/10
                      blur-md
                    "
                  />

                  <span className="relative z-10">
                    Continue as Admin
                  </span>

                  <ArrowRight
                    size={15}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </motion.button>

              </form>

              {/* =================================
                  BOTTOM MESSAGE
              ================================= */}

              <div
                className="
                  mt-5
                  border-t
                  border-white/5
                  pt-4
                  text-center
                "
              >

                <p className="text-[8px] leading-4 text-gray-600">
                  This portal is intended for portfolio
                  administration only.
                  <br />
                  Please keep your credentials secure.
                </p>

              </div>

            </div>

            {/* COPYRIGHT */}

            <p
              className="
                mt-4
                text-center
                text-[8px]
                tracking-wide
                text-gray-700
              "
            >
              © {new Date().getFullYear()} Md. Khalekuzzaman

              <span className="mx-2 text-[#DC2F02]/40">
                •
              </span>

              Portfolio Admin
            </p>

          </motion.div>

        </div>

      </div>

    </main>
  );
};

export default Login;