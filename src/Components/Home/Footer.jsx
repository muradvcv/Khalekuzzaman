'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

import {
  MdEmail,
  MdArrowOutward,
  MdLocationOn,
  MdKeyboardArrowUp,
} from 'react-icons/md';

const Foooter = () => {
  const year = new Date().getFullYear();

  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ];

  const socials = [
    ['GitHub', 'https://github.com/muradvcv', FaGithub, 'text-white'],
    ['LinkedIn', 'https://linkedin.com/in/muradvcv', FaLinkedinIn, 'text-[#0A66C2]'],
    ['Facebook', 'https://facebook.com/', FaFacebookF, 'text-[#1877F2]'],
    ['Email', 'mailto:muradvcv@gmail.com', MdEmail, 'text-[#EA4335]'],
  ];

  const techs = [
    ['React', 'https://react.dev/', FaReact, 'text-[#61DAFB]'],
    ['Next.js', 'https://nextjs.org/', SiNextdotjs, 'text-white'],
    ['Node.js', 'https://nodejs.org/', FaNodeJs, 'text-[#339933]'],
    ['MongoDB', 'https://mongodb.com/', SiMongodb, 'text-[#47A248]'],
    ['TypeScript', 'https://typescriptlang.org/', SiTypescript, 'text-[#3178C6]'],
    ['Tailwind', 'https://tailwindcss.com/', SiTailwindcss, 'text-[#06B6D4]'],
  ];

  const reveal = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-1/2 top-[-180px] h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-orange-500 blur-[140px]"
        />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-orange-600/5 blur-[120px]" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-[120px]" />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-12 py-16 lg:grid-cols-[1.3fr_.7fr_1fr]"
        >

          {/* Brand */}
          <motion.div variants={reveal}>
            <Link href="#home" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={{ y: -5, rotate: -5, scale: 1.05 }}
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl border border-orange-500/20
                  bg-orange-500/10
                  shadow-[0_0_30px_rgba(249,115,22,.08)]
                "
              >
                <span className="font-black text-orange-500">MK</span>
              </motion.div>

              <div>
                <h2 className="text-xl font-black">
                  Md. Khalekuzzaman
                </h2>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[.28em] text-orange-500">
                  MERN Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-500">
              I build modern, responsive and scalable full-stack web
              applications with clean UI, powerful functionality and
              great user experience.
            </p>

            {/* Status */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-500/60" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-widest text-green-500">
                  Available for work
                </span>
              </div>

              <div className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-gray-500">
                Full Stack
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              {socials.map(([name, href, Icon, color]) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5, scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    target={name === 'Email' ? undefined : '_blank'}
                    rel={name === 'Email' ? undefined : 'noopener noreferrer'}
                    title={name}
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl border border-white/10
                      bg-white/[.03]
                      transition-all duration-300
                      hover:border-orange-500/30
                      hover:bg-orange-500/10
                    "
                  >
                    <Icon size={17} className={color} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={reveal}>
            <Title text="Navigation" />

            <ul className="space-y-4">
              {navItems.map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="
                      group flex w-fit items-center gap-2
                      text-sm text-gray-500
                      transition-all hover:translate-x-1 hover:text-white
                    "
                  >
                    <span className="h-px w-0 bg-orange-500 transition-all group-hover:w-5" />
                    {name}
                    <MdArrowOutward
                      size={14}
                      className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-orange-500"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={reveal}>
            <Title text="Let's Connect" />

            <p className="text-sm leading-6 text-gray-500">
              Have a project in mind or want to work together?
              Let&apos;s build something meaningful together.
            </p>

            {/* Contact */}
            <motion.div
              whileHover={{ y: -3 }}
              className="
                mt-6 rounded-2xl border border-white/10
                bg-white/[.025] p-4
                hover:border-orange-500/20
              "
            >
              <Link
                href="mailto:muradvcv@gmail.com"
                className="flex items-center gap-3"
              >
                <IconBox>
                  <MdEmail size={18} className="text-[#EA4335]" />
                </IconBox>

                <div className="min-w-0">
                  <p className="text-[8px] uppercase tracking-widest text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 truncate text-xs text-gray-300">
                    muradvcv@gmail.com
                  </p>
                </div>

                <MdArrowOutward className="ml-auto text-gray-600" />
              </Link>

              <div className="my-4 h-px bg-white/[.06]" />

              <div className="flex items-center gap-3">
                <IconBox>
                  <MdLocationOn size={18} className="text-orange-500" />
                </IconBox>

                <div>
                  <p className="text-[8px] uppercase tracking-widest text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Mymensingh, Bangladesh
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech */}
            <p className="mb-3 mt-7 text-[8px] font-bold uppercase tracking-widest text-gray-600">
              Core Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {techs.map(([name, href, Icon, color]) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5, scale: 1.12, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${name} official website`}
                    className="
                      flex h-9 w-9 items-center justify-center
                      rounded-lg border border-white/10
                      bg-white/[.03]
                      transition-all hover:border-orange-500/30
                      hover:bg-orange-500/10
                    "
                  >
                    <Icon size={16} className={color} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col items-center justify-between gap-5
            py-7 text-center sm:flex-row sm:text-left
          "
        >
          <p className="text-[11px] text-gray-600">
            © {year}{' '}
            <span className="text-gray-400">
              Md. Khalekuzzaman
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-gray-600">
            Built with

            <Link
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ rotate: 360 }}>
                <FaReact size={14} className="text-[#61DAFB]" />
              </motion.div>
            </Link>

            React <span className="text-gray-700">×</span>

            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <SiNextdotjs size={13} className="text-white" />
              </motion.div>
            </Link>

            Next.js
          </div>

          <Link
            href="#home"
            className="group flex items-center gap-2 text-[11px] text-gray-600 hover:text-orange-500"
          >
            Back to top

            <motion.span
              whileHover={{ y: -5, scale: 1.08 }}
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl border border-white/10
                bg-white/[.03]
                group-hover:border-orange-500/30
                group-hover:bg-orange-500/10
              "
            >
              <MdKeyboardArrowUp size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

/* ================= SMALL COMPONENTS ================= */

const Title = ({ text }) => (
  <div className="mb-6 flex items-center gap-3">
    <span className="h-px w-7 bg-orange-500" />
    <p className="text-[9px] font-bold uppercase tracking-[.25em] text-orange-500">
      {text}
    </p>
  </div>
);

const IconBox = ({ children }) => (
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.03]">
    {children}
  </div>
);

export default Foooter;