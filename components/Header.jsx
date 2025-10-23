import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/95 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="font-bold text-lg">RR Fitness</div>

        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "px-3 py-2 rounded-md transition " +
                  (isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "px-3 py-2 rounded-md transition " +
                  (isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100")
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "px-3 py-2 rounded-md transition " +
                  (isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
