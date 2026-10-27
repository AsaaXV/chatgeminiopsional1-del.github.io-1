import React, { useState, useCallback } from 'react';
import { GazetteTicker } from './components/GazetteTicker.tsx';
import { CivicHeader } from './components/CivicHeader.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ManifestoSection } from './components/ManifestoSection.tsx';
import { WismaDirectory } from './components/WismaDirectory.tsx';
import { FacilitiesLedger } from './components/FacilitiesLedger.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { CivicFooter } from './components/CivicFooter.tsx';
import { RegistrationFlowModal } from './components/RegistrationFlowModal.tsx';
import { ImageLightbox } from './components/ImageLightbox.tsx';
import { MobileBottomNav } from './components/MobileBottomNav.tsx';
import { SplashScreen } from './components/SplashScreen.tsx';
import type { ArchivalPhoto } from './data/dormitoryData.ts';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationUnit, setRegistrationUnit] = useState<'aspura' | 'aspuri'>('aspura');
  const [selectedPhoto, setSelectedPhoto] = useState<ArchivalPhoto | null>(null);
  const [splashDone, setSplashDone] = useState(false);

  const handleOpenRegistration = (unit: 'aspura' | 'aspuri' = 'aspura') => {
    setRegistrationUnit(unit);
    setIsRegistrationOpen(true);
  };

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {/* ── Splash / Intro Screen ── */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      {/* ── Main App (rendered behind splash, fades in after) ── */}
      <div
        className={`font-sans selection:bg-forest selection:text-paper min-h-screen flex flex-col bg-paper text-ink pb-safe transition-opacity duration-500 ${
          splashDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top Gazette Editorial Runner */}
        <GazetteTicker />

        {/* Main Header / Navigation */}
        <CivicHeader onOpenRegistration={handleOpenRegistration} />

        {/* Main Content Area */}
        <main className="w-full flex-1 pb-20 lg:pb-0">
          {/* Hero Section with Documentary Photography */}
          <HeroSection
            onSelectPhoto={setSelectedPhoto}
            onOpenRegistration={() => handleOpenRegistration('aspura')}
          />

          {/* Manifesto & Siri' na Pacce Cultural Section */}
          <ManifestoSection />

          {/* Wisma Directory (Aspura & Aspuri Ledgers) */}
          <WismaDirectory onSelectUnitForRegistration={handleOpenRegistration} />

          {/* Facilities & Communal Living Ledger Table + Monthly Dues Estimator */}
          <FacilitiesLedger />

          {/* Frequently Asked Questions */}
          <FaqSection />

          {/* Direct Contact & Social Channels */}
          <ContactSection />
        </main>

        {/* Grounded Civic Footer */}
        <CivicFooter />

        {/* Persistent Bottom Navigation for Mobile Phone */}
        <MobileBottomNav onOpenRegistration={() => handleOpenRegistration('aspura')} />

        {/* Registration & Sowan Inquiry Modal */}
        <RegistrationFlowModal
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
          initialUnit={registrationUnit}
        />

        {/* Image Lightbox Viewer */}
        <ImageLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={setSelectedPhoto}
        />
      </div>
    </>
  );
}
