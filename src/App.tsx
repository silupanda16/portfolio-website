import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
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

export const App: React.FC = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;

