import React from 'react';
import { Wrench, Phone, Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#070b14] text-slate-800 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm pb-28 sm:pb-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  {siteConfig.business.name}
                </span>
                <p className="text-[11px] text-amber-700 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Berhampur • Odisha
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Berhampur's trusted doorstep repair specialists for Air Conditioners, Refrigerators, Washing Machines, and Smart TVs. Over {siteConfig.business.experienceYears} years of hands-on technical excellence.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Genuine Spare Parts Guaranteed</span>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Air Conditioner (AC) Repair & Installation</li>
              <li className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Refrigerator & Deep Freezer Service</li>
              <li className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Washing Machine Repair (Top & Front Load)</li>
              <li className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Smart LED / LCD TV Wall Mounting & Repair</li>
            </ul>
          </div>

          {/* Col 3: Contact Details (Silu only) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Contact & Locations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Silu Panda:</strong> +91 {siteConfig.business.primaryPhone} (Call & WhatsApp)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.business.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.business.primaryAddress}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{siteConfig.business.secondaryAddress}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Designer Credit - Prominent & Clickable */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved. Berhampur, Odisha.
          </div>

          {/* Designer / Developer Credit - Prominently visible in both bright and dark modes */}
          <div className="flex items-center">
            <a
              href="https://gamified-portfolio-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit portfolio of Ganesh Sahu"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:border-amber-500/70 text-xs text-slate-800 dark:text-slate-200 transition-all shadow-sm group"
            >
              <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">Designed and developed by</span>
              <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-500 underline underline-offset-2">
                GaneshSahu
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
