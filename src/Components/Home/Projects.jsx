
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GiThumbUp } from "react-icons/gi";

const demoProjects = [
  {
    id: 1,
    title: "IdeaVault",
    description:
      "A modern startup idea sharing platform where users can explore, publish and manage innovative ideas.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Tiles Gallery",
    description:
      "A full-stack e-commerce platform featuring product browsing, filtering, authentication and user management.",
    tech: ["React", "Next.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "FinEase",
    description:
      "A clean personal finance management application for tracking income, expenses and financial activities.",
    tech: ["React", "Express.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-5 py-12 text-white md:px-10 md:py-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-[#DC2F02]/10 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-orange-600/5 blur-[120px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===============================
            HEADER
        =============================== */}

        <div className="mx-auto mb-8 max-w-5xl text-center py-10">

          {/* One Line Header */}
          <div className="mb-3 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#DC2F02]" />

            <span className="flex items-center gap-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DC2F02]">
              <Sparkles size={12} />
              Selected Work
            </span>

            <span className="h-px w-8 bg-[#DC2F02]" />

          </div>

          <h2 className="text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
            Things I&apos;ve{" "}
            <span className="text-[#DC2F02]">
              built.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-500 md:text-sm">
            A selection of projects that showcase my approach to
            building modern, scalable and user-focused digital
            experiences.
          </p>

        </div>

        {/* ===============================
            PROJECT GRID
        =============================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {demoProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#DC2F02]/40 hover:bg-white/[0.045]"
            >

              {/* Top Glow */}
              <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#DC2F02]/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Preview */}
              <div className="relative h-40 overflow-hidden border-b border-white/[0.08] bg-[#080808]">

                <div className="absolute inset-3 overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">

                  {/* Browser Bar */}
                  <div className="flex h-6 items-center gap-1.5 border-b border-white/10 px-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  </div>

                  {/* Preview */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">

                      <span className="text-5xl font-black tracking-tighter text-white/[0.04]">
                        0{index + 1}
                      </span>

                      <p className="mt-[-6px] text-xs font-semibold text-white/40">
                        {project.title}
                      </p>

                    </div>
                  </div>

                </div>

                {/* Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#DC2F02]/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>

              {/* Content */}
              <div className="p-5">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-[10px] font-semibold tracking-[0.22em] text-[#DC2F02]">
                    PROJECT 0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#DC2F02]"
                  />

                </div>

                <h3 className="text-xl font-bold tracking-tight transition duration-300 group-hover:text-[#DC2F02]">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-xs leading-5 text-gray-500 md:text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-gray-400 transition group-hover:border-[#DC2F02]/20"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-2.5 border-t border-white/[0.08] pt-4">

                  <Link
                    href={project.live}
                    className="group/button flex items-center gap-1.5 rounded-lg bg-[#DC2F02] px-3.5 py-2 text-[11px] font-bold text-white transition hover:bg-[#ef3b0a]"
                  >
                    Live Preview

                    <ExternalLink
                      size={13}
                      className="transition group-hover/button:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href={project.github}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] font-bold text-gray-400 transition hover:border-white/20 hover:text-white"
                  >
                    <GiThumbUp size={13} />
                    Source
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* ===============================
            FOOTER
        =============================== */}

        <div className="mt-6 flex items-center justify-center">

          <p className="text-[10px] text-gray-600">
            More projects coming soon...
          </p>

        </div>

      </div>
    </section>
  );
};

export default Projects;

