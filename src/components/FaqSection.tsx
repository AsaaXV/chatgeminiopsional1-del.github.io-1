import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/dormitoryData.ts';
import { useScrollReveal } from '../utils/useScrollReveal.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useScrollReveal({ threshold: 0.06 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 border-t border-line"
      id="alur-pendaftaran"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 reveal ${visible ? 'visible' : ''}`}>
        <div className="lg:col-span-5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-forest block mb-1">
            Informasi Bagi Calon Warga &amp; Orang Tua
          </span>
          <h2 className="font-serif text-[24px] sm:text-3xl text-ink font-bold leading-tight">
            Tanya Jawab Seputar Kehidupan Asrama
          </h2>
        </div>
        <div className="lg:col-span-7 text-[14px] sm:text-sm text-ink/80 leading-relaxed">
          <p>
            Berikut beberapa pertanyaan yang kerap diajukan oleh calon mahasiswa baru, orang tua, maupun sesama perantau
            Turatea mengenai tata cara tinggal dan kehidupan kolektif di asrama.
          </p>
        </div>
      </div>

      <div
        className={`divide-y divide-line border-t border-b border-line bg-paper reveal delay-200 ${visible ? 'visible' : ''}`}
      >
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 font-serif text-[16px] sm:text-lg font-bold text-ink hover:text-forest active:text-forest transition-colors cursor-pointer"
              >
                <span className="leading-snug">{item.question}</span>
                <span className={`min-w-[30px] min-h-[30px] flex items-center justify-center shrink-0 text-sm font-mono font-bold text-ink border border-line bg-white transition-all duration-200 ${isOpen ? 'bg-forest text-paper border-forest' : ''}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[14px] sm:text-sm text-ink/85 leading-[1.65] pr-2 sm:pr-6">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
