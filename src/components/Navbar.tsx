import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/75 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/image.jpg" alt="Fungily" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-white">Fungily</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navItems = [
  { name: "Swap", href: "/swap" },
  { name: "Sales", href: "/sales" },
  { name: "LaunchPad", href: "/launchpad" },
  { name: "Marketplace", href: "/marketplace" },
];
