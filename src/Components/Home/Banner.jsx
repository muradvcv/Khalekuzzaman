'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import {
  ArrowRight,
  Download,
  Mail,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const socials = [
  {
    icon: FaGithub,
    link: 'https://github.com/muradvcv',
  },
  {
    icon: CiLinkedin,
    link: 'https://www.linkedin.com/in/muradvcv/',
  },
];

/* =========================
   TYPEWRITER ROLES
========================= */

const roles = [
  'MERN Stack Developer',
  'Full Stack Developer',
  'React Developer',
  'Next.js Developer',
];

const TypewriterRole = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentRole) {
      typingSpeed = 1800;
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentRole) {
          setIsDeleting(true);
        } else {
          setText(currentRole.slice(0, text.length + 1));
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center text-[#DC2F02]">
      {text}

      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#DC2F02]" />
    </span>
  );
};

/* =========================
   BANNER
========================= */

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(220,47,2,0.12),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8">

        <div className="grid min-h-[520px] items-center lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10"
          >

            <p className="mb-3 text-base font-medium text-[#DC2F02]">
              Hi, I&apos;m
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-to-r from-[#F5F5F5] via-[#D9D9D9] to-[#DC2F02] bg-clip-text font-black-ops tracking-wider text-transparent">
                Md. Khalekuzzaman
              </span>
            </h1>

            <h2 className="mt-3 flex min-h-[32px] flex-wrap items-center gap-1 text-lg text-gray-300 font-breeserif">
              <span>Junior Full Stack /</span>

              <TypewriterRole />
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
              I build modern, responsive and scalable web applications using
              MongoDB, Express.js, React, Node.js and Next.js.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded
                  bg-[#DC2F02]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  transition
                  hover:bg-[#ef3b0a]
                  hover:shadow-[0_0_25px_rgba(220,47,2,0.3)]
                "
              >
                View My Work

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2
                  rounded
                  border
                  border-[#DC2F02]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-gray-200
                  transition
                  hover:bg-[#DC2F02]
                  hover:text-white
                "
              >
                <Download size={16} />
                Download CV
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">

              {socials.map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded
                    border
                    border-white/10
                    bg-white/5
                    text-gray-300
                    transition
                    hover:-translate-y-1
                    hover:border-[#DC2F02]
                    hover:text-[#DC2F02]
                  "
                >
                  <Icon size={20} />
                </a>
              ))}

              <a
                href="mailto:your@email.com"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded
                  border
                  border-white/10
                  bg-white/5
                  text-gray-300
                  transition
                  hover:-translate-y-1
                  hover:border-[#DC2F02]
                  hover:text-[#DC2F02]
                "
              >
                <Mail size={18} />
              </a>

            </div>

          </motion.div>


          {/* ================= DESKTOP PROFILE ================= */}

          <div className="relative hidden h-[520px] overflow-hidden lg:block">

            {/* =================================
                OUTER WHITE DOTS
            ================================= */}

            <motion.svg
              viewBox="0 0 540 540"
              className="
                absolute
                left-1/2
                top-1/2
                z-0
                h-[540px]
                w-[540px]
                -translate-x-1/2
                -translate-y-1/2
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="270"
                cy="270"
                r="258"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeDasharray="2 22"
                strokeLinecap="round"
                opacity="0.30"
              />
            </motion.svg>


            {/* =================================
                RED DOT CIRCLE
                IMAGE WILL STAY INSIDE THIS
            ================================= */}

            <motion.svg
              viewBox="0 0 480 480"
              className="
                absolute
                left-1/2
                top-1/2
                z-[1]
                h-[480px]
                w-[480px]
                -translate-x-1/2
                -translate-y-1/2
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="240"
                cy="240"
                r="228"
                fill="none"
                stroke="#DC2F02"
                strokeWidth="5"
                strokeDasharray="2 20"
                strokeLinecap="round"
                opacity="0.55"
              />
            </motion.svg>


            {/* =================================
                INNER RED DOT CIRCLE
            ================================= */}

            <motion.svg
              viewBox="0 0 440 440"
              className="
                absolute
                left-1/2
                top-1/2
                z-[2]
                h-[440px]
                w-[440px]
                -translate-x-1/2
                -translate-y-1/2
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="220"
                cy="220"
                r="208"
                fill="none"
                stroke="#DC2F02"
                strokeWidth="3"
                strokeDasharray="2 18"
                strokeLinecap="round"
                opacity="0.28"
              />
            </motion.svg>


            {/* =================================
                CENTER CIRCLE
            ================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-[3]
                h-[390px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/10
              "
            />


            {/* =================================
                RED GLOW
            ================================= */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                left-1/2
                top-[55%]
                z-[2]
                h-[230px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#DC2F02]/45
                blur-[90px]
              "
            />


            {/* =================================
                BOTTOM RED SHAPE
            ================================= */}

            <div
              className="
                absolute
                -bottom-24
                right-[-70px]
                z-[1]
                h-[260px]
                w-[320px]
                rounded-tl-[220px]
                bg-[#DC2F02]/60
              "
            />


            {/* =================================
                PROFILE IMAGE
                STRICTLY INSIDE RED DOT CIRCLE
            ================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-[10]
                h-[400px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-full
              "
            >

              <Image
                src="/profile.png"
                alt="Md. Khalekuzzaman Murad"
                width={700}
                height={800}
                priority
                className="
                  absolute
                  bottom-[-2px]
                  left-1/2
                  h-[405px]
                  w-auto
                  max-w-none
                  -translate-x-1/2
                  object-contain
                  object-bottom
                "
              />

            </motion.div>

          </div>


          {/* ================= MOBILE PROFILE ================= */}

          <div className="relative mt-8 flex h-[400px] justify-center overflow-hidden lg:hidden">

            {/* Mobile Outer Dots */}
            <motion.svg
              viewBox="0 0 370 370"
              className="
                absolute
                bottom-0
                z-0
                h-[370px]
                w-[370px]
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="185"
                cy="185"
                r="175"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4"
                strokeDasharray="2 20"
                strokeLinecap="round"
                opacity="0.3"
              />
            </motion.svg>


            {/* Mobile Red Dots */}
            <motion.svg
              viewBox="0 0 340 340"
              className="
                absolute
                bottom-[15px]
                z-[1]
                h-[340px]
                w-[340px]
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="170"
                cy="170"
                r="160"
                fill="none"
                stroke="#DC2F02"
                strokeWidth="4"
                strokeDasharray="2 18"
                strokeLinecap="round"
                opacity="0.45"
              />
            </motion.svg>


            {/* Mobile Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                bottom-10
                z-[2]
                h-[200px]
                w-[250px]
                rounded-full
                bg-[#DC2F02]/40
                blur-[80px]
              "
            />


            {/* Mobile Image
                Red dotted circle-এর ভিতরে */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                bottom-[10px]
                z-[10]
                h-[320px]
                w-[320px]
                overflow-hidden
                rounded-full
              "
            >

              <Image
                src="/profile.png"
                alt="Md. Khalekuzzaman Murad"
                width={500}
                height={600}
                priority
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[325px]
                  w-auto
                  max-w-none
                  -translate-x-1/2
                  object-contain
                  object-bottom
                "
              />

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;