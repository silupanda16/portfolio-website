import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  // Trending Indian AC, Refrigerator, Washing Machine & TV brands
  const rowOneBrands = [
    'Samsung',
    'LG',
    'Voltas',
    'Godrej',
    'Whirlpool',
    'Blue Star',
    'Carrier',
    'Lloyd',
    'Electrolux',
    'MarQ',
    'BenQ',
    'IFB',
  ];

  const rowTwoBrands = [
    'Sony',
    'Daikin',
    'Hitachi',
    'Haier',
    'Bosch',
    'Panasonic',
    'O General',
    'TCL',
    'Toshiba',
    'Philips',
    'Sharp',
    'Xiaomi',
  ];

  return (
    <section id="brands" className="py-12 bg-white dark:bg-[#060b14] border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-2">
          <Cpu className="w-3.5 h-3.5 text-amber-500" />
          <span>Multi-Brand Expert Coverage</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Trending Brands We Service in Berhampur
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Equipped with genuine company diagnostic tools and original spare parts for all major Indian household appliance brands.
        </p>
      </div>

      {/* Floating Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden marquee-container py-2">
        <div className="flex w-max animate-marquee-right marquee-track space-x-4">
          {[...rowOneBrands, ...rowOneBrands, ...rowOneBrands].map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-amber-500/50 hover:bg-amber-50/50 dark:hover:bg-slate-800 transition-all select-none group"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold tracking-wide text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Row 2: Right to Left Marquee */}
      <div className="relative w-full overflow-hidden marquee-container py-2 mt-1">
        <div className="flex w-max animate-marquee-left marquee-track space-x-4">
          {[...rowTwoBrands, ...rowTwoBrands, ...rowTwoBrands].map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 transition-all select-none group"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
              <span className="text-sm font-bold tracking-wide text-slate-800 dark:text-slate-200 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom assurance pill */}
      <div className="mt-5 text-center px-4">
        <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Don't see your brand? We service 100% of all inverter & standard models.</span>
        </p>
      </div>
    </section>
  );
};
