import React from 'react';

export const GazetteTicker: React.FC = () => {
  return (
    <aside
      aria-label="Warta Resmi dan Kontak Cepat"
      className="w-full border-b border-line bg-paper-subtle text-xs text-ink-muted tracking-tight"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-y-2 text-xs">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-forest rounded-full animate-pulse" aria-hidden="true"></span>
          <span className="font-medium text-ink">Dokumen &amp; Warta Resmi Mahasiswa Turatea</span>
          <span className="text-line hidden sm:inline" aria-hidden="true">•</span>
          <span className="hidden sm:inline text-ink-subtle">Kota Makassar, Sulawesi Selatan</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-ink-muted font-normal">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-ink">Aspura:</span> Panakkukang
          </span>
          <span className="text-line" aria-hidden="true">/</span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-ink">Aspuri:</span> Minasaupa
          </span>
          <span className="text-line hidden sm:inline" aria-hidden="true">•</span>
          <a
            className="inline-flex items-center gap-1 text-forest hover:text-forest-deep font-medium underline underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-forest"
            href="https://www.instagram.com/asrama.hpmt/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Kunjungi Instagram resmi @asrama.hpmt (terbuka di tab baru)"
          >
            <span>@asrama.hpmt</span>
            <span className="text-[10px]" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
