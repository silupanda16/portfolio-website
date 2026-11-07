import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin, CheckCircle, Wrench, Star } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-100/80 via-white to-slate-50 dark:from-[#080e1b] dark:via-[#070b14] dark:to-[#080d1a] border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Subtle Background Glows (No rainbow/violet, strictly industrial blue/amber) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-blue-600/10 dark:bg-blue-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Action buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              {siteConfig.hero.badge}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {siteConfig.hero.title}{' '}
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500">
                {siteConfig.hero.highlightText}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>

            {/* Local Trust Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-500" /> 10+ Years Trusted Experience
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-500" /> 100% Genuine Spare Parts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-500" /> COD & UPI Accepted
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Call Button */}
              <a
                href={`tel:${siteConfig.business.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wide bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Silu Panda Now</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.business.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wide bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Contact & Address Meta */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Medical Bank Colony 5th Lane & Bapuji Nagar, Berhampur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Doorstep arrival in 60 to 90 mins</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-slate-200/90 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl shadow-slate-900/10">
                {/* Main Hero Photo (Technician Official Portrait) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-inner">
                  <img
                    src="/images/heroimage.jpeg"
                    alt="Silu Panda - Senior Appliance Specialist at S.S. Services Berhampur"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/newvisitingcard.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Photo Overlay Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-extrabold text-base tracking-tight">{siteConfig.business.founder}</p>
                        <p className="text-xs text-amber-400 font-medium">Lead Specialist • AC, Fridge, Washer & TV</p>
                      </div>
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-300 border border-amber-400/30">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>4.9 / 5</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-Card Info */}
                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">S.S. Services Workshop</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">All Brand Parts In Stock</p>
                    </div>
                  </div>
                  <a
                    href="#workplace-gallery"
                    className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    View Real Work &rarr;
                  </a>
                </div>
              </div>

              {/* Floating Badge 1: 10+ Years Experience */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">10+ Years</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Field Proven</div>
                </div>
              </div>

              {/* Floating Badge 2: Quick Response */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">60–90 Min</div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Doorstep Visit</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

