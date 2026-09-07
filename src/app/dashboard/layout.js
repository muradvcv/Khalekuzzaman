import Sidebar from "@/Components/Dashboard/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-white/10 bg-zinc-950 px-5 py-6">
       <Sidebar/>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col">
        {/* Navbar */}
        <header className="h-16 shrink-0 border-b border-white/10 px-8 flex items-center">
          Navbar
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

       

      </div>
    </div>
  );
}