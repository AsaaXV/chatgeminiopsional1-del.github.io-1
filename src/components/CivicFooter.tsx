import React from 'react';
import { OFFICIAL_LOGOS } from '../data/dormitoryData.ts';

export const CivicFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0">
                <img
                  alt="Logo Resmi Asrama HPMT Jeneponto"
                  className="w-full h-full object-contain rounded"
                  src={OFFICIAL_LOGOS.seal}
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <span className="font-extrabold text-base text-slate-900 block leading-tight">
                  Asrama Mahasiswa HPMT Jeneponto
                </span>
                <span className="text-xs text-slate-500 font-medium">Kota Makassar, Sulawesi Selatan</span>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm max-w-sm">
              Wadah berhimpun dan bernaung mahasiswa Kabupaten Jeneponto yang menempuh pendidikan di Kota Makassar. Berakar pada kebersamaan tulus, kemandirian pemuda, dan tanggung jawab kultural Butta Turatea.
            </p>
            <p className="italic text-forest font-semibold text-xs pt-1">
              “Siriganti Pacce ri Butta Turatea — Martabat dan Kebersamaan di Tanah Rantau.”
            </p>
          </div>

          {/* Col 2: Alamat Rinci */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="font-bold text-slate-900 uppercase tracking-wider block text-xs">
              Lokasi Wisma
            </span>
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 font-bold block mb-0.5">Unit Putra (ASPURA):</strong>
                <p className="text-slate-600 leading-relaxed mb-1.5">
                  Jl. Anggrek I No. 15, Paropo, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90233
                </p>
                <a
                  href="https://www.google.com/maps/place/Aspura+hpmt+kab+jeneponto/data=!4m2!3m1!1s0x0:0x4ca1b970d4be393c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-bold hover:underline text-[11px]"
                >
                  Buka Titik ASPURA di Google Maps ↗
                </a>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 font-bold block mb-0.5">Unit Putri (ASPURI):</strong>
                <p className="text-slate-600 leading-relaxed mb-1.5">
                  Kawasan Minasaupa / Jl. Kumala, Kota Makassar, Sulawesi Selatan
                </p>
                <a
                  href="https://www.google.com/maps/place/ASPURI+HPMT+Jeneponto/@-5.1859121,119.4510155,17z/data=!3m1!4b1!4m6!3m5!1s0x2dbee34142ed09d5:0xc905943bb19149b7!8m2!3d-5.1859121!4d119.4510155!16s%2Fg%2F11h0h1vsyq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest font-bold hover:underline text-[11px]"
                >
                  Buka Titik ASPURI di Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Arsip & Navigasi */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-slate-900 uppercase tracking-wider block text-xs">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>
                <a className="hover:text-forest transition-colors" href="#">
                  Beranda
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors" href="#dua-wisma">
                  Direktori Wisma Aspura &amp; Aspuri
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors" href="#kehidupan-fasilitas">
                  Fasilitas &amp; Iuran
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors" href="#manifesto-filosofi">
                  Filosofi Siri' na Pacce
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors" href="#alur-pendaftaran">
                  Tanya Jawab &amp; Alur Warga
                </a>
              </li>
              <li>
                <a className="hover:text-forest transition-colors" href="#kontak-silaturahmi">
                  Kontak Narahubung WhatsApp
                </a>
              </li>
              <li className="pt-2">
                <a
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-forest font-bold transition-colors"
                  href="https://www.instagram.com/asrama.hpmt/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Instagram @asrama.hpmt</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Asrama Mahasiswa HPMT Jeneponto di Makassar. Rawat Persaudaraan, Junjung Siri' na Pacce.
          </p>
          <div className="flex items-center gap-3">
            <span>Himpunan Pelajar Mahasiswa Turatea</span>
            <span aria-hidden="true">•</span>
            <span>Makassar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
