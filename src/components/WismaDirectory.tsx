import React, { useState } from 'react';
import { DORMITORY_UNITS } from '../data/dormitoryData.ts';
import { generateWhatsAppUrl } from '../utils/asrama.ts';

interface WismaDirectoryProps {
  onSelectUnitForRegistration: (unit: 'aspura' | 'aspuri') => void;
}

export const WismaDirectory: React.FC<WismaDirectoryProps> = ({ onSelectUnitForRegistration }) => {
  const [activeMapUnit, setActiveMapUnit] = useState<'aspura' | 'aspuri' | null>(null);

  const aspura = DORMITORY_UNITS.find((u) => u.id === 'aspura')!;
  const aspuri = DORMITORY_UNITS.find((u) => u.id === 'aspuri')!;

  const aspuraWaText = "Tabe' Pengurus Aspura HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putra.";
  const aspuriWaText = "Tabe' Pengurus Aspuri HPMT, saya ingin bertanya mengenai ketersediaan kamar dan jadwal sowan silaturahmi ke asrama putri.";

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" id="dua-wisma">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-line gap-4 mb-8">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-forest block mb-1">
            Dua Unit Domisili
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-semibold">
            Buku Direktori Wisma Mahasiswa
          </h2>
        </div>
        <p className="text-xs text-ink-muted max-w-md">
          Pengelolaan asrama dibagi menjadi dua lokasi independen untuk menjaga kenyamanan, ketertiban, dan privasi warga putra maupun putri.
        </p>
      </div>

      {/* Two Dignified Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-line">
        {/* ASPURA LEDGER */}
        <div className="md:pr-8 pt-4 md:pt-0 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between border-b border-line pb-2 mb-4">
              <span className="text-xs font-bold text-forest tracking-wider uppercase">
                {aspura.code}
              </span>
              <span className="text-[11px] text-ink-subtle">{aspura.locationArea}</span>
            </div>
            <h3 className="font-serif text-2xl text-ink font-semibold mb-2">
              {aspura.name}
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed mb-5">
              {aspura.description}
            </p>

            {/* Key badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {aspura.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-block text-[10px] px-2 py-0.5 border border-line bg-white text-ink-muted font-medium"
                >
                  • {feat}
                </span>
              ))}
            </div>

            {/* Metadata Ledger */}
            <dl className="text-xs divide-y divide-line/70 border-t border-b border-line mb-6">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Alamat Lengkap</dt>
                <dd className="text-ink font-medium text-right max-w-xs">
                  {aspura.fullAddress}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Titik Resmi Google Maps</dt>
                <dd className="text-forest font-medium text-right">
                  <a
                    href={aspura.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink font-semibold inline-flex items-center gap-1"
                  >
                    <span>Aspura hpmt kab jeneponto</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Titik Patokan</dt>
                <dd className="text-ink font-medium text-right">{aspura.landmark}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Keamanan &amp; Jam Malam</dt>
                <dd className="text-ink font-medium text-right">{aspura.curfewAndSecurity}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Kapasitas Kamar</dt>
                <dd className="text-ink font-medium text-right">{aspura.roomCapacity}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Koordinator Narahubung</dt>
                <dd className="text-ink font-medium text-right">{aspura.coordinatorTitle}</dd>
              </div>
            </dl>
          </div>

          <div className="pt-2 space-y-2">
            <a
              className="inline-flex items-center justify-between w-full p-3 border border-forest text-xs font-semibold text-forest hover:bg-forest hover:text-paper transition-all focus:outline-none focus:ring-1 focus:ring-forest"
              href={generateWhatsAppUrl(aspura.whatsappNumber, aspuraWaText)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Hubungi Pengurus Aspura via WhatsApp</span>
              <span className="font-mono text-xs">{aspura.coordinatorPhone} →</span>
            </a>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectUnitForRegistration('aspura')}
                className="flex-1 py-2 text-center text-xs font-medium bg-forest text-paper hover:bg-forest-deep transition-colors cursor-pointer"
              >
                Isi Formulir Minat Aspura
              </button>
              <button
                type="button"
                onClick={() => setActiveMapUnit(activeMapUnit === 'aspura' ? null : 'aspura')}
                className="px-3 py-2 text-center text-xs border border-line bg-white hover:border-forest text-ink hover:text-forest transition-colors cursor-pointer"
                title="Buka / Tutup Peta Interaktif"
              >
                {activeMapUnit === 'aspura' ? 'Tutup Peta' : 'Lihat Peta'}
              </button>
              <a
                href={aspura.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-center text-xs border border-forest bg-forest/5 hover:bg-forest hover:text-paper text-forest font-semibold transition-colors"
                title="Buka lokasi resmi Aspura hpmt kab jeneponto di Google Maps"
              >
                Buka di Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        {/* ASPURI LEDGER */}
        <div className="md:pl-8 pt-8 md:pt-0 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between border-b border-line pb-2 mb-4">
              <span className="text-xs font-bold text-forest tracking-wider uppercase">
                {aspuri.code}
              </span>
              <span className="text-[11px] text-ink-subtle">{aspuri.locationArea}</span>
            </div>
            <h3 className="font-serif text-2xl text-ink font-semibold mb-2">
              {aspuri.name}
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed mb-5">
              {aspuri.description}
            </p>

            {/* Key badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {aspuri.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-block text-[10px] px-2 py-0.5 border border-line bg-white text-ink-muted font-medium"
                >
                  • {feat}
                </span>
              ))}
            </div>

            {/* Metadata Ledger */}
            <dl className="text-xs divide-y divide-line/70 border-t border-b border-line mb-6">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Alamat Lengkap</dt>
                <dd className="text-ink font-medium text-right max-w-xs">
                  {aspuri.fullAddress}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Titik Resmi Google Maps</dt>
                <dd className="text-forest font-medium text-right">
                  <a
                    href={aspuri.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-ink font-semibold inline-flex items-center gap-1"
                  >
                    <span>ASPURI HPMT Jeneponto</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Titik Patokan</dt>
                <dd className="text-ink font-medium text-right">{aspuri.landmark}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Keamanan &amp; Jam Malam</dt>
                <dd className="text-ink font-medium text-right">{aspuri.curfewAndSecurity}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Kapasitas Kamar</dt>
                <dd className="text-ink font-medium text-right">{aspuri.roomCapacity}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-ink-subtle">Koordinator Narahubung</dt>
                <dd className="text-ink font-medium text-right">{aspuri.coordinatorTitle}</dd>
              </div>
            </dl>
          </div>

          <div className="pt-2 space-y-2">
            <a
              className="inline-flex items-center justify-between w-full p-3 border border-forest text-xs font-semibold text-forest hover:bg-forest hover:text-paper transition-all focus:outline-none focus:ring-1 focus:ring-forest"
              href={generateWhatsAppUrl(aspuri.whatsappNumber, aspuriWaText)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Hubungi Pengurus Aspuri via WhatsApp</span>
              <span className="font-mono text-xs">{aspuri.coordinatorPhone} →</span>
            </a>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectUnitForRegistration('aspuri')}
                className="flex-1 py-2 text-center text-xs font-medium bg-forest text-paper hover:bg-forest-deep transition-colors cursor-pointer"
              >
                Isi Formulir Minat Aspuri
              </button>
              <button
                type="button"
                onClick={() => setActiveMapUnit(activeMapUnit === 'aspuri' ? null : 'aspuri')}
                className="px-3 py-2 text-center text-xs border border-line bg-white hover:border-forest text-ink hover:text-forest transition-colors cursor-pointer"
                title="Buka / Tutup Peta Interaktif"
              >
                {activeMapUnit === 'aspuri' ? 'Tutup Peta' : 'Lihat Peta'}
              </button>
              <a
                href={aspuri.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-center text-xs border border-forest bg-forest/5 hover:bg-forest hover:text-paper text-forest font-semibold transition-colors"
                title="Buka lokasi resmi ASPURI HPMT Jeneponto di Google Maps"
              >
                Buka di Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* EMBEDDED INTERACTIVE MAP SECTION */}
      {activeMapUnit && (
        <div className="mt-8 border border-line bg-white p-4 sm:p-5 rounded-xs shadow-xs animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-line gap-2 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest block">
                Peta Lokasi Resmi
              </span>
              <h4 className="font-serif text-base font-semibold text-ink">
                {activeMapUnit === 'aspuri'
                  ? 'ASPURI HPMT Jeneponto — Minasaupa / Kumala'
                  : 'ASPURA HPMT Jeneponto — Jl. Anggrek I No. 15, Panakkukang'}
              </h4>
              <p className="text-xs text-ink-muted">
                {activeMapUnit === 'aspuri'
                  ? 'Koordinat: -5.1859121, 119.4510155 (Titik Resmi Google Maps)'
                  : 'Koordinat: Panakkukang, Makassar'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={activeMapUnit === 'aspuri' ? aspuri.googleMapsUrl : aspura.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-forest text-paper text-xs font-semibold hover:bg-forest-deep transition-colors inline-flex items-center gap-1.5"
              >
                <span>Buka di Google Maps Langsung</span>
                <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveMapUnit(null)}
                className="px-2.5 py-1.5 border border-line bg-paper text-xs hover:bg-paper-muted"
              >
                Tutup
              </button>
            </div>
          </div>

          <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-paper-muted border border-line overflow-hidden relative">
            <iframe
              title={`Peta Lokasi ${activeMapUnit === 'aspuri' ? 'ASPURI' : 'ASPURA'} HPMT Jeneponto`}
              src={activeMapUnit === 'aspuri' ? aspuri.embedMapUrl : aspura.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-[11px] text-ink-subtle mt-2 italic text-right">
            Gunakan navigasi peta untuk petunjuk rute jalan dan transportasi menuju wisma.
          </p>
        </div>
      )}
    </section>
  );
};
