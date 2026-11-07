import React, { useState } from 'react';
import { Camera, X, ZoomIn, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  caption: string;
}

export const WorkplaceGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const photos: GalleryPhoto[] = [
    {
      id: 'p1',
      title: 'Visiting Card & Official Contact Hub',
      category: 'credentials',
      src: '/images/newvisitingcard.jpg',
      caption: 'Official S.S. Services visiting card with verified primary mobile contact (Silu Panda: 9040423413) and supported brands in Berhampur.'
    },
    {
      id: 'p2',
      title: 'Outdoor Unit and Gas Filling in AC',
      category: 'ac',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.43 PM.jpeg',
      caption: 'High-pressure nitrogen leak testing, vacuumization, and precision eco-gas charging (R32 / R410A) on outdoor split AC condenser units for maximum cooling efficiency.'
    },
    {
      id: 'p3',
      title: 'AC Outdoor Condenser & Compressor Overhaul',
      category: 'ac',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.45 PM.jpeg',
      caption: 'Outdoor unit troubleshooting, high-pressure leak testing, and eco-friendly refrigerant gas replenishment.'
    },
    {
      id: 'p4',
      title: 'Appliance Electrical Diagnostics on Workbench',
      category: 'workshop',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.47 PM.jpeg',
      caption: 'Workshop bench testing of internal electronic components, motor relays, and temperature sensors.'
    },
    {
      id: 'p5',
      title: 'Indoor Unit Service in Railway Control Room',
      category: 'ac',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.48 PM.jpeg',
      caption: 'High-precision indoor unit deep cleaning, air blower servicing, and circuit calibration carried out inside the Railway Control Room for critical 24/7 cooling reliability.'
    },
    {
      id: 'p6',
      title: 'Appliance Motor Assembly & Rewiring',
      category: 'workshop',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.50 PM.jpeg',
      caption: 'Heavy-duty copper rewinding and capacitor balancing for washing machine and compressor motors.'
    },
    {
      id: 'p7',
      title: 'Air Conditioner Field Servicing in Berhampur',
      category: 'ac',
      src: '/images/WhatsApp Image 2026-11-01 at 4.31.54 PM.jpeg',
      caption: 'Doorstep AC deep servicing and indoor unit jet cleaning to restore ice-cold airflow.'
    },
    {
      id: 'p8',
      title: 'On-Site Diagnostic Check by Silu Panda',
      category: 'workshop',
      src: '/images/WhatsApp Image 2026-11-01 at 4.32.30 PM (1).jpeg',
      caption: 'Silu verifying circuit conductivity and motor load on-site at a customer residence.'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeFilter);

  return (
    <section id="workplace-gallery" className="py-16 lg:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Real Local Work in Berhampur</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Our On-Site Work & Workshop Gallery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real photos from our daily field repair assignments across Berhampur. Genuine work, actual tools, and zero stock gimmickry.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'ac', label: 'AC Service' },
            { id: 'fridge', label: 'Fridge & Cooling' },
            { id: 'washing-machine', label: 'Washing Machine' },
            { id: 'workshop', label: 'Workshop & Diagnostics' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-square cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Overlay Text */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                    {photo.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-bold line-clamp-2 leading-tight">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div className="relative max-w-3xl w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] sm:max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[60vh] sm:max-h-[65vh] w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    S.S. Services Berhampur
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {selectedPhoto.caption}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Real on-site photo verified</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${siteConfig.business.primaryPhone}`}
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5 shadow"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call Silu</span>
                    </a>
                    <a
                      href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Silu bhai, I saw your work photo (${selectedPhoto.title}) on your website. I need similar repair service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

