import React from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="kontak-silaturahmi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Dot Pattern */}
          <div className="absolute inset-0 bg-dot-pattern-dark opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-2">
                PINTU SELALU TERBUKA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Silaturahmi, Pendaftaran Kamar, &amp; Kunjungan Sanak Saudara
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Apakah Anda mahasiswa baru asal Butta Turatea yang baru tiba di Makassar? Atau orang tua dan alumni yang ingin bertandang silaturahmi? Narahubung pengurus asrama siap menerima Anda dengan tangan terbuka.
              </p>

              {/* Two Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Aspura */}
                <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Unit 01 • ASPURA (Panakkukang)
                    </span>
                    <strong className="text-sm font-bold text-white block">
                      Koordinator Asrama Putra
                    </strong>
                    <span className="text-xs font-mono text-slate-300 block mt-1">
                      +62 852-4038-9682
                    </span>
                  </div>
                  <div className="space-y-2">
                    <a
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-full transition-colors"
                      href="https://wa.me/6285240389682?text=Tabe'%20Pengurus%20Aspura%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Hubungi WhatsApp</span>
                      <span aria-hidden="true">→</span>
                    </a>
                    <a
                      className="flex items-center justify-center gap-1.5 w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-full transition-colors"
                      href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Titik Google Maps ↗</span>
                    </a>
                  </div>
                </div>

                {/* Aspuri */}
                <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Unit 02 • ASPURI (Minasaupa)
                    </span>
                    <strong className="text-sm font-bold text-white block">
                      Koordinator Asrama Putri
                    </strong>
                    <span className="text-xs font-mono text-slate-300 block mt-1">
                      +62 853-9714-2677
                    </span>
                  </div>
                  <div className="space-y-2">
                    <a
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-full transition-colors"
                      href="https://wa.me/6285397142677?text=Tabe'%20Pengurus%20Aspuri%20HPMT,%20saya%20ingin%20bertanya%20mengenai%20kamar/kunjungan%20asrama."
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Hubungi WhatsApp</span>
                      <span aria-hidden="true">→</span>
                    </a>
                    <a
                      className="flex items-center justify-center gap-1.5 w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-full transition-colors"
                      href="https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Titik Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Directions Note */}
            <div className="lg:col-span-5 bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-700/60">
              <div className="flex items-center gap-3 mb-4">
                <img
                  alt="Lambang HPMT Jeneponto"
                  className="w-12 h-12 object-contain rounded-xl bg-white/10 p-1 border border-white/20 shrink-0"
                  src={OFFICIAL_LOGOS.emblem}
                  width={48}
                  height={48}
                />
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-emerald-400 font-bold block">
                    PANDUAN PERJALANAN
                  </span>
                  <span className="text-sm font-bold text-white block">
                    Akses dari Butta Turatea
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Dari Kab. Jeneponto (Binamu, Rumbia, Bangkala, Kelara, hingga Tarowang), naik angkutan penumpang umum jurusan Makassar. Turun di Terminal Mallengkerang atau persimpangan Jl. Sultan Alauddin / Jl. A.P. Pettarani, kemudian lanjutkan dengan ojek daring langsung ke titik wisma.
              </p>
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Instagram Resmi:</span>
                <a
                  href="https://www.instagram.com/asrama.hpmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  @asrama.hpmt ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
