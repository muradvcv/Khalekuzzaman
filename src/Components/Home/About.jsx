'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  Map,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    value: '40+',
    label: 'Projects Built',
  },
  {
    value: '8+',
    label: 'Technologies',
  },
  {
    value: '100%',
    label: 'Learning Mindset',
  },
];

const technologies = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] py-16 text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[8%] h-[400px] w-[400px] rounded-full bg-[#DC2F02]/10 blur-[130px]" />

        <div className="absolute bottom-[5%] right-[-180px] h-[400px] w-[400px] rounded-full bg-[#DC2F02]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#DC2F02] sm:w-12" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#DC2F02] sm:tracking-[0.35em]">
              About Me
            </span>

            <span className="h-px w-10 bg-[#DC2F02] sm:w-12" />
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
            Building My Journey Into{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-[#DC2F02] bg-clip-text text-transparent">
              Full Stack Development
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            I&apos;m a Computer Technology student and Full Stack Developer
            focused on creating modern, responsive and scalable web
            applications.
          </p>
        </motion.div>

        {/* ================= TOP GRID ================= */}

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= CODE CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="absolute -inset-1 rounded-[28px] bg-[#DC2F02]/10 blur-2xl" />

            <div
              className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[28px] border border-[#DC2F02]/20 bg-[#0d1210] shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            >
              {/* Terminal Header */}

              <div
                className="flex items-center justify-between border-b border-white/10 bg-[#111713] px-4 py-3 sm:px-5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex shrink-0 gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>

                  <span className="ml-1 truncate font-mono text-[10px] text-gray-400 sm:ml-2 sm:text-xs">
                    developer_profile.tsx
                  </span>
                </div>

                <div className="ml-3 flex shrink-0 items-center gap-2 rounded-full bg-green-400/10 px-2.5 py-1 text-[9px] text-green-400 sm:px-3 sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                  Available
                </div>
              </div>

              {/* Code Area */}

              <div className="relative flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#DC2F02]/30 to-transparent" />

                <div className="font-mono text-[11px] leading-6 sm:text-xs sm:leading-7 md:text-sm">
                  <p className="text-gray-400">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-white">developer</span>{' '}
                    <span className="text-gray-400">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">name:</span>{' '}
                    <span className="text-yellow-300">
                      &quot;Md. Khalekuzzaman&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">role:</span>{' '}
                    <span className="text-purple-700">
                      &quot;Full Stack Developer&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">company:</span>{' '}
                    <span className="text-yellow-400">
                      &quot;BD calling&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">education:</span>{' '}
                    <span className="text-pink-700">
                      &quot;Computer Technology&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">institute:</span>{' '}
                    <span className="text-yellow-300">
                      &quot;Mymensingh Polytechnic Institute&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">location:</span>{' '}
                    <span className="text-teal-600">
                      &quot;Banasree, Dhaka, Bangladesh&quot;
                    </span>
                    ,
                  </p>

                  <p className="pl-4 sm:pl-5">
                    <span className="text-cyan-400">available:</span>{' '}
                    <span className="text-purple-400">true</span>,
                  </p>

                  <p className="text-white">{'};'}</p>

                  <div className="mt-3 h-5 w-2 animate-pulse bg-[#DC2F02]" />
                </div>

                {/* Bottom Info */}

                <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DC2F02]/10">
                        <Code2
                          size={18}
                          className="text-[#DC2F02]"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-500">
                          Current Role
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DC2F02]/10">
                        <Terminal
                          size={18}
                          className="text-[#DC2F02]"
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">
                          Working At
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                          BD calling
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex h-full flex-col justify-center"
          >
            <div className="mb-4 flex items-center gap-3">
              <Sparkles
                size={20}
                className="shrink-0 text-[#DC2F02]"
              />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Who I Am
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-sm leading-7 text-gray-400 md:text-base">
              I&apos;m currently studying{' '}
              <span className="font-semibold text-white">
                Computer Technology
              </span>{' '}
              at{' '}
              <Link target='_blank' href={'https://mpi.polytech.gov.bd'} className="font-semibold text-[#DC2F02]">
                Mymensingh Polytechnic Institute
              </Link>
              . Alongside my studies, I&apos;m gaining real-world experience
              as a{' '}
              <span className="font-semibold text-white">
                Full Stack Developer
              </span>{' '}
              at{' '}
              <span className="font-semibold text-[#DC2F02]">
                BD Calling
              </span>
              .
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-400 md:text-base">
              My main focus is building modern, scalable web applications
              using the{' '}
              <span className="font-semibold text-white">
                MERN Stack
              </span>
              , React, Next.js, Node.js and MongoDB. I&apos;m continuously
              improving my development skills through real-world projects
              and professional experience.
            </p>

            {/* ================= STATS ================= */}

            <Link target="_blank" href={'https://github.com/muradvcv'}>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center transition hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/5 sm:p-4"
                  >
                    <h4 className="text-lg font-black text-[#DC2F02] sm:text-xl md:text-2xl">
                      {stat.value}
                    </h4>

                    <p className="mt-1 text-[9px] text-gray-500 sm:text-[10px] md:text-xs">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              </Link>

            {/* ================= TECHNOLOGIES ================= */}

            <div className="mt-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                  Technologies
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -3 }}
                    className="rounded-lg border border-white/10 bg-[#111512] px-3 py-2 text-xs text-gray-300 transition hover:border-[#DC2F02]/50 hover:bg-[#DC2F02]/10 hover:text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= LOCATION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          {/* ================= LOCATION TITLE ================= */}

          <div className="mb-4 flex items-center gap-3">
            <MapPin
              size={20}
              className="shrink-0 text-[#DC2F02]"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              My Location
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* ================= LOCATION CARD ================= */}

          <div
            className="grid min-h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1210] shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[0.75fr_1.25fr]"
          >
            {/* ================= LOCATION INFO ================= */}

            <div
              className="relative flex flex-col justify-center p-5 sm:p-6 md:p-7"
            >
              {/* Left Accent Line */}

              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#DC2F02] to-transparent" />

              {/* Map Icon */}

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#DC2F02]/30 bg-[#DC2F02]/10">
                <Map
                  size={24}
                  className="text-[#DC2F02]"
                />
              </div>

              {/* Based In */}

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DC2F02]">
                Based In
              </p>

              <h3 className="mt-1 text-2xl font-black sm:text-3xl">
                Banasree
              </h3>

              <p className="mt-1 text-base text-gray-300 sm:text-lg">
                Dhaka, Bangladesh
              </p>

              {/* Description */}

              <p className="mt-2 max-w-md text-xs leading-5 text-gray-500 sm:text-sm">
                I&apos;m currently based in Banasree, Dhaka and working as a
                Full Stack Developer Intern at Running DB while continuing my
                studies in Computer Technology.
              </p>

              {/* ================= CURRENTLY WORKING ================= */}

              <div className="mt-3 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                {/* Status Dot */}

                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-white">
                    Currently Working
                  </p>

                  <p className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px] text-gray-500">
                    <span>
                      Full Stack Developer Intern at
                    </span>

                    <Link
                      href="https://bdcalling.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 rounded-md border border-[#DC2F02]/50 bg-[#DC2F02]/10 px-2 py-0.5 font-bold text-[#ff5a2f] shadow-[0_0_10px_rgba(220,47,2,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DC2F02] hover:bg-[#DC2F02]/20 hover:text-white hover:shadow-[0_0_16px_rgba(220,47,2,0.3)]"
                    >
                      <span>
                        BD Calling
                      </span>

                      <ExternalLink
                        size={10}
                        strokeWidth={2.5}
                        className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </p>
                </div>
              </div>

              {/* ================= GOOGLE MAP BUTTON ================= */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Banasree%2C%20Dhaka%2C%20Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-[#DC2F02]/40 bg-[#DC2F02]/10 px-3.5 py-2 text-xs font-semibold transition duration-300 hover:border-[#DC2F02] hover:bg-[#DC2F02] hover:shadow-[0_0_20px_rgba(220,47,2,0.2)]"
              >
                Open in Google Maps

                <ExternalLink
                  size={13}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* ================= GOOGLE MAP ================= */}

            <div
              className="relative min-h-[260px] border-t border-white/10 lg:min-h-[300px] lg:border-l lg:border-t-0"
            >
              <iframe
                title="Banasree Dhaka Map"
                src="https://www.google.com/maps?q=Banasree%2C%20Dhaka%2C%20Bangladesh&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[0.25] opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Overlay */}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a100d]/30 via-transparent to-transparent"
              />

              {/* ================= MAP LABEL ================= */}

              <div
                className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#0a100d]/90 px-3 py-2.5 shadow-xl backdrop-blur-md"
              >
                <MapPin
                  size={16}
                  className="text-[#DC2F02]"
                />

                <div>
                  <p className="text-[11px] font-semibold text-white">
                    Banasree, Dhaka
                  </p>

                  <p className="text-[9px] text-gray-500">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#DC2F02] px-6 py-3 text-sm font-semibold shadow-[0_0_30px_rgba(220,47,2,0.15)] transition hover:bg-[#ef3b0a] hover:shadow-[0_0_40px_rgba(220,47,2,0.3)]"
          >
            Let&apos;s Work Together

            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* ================= BOTTOM LINE ================= */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-14 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-[#DC2F02]/40 to-transparent"
        />
      </div>
    </section>
  );
};

export default About;