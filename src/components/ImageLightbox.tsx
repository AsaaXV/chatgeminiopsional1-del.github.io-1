import React, { useEffect } from 'react';
import { ARCHIVAL_PHOTOS, ArchivalPhoto } from '../data/dormitoryData.ts';

interface ImageLightboxProps {
  photo: ArchivalPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: ArchivalPhoto) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ photo, onClose, onSelectPhoto }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = ARCHIVAL_PHOTOS.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + ARCHIVAL_PHOTOS.length) % ARCHIVAL_PHOTOS.length;
    onSelectPhoto(ARCHIVAL_PHOTOS[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % ARCHIVAL_PHOTOS.length;
    onSelectPhoto(ARCHIVAL_PHOTOS[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Arsip"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-paper border border-line shadow-2xl p-3 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-forest">
              Arsip Visual Wisma ({currentIndex + 1} / {ARCHIVAL_PHOTOS.length})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 p-1 text-ink-subtle hover:text-ink text-xs border border-line bg-white rounded-xs px-2"
            aria-label="Tutup penampil gambar"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Tutup</span>
          </button>
        </div>

        <div className="relative max-h-[65vh] flex items-center justify-center bg-black/5 overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-paper/85 hover:bg-paper text-ink p-2 text-xs border border-line rounded-xs"
            aria-label="Foto sebelumnya"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-paper/85 hover:bg-paper text-ink p-2 text-xs border border-line rounded-xs"
            aria-label="Foto berikutnya"
          >
            →
          </button>
        </div>

        <div className="pt-3 border-t border-line mt-3 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h4 className="font-serif font-bold text-ink text-sm sm:text-base">
              {photo.title}
            </h4>
            <span className="text-[11px] text-ink-subtle">{photo.location}</span>
          </div>
          <p className="text-ink-muted text-xs leading-relaxed">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
};
