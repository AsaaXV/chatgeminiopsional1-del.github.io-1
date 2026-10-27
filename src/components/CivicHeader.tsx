import React, { useState, useEffect } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface CivicHeaderProps {
  onOpenRegistration: (unit?: 'aspura' | 'aspuri') => void;
}

export const CivicHeader: React.FC<CivicHeaderProps> = ({ onOpenRegistration }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow and close menu on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', href: '#' },
    { label: 'Direktori Wisma', href: '#dua-wisma' },
    { label: 'Fasilitas & Iuran', href: '#kehidupan-fasilitas' },
    { label: "Siri' na Pacce", href: '#manifesto-filosofi' },
    { label: 'Alur Warga', href: '#alur-pendaftaran' },
    { label: 'Narahubung', href: '#kontak-silaturahmi' },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-line transition-all duration-200 ${
        scrolled ? 'shadow-sm py-2' : 'py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* ── BRAND / LOGO ── */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 group"
            aria-label="Kembali ke Beranda Asrama HPMT Jeneponto"
          >
            <div className="relative shrink-0">
              <img
                alt="Logo Resmi Asrama HPMT Jeneponto"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-sm border border-line bg-white p-1 group-hover:border-forest transition-colors shadow-2xs"
                src={OFFICIAL_LOGOS.emblem}
                width={48}
                height={48}
              />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-forest font-bold block leading-none mb-0.5">
                PP HPMT • Jeneponto
              </span>
              <span className="font-serif text-[16px] sm:text-2xl font-bold text-forest leading-tight group-hover:text-forest-light transition-colors block truncate">
                Asrama Mahasiswa
              </span>
              <span className="text-[11px] text-ink-muted hidden sm:block font-sans font-normal truncate">
                Kota Makassar • Butta Turatea
              </span>
            </div>
          </a>

          {/* ── DESKTOP NAVIGATION ── */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-ink"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-sm transition-all ${
                  idx === 0
                    ? 'font-bold text-forest bg-paper-subtle'
                    : 'text-ink/80 hover:text-forest hover:bg-paper-subtle'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="h-4 w-px bg-line mx-2" aria-hidden="true" />

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-paper text-xs font-semibold rounded-sm hover:bg-forest-deep active:scale-98 transition-all shadow-xs cursor-pointer ml-1"
            >
              <span>Ajukan Sowan</span>
              <span aria-hidden="true" className="text-[11px]">→</span>
            </button>
          </nav>

          {/* ── MOBILE CONTROLS ── */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="min-h-[38px] px-3.5 py-1.5 text-xs font-bold text-paper bg-forest hover:bg-forest-deep active:scale-98 rounded-sm shadow-xs cursor-pointer flex items-center gap-1"
            >
              <span>Sowan</span>
              <span aria-hidden="true" className="text-[11px]">→</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[38px] min-w-[38px] p-2 border border-line rounded-sm text-ink hover:bg-paper-subtle active:bg-paper-muted focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6.5h16M4 12h16M4 17.5h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN DRAWER ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-3 pt-3 border-t border-line' : 'max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Menu Ponsel" className="space-y-1 text-sm font-medium pb-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-sm transition-colors ${
                  idx === 0
                    ? 'font-bold text-forest bg-paper-subtle'
                    : 'text-ink hover:bg-paper-subtle hover:text-forest'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-ink-subtle text-xs" aria-hidden="true">→</span>
              </a>
            ))}

            <div className="pt-2 px-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-forest text-paper text-xs font-bold rounded-sm shadow-xs hover:bg-forest-deep transition-colors"
              >
                <span>Pendaftaran &amp; Sowan Warga Baru</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
