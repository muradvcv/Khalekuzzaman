"use client";

import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";

const navItems = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Experience", link: "#experience", id: "experience" },
  { name: "Contact", link: "#contact", id: "contact" },
];

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // =========================
  // USER / ADMIN CHECK
  // =========================

  const user = session?.user;

  const isRoleAdmin = user?.role === "admin";

  // =========================
  // SCROLL SPY
  // =========================

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,

        // Navbar height consider করা হচ্ছে
        rootMargin: "-100px 0px -55% 0px",

        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // =========================
  // HANDLE NAV CLICK
  // =========================

  const handleNavClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171614]/95 font-breeserif tracking-wider backdrop-blur-md">

      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">

        {/* =========================
            LOGO
        ========================= */}

        <Link
          href="#home"
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold tracking-tight text-white transition duration-300 hover:opacity-90"
        >
          <span className="text-[#DC2F02]">KM</span>.
        </Link>

        {/* =========================
            DESKTOP NAV
        ========================= */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => handleNavClick(item.id)}
                className={`group relative text-sm font-medium transition duration-300 ${isActive
                    ? "text-[#DC2F02]"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {item.name}

                {/* Active underline */}

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] bg-[#DC2F02] transition-all duration-300 ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}

        </nav>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="hidden items-center gap-3 md:flex">

          {/* =========================
              ADMIN DASHBOARD
          ========================= */}

          {!isPending && isRoleAdmin && (
            <Link
              href="/admin/dashboard"
              className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
            >
              <LayoutDashboard
                size={17}
                className="transition-transform duration-300 group-hover:rotate-3"
              />
            </Link>
          )}

          {/* =========================
              HIRE ME
          ========================= */}

          <Link
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="group flex items-center gap-2 rounded-md bg-[#DC2F02] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ef3b0a] hover:shadow-[0_0_25px_rgba(220,47,2,0.35)]"
          >
            Hire Me

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* =========================
            MOBILE BUTTON
        ========================= */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 text-white transition duration-300 hover:bg-white/5 hover:text-[#DC2F02] lg:hidden"
          aria-label={
            open ? "Close menu" : "Open menu"
          }
          aria-expanded={open}
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#171614] transition-all duration-300 lg:hidden ${open
            ? "max-h-[700px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
          }`}
      >

        <div className="px-5 py-6">

          <nav className="flex flex-col gap-5">

            {/* =========================
                MOBILE NAV LINKS
            ========================= */}

            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.link}
                  onClick={() =>
                    handleNavClick(item.id)
                  }
                  className={`relative w-fit text-sm font-medium transition duration-300 ${isActive
                      ? "text-[#DC2F02]"
                      : "text-gray-400 hover:text-[#DC2F02]"
                    }`}
                >
                  {item.name}

                  {/* Mobile active indicator */}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#DC2F02] transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0"
                      }`}
                  />
                </Link>
              );
            })}

            {/* =========================
                MOBILE ADMIN
            ========================= */}

            {!isPending && isRoleAdmin && (
              <Link
                href="/admin/dashboard"
                onClick={() => setOpen(false)}
                className="mt-2 flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
              >
                <LayoutDashboard size={17} />

                Admin Dashboard
              </Link>
            )}

            {/* =========================
                MOBILE HIRE ME
            ========================= */}

            <Link
              href="#contact"
              onClick={() =>
                handleNavClick("contact")
              }
              className="flex w-fit items-center gap-2 rounded-md bg-[#DC2F02] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#ef3b0a] hover:shadow-[0_0_20px_rgba(220,47,2,0.3)]"
            >
              Hire Me

              <ArrowRight size={17} />
            </Link>

          </nav>

        </div>

      </div>

    </header>
  );
};

export default Navbar;