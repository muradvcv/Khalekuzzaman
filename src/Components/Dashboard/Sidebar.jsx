import {
  Briefcase,
  Code,
  Envelope,
  FileText,
  Folder,
  Gear,
  GraduationCap,
  House,
} from "@gravity-ui/icons";
import { Award } from "lucide-react";
import Profile from "./Profile";

const navItems = [
  { icon: House, label: "Home", href: "/" },
  { icon: Briefcase, label: "Experience", href: "/dashboard/experience" },
  { icon: GraduationCap, label: "Education", href: "/dashboard/education" },
  { icon: Code, label: "Skills", href: "/dashboard/skills" },
  { icon: Folder, label: "Projects", href: "/dashboard/projects" },
  { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
  { icon: FileText, label: "Resume", href: "/dashboard/resume" },
  { icon: Envelope, label: "Messages", href: "/dashboard/messages" },
  { icon: Gear, label: "Settings", href: "/dashboard/settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 overflow-y-auto border-r border-white/10 px-5 py-6 =">
      <div className="mb-10 px-3">
        <h1 className="text-xl font-bold text-white">
          Portfolio<span className="text-purple-500">.</span>
        </h1>

        <p className="mt-1 text-xs text-zinc-500">
          Admin Dashboard
        </p>
      </div>

      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              <Icon className="size-5" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
      <div className="mt-25">
        <Profile/>
      </div>
    </aside>
  );
};

export default Sidebar;