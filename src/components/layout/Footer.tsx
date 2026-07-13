import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/favicon.svg"
                alt="Albida logo"
                className="h-7 w-7"
              />
              <span className="text-base font-semibold text-slate-900">
                Albida
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              Quality products crafted with care. Discover what makes Albida
              different.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Pages
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-600 transition-colors hover:text-violet-600"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm text-slate-600 transition-colors hover:text-violet-600"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-600 transition-colors hover:text-violet-600"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>hello@albida.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          &copy; {year} Albida. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
