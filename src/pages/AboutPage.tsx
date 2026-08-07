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

const AboutPage = () => {
  return (
    <div className="dark:bg-slate-950">
      <Helmet>
        <title>আমাদের সম্পর্কে | আলবিদা কোম্পানি</title>
        <meta name="description" content="আলবিদা কোম্পানি সম্পর্কে জানুন — আমাদের লক্ষ্য, মূল্যবোধ এবং সম্পূর্ণ হালাল পণ্য তৈরির প্রতিশ্রুতি।" />
        <meta property="og:title" content="আমাদের সম্পর্কে | আলবিদা কোম্পানি" />
        <meta property="og:description" content="আলবিদা কোম্পানির গল্প — উদ্দেশ্য ও বিশ্বাস নিয়ে গড়া একটি হালাল পণ্য প্রতিষ্ঠান।" />
        <meta property="og:url" content="https://albida.com/about" />
      </Helmet>

      {/* Story Section */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-lg dark:shadow-slate-950/60 text-center">
          <img
            src={logo}
            alt="Albida logo"
            className="h-20 w-auto object-contain mx-auto mb-6 drop-shadow"
          />
          <p className="font-bengali text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            আমাদের গল্প
          </p>
          <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            উদ্দেশ্য নিয়ে গড়া
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-violet-500 dark:bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.5)]" />
          <p className="font-bengali text-base sm:text-lg leading-loose text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            আলবিদা কোম্পানি একটি সহজ ও পবিত্র উদ্দেশ্য নিয়ে প্রতিষ্ঠিত হয়েছে।
            আমরা বিশ্বাস করি প্রতিটি মানুষের শেষ বিদায়ের সাজ হওয়া উচিত সম্মানজনক ও হালাল।
            তাই আমরা সম্পূর্ণ হালাল প্রসেসে জমজম পানি ব্যবহার করে আমাদের বিশেষ পণ্যগুলো তৈরি করি।
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-bengali text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            আমাদের মূল্যবোধ
          </p>
          <h2 className="font-bengali mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            কেন আমরা আলাদা?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-2xl border border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 shadow-sm dark:shadow-slate-950/40 hover:shadow-lg dark:hover:shadow-violet-950/30 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-600 transition-colors duration-300">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bengali text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {v.title}
              </h3>
              <div className="mx-auto mb-3 h-0.5 w-10 rounded-full bg-violet-300 dark:bg-violet-700" />
              <p className="font-bengali text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-800 dark:to-indigo-800 p-8 sm:p-12 text-center shadow-xl">
          <Phone className="mx-auto h-10 w-10 text-white/80 mb-4" />
          <h2 className="font-bengali text-2xl sm:text-3xl font-bold text-white mb-3">
            যোগাযোগ করুন
          </h2>
          <p className="font-bengali text-violet-100/90 mb-6 text-sm sm:text-base">
            যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের WhatsApp করুন
          </p>
          <a
            href="https://wa.me/6296646995"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bengali inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-violet-700 shadow-md transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-500">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp: 6296646995
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
