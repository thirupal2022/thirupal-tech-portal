import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blogs", path: "/blogs" },
    { label: "Community", path: "/community" },
    { label: "Mission", path: "/mission" },
    { label: "Initiatives", path: "/initiatives" },
    { label: "Tech Hub", path: "/techhub" },
    { label: "Future", path: "/future" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className="
          glass-navbar
          fixed
          top-0
          left-0
          right-0
          z-50
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            h-20
            flex
            items-center
            justify-between
          "
        >
          <Link to="/">
            <div>
              <h1
                className="
                  text-2xl
                  font-black
                  text-primary
                "
              >
                ThirupalTech
              </h1>

              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Technology for Communities
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => `nav-link font-medium ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}

            {/* Breadcrumb for Community > Festivals */}
            {
              (location.pathname === '/community/festivals' || location.pathname.endsWith('/community/festivals')) && (
                <div className="text-sm text-slate-600 flex items-center gap-2">
                  <Link to="/community" className="text-amber-700 hover:underline">Community</Link>
                  <span>/</span>
                  <span>Festivals</span>
                </div>
              )
            }

            <ThemeToggle />
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="
            fixed
            top-20
            left-0
            right-0
            bg-white
            shadow-xl
            z-40
            md:hidden
          "
        >
          <div className="flex flex-col p-6 gap-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}