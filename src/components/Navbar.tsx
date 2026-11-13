import React, { useState, useEffect } from 'react';
import { Phone, Moon, Sun, Menu, X, Shield, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Brands', href: '#brands' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Work', href: '#workplace-gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-amber-400 font-semibold">Berhampur Doorstep Service:</span>
            <span className="hidden sm:inline">60-90 Min Response • AC, Fridge, Washing Machine & TV</span>
            <span className="sm:hidden">Fast In-Home Repair</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> 10+ Years Experience
            </span>
            <a
              href={`tel:${siteConfig.business.primaryPhone}`}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {siteConfig.business.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0b1220]/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80'
            : 'bg-white dark:bg-[#070d18] border-b border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white p-0.5 shadow-md ring-2 ring-amber-500/40 dark:ring-amber-400/50 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
                <img
                  src={siteConfig.business.logo}
                  alt={`${siteConfig.business.name} Official Logo`}
                  width={56}
                  height={56}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    {siteConfig.business.name}
                  </span>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">
                    Berhampur
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                  Appliance Repair & Electrical Experts
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions: Theme Toggle + Contact Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                className="p-2 sm:p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-700" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-400" />
                )}
              </button>

              {/* Quick WhatsApp CTA Button (Desktop) */}
              <a
                href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.business.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Direct Call Button (Desktop) */}
              <a
                href={`tel:${siteConfig.business.primaryPhone}`}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all transform active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call Silu</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1322] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.business.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-amber-500 text-slate-950 shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Silu Panda: {siteConfig.business.primaryPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/91${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.business.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Service on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

