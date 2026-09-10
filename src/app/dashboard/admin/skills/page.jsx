"use client"
import React, { useState } from "react";

const Skills = () => {
  const [formData, setFormData] = useState({
    category: "Frontend",
    name: "",
    icon: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      category: "Frontend",
      name: "",
      icon: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            Portfolio Control
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Add Skill
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add your frontend, backend, database and development tools.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Skill Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-orange-500"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="Tools">Tools</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Skill Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. React.js"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Icon URL
              </label>

              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>

              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="e.g. Modern UI development"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition focus:border-orange-500"
              />
            </div>

          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Add Skill
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Skills;