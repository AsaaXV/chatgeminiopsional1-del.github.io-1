import React, { useState, useEffect } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface CivicHeaderProps {
  onOpenRegistration: (unit?: 'aspura' | 'aspuri') => void;
}

export const CivicHeader: React.FC<CivicHeaderProps> = ({ onOpenRegistration }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when user taps outside (scroll or link)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
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
    { label: 'Alur Warga Baru', href: '#alur-pendaftaran' },
    { label: 'Narahubung', href: '#kontak-silaturahmi' },
  ];

  return (
    <header
      className={`w-full border-b border-line bg-paper sticky top-0 z-30 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:pt-5 sm:pb-4">
        <div className="flex items-center justify-between gap-3 sm:pb-4 sm:border-b sm:border-line">
          {/* Logo & Civic Seal */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 min-w-0 group">
            <img
              alt="Logo Resmi Asrama HPMT Jeneponto"
              className="w-9 h-9 sm:w-14 sm:h-14 object-contain rounded border border-line bg-white p-0.5 sm:p-1 shrink-0 group-hover:border-forest transition-colors"
              src={OFFICIAL_LOGOS.emblem}
              width={56}
              height={56}
            />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-forest font-bold block leading-none mb-0.5">
                Badan Khusus Asrama • PP HPMT
              </span>
              <span className="font-serif text-[15px] sm:text-3xl tracking-tight font-bold text-forest leading-tight group-hover:text-forest-light transition-colors block truncate">
                Asrama HPMT Jeneponto
              </span>
              <p className="text-xs text-ink-muted mt-0.5 font-normal hidden sm:block">
                Himpunan Pelajar Mahasiswa Turatea — Ruang hidup, berteduh, dan silaturahmi di Makassar.
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-5 text-xs font-medium text-ink">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`hover:text-forest transition-colors ${link.href === '#' ? 'font-semibold text-forest' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-paper bg-forest hover:bg-forest-deep transition-colors cursor-pointer rounded-sm"
            >
              <span>Daftar / Sowan Warga</span>
              <span className="text-[11px]" aria-hidden="true">→</span>
            </button>
          </nav>

          {/* Mobile navigation controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="min-h-[38px] px-3 py-1.5 text-[11px] font-bold text-paper bg-forest hover:bg-forest-deep active:bg-forest-deep rounded-sm shadow-xs cursor-pointer"
            >
              Sowan ↗
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[38px] min-w-[38px] p-2 border border-line rounded-sm text-ink hover:bg-paper-subtle active:bg-paper-muted focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            aria-label="Navigasi Ponsel"
            className="pt-3 pb-2 space-y-0.5 text-[13px] font-medium text-ink border-t border-line mt-2"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-sm transition-colors active:bg-paper-muted ${
                  i === 0 ? 'font-semibold text-forest bg-paper-subtle' : 'hover:bg-paper-subtle hover:text-forest'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1 px-3">
              <button
                type="button"
                onClick={() => { setMobileMenuOpen(false); onOpenRegistration(); }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-forest text-paper text-xs font-bold hover:bg-forest-deep active:bg-forest-deep transition-colors rounded-sm cursor-pointer"
              >
                <span>Ajukan Sowan / Pendaftaran</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Sub-header status bar — tablet & desktop only */}
        <div className="hidden sm:flex pt-2.5 flex-wrap items-center justify-between text-[11px] text-ink-subtle tracking-wide uppercase gap-2">
          <div className="flex items-center gap-3">
            <span className="text-forest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse" />
              Status: Terbuka Penerimaan Warga Baru
            </span>
            <span className="text-line hidden md:inline" aria-hidden="true">•</span>
            <span className="hidden md:inline">
              Prinsip: Berlandaskan Semangat <em className="lowercase italic font-serif text-ink font-normal">Siri' na Pacce</em>
            </span>
          </div>
          <div className="font-medium text-ink tracking-normal uppercase text-[11px]">
            Edisi Komunal &amp; Kearsipan Warga
          </div>
        </div>
      </div>
    </header>
  );
};
