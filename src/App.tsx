import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { RegistrationSection } from './components/RegistrationSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { SponsorsSection } from './components/SponsorsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleScrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar onOpenRegister={handleScrollToRegister} />
        <main className="flex-1">
          <HeroSection onOpenRegister={handleScrollToRegister} />
          <AboutSection />
          <AgendaSection />
          <SpeakersSection />
          <RegistrationSection />
          <LocationSection />
          <GallerySection />
          <SponsorsSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
