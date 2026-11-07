import React from 'react';
import { Award, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: `${siteConfig.business.experienceYears}+ Years`,
      label: 'Field Experience',
      desc: 'Fixing electrical appliances across Berhampur',
      icon: Award,
    },
    {
      value: siteConfig.business.satisfiedClients,
      label: 'Appliances Serviced',
      desc: 'ACs, fridges, washing machines & TVs restored',
      icon: CheckCircle,
    },
    {
      value: siteConfig.business.turnaroundTime,
      label: 'Doorstep Response',
      desc: 'Quick technician visit anywhere in Berhampur',
      icon: Clock,
    },
    {
      value: '100%',
      label: 'Genuine Spare Parts',
      desc: 'Original brand-certified components used',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-10 bg-slate-100 dark:bg-[#0a111e] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

