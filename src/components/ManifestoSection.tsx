import React, { useState } from 'react';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'siri' | 'pacce'>('siri');

  return (
    <section id="manifesto-filosofi" className="border-y border-line bg-forest text-paper py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#baeed9] font-bold block mb-2">
            Nilai Pegangan Butta Turatea
          </span>
          <h2 className="font-serif text-[24px] sm:text-3xl lg:text-4xl italic font-bold text-white leading-tight">
            “Siriganti Pacce ri Butta Turatea”
          </h2>
          <div className="w-16 h-0.5 bg-[#baeed9]/50 mx-auto mt-4" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-[15px] sm:text-base text-paper/90 leading-[1.7] font-normal">
          <div>
            <p className="first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-2.5 first-letter:text-[#baeed9] first-letter:font-bold first-letter:leading-none">
              Di tanah rantau Makassar, persaudaraan anak Jeneponto diuji oleh realitas perkuliahan yang keras. Di asrama inilah konsep <strong className="text-white font-semibold not-italic">Siri’</strong> (harga diri, martabat, dan malu berbuat tercela) serta <strong className="text-white font-semibold not-italic">Pacce</strong> (solidaritas mendalam saat saudara tertimpa kesulitan) bukan sekadar wacana seminar kebudayaan.
            </p>
          </div>
          <div>
            <p>
              Ketika uang kiriman terlambat dari kampung, nasi sebungkus dibagi bertiga di beranda. Ketika tugas akhir terasa buntu, senior dan kawan sekamar membimbing tanpa sekat kaku. Inilah alasan mengapa asrama tetap bertahan melewati dekade demi dekade: menjaga mahasiswa Turatea tetap berakal budi, beradab, dan pulang membawa kehormatan bagi daerah.
            </p>
          </div>
        </div>

        {/* Interactive Philosophical Pillar Toggle */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab('siri')}
              className={`min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xs transition-colors cursor-pointer text-center ${
                activeTab === 'siri'
                  ? 'bg-[#baeed9] text-forest'
                  : 'bg-white/10 text-paper/80 hover:bg-white/20'
              }`}
            >
              Pilar Siri' (Kehormatan Diri)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pacce')}
              className={`min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold rounded-xs transition-colors cursor-pointer text-center ${
                activeTab === 'pacce'
                  ? 'bg-[#baeed9] text-forest'
                  : 'bg-white/10 text-paper/80 hover:bg-white/20'
              }`}
            >
              Pilar Pacce (Solidaritas Pedih)
            </button>
          </div>

          <div className="bg-forest-deep/60 p-4 sm:p-6 border border-white/15 rounded-xs text-[14px] sm:text-[15px] leading-[1.65] text-paper/90">
            {activeTab === 'siri' ? (
              <div>
                <strong className="text-[#baeed9] font-serif text-[17px] sm:text-lg block mb-1.5 font-bold">
                  Siri' na Sipakatau — Disiplin Moral &amp; Martabat Belajar
                </strong>
                <p className="text-paper/85 text-[14px] sm:text-sm leading-relaxed">
                  Menjaga nama baik keluarga dan nama baik Butta Turatea di Makassar. Tidak bermalas-malasan, tidak melakukan tindakan kriminal, menghargai sesama warga asrama, dan memprioritaskan kelulusan tepat waktu untuk membahagiakan orang tua di kampung.
                </p>
              </div>
            ) : (
              <div>
                <strong className="text-[#baeed9] font-serif text-[17px] sm:text-lg block mb-1.5 font-bold">
                  Pacce ri Butta Kalabbirang — Ikatan Rasa Senasib Sepenanggungan
                </strong>
                <p className="text-paper/85 text-[14px] sm:text-sm leading-relaxed">
                  Rasa sakit kawan adalah rasa sakit kita bersama. Jika ada sesama warga tertimpa musibah sakit, kehabisan beras, atau kesulitan biaya semester, asrama bergerak sebagai keluarga pertama yang mengulurkan tangan tanpa pamrih.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-paper/60 uppercase tracking-wider">
          <span>Prinsip Kolektivitas Warga</span>
          <span>Gotong Royong • Egaliter • Tanpa Senioritas Menindas</span>
        </div>
      </div>
    </section>
  );
};
