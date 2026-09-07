import {
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";

const navItems = [
  { icon: House, label: "Home" },
  { icon: Magnifier, label: "Search" },
  { icon: Bell, label: "Notifications" },
  { icon: Envelope, label: "Messages" },
  { icon: Person, label: "Profile" },
  { icon: Gear, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-zinc-950 px-5 py-6">

      {/* Logo */}
      <div className="mb-10 px-3">
        <h1 className="text-xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              <Icon className="size-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;