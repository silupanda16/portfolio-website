import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Award,
  Clock,
  ShieldCheck,
  BadgePercent,
  CheckCircle2,
  Smartphone,
  ShieldAlert,
  QrCode,
  Copy,
  Check,
  X,
  ZoomIn,
  MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Clock,
  ShieldCheck,
  BadgePercent,
  CheckCircle2,
  Smartphone,
};

export const TrustSection: React.FC = () => {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteConfig.business.payment.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-100/70 dark:bg-[#090f1d] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Customer-First Guarantees</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Why Berhampur Families Choose S.S. Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            We know inviting a technician into your home requires safety, competence, and honesty. Here is how we guarantee your satisfaction.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.trustPillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.iconName] || ShieldCheck;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Payment & Security strip with Interactive UPI QR Code */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 text-lg border border-emerald-500/20">
              ✓
            </div>
            <div>
              <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Pay Only After Verification & Testing
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Zero advance fee required for standard inspection visits. Scan official UPI QR or pay cash after repair.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  UPI Accepted
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  PhonePe
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  Google Pay
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  Paytm
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                  Cash on Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Interactive QR Code Preview & UPI Controls */}
          <div className="w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700/80 lg:pl-6 flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4">
            <button
              type="button"
              onClick={() => setIsQrModalOpen(true)}
              className="group relative w-16 h-20 rounded-xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 hover:border-amber-500 shadow-md shrink-0 cursor-pointer transition-all hover:scale-105"
              title="Click to enlarge UPI Payment QR Code"
            >
              <img
                src={siteConfig.business.payment.qrCodeImage}
                alt={`Official UPI QR Code - ${siteConfig.business.payment.upiId}`}
                width={64}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <ZoomIn className="w-5 h-5 text-amber-400" />
              </div>
            </button>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Official UPI ID:
                </span>
                <span className="text-xs sm:text-sm font-black font-mono text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  {siteConfig.business.payment.upiId}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsQrModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm shadow-amber-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan QR to Pay</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700/90 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedUpi ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy UPI ID</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Screen UPI QR Lightbox Modal */}
        {isQrModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
            onClick={() => setIsQrModalOpen(false)}
          >
            <div
              className="relative max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close QR modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-5 pb-3 text-center border-b border-slate-100 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Business Payment</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Scan & Pay via Any UPI App
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {siteConfig.business.payment.merchantName} • Berhampur
                </p>
              </div>

              {/* Crisp QR Image Container */}
              <div className="p-6 bg-slate-950 flex flex-col items-center justify-center">
                <div className="p-3 rounded-2xl bg-black border border-slate-800 shadow-inner max-w-[270px] w-full">
                  <img
                    src={siteConfig.business.payment.qrCodeImage}
                    alt={`UPI Payment QR Code - ${siteConfig.business.payment.upiId}`}
                    width={270}
                    height={330}
                    decoding="async"
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-5 space-y-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Official UPI ID
                    </div>
                    <div className="text-sm font-black font-mono text-slate-900 dark:text-white">
                      {siteConfig.business.payment.upiId}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    {copiedUpi ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Works with PhonePe, GPay, Paytm & BHIM
                  </span>
                  <a
                    href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Silu bhai, I have completed the UPI payment to ${siteConfig.business.payment.upiId} for my appliance service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-sm shrink-0 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Share Receipt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


