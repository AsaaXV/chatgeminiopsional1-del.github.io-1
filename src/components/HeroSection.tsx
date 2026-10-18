import React from 'react';
import { ARCHIVAL_PHOTOS, ArchivalPhoto } from '../data/dormitoryData.ts';

interface HeroSectionProps {
  onSelectPhoto: (photo: ArchivalPhoto) => void;
  onOpenRegistration: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto, onOpenRegistration }) => {
  const gatePhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gate') || ARCHIVAL_PHOTOS[0];
  const gazeboPhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gazebo') || ARCHIVAL_PHOTOS[1];
  const yardPhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'yard') || ARCHIVAL_PHOTOS[2];
  const sidePhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'side') || ARCHIVAL_PHOTOS[3];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-16">
      {/* Headline & Editorial Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-line items-start">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-forest" aria-hidden="true"></span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-forest">
              Catatan Gerbang Perantauan
            </span>
          </div>
          <h1 className="font-serif text-[28px] sm:text-4xl lg:text-[48px] leading-[1.2] sm:leading-[1.12] tracking-tight font-bold text-ink">
            Rumah Bersama Mahasiswa Turatea di Perantauan Makassar.
          </h1>
          <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={onOpenRegistration}
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 bg-forest text-paper text-xs sm:text-sm font-semibold hover:bg-forest-deep transition-all shadow-xs cursor-pointer text-center"
            >
              <span>Ajukan Sowan / Pendaftaran Warga</span>
              <span aria-hidden="true">→</span>
            </button>
            <a
              href="#dua-wisma"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 border border-line bg-white text-ink text-xs sm:text-sm font-medium hover:border-forest hover:text-forest transition-colors text-center"
            >
              <span>Buka Direktori Wisma</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 text-[15px] sm:text-base text-ink/85 leading-[1.65] lg:pt-3">
          <p>
            Bagi anak-anak yang menempuh jalan studi ratusan kilometer dari pesisir Binamu, perbukitan Rumbia, Bangkala,
            hingga Tarowang — Asrama HPMT bukan sekadar petak kamar sewa. Ini adalah tempat menyeduh kopi bersama saat larut
            malam, berhimpun di pendopo, dan saling memikul nasib di tanah rantau.
          </p>
          <div className="mt-5 pt-3.5 border-t border-line text-xs text-ink-muted flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <span className="font-medium text-ink">Dikelola Swadaya Mahasiswa</span>
            <span className="font-semibold text-forest">2 Unit Terpisah (Aspura &amp; Aspuri)</span>
          </div>
        </div>
      </div>

      {/* AUTHENTIC DOCUMENTARY PHOTO GALLERY */}
      <div className="pt-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-ink-subtle">
            Koleksi Visual Fisik &amp; Keseharian Wisma
          </span>
          <span className="text-[11px] text-ink-muted hidden sm:inline italic">
            Klik foto untuk memperbesar &amp; melihat kearsipan
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Large Lead Photograph: Aspuri Gate */}
          <div className="lg:col-span-7">
            <figure
              onClick={() => onSelectPhoto(gatePhoto)}
              className="border border-line bg-white p-2 group cursor-pointer hover:border-forest transition-all duration-200"
            >
              <div className="aspect-[16/10] overflow-hidden bg-paper-muted relative">
                <img
                  alt="Gerbang resmi Aspuri HPMT Kabupaten Jeneponto di Makassar"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                  src={gatePhoto.url}
                  loading="eager"
                />
                <div className="absolute top-2 right-2 bg-paper/90 backdrop-blur-xs text-[10px] font-mono px-2 py-0.5 border border-line text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  Perbesar ↗
                </div>
              </div>
              <figcaption className="pt-3 px-1 pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-[11px] text-ink-muted">
                <span className="font-medium text-ink group-hover:text-forest transition-colors">
                  {gatePhoto.title}
                </span>
                <span className="text-ink-subtle">
                  {gatePhoto.location}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Secondary Photographs: Real Gazebo & Real Yard */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Night Discussion at Gazebo */}
            <figure
              onClick={() => onSelectPhoto(gazeboPhoto)}
              className="border border-line bg-white p-2 group cursor-pointer hover:border-forest transition-all duration-200"
            >
              <div className="aspect-[16/9] overflow-hidden bg-paper-muted relative">
                <img
                  alt="Suasana santai diskusi malam mahasiswi di gazebo pendopo asrama"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                  src={gazeboPhoto.url}
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-paper/90 backdrop-blur-xs text-[10px] font-mono px-2 py-0.5 border border-line text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  Perbesar ↗
                </div>
              </div>
              <figcaption className="pt-2.5 px-1 pb-1 text-[11px] text-ink-muted leading-tight">
                <span className="font-medium text-ink block mb-0.5 group-hover:text-forest transition-colors">
                  {gazeboPhoto.title}
                </span>
                {gazeboPhoto.caption}
              </figcaption>
            </figure>

            {/* Teras & Pekarangan (Two small split figures) */}
            <div className="grid grid-cols-2 gap-3">
              <figure
                onClick={() => onSelectPhoto(yardPhoto)}
                className="border border-line bg-white p-1.5 group cursor-pointer hover:border-forest transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-paper-muted relative">
                  <img
                    alt="Pekarangan dan fasad bangunan asrama"
                    className="w-full h-full object-cover group-hover:scale-103 transition-all duration-300"
                    src={yardPhoto.url}
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-1.5 text-[10px] text-ink-subtle leading-tight group-hover:text-ink transition-colors">
                  {yardPhoto.title}
                </figcaption>
              </figure>

              <figure
                onClick={() => onSelectPhoto(sidePhoto)}
                className="border border-line bg-white p-1.5 group cursor-pointer hover:border-forest transition-all duration-200"
              >
                <div className="aspect-[4/3] overflow-hidden bg-paper-muted relative">
                  <img
                    alt="Lorong teras samping dan parkir kendaraan"
                    className="w-full h-full object-cover group-hover:scale-103 transition-all duration-300"
                    src={sidePhoto.url}
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-1.5 text-[10px] text-ink-subtle leading-tight group-hover:text-ink transition-colors">
                  {sidePhoto.title}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-ink-subtle mt-4 italic text-right font-serif">
          Dokumentasi asli fisik wisma dan ruang komunal warga asrama — tanpa rekayasa studio visual.
        </p>
      </div>
    </section>
  );
};
