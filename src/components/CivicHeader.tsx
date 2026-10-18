import React, { useState } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface CivicHeaderProps {
  onOpenRegistration: (unit?: 'aspura' | 'aspuri') => void;
}

export const CivicHeader: React.FC<CivicHeaderProps> = ({ onOpenRegistration }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-line bg-paper sticky top-0 z-30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:pt-5 sm:pb-4">
        <div className="flex items-center justify-between gap-3 sm:pb-4 sm:border-b sm:border-line">
          {/* Logo & Civic Seal */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img
              alt="Logo Resmi Asrama HPMT Jeneponto"
              className="w-9 h-9 sm:w-14 sm:h-14 object-contain rounded border border-line bg-white p-0.5 sm:p-1 shrink-0"
              src={OFFICIAL_LOGOS.emblem}
              width={56}
              height={56}
            />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-forest font-bold block leading-none mb-0.5">
                Badan Khusus Asrama • PP HPMT
              </span>
              <a
                className="font-serif text-[15px] sm:text-3xl tracking-tight font-bold text-forest leading-tight hover:text-forest-light transition-colors block whitespace-nowrap"
                href="#"
              >
                Asrama HPMT Jeneponto
              </a>
              <p className="text-xs text-ink-muted mt-1 font-normal max-w-lg hidden sm:block">
                Himpunan Pelajar Mahasiswa Turatea — Ruang hidup, berteduh, dan silaturahmi di Makassar.
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-5 text-xs font-medium text-ink">
            <a className="hover:text-forest transition-colors font-semibold text-forest" href="#">
              Beranda
            </a>
            <a className="hover:text-forest transition-colors" href="#dua-wisma">
              Direktori Wisma
            </a>
            <a className="hover:text-forest transition-colors" href="#kehidupan-fasilitas">
              Fasilitas &amp; Iuran
            </a>
            <a className="hover:text-forest transition-colors" href="#manifesto-filosofi">
              Siri' na Pacce
            </a>
            <a className="hover:text-forest transition-colors" href="#alur-pendaftaran">
              Alur Warga Baru
            </a>
            <a className="hover:text-forest transition-colors" href="#kontak-silaturahmi">
              Narahubung
            </a>
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-paper bg-forest hover:bg-forest-deep transition-colors cursor-pointer"
            >
              <span>Daftar / Sowan Warga</span>
              <span className="text-[11px]" aria-hidden="true">→</span>
            </button>
          </nav>

          {/* Mobile navigation controls */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="min-h-[34px] px-2.5 py-1 text-[11px] font-bold text-paper bg-forest hover:bg-forest-deep rounded-xs shadow-xs cursor-pointer"
            >
              Sowan
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[34px] min-w-[34px] p-1.5 border border-line rounded-xs text-ink hover:bg-paper-subtle focus:outline-none flex items-center justify-center cursor-pointer"
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
        {mobileMenuOpen && (
          <nav aria-label="Navigasi Ponsel" className="lg:hidden pt-3 pb-2 space-y-2 text-xs font-medium text-ink border-t border-line mt-2">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs font-semibold text-forest"
              href="#"
            >
              Beranda
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs"
              href="#dua-wisma"
            >
              Direktori Wisma (Aspura &amp; Aspuri)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs"
              href="#kehidupan-fasilitas"
            >
              Fasilitas &amp; Iuran Swakelola
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs"
              href="#manifesto-filosofi"
            >
              Filosofi Siri' na Pacce
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs"
              href="#alur-pendaftaran"
            >
              Syarat &amp; Alur Warga Baru
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 px-2 hover:bg-paper-subtle rounded-xs"
              href="#kontak-silaturahmi"
            >
              Narahubung &amp; Lokasi
            </a>
          </nav>
        )}

        {/* Sub-header ticker bar - only on tablet & desktop */}
        <div className="hidden sm:flex pt-2.5 flex-wrap items-center justify-between text-[11px] text-ink-subtle tracking-wide uppercase gap-2">
          <div className="flex items-center gap-3">
            <span className="text-forest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
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
