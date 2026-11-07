import React, { useState } from 'react';
import { siteConfig, ServiceItem } from '../data/siteConfig';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  AirVent,
  Refrigerator,
  Disc,
  Tv,
  Wrench
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  AirVent,
  Refrigerator,
  Disc,
  Tv,
  Wrench,
};

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Appliances' },
    { id: 'ac-service', label: 'Air Conditioners' },
    { id: 'refrigerator-service', label: 'Refrigerators' },
    { id: 'washing-machine', label: 'Washing Machines' },
    { id: 'tv-repair', label: 'Smart TVs' },
  ];

  const filterService = (service: ServiceItem) => {
    if (activeCategory === 'all') return true;
    return service.id === activeCategory;
  };

  const filteredServices = siteConfig.services.filter(filterService);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Appliance Repair & Installation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Doorstep Repair Services in Berhampur
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Dedicated expertise in Air Conditioners, Refrigerators, Washing Machines, and Smart LED TVs. Fast diagnosis with 100% genuine replacement parts.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid (Clean 4-column / 2x2 responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            const whatsappText = `Hello Silu bhai, I need *${service.title}* at my address in Berhampur. Please let me know your earliest slot.`;

            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {service.badge && (
                    <span className="absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-1 rounded-md shadow">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      S.S. Services
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features / Issues Handled */}
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Common Issues Handled:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${siteConfig.business.primaryPhone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Silu</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            Need doorstep diagnosis in Berhampur?{' '}
            <a
              href={`tel:${siteConfig.business.primaryPhone}`}
              className="text-amber-600 dark:text-amber-400 font-bold underline ml-1 hover:text-amber-500"
            >
              Call Silu Panda directly at +91 {siteConfig.business.primaryPhone}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
