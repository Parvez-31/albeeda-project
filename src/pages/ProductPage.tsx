import { ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Carefully selected materials built to last.",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Backed by our satisfaction guarantee.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Ships quickly to your doorstep.",
  },
];

const ProductPage = () => {
  return (
    <div>
      <section className="bg-linear-to-br from-violet-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Our Product
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Discover Albida
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A thoughtfully designed product that blends style, performance,
              and everyday practicality — made for people who expect more.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 sm:w-auto"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Why choose Albida?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Everything you need in one place — designed to fit seamlessly into
            your life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
