import React from 'react';
import { DORMITORY_UNITS } from '../data/dormitoryData.ts';
import { generateWhatsAppUrl } from '../utils/asrama.ts';

interface WismaDirectoryProps {
  onOpenRegistration?: (unit?: 'aspura' | 'aspuri') => void;
  onSelectUnitForRegistration?: (unit: 'aspura' | 'aspuri') => void;
}

export const WismaDirectory: React.FC<WismaDirectoryProps> = ({ onOpenRegistration, onSelectUnitForRegistration }) => {
  const triggerRegistration = onOpenRegistration || onSelectUnitForRegistration || (() => {});
  const aspura = DORMITORY_UNITS[0];
  const aspuri = DORMITORY_UNITS[1];

  const aspuraWaText = "Tabe' Pengurus Aspura HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putra.";
  const aspuriWaText = "Tabe' Pengurus Aspuri HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putri.";

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100" id="dua-wisma">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest block mb-2">
            KOMPLEK HUNIAN MAHASISWA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dua Unit Wisma Mandiri
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pengelolaan asrama dibagi menjadi dua lokasi independen untuk menjaga kenyamanan, ketertiban, dan privasi warga putra maupun putri di Makassar.
          </p>
        </div>

        {/* Two Modern Rounded Cards (Aspura & Aspuri) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* ASPURA CARD */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              {/* Card Header Banner */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-900 to-forest text-white relative">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-[11px] font-bold tracking-wider uppercase text-emerald-200">
                    {aspura.code} • Asrama Putra
                  </span>
                  <span className="text-xs font-semibold text-emerald-200/90">
                    {aspura.locationArea}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {aspura.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {aspura.description}
                </p>
              </div>

              {/* Feature Tags */}
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {aspura.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Structured Metadata Rows */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-forest block mb-1">
                      Alamat Lengkap
                    </span>
                    <p className="text-slate-800 font-medium leading-snug">
                      {aspura.fullAddress}
                    </p>
                  </div>

                  {/* Landmark */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-forest block mb-1">
                      Titik Patokan Akses
                    </span>
                    <p className="text-slate-800 font-medium leading-snug">
                      {aspura.landmark}
                    </p>
                  </div>

                  {/* Security & Room specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-forest block mb-0.5">
                        Jam Malam &amp; Keamanan
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {aspura.curfewAndSecurity}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-forest block mb-0.5">
                        Kapasitas Kamar
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {aspura.roomCapacity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 sm:p-8 pt-0 space-y-2.5">
              <a
                className="flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-forest hover:bg-forest-deep text-white text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all text-center"
                href={generateWhatsAppUrl(aspura.whatsappNumber, aspuraWaText)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Hubungi Koordinator Aspura via WhatsApp</span>
                <span className="font-mono text-xs opacity-90">({aspura.coordinatorPhone}) →</span>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold rounded-full transition-colors text-center shadow-2xs"
                  href={aspura.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Titik Google Maps</span>
                </a>
                <button
                  type="button"
                  onClick={() => triggerRegistration('aspura')}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Ajukan Kamar Aspura
                </button>
              </div>
            </div>
          </div>

          {/* ASPURI CARD */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
            <div>
              {/* Card Header Banner */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-emerald-950 to-slate-900 text-white relative">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-[11px] font-bold tracking-wider uppercase text-emerald-200">
                    {aspuri.code} • Asrama Putri
                  </span>
                  <span className="text-xs font-semibold text-emerald-200/90">
                    {aspuri.locationArea}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {aspuri.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  {aspuri.description}
                </p>
              </div>

              {/* Feature Tags */}
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {aspuri.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Structured Metadata Rows */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-forest block mb-1">
                      Alamat Lengkap
                    </span>
                    <p className="text-slate-800 font-medium leading-snug">
                      {aspuri.fullAddress}
                    </p>
                  </div>

                  {/* Landmark */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-forest block mb-1">
                      Titik Patokan Akses
                    </span>
                    <p className="text-slate-800 font-medium leading-snug">
                      {aspuri.landmark}
                    </p>
                  </div>

                  {/* Security & Room specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-forest block mb-0.5">
                        Jam Malam &amp; Keamanan
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {aspuri.curfewAndSecurity}
                      </span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold tracking-wider uppercase text-forest block mb-0.5">
                        Kapasitas Kamar
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {aspuri.roomCapacity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-6 sm:p-8 pt-0 space-y-2.5">
              <a
                className="flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-forest hover:bg-forest-deep text-white text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all text-center"
                href={generateWhatsAppUrl(aspuri.whatsappNumber, aspuriWaText)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Hubungi Koordinator Aspuri via WhatsApp</span>
                <span className="font-mono text-xs opacity-90">({aspuri.coordinatorPhone}) →</span>
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold rounded-full transition-colors text-center shadow-2xs"
                  href={aspuri.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-3.5 h-3.5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Titik Google Maps</span>
                </a>
                <button
                  type="button"
                  onClick={() => triggerRegistration('aspuri')}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Ajukan Kamar Aspuri
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
