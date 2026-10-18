import React from 'react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto-filosofi" className="bg-slate-950 text-white py-18 sm:py-24 relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 block mb-3">
            FALSAFAH BUTTA TURATEA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Yang membedakan kami.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Asrama HPMT bukan semata-mata tempat berteduh dan tidur. Ini adalah laboratorium pembinaan moral, karakter, dan persaudaraan sejati berlandaskan prinsip <em className="text-emerald-300 not-italic font-semibold">Siriganti Pacce</em>.
          </p>
        </div>

        {/* 4 Feature Cards (Directly matching Asrama YAPI's 'Yang membedakan kami' card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Pilar Siri’ (Kehormatan &amp; Disiplin Moral)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Menjunjung tinggi harga diri dan martabat keluarga Butta Turatea di perantauan Makassar. Setiap warga dididik untuk tekun belajar, menjauhi perilaku tercela, dan menyelesaikan studi tepat waktu untuk membahagiakan orang tua di kampung.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-950/70 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Pilar Pacce (Solidaritas Pedih Rantau)
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Rasa sakit saudara adalah luka kita bersama. Saat uang kiriman terlambat, beras dinikmati bersama di pendopo. Saat ada warga jatuh sakit, asrama bergerak sebagai garda pertolongan pertama tanpa memandang latar belakang.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/70 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Swakelola Mahasiswa Berintegritas
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Dikelola langsung oleh mahasiswa aktif melalui musyawarah warga. Menumbuhkan kecakapan kepemimpinan, pemecahan masalah nyata (*problem solver*), dan tanggung jawab kolektif menjaga fasilitas wisma.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center text-purple-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Jaringan Solid Alumni &amp; Warga Rantau
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Terhubung dengan puluhan angkatan alumni HPMT yang kini berkiprah sebagai akademisi, birokrat, pengusaha, dan tokoh masyarakat di Makassar maupun tanah air, siap membimbing adik-adik mahasiswa baru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
