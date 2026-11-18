import React from 'react';
import { X, Phone, MessageSquare, Award, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface BrandLogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandLogoModal: React.FC<BrandLogoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brand-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white dark:bg-[#0c1322] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Brand Card"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Card Header with Industrial Gradient Accent */}
        <div className="relative pt-8 pb-6 px-6 text-center bg-gradient-to-b from-amber-500/10 via-slate-50/60 to-white dark:from-amber-500/10 dark:via-slate-900/60 dark:to-[#0c1322] border-b border-slate-100 dark:border-slate-800/80">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Brand Identity</span>
          </div>

          {/* Enlarged Circular Logo Showcase */}
          <div className="mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 shadow-xl shadow-amber-500/20 ring-4 ring-white dark:ring-slate-900 flex items-center justify-center group">
            <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center shadow-inner">
              <img
                src={siteConfig.business.logo}
                alt={`${siteConfig.business.name} Enlarged Official Logo`}
                width={208}
                height={208}
                decoding="async"
                className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <h3 id="brand-modal-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-5">
            {siteConfig.business.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mt-1">
            Berhampur • Odisha • 760004
          </p>
        </div>

        {/* Card Body Details */}
        <div className="p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center leading-relaxed font-medium">
            {siteConfig.business.tagline}
          </p>

          {/* Quick Credential Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-black text-slate-900 dark:text-white">10+ Years</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Lead Specialist: {siteConfig.business.founder}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs font-black text-slate-900 dark:text-white">5,000+ Fixed</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                Genuine Spare Parts
              </p>
            </div>
          </div>

          {/* Appliance Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {['Air Conditioners', 'Refrigerators & Freezers', 'Washing Machines', 'Smart LED TVs'].map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 pt-1 text-center">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{siteConfig.business.primaryAddress}</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.business.primaryPhone}`}
              className="py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Silu</span>
            </a>

            <a
              href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.business.whatsappDefaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
