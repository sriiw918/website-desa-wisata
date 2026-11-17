import { useState } from 'react';
import { Check, Minus, Plus, MessageCircle, Users } from 'lucide-react';
import {
  TOUR_PACKAGES,
  VISITOR_TESTIMONIALS,
  formatRupiah,
} from '../data/villageData';
import { ImageWithFallback } from './ImageWithFallback';

interface PackagesSectionProps {
  onBookPackage: (packageId: string, guestCount: number) => void;
}

export function PackagesSection({ onBookPackage }: PackagesSectionProps) {
  const [guestCounts, setGuestCounts] = useState<Record<string, number>>({
    'paket-jelajah-sehari': 2,
    'paket-menginap-harmoni': 2,
    'paket-keluarga-rombongan': 5,
  });

  const adjustGuests = (pkgId: string, minGuests: number, delta: number) => {
    setGuestCounts((prev) => {
      const current = prev[pkgId] ?? minGuests;
      const next = Math.max(minGuests, Math.min(40, current + delta));
      return { ...prev, [pkgId]: next };
    });
  };

  return (
    <section
      id="paket"
      className="border-y border-[#2d6a4f]/10 bg-[#f4f4f0] px-4 py-12 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#2d6a4f]">
            02. Paket Wisata &amp; Harga Transparan
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1b4332] sm:text-3xl">
            Pilih Paket Liburan Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-[#414844]">
            Harga sudah termasuk tiket masuk, pemandu lokal warga desa, dan sajian kuliner
            tradisional. Atur jumlah peserta untuk melihat estimasi biaya langsung.
          </p>
        </div>

        {/* Grid Kartu Paket Wisata */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TOUR_PACKAGES.map((pkg) => {
            const guests = guestCounts[pkg.id] ?? pkg.minGuests;
            const totalEstimate = guests * pkg.pricePerPerson;

            return (
              <article
                key={pkg.id}
                className={`flex flex-col overflow-hidden rounded-3xl p-5 transition-transform duration-150 sm:p-6 ${
                  pkg.isFeatured
                    ? 'bg-[#1b4332] text-white shadow-[0_12px_32px_-4px_rgba(27,67,50,0.22)]'
                    : 'bg-white text-[#1a1c1a] shadow-[0_4px_20px_-2px_rgba(45,67,50,0.06)]'
                }`}
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#eeeeea]">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    fallbackTitle={pkg.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Metadata bersih tanpa kotak pill */}
                <div
                  className={`mt-4 flex flex-wrap items-center gap-x-2 text-xs font-semibold tabular-nums ${
                    pkg.isFeatured ? 'text-[#c1ecd4]' : 'text-[#2d6a4f]'
                  }`}
                >
                  <span>{pkg.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>Min. {pkg.minGuests} orang</span>
                  {pkg.isFeatured && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#ffb77d]">Pilihan Terfavorit</span>
                    </>
                  )}
                </div>

                <h3
                  className={`mt-1.5 text-2xl font-bold tracking-tight ${
                    pkg.isFeatured ? 'text-white' : 'text-[#1b4332]'
                  }`}
                >
                  {pkg.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1.5 tabular-nums">
                  <span
                    className={`text-3xl font-bold ${
                      pkg.isFeatured ? 'text-[#ffdcc3]' : 'text-[#b45309]'
                    }`}
                  >
                    {formatRupiah(pkg.pricePerPerson)}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      pkg.isFeatured ? 'text-[#e2e3df]' : 'text-[#414844]'
                    }`}
                  >
                    / orang
                  </span>
                </div>

                <p
                  className={`mt-3 text-[15px] leading-relaxed ${
                    pkg.isFeatured ? 'text-[#f1f1ed]' : 'text-[#414844]'
                  }`}
                >
                  {pkg.summary}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-current/15 pt-4">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                        pkg.isFeatured ? 'text-[#f1f1ed]' : 'text-[#1a1c1a]'
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.isFeatured ? 'text-[#aeeecb]' : 'text-[#2d6a4f]'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Kalkulator Jumlah Peserta & Total Estimasi */}
                <div
                  className={`mt-5 rounded-2xl p-3.5 ${
                    pkg.isFeatured ? 'bg-[#012d1d]/75' : 'bg-[#f4f4f0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                        pkg.isFeatured ? 'text-[#f1f1ed]' : 'text-[#1a1c1a]'
                      }`}
                    >
                      <Users className="h-4 w-4" aria-hidden="true" />
                      <span>Jumlah Peserta</span>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => adjustGuests(pkg.id, pkg.minGuests, -1)}
                        disabled={guests <= pkg.minGuests}
                        aria-label={`Kurangi jumlah peserta ${pkg.name}`}
                        className={`inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                          pkg.isFeatured
                            ? 'bg-[#2d6a4f] text-white hover:bg-[#3f6653]'
                            : 'bg-white text-[#1b4332] hover:bg-[#e8e8e4]'
                        }`}
                      >
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <span className="min-w-[2.5rem] text-center text-base font-bold tabular-nums">
                        {guests}
                      </span>

                      <button
                        type="button"
                        onClick={() => adjustGuests(pkg.id, pkg.minGuests, 1)}
                        aria-label={`Tambah jumlah peserta ${pkg.name}`}
                        className={`inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full transition-colors ${
                          pkg.isFeatured
                            ? 'bg-[#2d6a4f] text-white hover:bg-[#3f6653]'
                            : 'bg-white text-[#1b4332] hover:bg-[#e8e8e4]'
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`mt-3 flex items-center justify-between border-t pt-2.5 text-sm tabular-nums ${
                      pkg.isFeatured ? 'border-white/15' : 'border-[#2d6a4f]/15'
                    }`}
                  >
                    <span
                      className={pkg.isFeatured ? 'text-[#c1ecd4]' : 'text-[#414844]'}
                    >
                      Estimasi total ({guests} orang)
                    </span>
                    <span className="text-base font-bold">
                      {formatRupiah(totalEstimate)}
                    </span>
                  </div>
                </div>

                {/* Tombol Utama Pesan via WhatsApp (>=52px) */}
                <button
                  type="button"
                  onClick={() => onBookPackage(pkg.id, guests)}
                  className={`mt-5 inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-base font-bold transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    pkg.isFeatured
                      ? 'bg-[#b45309] text-white hover:bg-[#92400e] focus-visible:outline-white'
                      : 'bg-[#1b4332] text-white hover:bg-[#2d6a4f] focus-visible:outline-[#1b4332]'
                  }`}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Pesan Paket via WhatsApp</span>
                </button>

                <p
                  className={`mt-2.5 text-center text-xs ${
                    pkg.isFeatured ? 'text-[#c1ecd4]' : 'text-[#414844]'
                  }`}
                >
                  {pkg.scheduleHint}
                </p>
              </article>
            );
          })}
        </div>

        {/* Cerita Pengunjung yang Sudah Berkunjung (Claim-to-Proof Adjacency) */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {VISITOR_TESTIMONIALS.map((review) => (
            <blockquote
              key={review.id}
              className="rounded-2xl border border-[#2d6a4f]/12 bg-white p-5 sm:p-6"
            >
              <p className="text-[15px] leading-relaxed text-[#1a1c1a]">
                “{review.quote}”
              </p>
              <footer className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-[#414844]">
                <span className="font-bold text-[#1b4332]">{review.name}</span>
                <span aria-hidden="true">·</span>
                <span>{review.origin}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2d6a4f]">{review.packageTaken}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
