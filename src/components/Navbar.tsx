import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (packageId?: string) => void;
}

const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#destinasi', label: 'Destinasi' },
  { href: '#paket', label: 'Paket' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#peta', label: 'Peta' },
];

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#2d6a4f]/15 bg-[#f9faf6]/92 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-8 lg:gap-8 lg:px-12">
        {/* Zona 1: Wordmark Tunggal */}
        <a
          href="#beranda"
          className="shrink-0 whitespace-nowrap text-lg font-bold tracking-tight text-[#1b4332] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b4332] sm:text-xl"
        >
          Lereng Asri
        </a>

        {/* Zona 2: Navigasi Satu Baris (Desktop) */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-6 text-[15px] font-semibold text-[#414844] md:flex lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap py-2 underline-offset-4 transition-colors duration-150 hover:text-[#1b4332] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b4332]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Satu Aksi Utama + Tombol Menu Mobile */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-[#1b4332] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#2d6a4f] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332] sm:px-5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Pesan Wisata</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-[#2d6a4f]/20 bg-[#f4f4f0] text-[#1b4332] transition-colors hover:bg-[#e8e8e4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Tarik Turun Mobile dengan Target Sentuh Besar (>=48px) */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu navigasi ponsel"
          className="border-t border-[#2d6a4f]/10 bg-[#f9faf6] px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[48px] items-center rounded-xl px-4 text-base font-semibold text-[#1a1c1a] transition-colors hover:bg-[#f4f4f0] hover:text-[#1b4332]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
