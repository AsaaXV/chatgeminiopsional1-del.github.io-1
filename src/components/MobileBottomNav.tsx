import React from 'react';

interface MobileBottomNavProps {
  onOpenRegistration: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenRegistration }) => {
  return (
    <nav
      aria-label="Navigasi Cepat Ponsel"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pb-safe bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-lg"
    >
      <div className="flex justify-around items-center h-15 max-w-lg mx-auto px-2">
        {/* Beranda */}
        <a
          href="#"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-forest hover:text-forest-deep transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Beranda</span>
        </a>

        {/* Direktori Wisma */}
        <a
          href="#dua-wisma"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-slate-500 hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Wisma</span>
        </a>

        {/* Daftar - Center Rounded Elevated Pill Button */}
        <button
          type="button"
          onClick={onOpenRegistration}
          className="flex items-center justify-center gap-1.5 px-4 py-2 bg-forest text-white rounded-full hover:bg-forest-deep transition-all shadow-md cursor-pointer -translate-y-1 active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <span className="text-xs font-extrabold tracking-wide">DAFTAR</span>
        </button>

        {/* Fasilitas */}
        <a
          href="#kehidupan-fasilitas"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-slate-500 hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Fasilitas</span>
        </a>

        {/* Kontak */}
        <a
          href="#kontak-silaturahmi"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-slate-500 hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Kontak</span>
        </a>
      </div>
    </nav>
  );
};
