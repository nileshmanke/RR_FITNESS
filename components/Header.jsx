// src/components/Header.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navClass = ({ isActive }) =>
    "px-3 py-2 rounded-md transition text-sm " +
    (isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100");

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white/95 backdrop-blur z-50 shadow-sm">
        <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="rounded-md bg-blue-600 text-white font-bold w-9 h-9 flex items-center justify-center shrink-0">
              RRF
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-lg font-bold truncate">
                RR Fitness & Nutrition
              </div>
              <div className="text-xs text-gray-500 -mt-0.5 hidden sm:block">
                Club & Nutrition Shop
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-3 items-center">
              <li>
                <NavLink to="/" end className={navClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-60 transition-opacity ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer Panel */}
        <aside
          role="dialog"
          aria-label="Main menu"
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl transform transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between px-4 h-16 border-b">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-blue-600 text-white font-bold w-8 h-8 flex items-center justify-center">
                RF
              </div>
              <div className="text-sm font-semibold">RR Fitness & Nutrition</div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="px-4 py-6">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "block px-3 py-3 rounded-md text-sm " +
                    (isActive
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50")
                  }
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "block px-3 py-3 rounded-md text-sm " +
                    (isActive
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50")
                  }
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "block px-3 py-3 rounded-md text-sm " +
                    (isActive
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50")
                  }
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
