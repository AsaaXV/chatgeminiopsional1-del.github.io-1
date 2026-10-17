import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/dormitoryData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-line" id="alur-pendaftaran">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-forest block mb-1">
            Informasi Bagi Calon Warga &amp; Orang Tua
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-tight">
            Tanya Jawab Seputar Kehidupan Asrama
          </h2>
        </div>
        <div className="lg:col-span-7 text-xs sm:text-sm text-ink-muted leading-relaxed">
          <p>
            Berikut beberapa pertanyaan yang kerap diajukan oleh calon mahasiswa baru, orang tua, maupun sesama perantau
            Turatea mengenai tata cara tinggal dan kehidupan kolektif di asrama.
          </p>
        </div>
      </div>

      <div className="divide-y divide-line border-t border-b border-line bg-paper">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 font-serif text-base sm:text-lg font-medium text-ink hover:text-forest transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="text-sm font-mono text-ink-subtle px-2 py-0.5 border border-line bg-white">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed pr-6">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
