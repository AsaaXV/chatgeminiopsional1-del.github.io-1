import React, { useState } from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

interface CivicHeaderProps {
  onOpenRegistration: (unit?: 'aspura' | 'aspuri') => void;
}

export const CivicHeader: React.FC<CivicHeaderProps> = ({ onOpenRegistration }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-forest/30 transition-colors">
              <img
                alt="Logo Resmi Asrama HPMT Jeneponto"
                className="w-full h-full object-contain rounded"
                src={OFFICIAL_LOGOS.emblem}
                width={48}
                height={48}
              />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-forest block leading-none mb-1">
                Badan Khusus Asrama • PP HPMT
              </span>
              <span className="font-sans text-[17px] sm:text-xl font-extrabold text-slate-900 tracking-tight block leading-tight group-hover:text-forest transition-colors">
                Asrama HPMT Jeneponto
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Like Asrama YAPI) */}
          <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-600">
            <a className="text-forest hover:text-forest-deep transition-colors" href="#">
              Beranda
            </a>
            <a className="hover:text-forest transition-colors" href="#dua-wisma">
              Wisma
            </a>
            <a className="hover:text-forest transition-colors" href="#kehidupan-fasilitas">
              Fasilitas &amp; Iuran
            </a>
            <a className="hover:text-forest transition-colors" href="#manifesto-filosofi">
              Siri' na Pacce
            </a>
            <a className="hover:text-forest transition-colors" href="#alur-pendaftaran">
              Alur Masuk
            </a>
            <a className="hover:text-forest transition-colors" href="#kontak-silaturahmi">
              Kontak
            </a>
          </nav>

          {/* Desktop Action Buttons (Rounded Pills) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#kontak-silaturahmi"
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full transition-colors"
            >
              Kunjungan Sowan
            </a>
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-bold text-white bg-forest hover:bg-forest-deep rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Daftar Warga
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenRegistration()}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-forest hover:bg-forest-deep rounded-full shadow-xs cursor-pointer"
            >
              Daftar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav aria-label="Navigasi Ponsel" className="lg:hidden py-4 border-t border-slate-100 space-y-1.5 text-sm font-semibold text-slate-700 animate-in fade-in-50 duration-200">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-forest font-bold"
              href="#"
            >
              Beranda
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50"
              href="#dua-wisma"
            >
              Direktori Wisma (Aspura &amp; Aspuri)
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50"
              href="#kehidupan-fasilitas"
            >
              Fasilitas &amp; Iuran Swakelola
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50"
              href="#manifesto-filosofi"
            >
              Filosofi Siri' na Pacce
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50"
              href="#alur-pendaftaran"
            >
              Syarat &amp; Alur Warga Baru
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-slate-50"
              href="#kontak-silaturahmi"
            >
              Narahubung &amp; Kunjungan
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
