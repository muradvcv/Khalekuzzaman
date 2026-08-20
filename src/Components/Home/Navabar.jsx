'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171614]
    backdrop-blur-md font-breeserif tracking-wider text-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          <span className="text-[#DC2F02]">KM</span>.
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              className={`group relative text-sm font-medium transition duration-300 ${index === 0
                  ? 'text-[#DC2F02]'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {item.name}

              <span
                className={`absolute -bottom-3 left-0 h-[2px] bg-[#DC2F02] transition-all duration-300 ${index === 0
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          ))}
        </nav>

        {/* Hire Button */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-md bg-[#DC2F02] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ef3b0a] hover:shadow-[0_0_25px_rgba(220,47,2,0.35)] md:flex"
        >
          Hire Me
          <ArrowRight size={17} />
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#171614] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-400 transition hover:text-[#DC2F02]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex w-fit items-center gap-2 rounded-md bg-[#DC2F02] px-5 py-3 text-sm font-semibold text-white"
            >
              Hire Me
              <ArrowRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;