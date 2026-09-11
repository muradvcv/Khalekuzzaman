"use client";

import React, { useState } from "react";

const Projects = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    features: "",
    category: "",
    status: "",
    image: "",
    liveUrl: "",
    clientRepo: "",
    serverRepo: "",
    technology: "",
    duration: "",
    year: "",
    challenges: "",
    solution: "",
    learnings: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project Data:", formData);
  };

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 hover:border-white/15 focus:border-orange-500/50 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(249,115,22,0.06)]";

  const labelStyle =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500";

  return (
    <div className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Portfolio Control
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Add New <span className="text-orange-500">Project.</span>
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Add project information, technologies, links and development
            details to your portfolio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Basic Information */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Basic Information
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Main information about your project
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelStyle}>
                  Project Title <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. GiGNEX"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Category <span className="text-orange-500">*</span>
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                >
                  <option value="" className="bg-zinc-950">
                    Select category
                  </option>

                  <option value="Frontend" className="bg-zinc-950">
                    Frontend
                  </option>

                  <option value="Backend" className="bg-zinc-950">
                    Backend
                  </option>

                  <option value="Full Stack" className="bg-zinc-950">
                    Full Stack
                  </option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelStyle}>
                  Short Description{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  required
                  placeholder="A short overview of your project"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyle}>
                  Description <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write a detailed description about your project..."
                  className={`${inputStyle} resize-none`}
                />
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Project Overview
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Status, technologies and project timeline
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label className={labelStyle}>
                  Status <span className="text-orange-500">*</span>
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                >
                  <option value="" className="bg-zinc-950">
                    Select status
                  </option>

                  <option value="Completed" className="bg-zinc-950">
                    Completed
                  </option>

                  <option value="Ongoing" className="bg-zinc-950">
                    Ongoing
                  </option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>
                  Duration <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 2 Months"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Year <span className="text-orange-500">*</span>
                </label>

                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  placeholder="2026"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-3">
                <label className={labelStyle}>
                  Technologies <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="technology"
                  value={formData.technology}
                  onChange={handleChange}
                  required
                  placeholder="Next.js, React, Node.js, Express.js, MongoDB..."
                  className={inputStyle}
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Separate technologies with commas
                </p>
              </div>

              <div className="md:col-span-3">
                <label className={labelStyle}>
                  Features <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Authentication, Admin Dashboard, Payment System, Search..."
                  className={`${inputStyle} resize-none`}
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Separate features with commas
                </p>
              </div>
            </div>
          </section>

          {/* Image & Links */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Project Links
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Project image and repository links
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  Project Image URL{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/project-image.png"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Live Website URL{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Client Repository{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="clientRepo"
                  value={formData.clientRepo}
                  onChange={handleChange}
                  required
                  placeholder="https://github.com/username/client"
                  className={inputStyle}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyle}>
                  Server Repository{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="serverRepo"
                  value={formData.serverRepo}
                  onChange={handleChange}
                  required
                  placeholder="https://github.com/username/server"
                  className={inputStyle}
                />
              </div>
            </div>
          </section>

          {/* Challenges & Learning */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Development Journey
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Challenges, solutions and key learnings
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelStyle}>
                  Challenges <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What challenges did you face while building this project?"
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Solution <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How did you solve those challenges?"
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Learnings <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="learnings"
                  value={formData.learnings}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What did you learn from this project?"
                  className={`${inputStyle} resize-none`}
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <div className="flex items-center justify-end border-t border-white/10 pt-6">
            <button
              type="submit"
              className="group flex items-center gap-3 rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.12)] transition-all duration-200 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] active:scale-[0.98]"
            >
              Add Project
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;