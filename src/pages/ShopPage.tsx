import { useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";

const tabs = [
  { value: "male", label: "পুরুষ" },
  { value: "female", label: "মহিলা" },
];

const ShopPage = () => {
  const [tab, setTab] = useState("male");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="text-center">
        <h1 className="font-bengali mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          আমাদের পণ্য সমূহ
        </h1>
        <p className="font-bengali mx-auto mt-3 max-w-xl text-slate-600">
          আলবিদা কোম্পানির সকল পণ্য হালাল প্রসেসে তৈরি করা হয়েছে।
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
          {tabs.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTab(t.value)}
              className={`font-bengali rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors ${
                tab === t.value
                  ? "bg-white text-violet-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} activeGender={tab as "male" | "female"} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
