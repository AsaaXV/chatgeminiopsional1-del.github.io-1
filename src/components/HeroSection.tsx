import React from 'react';
import { ARCHIVAL_PHOTOS, ArchivalPhoto } from '../data/dormitoryData.ts';

interface HeroSectionProps {
  onSelectPhoto: (photo: ArchivalPhoto) => void;
  onOpenRegistration: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto, onOpenRegistration }) => {
  const gatePhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gate') || ARCHIVAL_PHOTOS[0];
  const gazeboPhoto = ARCHIVAL_PHOTOS.find((p) => p.id === 'gazebo') || ARCHIVAL_PHOTOS[1];

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 lg:pb-24 bg-white">
      {/* Decorative Dot Pattern Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dot-pattern opacity-40 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Actions (Like YAPI) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-forest text-white rounded-full shadow-2xs">
                PP HPMT MAKASSAR
              </span>
              <span className="px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-slate-700 bg-slate-50 border border-slate-200 rounded-full">
                Badan Khusus Asrama
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-5xl lg:text-[58px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              The Home of <br />
              <span className="font-serif italic text-forest font-bold">Turatea Leaders.</span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Rumah tempat bertumbuh, bukan sekadar kamar sewa. Hunian kepemimpinan dan kekeluargaan mahasiswa perantau asal Kabupaten Jeneponto di Makassar sejak dekade silam, berakar teguh pada falsafah luhur <strong className="text-slate-800 font-semibold">Siri' na Pacce</strong>.
            </p>

            {/* Action Buttons (Pill Format) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenRegistration}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-forest hover:bg-forest-deep rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Daftar Warga Baru</span>
              </button>
              <a
                href="#dua-wisma"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-2xs hover:border-slate-300 transition-all text-center"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Direktori Wisma</span>
              </a>
            </div>
          </div>

          {/* Right Column: Organic Curved Photo Card & Overlaid Quote (Like YAPI) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Photo Card with distinctive asymmetric rounded corner */}
              <div
                onClick={() => onSelectPhoto(gatePhoto)}
                className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-2xl bg-slate-100 border border-slate-100 group cursor-pointer"
              >
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden relative">
                  <img
                    alt="Gerbang resmi Aspuri HPMT Kabupaten Jeneponto di Makassar"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    src={gatePhoto.url}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Photo Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 hidden sm:block">
                    <span className="text-xs font-semibold tracking-wide uppercase text-emerald-300 block mb-0.5">
                      Kearsipan Fisik Wisma
                    </span>
                    <span className="text-sm font-bold text-white drop-shadow-sm">
                      {gatePhoto.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlaid Quote Card (Inspired by YAPI's Blue Quote Box) */}
              <div className="relative sm:absolute sm:-bottom-8 sm:-left-8 mt-4 sm:mt-0 max-w-xs sm:max-w-[280px] bg-forest text-white p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-800/40 z-20">
                <div className="text-emerald-300 text-3xl font-serif font-black leading-none mb-2">
                  “
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed font-medium text-emerald-50">
                  Membentuk mahasiswa Turatea berintegritas, cerdas bernalar, dan saling memikul nasib di perantauan Makassar.
                </p>
                <span className="text-[10px] tracking-wider uppercase text-emerald-300/80 font-bold block mt-3">
                  Siri’ na Pacce
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stat Metric Bar (Inspired by YAPI's 4-metric strip) */}
        <div className="mt-14 sm:mt-20 pt-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xl p-5 sm:p-7 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-forest shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-tight">
                  2 Unit
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Komplek Wisma Putra &amp; Putri
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-tight">
                  1x Bayar
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Rp1.5 Juta Sekali Sampai Lulus
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-tight">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Bebas Sewa Kamar Bulanan
                </span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block leading-tight">
                  Kader
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Persaudaraan Warga Turatea
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
