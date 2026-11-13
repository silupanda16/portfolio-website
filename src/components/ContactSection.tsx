import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  ExternalLink,
  CheckCircle2,
  QrCode,
  Copy,
  Check,
  X,
  ZoomIn,
  ShieldCheck
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ContactSection: React.FC = () => {
  const [selectedAppliance, setSelectedAppliance] = useState('Air Conditioner (AC)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(siteConfig.business.payment.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const appliances = [
    'Air Conditioner (AC)',
    'Refrigerator / Fridge',
    'Washing Machine',
    'Smart LED / LCD TV'
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = 
`*NEW SERVICE INQUIRY - S.S. SERVICES*
---------------------------------
*Appliance:* ${selectedAppliance}
*Name:* ${customerName || 'Customer'}
*Phone:* ${customerPhone || 'Not specified'}
*Address / Area:* ${customerAddress || 'Berhampur'}
*Issue Details:* ${issueDescription || 'Need general inspection & repair'}
---------------------------------
_Sent via S.S. Services Website_`;

    const url = `https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-100/80 dark:bg-[#080e1b] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Direct Contact & Locations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Book Doorstep Repair or Contact Silu Panda
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Reach out directly by phone, send an instant WhatsApp booking, or visit our service hub in Berhampur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Primary Call Silu */}
              <a
                href={`tel:${siteConfig.business.primaryPhone}`}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-amber-500 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Lead Specialist
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">
                  {siteConfig.business.founder}
                </h4>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">
                  {siteConfig.business.primaryPhoneDisplay}
                </p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  ● Tap to Call Directly
                </span>
              </a>

              {/* WhatsApp direct card */}
              <a
                href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.business.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Instant Chat
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">
                  WhatsApp Support
                </h4>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">
                  +91 {siteConfig.business.whatsappNumber}
                </p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  ● Fast 5-min Response
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="sm:col-span-2 p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-amber-500 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Inquiries
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {siteConfig.business.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:underline">
                  Send Email &rarr;
                </span>
              </a>

            </div>

            {/* Address Cards */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Primary Service Hub:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {siteConfig.business.primaryAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Workshop & Branch:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {siteConfig.business.secondaryAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{siteConfig.business.serviceHours}</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-sm bg-white dark:bg-slate-900">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  Service Area: Berhampur, Odisha (760004)
                </span>
                <a
                  href={siteConfig.business.mapDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe
                title="S.S. Services Location in Berhampur"
                src={siteConfig.business.mapEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[1.05]"
              />
            </div>

          </div>

          {/* Right Column: Instant WhatsApp Booking Generator & Official UPI QR */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Booking</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  Schedule Doorstep Repair
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Select your appliance and address. Tap below to send details straight to Silu Panda's WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                {/* Select Appliance */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Select Appliance *
                  </label>
                  <select
                    value={selectedAppliance}
                    onChange={(e) => setSelectedAppliance(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {appliances.map((app) => (
                      <option key={app} value={app} className="bg-white dark:bg-slate-900">
                        {app}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Mohapatra"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Customer Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Address / Area in Berhampur */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Area / Address in Berhampur *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Near Medical Bank Colony, Berhampur"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Issue Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Describe Problem (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Refrigerator is not cooling / AC water leaking / Washing machine spinning issue"
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Trust bullets */}
                <div className="py-1 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Free diagnostic estimate provided before starting work</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Doorstep visit in 60-90 minutes across Berhampur</span>
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-black text-sm uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking to WhatsApp</span>
                </button>
              </form>

              {/* Direct Call alternative */}
              <div className="mt-4 text-center">
                <span className="text-xs text-slate-500 dark:text-slate-400">Prefer direct phone call? </span>
                <a
                  href={`tel:${siteConfig.business.primaryPhone}`}
                  className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Dial +91 {siteConfig.business.primaryPhone}
                </a>
              </div>

            </div>

            {/* Official UPI Payment QR Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col sm:flex-row items-center gap-5">
              <button
                type="button"
                onClick={() => setIsQrModalOpen(true)}
                className="group relative w-28 h-34 rounded-2xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 hover:border-amber-500 shadow-md shrink-0 cursor-pointer transition-all hover:scale-105"
                title="Click to enlarge UPI QR Code"
              >
                <img
                  src={siteConfig.business.payment.qrCodeImage}
                  alt={`Official S.S. Services UPI QR - ${siteConfig.business.payment.upiId}`}
                  width={112}
                  height={136}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-amber-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Enlarge</span>
                </div>
              </button>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full mb-1.5">
                  <QrCode className="w-3 h-3" />
                  <span>Instant UPI Payment</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Scan QR to Pay After Repair
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Pay securely via PhonePe, Google Pay, Paytm, or BHIM once your appliance is tested and verified.
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <div className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-900 dark:text-white">
                    UPI ID: {siteConfig.business.payment.upiId}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
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

                  <button
                    type="button"
                    onClick={() => setIsQrModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Full QR</span>
                  </button>
                </div>
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
              <button
                type="button"
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close QR modal"
              >
                <X className="w-5 h-5" />
              </button>

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
