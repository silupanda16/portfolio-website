import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LogoModalProvider } from './context/LogoModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { StatsBar } from './components/StatsBar';
import { ServicesGrid } from './components/ServicesGrid';
import { TrustSection } from './components/TrustSection';
import { WorkplaceGallery } from './components/WorkplaceGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { OwnerNotesPage } from './components/OwnerNotesPage';

const normalizePath = (p: string) => {
  const clean = p.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
};

export const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Hidden owner-only route
  if (currentPath === '/silu-sili123') {
    return <OwnerNotesPage />;
  }

  // Public Portfolio Website
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-100 selection:bg-amber-500 selection:text-white transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandMarquee />
        <StatsBar />
        <ServicesGrid />
        <TrustSection />
        <WorkplaceGallery />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LogoModalProvider>
        <AppContent />
      </LogoModalProvider>
    </ThemeProvider>
  );
};

export default App;
