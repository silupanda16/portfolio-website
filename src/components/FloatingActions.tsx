import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FloatingActions: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(
        `https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
          siteConfig.business.whatsappDefaultMessage
        )}`,
        '_blank'
      );
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom right) */}
      <aside aria-label="Quick contact" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Helper pop-up message */}
        <div className="bg-slate-900 text-white text-xs py-1.5 px-3 rounded-full shadow-lg border border-slate-700 animate-bounce flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Need Quick Repair in Berhampur?</span>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          aria-label="Contact Silu on WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>
          <span className="text-sm font-extrabold tracking-wide pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Sticky Bar (High conversion for mobile users in India) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-2.5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          {/* Quick Call */}
          <a
            href={`tel:${siteConfig.business.primaryPhone}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md active:bg-amber-400"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Silu</span>
          </a>

          {/* Quick WhatsApp or Contact jump */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-black text-xs uppercase tracking-wider bg-emerald-600 text-white shadow-md active:bg-emerald-500"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

