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
} from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =========================
          BACKGROUND
      ========================= */}

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

      {/* Orange Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#DC2F02]/20
          blur-[130px]
        "
      />

      {/* Small Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#DC2F02]/10
          blur-[100px]
        "
      />

      {/* =========================
          BACK BUTTON
      ========================= */}

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
          left-5
          top-5
          z-20
          md:left-8
          md:top-8
        "
      >
        <Link
          href="/"
          className="
            group
            flex
            items-center
            gap-2
            rounded
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2.5
            text-xs
            font-medium
            text-gray-400
            backdrop-blur-md
            transition
            hover:border-[#DC2F02]/50
            hover:bg-[#DC2F02]/10
            hover:text-white
          "
        >
          <ArrowLeft
            size={15}
            className="transition group-hover:-translate-x-1"
          />

          Back to Portfolio
        </Link>
      </motion.div>

      {/* =========================
          LOGIN WRAPPER
      ========================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-20
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-md
          "
        >

          {/* =========================
              LOGO
          ========================= */}

          <div className="mb-7 text-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-[#DC2F02]/40
                bg-[#DC2F02]/10
                shadow-[0_0_35px_rgba(220,47,2,0.15)]
              "
            >
              <span className="text-xl font-black">
                <span className="text-[#DC2F02]">
                  KM
                </span>
                .
              </span>
            </motion.div>

            <h1 className="mt-5 text-2xl font-bold tracking-tight">
              Admin Portal
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Continue as an administrator
            </p>

          </div>

          {/* =========================
              LOGIN CARD
          ========================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.035]
              p-6
              shadow-2xl
              backdrop-blur-xl
              md:p-8
            "
          >

            {/* Top Orange Line */}

            <div
              className="
                absolute
                left-1/2
                top-0
                h-[1px]
                w-1/2
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#DC2F02]
                to-transparent
              "
            />

            {/* Security Badge */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[#DC2F02]/15
                bg-[#DC2F02]/5
                px-4
                py-3
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
                <ShieldCheck size={18} />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-200">
                  Secure Admin Access
                </p>

                <p className="mt-0.5 text-[10px] text-gray-500">
                  Authorized personnel only
                </p>
              </div>
            </div>

            {/* =========================
                FORM
            ========================= */}

            <form className="space-y-5">

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    text-gray-400
                  "
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-600
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/30
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#DC2F02]/60
                      focus:bg-black/50
                      focus:ring-1
                      focus:ring-[#DC2F02]/20
                    "
                  />

                </div>
              </div>

              {/* Password */}

              <div>
                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="
                      text-xs
                      font-medium
                      text-gray-400
                    "
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="
                      text-[11px]
                      text-[#DC2F02]
                      transition
                      hover:text-[#ef3b0a]
                    "
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={17}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-600
                    "
                  />

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/30
                      pl-11
                      pr-12
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#DC2F02]/60
                      focus:bg-black/50
                      focus:ring-1
                      focus:ring-[#DC2F02]/20
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-600
                      transition
                      hover:text-gray-300
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>
              </div>

              {/* Remember */}

              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-xs
                  text-gray-500
                "
              >
                <input
                  type="checkbox"
                  className="
                    h-3.5
                    w-3.5
                    accent-[#DC2F02]
                  "
                />

                Remember me
              </label>

              {/* Login Button */}

              <motion.button
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="
                  group
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#DC2F02]
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_0_25px_rgba(220,47,2,0.18)]
                  transition
                  hover:bg-[#ef3b0a]
                  hover:shadow-[0_0_35px_rgba(220,47,2,0.3)]
                "
              >
                Continue as Admin

                <ArrowRight
                  size={17}
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

            </form>

            {/* =========================
                FOOTER TEXT
            ========================= */}

            <div className="mt-6 text-center">

              <p className="text-[10px] leading-5 text-gray-600">
                This portal is intended for portfolio
                administration only.
              </p>

            </div>

          </div>

          {/* Bottom */}

          <p className="mt-5 text-center text-[10px] text-gray-700">
            © {new Date().getFullYear()} Md. Khalekuzzaman
          </p>

        </motion.div>

      </div>

    </main>
  );
};

export default Login;