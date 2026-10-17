import React from 'react';

interface MobileBottomNavProps {
  onOpenRegistration: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenRegistration }) => {
  return (
    <nav
      aria-label="Navigasi Cepat Ponsel"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pb-safe bg-paper/95 backdrop-blur-md border-t border-line shadow-lg"
    >
      <div className="flex justify-around items-center h-14 max-w-lg mx-auto px-1">
        {/* Warta / Beranda */}
        <a
          href="#"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-forest hover:text-forest-deep transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <span className="text-[10px] font-semibold tracking-wider uppercase mt-0.5">Warta</span>
        </a>

        {/* Direktori Wisma */}
        <a
          href="#dua-wisma"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-ink-muted hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span className="text-[10px] font-medium tracking-wider uppercase mt-0.5">Direktori</span>
        </a>

        {/* Sowan / Daftar - Center Elevated CTA */}
        <button
          type="button"
          onClick={onOpenRegistration}
          className="flex flex-col items-center justify-center min-w-[62px] min-h-[44px] px-2 py-1 bg-forest text-paper rounded-xs hover:bg-forest-deep transition-all shadow-xs cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-[9.5px] font-bold tracking-wider uppercase mt-0.5">Daftar</span>
        </button>

        {/* Iuran & Fasilitas */}
        <a
          href="#kehidupan-fasilitas"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-ink-muted hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          <span className="text-[10px] font-medium tracking-wider uppercase mt-0.5">Fasilitas</span>
        </a>

        {/* Narahubung */}
        <a
          href="#kontak-silaturahmi"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-ink-muted hover:text-forest transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-[10px] font-medium tracking-wider uppercase mt-0.5">Kontak</span>
        </a>
      </div>
    </nav>
  );
};
