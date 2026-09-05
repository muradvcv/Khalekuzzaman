'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight, LayoutDashboard } from 'lucide-react';
import React, { useState } from 'react';
import { useSession } from '@/lib/auth-client';

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Skills', link: '/skills' },
  { name: 'Projects', link: '/projects' },
  { name: 'Experience', link: '/experience' },
  { name: 'Contact', link: '/contact' },
];

const Navbar = () => {
  const { data: session, isPending } = useSession();
  const isRoleAdmin = session?.user?.role === 'admin'



  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171614] font-breeserif tracking-wider text-2xl backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white transition duration-300 hover:opacity-90">
          <span className="text-[#DC2F02]">KM</span>.
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              className={`group relative text-sm font-medium transition duration-300 ${index === 0 ? 'text-[#DC2F02]' : 'text-gray-400 hover:text-white'}`}
            >
              {item.name}
              <span className={`absolute -bottom-3 left-0 h-[2px] bg-[#DC2F02] transition-all duration-300 ${index === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/admin/dashboard"
            className="group flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
          >
            <LayoutDashboard size={17} className="transition-transform duration-300 group-hover:rotate-3" />
          </Link>

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-md bg-[#DC2F02] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ef3b0a] hover:shadow-[0_0_25px_rgba(220,47,2,0.35)]"
          >
            Hire Me
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 text-white transition duration-300 hover:bg-white/5 hover:text-[#DC2F02] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-[#171614] transition-all duration-300 lg:hidden ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 border-t-0 opacity-0'}`}>
        <div className="px-5 py-6">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition duration-300 ${index === 0 ? 'text-[#DC2F02]' : 'text-gray-400 hover:text-[#DC2F02]'}`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/admin/dashboard"
              onClick={() => setOpen(false)}
              className="mt-2 flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:border-[#DC2F02]/40 hover:bg-[#DC2F02]/10 hover:text-white"
            >
              <LayoutDashboard size={17} />
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
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