import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/villageData';
import { ImageWithFallback } from './ImageWithFallback';

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const activePhoto = lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  return (
    <section id="galeri" className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#2d6a4f]">03. Galeri Suasana Desa</p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1b4332] sm:text-3xl">
            Potret Keseharian &amp; Alam Lereng Asri
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-[#414844]">
            Ketuk foto mana saja untuk memperbesar tampilan dan melihat cerita di balik
            setiap sudut desa.
          </p>
        </div>

        {/* Grid Foto Galeri */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Perbesar foto: ${photo.title}`}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-white p-3 text-left shadow-[0_4px_20px_-2px_rgba(45,67,50,0.06)] transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#eeeeea]">
                <ImageWithFallback
                  src={photo.image}
                  alt={photo.title}
                  fallbackTitle={photo.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute right-3 bottom-3 inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full bg-[#012d1d]/80 text-white backdrop-blur-xs transition-transform group-hover:scale-105">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>

              <div className="px-1 pt-3 pb-1">
                <p className="text-xs font-semibold text-[#2d6a4f]">
                  {photo.category} · {photo.location}
                </p>
                <h3 className="mt-1 text-base font-bold text-[#1a1c1a]">
                  {photo.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Perbesar Foto */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#1a1c1a] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <p className="text-sm font-semibold text-[#c1ecd4] tabular-nums">
                {lightboxIndex + 1} / {GALLERY_PHOTOS.length} · {activePhoto.location}
              </p>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Tutup galeri foto"
                className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-black">
              <ImageWithFallback
                src={activePhoto.image}
                alt={activePhoto.title}
                fallbackTitle={activePhoto.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{activePhoto.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#e2e3df]">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + GALLERY_PHOTOS.length) %
                        GALLERY_PHOTOS.length
                    )
                  }
                  aria-label="Foto sebelumnya"
                  className="inline-flex min-h-[48px] min-w-[48px] cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)
                  }
                  aria-label="Foto berikutnya"
                  className="inline-flex min-h-[48px] min-w-[48px] cursor-pointer items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
