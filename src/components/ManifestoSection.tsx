import React, { useState } from 'react';

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'siri' | 'pacce'>('siri');

  return (
    <section id="manifesto-filosofi" className="border-y border-line bg-forest text-paper py-14 sm:py-18">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#baeed9] font-semibold block mb-2">
            Nilai Pegangan Butta Turatea
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-normal text-white">
            “Siriganti Pacce ri Butta Turatea”
          </h2>
          <div className="w-12 h-px bg-[#baeed9]/40 mx-auto mt-4" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-paper/85 leading-relaxed font-light">
          <div>
            <p className="first-letter:font-serif first-letter:text-4xl first-letter:float-left first-letter:mr-2.5 first-letter:text-[#baeed9] first-letter:font-normal first-letter:leading-none">
              Di tanah rantau Makassar, persaudaraan anak Jeneponto diuji oleh realitas perkuliahan yang keras. Di asrama inilah konsep <em className="text-white font-medium not-italic">Siri’</em> (harga diri, martabat, dan malu berbuat tercela) serta <em className="text-white font-medium not-italic">Pacce</em> (solidaritas mendalam saat saudara tertimpa kesulitan) bukan sekadar wacana seminar kebudayaan.
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab('siri')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
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
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                activeTab === 'pacce'
                  ? 'bg-[#baeed9] text-forest'
                  : 'bg-white/10 text-paper/80 hover:bg-white/20'
              }`}
            >
              Pilar Pacce (Solidaritas Pedih)
            </button>
          </div>

          <div className="bg-forest-deep/60 p-4 sm:p-5 border border-white/15 rounded-xs text-xs sm:text-sm leading-relaxed text-paper/90">
            {activeTab === 'siri' ? (
              <div>
                <strong className="text-[#baeed9] font-serif text-base block mb-1">
                  Siri' na Sipakatau — Disiplin Moral &amp; Martabat Belajar
                </strong>
                <p className="text-paper/80 text-xs">
                  Menjaga nama baik keluarga dan nama baik Butta Turatea di Makassar. Tidak bermalas-malasan, tidak melakukan tindakan kriminal, menghargai sesama warga asrama, dan memprioritaskan kelulusan tepat waktu untuk membahagiakan orang tua di kampung.
                </p>
              </div>
            ) : (
              <div>
                <strong className="text-[#baeed9] font-serif text-base block mb-1">
                  Pacce ri Butta Kalabbirang — Ikatan Rasa Senasib Sepenanggungan
                </strong>
                <p className="text-paper/80 text-xs">
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
