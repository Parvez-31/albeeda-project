import { Heart, ShieldCheck, Sparkles, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { logo } from "../assets";

const values = [
  {
    icon: ShieldCheck,
    title: "সম্পূর্ণ হালাল",
    desc: "আমাদের প্রতিটি পণ্য সম্পূর্ণ হালাল প্রসেসে তৈরি। কোনো নিষিদ্ধ উপাদান ব্যবহার করা হয় না।",
  },
  {
    icon: Sparkles,
    title: "উন্নত মান",
    desc: "সর্বোচ্চ মানের কাঁচামাল ব্যবহার করে প্রতিটি পণ্য যত্নসহকারে তৈরি করা হয়।",
  },
  {
    icon: Heart,
    title: "বিশ্বস্ততা",
    desc: "গ্রাহকের আস্থাই আমাদের সবচেয়ে বড় সম্পদ। আমরা সর্বদা সৎ ও স্বচ্ছভাবে ব্যবসা পরিচালনা করি।",
  },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-500 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const AboutPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Helmet>
        <title>আমাদের সম্পর্কে | আলবিদা কোম্পানি</title>
        <meta name="description" content="আলবিদা কোম্পানি সম্পর্কে জানুন — আমাদের লক্ষ্য, মূল্যবোধ এবং সম্পূর্ণ হালাল পণ্য তৈরির প্রতিশ্রুতি।" />
        <meta property="og:title" content="আমাদের সম্পর্কে | আলবিদা কোম্পানি" />
        <meta property="og:description" content="আলবিদা কোম্পানির গল্প — উদ্দেশ্য ও বিশ্বাস নিয়ে গড়া একটি হালাল পণ্য প্রতিষ্ঠান।" />
        <meta property="og:url" content="https://albida.com/about" />
      </Helmet>

      {/* ── Story Section ── */}
      <section className="mx-auto max-w-4xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        {/* Logo + title card */}
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-slate-950/60">
          {/* Decorative top stripe */}
          <div className="h-2 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500" />

          <div className="px-8 pt-10 pb-12 sm:px-14 text-center">
            {/* Logo */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 ring-4 ring-violet-100 dark:ring-violet-900/50 shadow-md">
              <img src={logo} alt="Albida logo" className="h-16 w-auto object-contain" />
            </div>

            {/* Title */}
            <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
              আলবীদা কাফন কোম্পানির-প্রতিষ্ঠার ইতিহাস
            </h2>

            {/* Glowing divider */}
            <div className="mx-auto my-5 h-1 w-20 rounded-full bg-violet-500 dark:bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]" />

            {/* Story paragraphs */}
            <div className="font-bengali text-left text-base sm:text-lg leading-loose text-slate-600 dark:text-slate-400 max-w-2xl mx-auto space-y-4">
              <p>কোম্পানির প্রধান নির্বাহী (CEO) লক্ষ্য করেন যে, মুসলিম সমাজে যারা হজ পালন করেন, তাদের অনেকেই জমজমের পানি দিয়ে কাফনের কাপড় ধুয়ে থাকেন। ইসলামী শরীয়তের দৃষ্টিতে জমজমের পানি অত্যন্ত মর্যাদাপূর্ণ ও গুরুত্বপূর্ণ।</p>
              <p>তিনি আরও উপলব্ধি করেন যে, সবাই হজে যাওয়ার সৌভাগ্য অর্জন করতে পারেন না। ফলে যারা হজে যেতে পারেন না, তারা জমজমের পানি দিয়ে ধোয়া কাফনের কাপড় ব্যবহার করার সুযোগ থেকেও বঞ্চিত হন।</p>
              <p>মুসলিম সমাজের বিপুল সংখ্যক মানুষ হজে যেতে না পারায় জমজমের পানি দ্বারা ধৌত কাফনের কাপড় সংগ্রহ করতে পারেন না।</p>
              <p>এই বিষয়টি বিবেচনা করে কোম্পানির প্রধান নির্বাহী এমন একটি উদ্যোগ গ্রহণ করেন, যাতে সকল মুসলিম জমজমের পানি দ্বারা ধৌত কাফনের কাপড় ব্যবহার করার সুযোগ পান।</p>
              <p>এই চিন্তা থেকেই আলবীদা কাফন কোম্পানির- যাত্রা শুরু হয়। কোম্পানির সকল পণ্য সম্পূর্ণ হালাল প্রক্রিয়ায় প্রস্তুত করা হয় (ইনশাআল্লাহ)।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/40 border border-green-100 dark:border-green-900/40 p-8 sm:p-12 shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 shadow-lg shadow-green-600/30">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="font-bengali text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                কোম্পানির উদ্দেশ্য
              </h3>
              <div className="mb-4 h-0.5 w-12 rounded-full bg-green-500" />
              <p className="font-bengali text-base sm:text-lg leading-loose text-slate-600 dark:text-slate-400">
                আলবীদা কোম্পানির উদ্দেশ্য হল প্রতিটি পরিবার তার আপন জনের জন্য শেষ সময়ে একটি হালাল এবং গুণগতমান সম্পন্ন জমজম পানি ব্যবহৃত কাঁফনের সেট তুলে দিতে পারেন (ইঃ আঃ)।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-bengali text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            আমাদের মূল্যবোধ
          </p>
          <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            কেন আমরা আলাদা?
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-violet-400 dark:bg-violet-500" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 shadow-sm dark:shadow-slate-950/40 hover:shadow-lg dark:hover:shadow-violet-950/30 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent dark:from-violet-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300 shadow-sm">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="relative font-bengali text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {v.title}
              </h3>
              <div className="relative mx-auto mb-3 h-0.5 w-10 rounded-full bg-violet-300 dark:bg-violet-700 group-hover:w-16 transition-all duration-300" />
              <p className="relative font-bengali text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="mx-auto max-w-4xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-800 p-8 sm:p-12 text-center shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-violet-600/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-green-600/20 blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-white mb-3">
              যোগাযোগ করুন
            </h2>
            <p className="font-bengali text-slate-300 mb-8 text-sm sm:text-base max-w-sm mx-auto">
              যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের WhatsApp করুন
            </p>
            <a
              href="https://wa.me/916296646995"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bengali inline-flex items-center gap-2.5 rounded-2xl bg-green-500 hover:bg-green-400 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-900/40 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon />
              WhatsApp: 6296646995
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
