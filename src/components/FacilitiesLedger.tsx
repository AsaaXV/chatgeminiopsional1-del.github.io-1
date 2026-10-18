import React, { useState } from 'react';
import { FACILITIES_DATA, FacilityItem } from '../data/dormitoryData.ts';

export const FacilitiesLedger: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pokok' | 'iuran' | 'komunal'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFacilities = FACILITIES_DATA.filter((item: FacilityItem) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.costStatus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white" id="kehidupan-fasilitas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
              SARANA &amp; IURAN SWAKELOLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fasilitas &amp; Transparansi Pembiayaan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Prinsip tinggal di Asrama HPMT adalah nirlaba dan kekeluargaan swadaya mahasiswa, bukan komersial.
            </p>
          </div>

          <div className="lg:col-span-7">
            {/* Notice Callout Card (Inspired by YAPI's Clean Box) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 text-forest font-bold text-sm sm:text-base mb-2">
                <span className="w-2 h-2 rounded-full bg-forest"></span>
                <span>Ketentuan Masuk &amp; Status Biaya Wisma</span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                Syarat masuk adalah kontribusi fasilitas sebesar <strong className="text-forest font-bold text-base">Rp1.500.000</strong> yang dibayarkan satu kali saat resmi diterima, dan warga <strong className="text-slate-900 font-semibold">tidak dipungut biaya sewa kamar lagi sampai lulus kuliah</strong>. Seluruh dana tersebut dialokasikan penuh untuk perawatan fisik wisma bersama.
              </p>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 font-medium flex items-center gap-2">
                <span className="text-forest font-bold">ℹ Ketentuan Semester:</span>
                <span>Terbuka maksimal untuk mahasiswa semester 3.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Semua ({FACILITIES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('pokok')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === 'pokok'
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Kebutuhan Pokok
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('iuran')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === 'iuran'
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Iuran Kolektif
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('komunal')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                selectedCategory === 'komunal'
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Fasilitas Komunal
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fasilitas (mis: wifi, air, listrik)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-forest focus:bg-white transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Facilities Grid (Modern Rounded Cards - never squeezed on mobile!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFacilities.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-3xl border border-slate-100 text-sm">
              Tidak ditemukan sarana dengan kata kunci "{searchQuery}".
            </div>
          ) : (
            filteredFacilities.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Number & Name spanning full width */}
                  <div className="flex items-baseline gap-2 mb-2.5">
                    <span className="font-mono text-xs font-bold text-slate-400 shrink-0">
                      {item.no}.
                    </span>
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-3">
                    <span
                      className={`inline-block font-mono text-[11px] font-bold px-3 py-1 rounded-full border ${
                        item.category === 'iuran'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-emerald-50 text-forest border-emerald-200'
                      }`}
                    >
                      {item.costStatus}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
