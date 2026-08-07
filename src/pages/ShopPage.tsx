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
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 py-2.5 px-4 text-center border-b border-white/5">
        <a
          href="tel:+916296646995"
          className="font-bengali inline-flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors tracking-wide"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-amber-400" />
          <span className="text-white/70">Marketing Manager —</span>
          <span className="text-amber-400">+91 6296646995</span>
        </a>
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
            <span className="font-bengali glow-white text-xs sm:text-sm font-medium tracking-wide sm:tracking-widest text-center">
              ✦ বিসমিল্লাহির রাহমানির রাহিম ✦
            </span>
            <div className="h-px w-4 sm:w-14 flex-shrink-0 bg-violet-300/70" />
          </div>

          {/* Top tagline */}
          <p className="font-bengali glow-gold text-xl sm:text-3xl lg:text-4xl font-bold tracking-wide mb-3">
            আপনার বিদায়ী সাজ
          </p>

          {/* Glowing underline */}
          <div className="flex items-center gap-1 mb-4">
            <div className="h-0.5 w-6 rounded-full bg-violet-400/60" />
            <div className="h-1 w-20 sm:w-32 rounded-full bg-violet-400 shadow-[0_0_12px_3px_rgba(167,139,250,0.7)]" />
            <div className="h-0.5 w-6 rounded-full bg-violet-400/60" />
          </div>

          {/* Main title */}
          <h1 className="font-bengali glow-violet text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            আলবিদা কোম্পানি
          </h1>

          {/* Subtitle */}
          <p className="font-bengali glow-white mt-4 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm leading-relaxed">
            সম্পূর্ণ হালাল প্রসেসে তৈরি আমাদের বিশেষ পণ্য সমূহ
          </p>

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
