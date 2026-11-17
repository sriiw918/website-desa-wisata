import { useState } from 'react';
import { MapPin, Clock, Footprints, ChevronRight, X, Check } from 'lucide-react';
import {
  DESTINATIONS,
  type Destination,
  type DestinationCategory,
} from '../data/villageData';
import { ImageWithFallback } from './ImageWithFallback';

interface DestinationsSectionProps {
  onSelectOnMap: (mapPointId: string) => void;
  onOpenBooking: (packageId?: string) => void;
}

const CATEGORIES: DestinationCategory[] = [
  'Semua',
  'Air Terjun',
  'Kebun & Alam',
  'Puncak & Sunrise',
  'Budaya & Kuliner',
];

export function DestinationsSection({
  onSelectOnMap,
  onOpenBooking,
}: DestinationsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('Semua');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations =
    activeCategory === 'Semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === activeCategory);

  const handleJumpToMap = (mapPointId: string) => {
    setSelectedDestination(null);
    onSelectOnMap(mapPointId);
    const mapElement = document.getElementById('peta');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinasi" className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Tajuk Bagian */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#2d6a4f]">
              01. Pilihan Destinasi Utama
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1b4332] sm:text-3xl">
              Jelajahi Keindahan Alam &amp; Kearifan Desa
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-[#414844]">
              Semua titik wisata saling terhubung dengan jalur jalan kaki yang bersih,
              penunjuk arah yang jelas, dan tempat istirahat di setiap lereng.
            </p>
          </div>

          <p className="shrink-0 text-sm font-semibold text-[#414844] tabular-nums">
            Menampilkan {filteredDestinations.length} dari {DESTINATIONS.length} lokasi
          </p>
        </div>

        {/* Filter Kategori Interaktif (Tombol Segmen Ramah Sentuh >=44px) */}
        <div
          role="tablist"
          aria-label="Filter kategori destinasi"
          className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[44px] shrink-0 cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332] ${
                  isActive
                    ? 'bg-[#1b4332] text-white'
                    : 'bg-[#f4f4f0] text-[#414844] hover:bg-[#e8e8e4] hover:text-[#1b4332]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Daftar Kartu Destinasi */}
        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((dest) => (
            <article
              key={dest.id}
              className="flex flex-col overflow-hidden rounded-3xl bg-white p-4 shadow-[0_4px_20px_-2px_rgba(45,67,50,0.06),0_2px_6px_-1px_rgba(217,119,6,0.04)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#eeeeea]">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.name}
                  fallbackTitle={dest.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col pt-4">
                {/* Metadata bersih tanpa kotak pill */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-[#2d6a4f] tabular-nums">
                  <span>{dest.category}</span>
                  <span aria-hidden="true" className="text-[#717973]">
                    ·
                  </span>
                  <span>{dest.altitude}</span>
                  <span aria-hidden="true" className="text-[#717973]">
                    ·
                  </span>
                  <span>{dest.difficulty}</span>
                </div>

                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#1a1c1a]">
                  {dest.name}
                </h3>

                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#414844]">
                  {dest.shortDesc}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-[#2d6a4f]/10 pt-3 text-sm text-[#414844]">
                  <div className="flex items-center gap-2">
                    <Footprints className="h-4 w-4 shrink-0 text-[#2d6a4f]" aria-hidden="true" />
                    <span>{dest.walkTime}</span>
                  </div>
                  <div className="flex items-center gap-2 tabular-nums">
                    <Clock className="h-4 w-4 shrink-0 text-[#2d6a4f]" aria-hidden="true" />
                    <span>{dest.openHours}</span>
                  </div>
                </div>

                {/* Tombol Besar Ramah Sentuh (>=48px) */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#1b4332] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2d6a4f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332]"
                  >
                    <span>Detail Destinasi</span>
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleJumpToMap(dest.mapPointId)}
                    aria-label={`Lihat lokasi ${dest.name} di peta`}
                    className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#2d6a4f]/35 bg-[#f9faf6] px-4 py-2.5 text-sm font-semibold text-[#1b4332] transition-colors hover:bg-[#f4f4f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332]"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>Di Peta</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Detail Destinasi */}
      {selectedDestination && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-dest-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-xs sm:items-center sm:p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-[#f9faf6] p-5 shadow-2xl sm:rounded-3xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#2d6a4f] tabular-nums">
                  {selectedDestination.category} · {selectedDestination.altitude} ·{' '}
                  {selectedDestination.difficulty}
                </p>
                <h3
                  id="detail-dest-title"
                  className="mt-1 text-2xl font-bold tracking-tight text-[#1b4332]"
                >
                  {selectedDestination.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                aria-label="Tutup detail destinasi"
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#eeeeea] text-[#1a1c1a] transition-colors hover:bg-[#dadad6]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#eeeeea]">
              <ImageWithFallback
                src={selectedDestination.image}
                alt={selectedDestination.name}
                fallbackTitle={selectedDestination.name}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-4 text-base leading-relaxed text-[#1a1c1a]">
              {selectedDestination.fullDesc}
            </p>

            <div className="mt-5 rounded-2xl bg-[#f4f4f0] p-4">
              <p className="text-sm font-bold text-[#1b4332]">
                Daya Tarik &amp; Fasilitas Tersedia
              </p>
              <ul className="mt-2.5 space-y-2">
                {selectedDestination.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-[#414844]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#2d6a4f]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => handleJumpToMap(selectedDestination.mapPointId)}
                className="inline-flex min-h-[52px] flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#2d6a4f] bg-white px-5 py-3 text-base font-semibold text-[#1b4332] transition-colors hover:bg-[#f4f4f0]"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span>Tunjukkan di Peta</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedDestination(null);
                  onOpenBooking();
                }}
                className="inline-flex min-h-[52px] flex-1 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1b4332] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#2d6a4f]"
              >
                <span>Pesan Kunjungan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
