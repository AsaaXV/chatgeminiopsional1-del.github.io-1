import React, { useState, useMemo } from 'react';
import { FACILITIES_DATA } from '../data/dormitoryData.ts';
import { filterFacilities } from '../utils/asrama.ts';

export const FacilitiesLedger: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFacilities = useMemo(() => {
    return filterFacilities(FACILITIES_DATA, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  return (
    <section className="border-t border-line bg-paper-subtle py-16" id="kehidupan-fasilitas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-forest block mb-1">
              Transparansi Sarana Hidup
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-tight">
              Kebutuhan Pokok &amp; Iuran Swakelola Warga
            </h2>
          </div>
          <div className="lg:col-span-7 text-xs sm:text-sm text-ink-muted leading-relaxed">
            <div className="p-3.5 bg-paper border border-forest/30 rounded-xs">
              <strong className="text-forest font-semibold block mb-1">
                Ketentuan Masuk &amp; Status Biaya Wisma:
              </strong>
              <p className="mb-2 text-ink-muted">
                Prinsip tinggal di Asrama HPMT adalah nirlaba dan kekeluargaan. Syarat masuk adalah kontribusi fasilitas sebesar <strong>Rp1.500.000</strong> yang dibayarkan satu kali saat resmi diterima, dan warga tidak dipungut biaya sewa kamar lagi sampai lulus kuliah. Seluruh dana tersebut dialokasikan penuh untuk perawatan dan pengadaan fasilitas fisik asrama bersama.
              </p>
              <p className="text-[11px] text-forest font-medium">
                Ketentuan Semester: Terbuka maksimal untuk mahasiswa semester 3 (pendaftar di atas semester 3 wajib mengikuti musyawarah dan ketentuan khusus pengurus).
              </p>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-forest text-paper font-semibold'
                  : 'bg-paper border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Semua ({FACILITIES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('pokok')}
              className={`px-3 py-1.5 rounded-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === 'pokok'
                  ? 'bg-forest text-paper font-semibold'
                  : 'bg-paper border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Kebutuhan Pokok
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('iuran')}
              className={`px-3 py-1.5 rounded-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === 'iuran'
                  ? 'bg-forest text-paper font-semibold'
                  : 'bg-paper border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Iuran Kolektif
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('komunal')}
              className={`px-3 py-1.5 rounded-xs font-medium cursor-pointer transition-colors ${
                selectedCategory === 'komunal'
                  ? 'bg-forest text-paper font-semibold'
                  : 'bg-paper border border-line text-ink hover:bg-paper-muted'
              }`}
            >
              Fasilitas Komunal
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fasilitas (mis: wifi, air, listrik)..."
              className="w-full px-3 py-1.5 text-xs bg-paper border border-line focus:border-forest focus:outline-none placeholder:text-ink-subtle"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink p-0.5"
                aria-label="Bersihkan pencarian"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Ledger Table Style */}
        <div className="border border-line bg-paper overflow-x-auto shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-line bg-paper-muted text-[11px] uppercase tracking-wider text-ink font-semibold">
                <th className="py-3 px-4 w-12 text-center">No.</th>
                <th className="py-3 px-4 w-1/4">Fasilitas / Sarana</th>
                <th className="py-3 px-4 w-36">Status Biaya</th>
                <th className="py-3 px-4">Keterangan &amp; Tata Kelola Warga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line font-normal text-ink">
              {filteredFacilities.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-ink-muted">
                    Tidak ditemukan fasilitas dengan kata kunci "{searchQuery}".
                  </td>
                </tr>
              ) : (
                filteredFacilities.map((item) => (
                  <tr key={item.id} className="hover:bg-paper-subtle transition-colors">
                    <td className="py-3.5 px-4 text-center font-mono text-ink-subtle">
                      {item.no}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-forest">
                      {item.name}
                    </td>
                    <td className="py-3.5 px-4 font-medium">
                      <span
                        className={
                          item.category === 'iuran'
                            ? 'font-mono font-semibold text-ink'
                            : 'text-forest'
                        }
                      >
                        {item.costStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-ink-muted leading-relaxed">
                      {item.description}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-ink-subtle gap-2">
          <span>* Pemeliharaan darurat atau penggantian komponen lampu dilakukan melalui kas sukarela warga.</span>
          <span>Catatan Tata Tertib Warga Tahun Sidang 2024/2025</span>
        </div>
      </div>
    </section>
  );
};
