"use client";

import React, { useState } from "react";

const Certificates = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    organization: "",
    skills: "",
    credentialUrl: "",
    description: "",
    learnings: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Certificate Data:", formData);
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
            Add New <span className="text-orange-500">Certificate.</span>
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Add your certificate information and credentials to your portfolio.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Certificate Information */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Certificate Information
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Basic information about your certificate
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Certificate Name */}
              <div>
                <label className={labelClass}>
                  Certificate Name{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Full Stack Web Development"
                  className={inputClass}
                />
              </div>

              {/* Organization */}
              <div>
                <label className={labelClass}>
                  Issuing Organization{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Programming Hero"
                  className={inputClass}
                />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className={labelClass}>
                  Certificate Image URL{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/certificate.png"
                  className={inputClass}
                />
              </div>

              {/* Skills */}
              <div className="md:col-span-2">
                <label className={labelClass}>
                  Skills <span className="text-orange-500">*</span>
                </label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  placeholder="React, JavaScript, Node.js, MongoDB"
                  className={inputClass}
                />

                <p className="mt-2 text-xs text-zinc-600">
                  Separate multiple skills with commas
                </p>
              </div>

            </div>
          </section>

          {/* Credential */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Credential
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Add your certificate verification link
                </p>
              </div>
            </div>

            <div>
              <label className={labelClass}>
                Credential URL{" "}
                <span className="text-orange-500">*</span>
              </label>

              <input
                type="url"
                name="credentialUrl"
                value={formData.credentialUrl}
                onChange={handleChange}
                required
                placeholder="https://example.com/verify/..."
                className={inputClass}
              />
            </div>
          </section>

          {/* Description & Learning */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Description & Learning
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Tell visitors what you learned from this certificate
                </p>
              </div>
            </div>

            <div className="space-y-5">

              {/* Description */}
              <div>
                <label className={labelClass}>
                  Description{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write a short description about this certificate..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Learnings */}
              <div>
                <label className={labelClass}>
                  Learnings{" "}
                  <span className="text-orange-500">*</span>
                </label>

                <textarea
                  name="learnings"
                  value={formData.learnings}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What did you learn from this certificate?"
                  className={`${inputClass} resize-none`}
                />
              </div>

            </div>
          </section>

          {/* Status */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Certificate Status
                </h2>

                <p className="mt-1 text-xs text-zinc-600">
                  Set the current status of your certificate
                </p>
              </div>
            </div>

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

                <option value="Expired" className="bg-zinc-950">
                  Expired
                </option>
              </select>
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end border-t border-white/10 pt-6">

            <button
              type="submit"
              className="group flex items-center gap-3 rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(249,115,22,0.12)] transition-all duration-200 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] active:scale-[0.98]"
            >
              Add Certificate

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

export default Certificates;