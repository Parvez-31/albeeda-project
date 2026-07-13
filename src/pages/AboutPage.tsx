const AboutPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
          About Us
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Built with purpose
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Albida was founded on a simple idea: great products should feel
          effortless. We combine thoughtful design with reliable craftsmanship to
          create experiences people love.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To deliver products that improve everyday life — accessible,
              beautiful, and built to stand the test of time.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Our Values</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Quality, transparency, and customer care guide every decision we
              make — from design to delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
