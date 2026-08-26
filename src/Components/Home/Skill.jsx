'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wrench, Sparkles } from 'lucide-react';
import TechAnimation from './TechAnimation';

const topSkills = [
  {
    title: 'Frontend',
    subtitle: 'Modern UI Development',
    description:
      'Building responsive and interactive user interfaces with modern frontend technologies.',
    image: '/frontent.png',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'DaisyUI',
      'HeroUI',
      'Framer Motion',
      'Redux',
      'React Hook Form',
      'Vite',
      'Responsive Design',
      'REST API',
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Server & API Development',
    description:
      'Creating secure APIs, authentication systems and scalable server-side applications.',
    image: '/backend.png',
    skills: [
      'Node.js',
      'Express.js',
      'REST API',
      'JWT',
      'Better Auth',
      'Authentication',
      'Authorization',
      'CRUD',
      'Middleware',
      'API Development',
      'MVC',
      'Validation',
      'Security',
      'CORS',
      'API Integration',
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data Management',
    description:
      'Designing and managing reliable databases for modern full-stack applications.',
    image: '/database.png',
    skills: [
      'MongoDB',
      'MongoDB Atlas',
      'PostgreSQL',
      'Prisma',
      'Mongoose',
      'SQL',
      'NoSQL',
      'Database Design',
      'Schema Design',
      'Data Modeling',
      'CRUD Operations',
      'Aggregation',
      'Indexing',
      'Relationships',
      'Query Optimization',
    ],
  },
];

const tools = [
  'Git',
  'GitHub',
  'VS Code',
  'Postman',
  'Figma',
  'Chrome DevTools',
  'Vercel',
  'Netlify',
  'Surge',
  'NPM',
  'Yarn',
  'Linux',
  'Firebase',
  'Cloudinary',
  'Google Fonts',
  'Font Awesome',
  'React Toastify',
  'React Tabs',
  'React Spinners',
  'Date-Fns',
];

const SkillCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="group relative h-full"
    >
      {/* Outer Glow */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-[25px] bg-gradient-to-br from-orange-500/30 via-transparent to-orange-700/20 opacity-0 blur-sm transition duration-700 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative h-full overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30 group-hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent opacity-60" />

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-orange-600/10 blur-[80px] transition duration-700 group-hover:bg-orange-600/20" />

        <div className="pointer-events-none absolute -bottom-28 -left-20 h-48 w-48 rounded-full bg-orange-700/[0.05] blur-[80px]" />

        {/* ================= HEADER ================= */}
        <div className="relative h-[125px] overflow-hidden">

          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:25px_25px]" />

          {/* Header Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.05] via-transparent to-[#0b0d0c]" />

          {/* Image Glow */}
          <div className="absolute left-4 top-5 h-20 w-20 rounded-2xl bg-orange-500/10 blur-2xl transition duration-500 group-hover:bg-orange-500/20" />

          {/* Image Box */}
          <motion.div
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          >
            <div className="absolute inset-[1px] rounded-2xl border border-orange-500/0 transition duration-500 group-hover:border-orange-500/30" />

            <Image
              src={item.image}
              alt={`${item.title} icon`}
              width={56}
              height={56}
              className="relative h-10 w-10 object-contain transition duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Number */}
          <div className="absolute right-5 top-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)]" />

            <span className="text-[10px] font-bold tracking-[0.25em] text-white/25">
              0{index + 1}
            </span>
          </div>

          {/* Corner Decoration */}
          <div className="absolute bottom-4 right-5 h-8 w-8 rounded-full border border-orange-500/10" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative px-5 pb-6 sm:px-6">

          {/* Title */}
          <div className="flex items-start justify-between gap-4">

            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[1px] w-5 bg-orange-500" />

                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500">
                  {item.subtitle}
                </p>
              </div>

              <h3 className="text-[27px] font-black tracking-tight text-white">
                {item.title}
              </h3>
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] shadow-inner transition duration-300 group-hover:border-orange-500/30 group-hover:bg-orange-500/10"
            >
              <ArrowUpRight
                size={18}
                className="text-gray-500 transition duration-300 group-hover:text-orange-500"
              />
            </motion.div>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-[95%] text-[11px] leading-6 text-gray-500">
            {item.description}
          </p>

          {/* Divider */}
          <div className="relative my-5 h-px bg-white/[0.07]">
            <div className="absolute left-0 top-0 h-px w-16 bg-orange-500/50" />
          </div>

          {/* Skills Header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles
                size={12}
                className="text-orange-500"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-500">
                Technologies
              </span>
            </div>

            <span className="text-[9px] text-gray-700">
              {item.skills.length} Skills
            </span>
          </div>

          {/* Skills */}
          <div className="flex max-h-[135px] flex-wrap content-start gap-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500/20">
            {item.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05 + skillIndex * 0.015,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                className="cursor-default rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[9px] font-medium text-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-white hover:shadow-[0_5px_18px_rgba(234,88,12,0.1)]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-2/3 -translate-x-1/2 bg-orange-500/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070707] py-24 text-white sm:py-28"
    >

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.03] blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-600" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              My Expertise
            </span>

            <span className="h-px w-10 bg-orange-600" />
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Skills{' '}
            <span className="text-white">&</span>{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-orange-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, responsive and
            scalable full-stack web applications.
          </p>
        </motion.div>

        {/* ================= TOP CARDS ================= */}
        <div className="grid gap-6 lg:grid-cols-3">
          {topSkills.map((item, index) => (
            <SkillCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="my-10 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-white/10" />

          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
            Development Ecosystem
          </span>

          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* ================= ROW 2 ================= */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= TOOLS ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="group relative h-full"
          >
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)] sm:p-8">

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-600/10 blur-[90px] transition duration-700 group-hover:bg-orange-600/20" />

              {/* Top Line */}
              <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-[1px] w-5 bg-orange-500" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500">
                      Development Ecosystem
                    </p>
                  </div>

                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    Tools & Technologies
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 shadow-[0_0_25px_rgba(234,88,12,0.08)]">
                  <Wrench
                    size={20}
                    className="text-orange-500"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="relative mt-4 text-xs leading-6 text-gray-500 sm:text-sm">
                Tools and technologies I use for development, testing, design,
                deployment and maintaining modern web applications.
              </p>

              {/* Divider */}
              <div className="relative my-6 h-px bg-white/[0.07]">
                <div className="absolute left-0 top-0 h-px w-16 bg-orange-500/50" />
              </div>

              {/* Tools */}
              <div className="relative flex max-h-[260px] flex-wrap content-start gap-2 overflow-y-auto pr-1">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.025,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-medium text-gray-400 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white hover:shadow-[0_5px_20px_rgba(234,88,12,0.08)]"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>

          {/* ================= TECH ANIMATION ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="group relative h-full"
          >
            <div className="relative flex min-h-[430px] h-full items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b0d0c] shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_25px_70px_rgba(234,88,12,0.15)]">

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.12),transparent_60%)]" />

              {/* Top Line */}
              <div className="absolute left-0 right-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

              {/* Label */}
              <div className="absolute left-6 top-6 z-20 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.8)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  My Tech Stack
                </span>
              </div>

              {/* Animation */}
              <div className="relative z-10 flex w-full items-center justify-center">
                <TechAnimation />
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                <p className="text-xs font-medium tracking-wider text-gray-500">
                  Build <span className="mx-1 text-orange-500">•</span> Learn{' '}
                  <span className="mx-1 text-orange-500">•</span> Improve
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-700 via-orange-500 to-transparent transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;