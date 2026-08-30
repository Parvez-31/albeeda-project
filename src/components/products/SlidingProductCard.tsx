import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

const WHATSAPP_NUMBER = "6296646995";
const SLIDE_INTERVAL = 2000;

type Props = {
  product: Product;
};

const SlidingProductCard = ({ product }: Props) => {
  const images = product.images ?? [product.image];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current) return;
      setPrev(current);
      setCurrent(next);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 600);
    },
    [animating, current]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      goTo((current + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [current, images.length, goTo]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${product.name} সম্পর্কে জানতে চাই।`
  )}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700/60 shadow-md dark:shadow-slate-950/60 transition-all duration-300 hover:shadow-xl dark:hover:shadow-violet-950/40 hover:-translate-y-1">

      {/* Sliding image area */}
      <Link to={`/${product.id}`} className="block">
        <div
          className="relative overflow-hidden bg-slate-50 dark:bg-slate-800/60"
          style={{ aspectRatio: "1/1" }}
        >
          {/* Previous image — slides out to left */}
          {prev !== null && (
            <img
              key={`prev-${prev}`}
              src={images[prev]}
              alt={`${product.name} ${prev + 1}`}
              className="absolute inset-0 h-full w-full object-contain p-4"
              style={{
                animation: "slideOutLeft 0.6s cubic-bezier(0.4,0,0.2,1) forwards",
              }}
            />
          )}

          {/* Current image — slides in from right */}
          <img
            key={`cur-${current}`}
            src={images[current]}
            alt={`${product.name} ${current + 1}`}
            className="absolute inset-0 h-full w-full object-contain p-4"
            style={{
              animation: prev !== null
                ? "slideInRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards"
                : "none",
            }}
          />

          {/* Gradient shimmer at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          {/* Category badge */}
          <span className="font-bengali absolute left-3 top-3 z-10 rounded-full bg-violet-600 dark:bg-violet-500 px-3 py-1 text-xs font-semibold text-white shadow">
            {product.category}
          </span>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.preventDefault(); goTo(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-5 bg-violet-500 shadow-[0_0_6px_2px_rgba(139,92,246,0.6)]"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link to={`/${product.id}`}>
          <h3 className="font-bengali text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug hover:text-violet-700 dark:hover:text-violet-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="h-px bg-gradient-to-r from-violet-300 dark:from-violet-700 via-slate-200 dark:via-slate-700 to-transparent" />

        <p className="font-bengali flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
          {product.details}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bengali mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 dark:bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-600 dark:hover:bg-green-500 hover:shadow-md active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          অর্ডার করতে WhatsApp করুন
        </a>
      </div>
    </div>
  );
};

export default SlidingProductCard;
