'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import TechAnimation from './TechAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'DaisyUI',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'React Hook Form',
      'Framer Motion',
      'Vite',
      'Responsive Design',
      'REST API',
      'Axios',
      'ES6+',
      'UI/UX',
      'SEO',
      'Accessibility',
      'Performance',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MongoDB Atlas',
      'PostgreSQL',
      'Prisma',
      'JWT',
      'Better Auth',
      'REST API',
      'Authentication',
      'Authorization',
      'CRUD',
      'API Development',
      'Middleware',
      'MVC',
      'Database Design',
      'Server-side Rendering',
      'Error Handling',
      'Validation',
      'Security',
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Chrome DevTools',
      'Postman',
      'Netlify',
      'Vercel',
      'Surge',
      'Figma',
      'NPM',
      'Yarn',
      'Linux',
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Adaptability',
      'Learning Agility',
      'Time Management',
      'Debugging',
      'Clean Code',
    ],
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[350px] w-[350px] rounded-full bg-[#DC2F02]/10 blur-[130px]" />
        <div className="absolute bottom-[5%] right-[-180px] h-[350px] w-[350px] rounded-full bg-[#DC2F02]/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#DC2F02] sm:w-12" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#DC2F02] sm:tracking-[0.35em]">
              My Skills
            </span>
            <span className="h-px w-10 bg-[#DC2F02] sm:w-12" />
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-white via-gray-300 to-[#DC2F02] bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A collection of technologies, tools, and skills I use to build modern, responsive, and scalable web applications.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="flex h-full flex-col gap-4">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="group relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1210] p-4 shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DC2F02]/40 hover:shadow-[0_20px_60px_rgba(220,47,2,0.08)] sm:p-5"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#DC2F02]/10 blur-3xl transition duration-500 group-hover:bg-[#DC2F02]/20" />

                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#DC2F02]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#DC2F02]/20 bg-[#DC2F02]/10">
                      <Icon size={18} className="text-[#DC2F02]" />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#DC2F02]">
                        Category
                      </p>
                      <h3 className="text-sm font-bold text-white sm:text-base">
                        {category.title}
                      </h3>
                    </div>

                    <div className="ml-auto h-px flex-1 bg-white/10" />
                  </div>

                  <div className="relative flex max-h-[150px] flex-wrap gap-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#DC2F02]/30">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: categoryIndex * 0.05 + index * 0.02 }}
                        whileHover={{ y: -2 }}
                        className="inline-flex cursor-default items-center rounded-md border border-white/10 bg-[#111512] px-2 py-1 text-[9px] font-medium text-gray-300 transition-all duration-300 hover:border-[#DC2F02]/60 hover:bg-[#DC2F02]/10 hover:text-white sm:text-[10px]"
                      >
                        <span className="mr-1 text-[#DC2F02]">{'<'}</span>
                        {skill}
                        <span className="ml-1 text-[#DC2F02]">{'/>'}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] border border-[#DC2F02]/20 bg-[#0d1210] shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,47,2,0.12),transparent_60%)]" />

            <div className="absolute left-5 top-5 z-20 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#DC2F02]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Tech Stack
              </span>
            </div>

            <div className="relative z-10 flex w-full items-center justify-center">
              <TechAnimation />
            </div>

            <div className="absolute bottom-5 left-0 right-0 z-20 text-center">
              <p className="text-xs text-gray-500">
                Building • Learning • Improving
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center"
        >
          <p className="text-xs text-gray-500 sm:text-sm">
            Always learning, experimenting, and improving my development skills through real-world projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;