import { useState } from 'react';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Car,
  Footprints,
  ExternalLink,
} from 'lucide-react';
import { MAP_LOCATIONS, VILLAGE_COORDINATES } from '../data/villageData';

interface LocationMapSectionProps {
  selectedPointId: string;
  onSelectPoint: (pointId: string) => void;
}

export function LocationMapSection({
  selectedPointId,
  onSelectPoint,
}: LocationMapSectionProps) {
  const [zoom, setZoom] = useState(1);
  const [copiedCoords, setCopiedCoords] = useState(false);

  const activePoint =
    MAP_LOCATIONS.find((loc) => loc.id === selectedPointId) ?? MAP_LOCATIONS[0];

  const handleCopyCoords = async () => {
    try {
      await navigator.clipboard.writeText(VILLAGE_COORDINATES);
      setCopiedCoords(true);
      setTimeout(() => setCopiedCoords(false), 2400);
    } catch {
      setCopiedCoords(false);
    }
  };

  return (
    <section
      id="peta"
      className="border-t border-[#2d6a4f]/10 bg-[#f4f4f0] px-4 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#2d6a4f]">
            04. Peta Lokasi &amp; Jalur Wisata Desa
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1b4332] sm:text-3xl">
            Peta Kawasan Desa Wisata Lereng Asri
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-[#414844]">
            Ketuk salah satu penanda lokasi pada peta untuk melihat jarak tempuh,
            ketinggian, dan fasilitas yang tersedia di setiap titik wisata.
          </p>
        </div>

        {/* Grid Utama Peta Interaktif + Detail Lokasi */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Peta Topografi Interaktif SVG */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-[#2d6a4f]/15 bg-[#e9efe6] p-3 shadow-[0_4px_20px_-2px_rgba(45,67,50,0.06)] lg:col-span-7">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1b4332] tabular-nums">
                <Navigation className="h-4 w-4 text-[#2d6a4f]" aria-hidden="true" />
                <span>Skala Jalur Jalan Kaki Desa · Utara ↑</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, Number((z - 0.15).toFixed(2))))}
                  aria-label="Perkecil peta"
                  className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-[#1b4332] shadow-xs transition-colors hover:bg-[#f9faf6]"
                >
                  <ZoomOut className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(1.45, Number((z + 0.15).toFixed(2))))}
                  aria-label="Perbesar peta"
                  className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-[#1b4332] shadow-xs transition-colors hover:bg-[#f9faf6]"
                >
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </button>
                {zoom > 1 && (
                  <button
                    type="button"
                    onClick={() => setZoom(1)}
                    aria-label="Atur ulang tampilan peta"
                    className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-[#1b4332] shadow-xs transition-colors hover:bg-[#f9faf6]"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Kanvas Peta */}
            <div className="relative flex-1 overflow-auto rounded-2xl bg-[#eef3eb]">
              <div
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center center',
                }}
                className="transition-transform duration-200"
              >
                <svg
                  viewBox="0 0 720 480"
                  role="img"
                  aria-label="Peta interaktif kawasan Desa Wisata Lereng Asri"
                  className="h-auto w-full select-none"
                >
                  {/* Latar Kontur Lereng Pegunungan */}
                  <rect width="720" height="480" fill="#eef3eb" />
                  <path
                    d="M0 190 Q 180 120, 360 155 T 720 110 L 720 0 L 0 0 Z"
                    fill="#dfeadc"
                  />
                  <path
                    d="M0 115 Q 200 65, 420 95 T 720 55 L 720 0 L 0 0 Z"
                    fill="#cfe0cb"
                  />
                  <path
                    d="M40 310 Q 220 265, 430 305 T 720 275"
                    fill="none"
                    stroke="#bfd4bb"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                  <path
                    d="M0 390 Q 240 355, 490 385 T 720 360"
                    fill="none"
                    stroke="#bfd4bb"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />

                  {/* Aliran Sungai Pegunungan menuju Curug */}
                  <path
                    d="M 520 55 Q 555 170, 585 280 T 625 460"
                    fill="none"
                    stroke="#98c9d4"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 520 55 Q 555 170, 585 280 T 625 460"
                    fill="none"
                    stroke="#d7eff4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Jalan Akses Mobil ke Gerbang Desa */}
                  <path
                    d="M 45 468 Q 115 445, 165 410"
                    fill="none"
                    stroke="#717973"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 45 468 Q 115 445, 165 410"
                    fill="none"
                    stroke="#f9faf6"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                  />

                  {/* Jalur Jalan Kaki Wisata Antar Titik */}
                  <path
                    d="M 165 410 Q 230 375, 280 335"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="3.5"
                    strokeDasharray="6 5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 280 335 Q 255 280, 235 225"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 280 335 Q 350 285, 425 255"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="3.5"
                    strokeDasharray="6 5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 425 255 Q 515 295, 585 350"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 425 255 Q 485 185, 560 120"
                    fill="none"
                    stroke="#2d6a4f"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />

                  {/* Label Area Geografis */}
                  <text
                    x="74"
                    y="452"
                    fontSize="11"
                    fontWeight="600"
                    fill="#414844"
                  >
                    Akses Jalan Raya Provinsi (12 km)
                  </text>
                  <text
                    x="608"
                    y="420"
                    fontSize="11"
                    fontWeight="600"
                    fill="#2c694e"
                  >
                    Sungai Tirta
                  </text>
                  <text
                    x="72"
                    y="72"
                    fontSize="12"
                    fontWeight="700"
                    fill="#274e3d"
                  >
                    Zona Hutan Lindung Lereng Utara
                  </text>

                  {/* Penanda Lokasi Interaktif */}
                  {MAP_LOCATIONS.map((loc, idx) => {
                    const isSelected = loc.id === activePoint.id;
                    return (
                      <g
                        key={loc.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Pilih lokasi ${loc.name}`}
                        aria-pressed={isSelected}
                        onClick={() => onSelectPoint(loc.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onSelectPoint(loc.id);
                          }
                        }}
                        className="cursor-pointer outline-none"
                      >
                        {isSelected && (
                          <circle
                            cx={loc.x}
                            cy={loc.y}
                            r="24"
                            fill="#b45309"
                            opacity="0.22"
                          />
                        )}
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={isSelected ? 17 : 14}
                          fill={
                            isSelected
                              ? '#b45309'
                              : loc.isMainHub
                                ? '#012d1d'
                                : '#1b4332'
                          }
                          stroke="#ffffff"
                          strokeWidth="3"
                        />
                        <text
                          x={loc.x}
                          y={loc.y + 4.5}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="700"
                          fill="#ffffff"
                        >
                          {idx + 1}
                        </text>

                        {/* Label Nama Singkat di Peta */}
                        <rect
                          x={loc.x - 66}
                          y={loc.y + 21}
                          width="132"
                          height="22"
                          rx="11"
                          fill={isSelected ? '#1b4332' : '#ffffff'}
                          opacity="0.95"
                        />
                        <text
                          x={loc.x}
                          y={loc.y + 35}
                          textAnchor="middle"
                          fontSize="10.5"
                          fontWeight="700"
                          fill={isSelected ? '#ffffff' : '#1a1c1a'}
                        >
                          {loc.name.length > 21
                            ? `${loc.name.slice(0, 19)}…`
                            : loc.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Pemilih Cepat Titik Peta untuk Pengguna Ponsel */}
            <div className="mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
              {MAP_LOCATIONS.map((loc, idx) => {
                const isSelected = loc.id === activePoint.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => onSelectPoint(loc.id)}
                    className={`min-h-[44px] shrink-0 cursor-pointer whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-[#1b4332] text-white'
                        : 'bg-white text-[#1a1c1a] hover:bg-[#f9faf6]'
                    }`}
                  >
                    <span className="tabular-nums">{idx + 1}.</span> {loc.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panel Detail Lokasi Terpilih & Akses Kendaraan */}
          <div className="flex flex-col justify-between gap-5 lg:col-span-5">
            <div className="rounded-3xl bg-white p-5 shadow-[0_4px_20px_-2px_rgba(45,67,50,0.06)] sm:p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#b45309] tabular-nums">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>
                  {activePoint.category} · {activePoint.altitude}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#1b4332] sm:text-2xl">
                {activePoint.name}
              </h3>

              <p className="mt-2.5 text-[15px] leading-relaxed text-[#414844]">
                {activePoint.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-[#f4f4f0] p-3.5 text-sm">
                <div>
                  <p className="text-xs font-medium text-[#414844]">Jarak dari Gerbang</p>
                  <p className="mt-0.5 font-bold text-[#1b4332] tabular-nums">
                    {activePoint.distanceFromGate}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#414844]">Waktu Tempuh</p>
                  <p className="mt-0.5 flex items-center gap-1.5 font-bold text-[#1b4332]">
                    <Footprints className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{activePoint.walkMinutes}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-[#414844]">
                  Fasilitas di titik ini:
                </p>
                <p className="mt-1 text-sm font-semibold text-[#1a1c1a]">
                  {activePoint.facilities.join(' · ')}
                </p>
              </div>
            </div>

            {/* Informasi Alamat, Rute Kendaraan & Koordinat GPS */}
            <div className="rounded-3xl bg-[#1b4332] p-5 text-white shadow-[0_4px_20px_-2px_rgba(27,67,50,0.12)] sm:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#c1ecd4]">
                <Car className="h-4 w-4" aria-hidden="true" />
                <span>Panduan Menuju Lokasi</span>
              </div>

              <p className="mt-2 text-base font-bold">
                Jl. Perkebunan Lereng Asri No. 18, Kec. Pasirwangi
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#e2e3df]">
                Jalan beraspal mulus dapat dilalui sepeda motor, mobil keluarga, hingga
                minibus wisata (Elf/HiAce). Sekitar 50 menit dari gerbang tol terdekat.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#012d1d] px-4 py-3 text-sm tabular-nums">
                <span className="font-mono text-[#c1ecd4]">
                  GPS: {VILLAGE_COORDINATES}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full bg-[#2d6a4f] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3f6653]"
                >
                  {copiedCoords ? (
                    <>
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Salin Koordinat</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`https://www.openstreetmap.org/?mlat=-7.1842&mlon=107.4318#map=15/-7.1842/107.4318`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1b4332] transition-colors hover:bg-[#f4f4f0]"
              >
                <span>Buka Koordinat di Peta Eksternal</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
