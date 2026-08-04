import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { logo } from "../../assets";
import { useDarkMode } from "../../store/useDarkMode";

const navLinks = [
  { to: "/", label: "পণ্য" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `font-bengali rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo} alt="Albida logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side: dark mode + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
