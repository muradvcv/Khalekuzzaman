"use client";

import React, { useState } from "react";

const Experience = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    employmentType: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
    responsibilities: "",
    technologies: "",
    companyUrl: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Experience Data:", formData);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 hover:border-white/15 focus:border-orange-500/50 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(249,115,22,0.06)]";

  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500";

  return (
    <div className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Portfolio Control
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Add New <span className="text-orange-500">Experience.</span>
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Add your professional work experience and career information.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Job Information */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">
                  Job Information
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Basic information about your work experience
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Job Title */}
              <div>
                <label className={labelClass}>
                  Job Title <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  placeholder="e.g. MERN Stack Developer Intern"
                  className={inputClass}
                />
              </div>

              {/* Company */}
              <div>
                <label className={labelClass}>
                  Company Name <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. ABC Technologies"
                  className={inputClass}
                />
              </div>

              {/* Employment Type */}
              <div>
                <label className={labelClass}>
                  Employment Type <span className="text-orange-500">*</span>
                </label>

                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" className="bg-zinc-950">
                    Select type
                  </option>

                  <option value="Full-time" className="bg-zinc-950">
                    Full-time
                  </option>

                  <option value="Part-time" className="bg-zinc-950">
                    Part-time
                  </option>

                  <option value="Internship" className="bg-zinc-950">
                    Internship
                  </option>

                  <option value="Freelance" className="bg-zinc-950">
                    Freelance
                  </option>

                  <option value="Contract" className="bg-zinc-950">
                    Contract
                  </option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className={labelClass}>
                  Location <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Dhaka, Bangladesh / Remote"
                  className={inputClass}
                />
              </div>

            </div>
          </section>

          {/* Duration */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">
                  Employment Duration
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Set your employment start and end dates
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Start Date */}
              <div>
                <label className={labelClass}>
                  Start Date <span className="text-orange-500">*</span>
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* End Date */}
              <div>
                <label className={labelClass}>
                  End Date
                </label>

                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  disabled={formData.currentlyWorking}
                  className={`${inputClass} disabled:cursor-not-allowed disabled:opacity-40`}
                />
              </div>

              {/* Currently Working */}
              <div className="md:col-span-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">

                  <input
                    type="checkbox"
                    name="currentlyWorking"
                    checked={formData.currentlyWorking}
                    onChange={handleChange}
                    className="h-4 w-4 accent-orange-500"
                  />

                  <div>
                    <p className="text-sm font-medium text-zinc-300">
                      I currently work here
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-600">
                      End date will be disabled when selected
                    </p>
                  </div>

                </label>
              </div>

            </div>
          </section>

          {/* Experience Details */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">
                  Experience Details
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Describe your role and responsibilities
                </p>
              </div>
            </div>

            <div className="space-y-5">

              {/* Description */}
              <div>
                <label className={labelClass}>
                  Description <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write a short description about your experience..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Responsibilities */}
              <div>
                <label className={labelClass}>
                  Responsibilities{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Developed REST APIs, built responsive interfaces, worked with databases..."
                  className={`${inputClass} resize-none`}
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Separate multiple responsibilities with commas
                </p>
              </div>

              {/* Technologies */}
              <div>
                <label className={labelClass}>
                  Technologies{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                  placeholder="React, Next.js, Node.js, Express.js, MongoDB..."
                  className={inputClass}
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Separate technologies with commas
                </p>
              </div>

            </div>
          </section>

          {/* Company & Status */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em]">
                  Additional Information
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Company website and experience status
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Company URL */}
              <div>
                <label className={labelClass}>
                  Company URL <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://company.com"
                  className={inputClass}
                />
              </div>

              {/* Status */}
              <div>
                <label className={labelClass}>
                  Status <span className="text-orange-500">*</span>
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="" className="bg-zinc-950">
                    Select status
                  </option>

                  <option value="Active" className="bg-zinc-950">
                    Active
                  </option>

                  <option value="Completed" className="bg-zinc-950">
                    Completed
                  </option>
                </select>
              </div>

            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end border-t border-white/10 pt-6">

            <button
              type="submit"
              className="group flex items-center gap-3 rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.12)] transition-all duration-200 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] active:scale-[0.98]"
            >
              Add Experience

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

export default Experience;