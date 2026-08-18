import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone } from "lucide-react";
import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";
import { header } from "../assets";

const tabs = [
  { value: "male", label: "পুরুষ" },
  { value: "female", label: "মহিলা" },
];

const ShopPage = () => {
  const [tab, setTab] = useState("male");

  return (
    <div>
      <Helmet>
        <title>আলবিদা কোম্পানি | হালাল কাফন ও জানাজার পণ্য</title>
        <meta name="description" content="আলবিদা কোম্পানির হালাল পণ্য সমূহ — কাফন বক্স, আতর, লুবান, গোলাপ পানি, ধূপ, কর্পূর ও আরও অনেক কিছু। সম্পূর্ণ হালাল প্রসেসে তৈরি।" />
        <meta property="og:title" content="আলবিদা কোম্পানি | হালাল কাফন ও জানাজার পণ্য" />
        <meta property="og:description" content="সম্পূর্ণ হালাল প্রসেসে তৈরি কাফন বক্স, আতর, লুবান ও আরও পণ্য।" />
        <meta property="og:url" content="https://albida.com/" />
      </Helmet>

      {/* Top contact bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-green-900 py-3 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="relative font-bengali inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {/* Left ornament */}
          <span className="hidden sm:inline text-green-300/50 text-lg">✦</span>

          {/* First contact */}
          <a
            href="tel:+916296646995"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-green-300" />
            <span className="text-green-100/80 text-xs sm:text-sm">Marketing Manager</span>
            <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-widest">+91 6296646995</span>
          </a>

          {/* Divider */}
          <span className="text-green-300/40 text-lg hidden sm:inline">|</span>

          {/* Second contact */}
          <a
            href="tel:+919563710151"
            className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3.5 w-3.5 shrink-0 text-green-300" />
            <span className="text-green-100/80 text-xs sm:text-sm">Marketing Developer</span>
            <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-widest">+91 9563710151</span>
          </a>

          {/* Right ornament */}
          <span className="hidden sm:inline text-green-300/50 text-lg">✦</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[480px] bg-black">
        <img
          src={header}
          alt="Albida header"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">

          {/* Bismillah row */}
          <div className="flex items-center gap-2 sm:gap-4 mb-3 max-w-xs sm:max-w-none">
            <div className="h-px w-4 sm:w-14 flex-shrink-0 bg-violet-300/70" />

            <div className="h-px w-4 sm:w-14 flex-shrink-0 bg-violet-300/70" />
          </div>

          {/* Top tagline */}
          <p className="font-bengali text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide mb-3" style={{ color: "#14532d" }}>
             বিদায়ী সাজ
          </p>

          {/* Glowing underline */}
          <div className="flex items-center gap-1 mb-4">
            <div className="h-0.5 w-6 rounded-full bg-violet-400/60" />
            <div className="h-1 w-20 sm:w-32 rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(167,139,250,0.7)]" />
            <div className="h-0.5 w-6 rounded-full bg-violet-400/60" />
          </div>

    

          {/* Subtitle */}
 

          {/* Bottom ornament */}
          <div className="flex items-center gap-2 mt-5">
            <div className="h-px w-8 sm:w-16 bg-white/20" />
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <div className="h-1.5 w-3 rounded-full bg-violet-300/60" />
              <div className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            </div>
            <div className="h-px w-8 sm:w-16 bg-white/20" />
          </div>

        </div>
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Gender tabs */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-1">
            {tabs.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTab(t.value)}
                className={`font-bengali rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  tab === t.value
                    ? "bg-white dark:bg-violet-600 text-violet-700 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              activeGender={tab as "male" | "female"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
