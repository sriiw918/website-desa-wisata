import { MessageCircle, Clock, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#012d1d] px-4 pt-12 pb-24 text-[#f1f1ed] sm:px-8 sm:pt-14 sm:pb-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Ajakan Pesan Akhir Halaman */}
        <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#1b4332] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Butuh Jadwal Khusus atau Informasi Rombongan?
            </h2>
            <p className="mt-2 text-base leading-relaxed text-[#e2e3df]">
              Tim pengelola warga Desa Wisata Lereng Asri siap membantu menyusun jadwal
              kunjungan keluarga, sekolah, maupun kantor dengan ramah dan tanpa biaya tambahan.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex min-h-[54px] shrink-0 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#b45309] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#92400e] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Hubungi Pemandu via WhatsApp</span>
          </button>
        </div>

        {/* Informasi Kontak & Navigasi Kaki Halaman */}
        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              Desa Wisata Lereng Asri
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#c1ecd4]">
              Wisata alam pegunungan, agrowisata kopi, budaya lokal, dan penginapan
              ramah lingkungan yang dikelola langsung oleh masyarakat desa.
            </p>
          </div>

          <div className="space-y-2.5 text-sm text-[#e2e3df]">
            <p className="font-bold text-white">Alamat &amp; Jam Layanan</p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a5d0b9]" aria-hidden="true" />
              <span>Jl. Perkebunan Lereng Asri No. 18, Kec. Pasirwangi, Jawa Barat</span>
            </p>
            <p className="flex items-center gap-2 tabular-nums">
              <Clock className="h-4 w-4 shrink-0 text-[#a5d0b9]" aria-hidden="true" />
              <span>Setiap Hari · 06.00 – 17.30 WIB</span>
            </p>
            <p className="flex items-center gap-2 tabular-nums">
              <Phone className="h-4 w-4 shrink-0 text-[#a5d0b9]" aria-hidden="true" />
              <span>WhatsApp Layanan: +62 812-3456-7890</span>
            </p>
          </div>

          <div className="text-sm text-[#e2e3df]">
            <p className="font-bold text-white">Tautan Bagian</p>
            <ul className="mt-2.5 grid grid-cols-2 gap-2">
              <li>
                <a href="#beranda" className="py-1 hover:text-white hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#destinasi" className="py-1 hover:text-white hover:underline">
                  Daftar Destinasi
                </a>
              </li>
              <li>
                <a href="#paket" className="py-1 hover:text-white hover:underline">
                  Paket &amp; Harga
                </a>
              </li>
              <li>
                <a href="#galeri" className="py-1 hover:text-white hover:underline">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#peta" className="py-1 hover:text-white hover:underline">
                  Peta Lokasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-[#a5d0b9]">
          © {new Date().getFullYear()} Kelompok Sadar Wisata Desa Lereng Asri. Seluruh
          informasi wisata disusun untuk kenyamanan pengunjung.
        </p>
      </div>
    </footer>
  );
}
