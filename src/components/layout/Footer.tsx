import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Albida logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="font-bengali mt-3 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              আলবিদা কোম্পানির সকল পণ্য সম্পূর্ণ হালাল প্রসেসে তৈরি।
            </p>
          </div>

          <div>
            <h3 className="font-bengali text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-200">
              পেইজ
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="font-bengali text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
                  পণ্য
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-bengali text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-violet-600 dark:hover:text-violet-400">
                  আমাদের সম্পর্কে
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bengali text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-200">
              যোগাযোগ
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="font-bengali">WhatsApp: 6296646995</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-sm text-slate-500 dark:text-slate-500">
          <span className="font-bengali">&copy; {year} আলবিদা কোম্পানি। সর্বস্বত্ব সংরক্ষিত।</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
