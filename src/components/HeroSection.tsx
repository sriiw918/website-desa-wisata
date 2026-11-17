import { MessageCircle, ArrowDown, Mountain, ThermometerSun, Wind } from 'lucide-react';
import { HERO_IMAGE } from '../data/villageData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroSectionProps {
  onOpenBooking: (packageId?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="beranda" className="px-4 pt-4 pb-10 sm:px-8 sm:pt-6 sm:pb-14 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Bar Info Ketinggian & Cuaca Desa (Teks bersih tanpa kapsul pill) */}
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-[#f4f4f0] px-4 py-3 text-sm font-medium text-[#274e3d] sm:px-5">
          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <Mountain className="h-4 w-4 text-[#2d6a4f]" aria-hidden="true" />
            1.250 mdpl
          </span>
          <span aria-hidden="true" className="text-[#717973]">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <ThermometerSun className="h-4 w-4 text-[#b45309]" aria-hidden="true" />
            19°C Sejuk Alami
          </span>
          <span aria-hidden="true" className="text-[#717973]">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Wind className="h-4 w-4 text-[#2d6a4f]" aria-hidden="true" />
            Udara Pegunungan Segar
          </span>
          <span aria-hidden="true" className="hidden text-[#717973] sm:inline">
            ·
          </span>
          <span className="hidden text-[#414844] sm:inline">
            Buka Setiap Hari 06.00 – 17.30 WIB
          </span>
        </div>

        {/* Kartu Foto Utama Beranda */}
        <div className="relative overflow-hidden rounded-3xl bg-[#012d1d] shadow-[0_12px_32px_-4px_rgba(27,67,50,0.16)]">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/10]">
            <ImageWithFallback
              src={HERO_IMAGE}
              alt="Pemandangan pagi Desa Wisata Lereng Asri dengan sawah terasering hijau, pondok bambu, dan kabut pegunungan"
              fallbackTitle="Desa Wisata Lereng Asri"
              className="h-full w-full object-cover object-center"
            />
            {/* Scrim gradien terukur untuk kontras teks >= 4.5:1 */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#012d1d]/95 via-[#012d1d]/55 to-[#012d1d]/15"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-12">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold tracking-wide text-[#c1ecd4] sm:text-base">
                Desa Wisata Lereng Asri · Jawa Barat
              </p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Hirup Udara Segar dan Hangatnya Suasana Desa Pegunungan
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#f1f1ed] sm:mt-4 sm:text-lg">
                Nikmati perjalanan santai menyusuri air terjun jernih, terasering kebun kopi,
                homestay kayu bambu, dan hidangan rumahan warga yang ramah keluarga.
              </p>

              {/* Tombol Aksi Besar & Ramah Sentuh (>=52px) */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('paket-menginap-harmoni')}
                  className="inline-flex min-h-[54px] w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#b45309] px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-all duration-150 hover:bg-[#92400e] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Pesan Paket via WhatsApp</span>
                </button>

                <a
                  href="#destinasi"
                  className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/45 bg-white/12 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/22 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <span>Lihat Daftar Destinasi</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
