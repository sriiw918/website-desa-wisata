import { useState, useEffect } from 'react';
import { X, MessageCircle, Copy, Check, ExternalLink, Minus, Plus } from 'lucide-react';
import {
  TOUR_PACKAGES,
  formatRupiah,
  buildWhatsAppUrl,
} from '../data/villageData';

interface WhatsAppModalProps {
  isOpen: boolean;
  initialPackageId?: string;
  initialGuests?: number;
  onClose: () => void;
}

export function WhatsAppModal({
  isOpen,
  initialPackageId,
  initialGuests,
  onClose,
}: WhatsAppModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackageId || TOUR_PACKAGES[1].id
  );
  const [guestCount, setGuestCount] = useState<number>(initialGuests || 2);
  const [visitorName, setVisitorName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const pkg =
        TOUR_PACKAGES.find((p) => p.id === initialPackageId) ?? TOUR_PACKAGES[1];
      setSelectedPkgId(pkg.id);
      setGuestCount(
        initialGuests ? Math.max(pkg.minGuests, initialGuests) : pkg.minGuests
      );
      setCopied(false);
    }
  }, [isOpen, initialPackageId, initialGuests]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePackage =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) ?? TOUR_PACKAGES[1];
  const safeGuests = Math.max(activePackage.minGuests, guestCount);
  const estimatedTotal = safeGuests * activePackage.pricePerPerson;

  const formattedMessage = [
    'Halo Pengelola Desa Wisata Lereng Asri,',
    '',
    'Saya ingin memesan / menanyakan ketersediaan paket wisata:',
    `- Nama Pemesan: ${visitorName.trim() || '(Belum diisi)'}`,
    `- Paket Wisata: ${activePackage.name}`,
    `- Jumlah Peserta: ${safeGuests} orang`,
    `- Rencana Tanggal: ${visitDate || 'Menyesuaikan jadwal tersedia'}`,
    `- Estimasi Biaya: ${formatRupiah(estimatedTotal)}`,
    notes.trim() ? `- Catatan Tambahan: ${notes.trim()}` : '',
    '',
    'Mohon informasi ketersediaan dan panduannya. Terima kasih!',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppUrl(formattedMessage);

  const handleSelectPackage = (pkgId: string) => {
    const found = TOUR_PACKAGES.find((p) => p.id === pkgId);
    setSelectedPkgId(pkgId);
    if (found && guestCount < found.minGuests) {
      setGuestCount(found.minGuests);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 backdrop-blur-xs sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-[#f9faf6] p-5 shadow-2xl sm:rounded-3xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#2d6a4f]/15 pb-4">
          <div>
            <p className="text-xs font-semibold text-[#2d6a4f]">
              Pemesanan Langsung Tanpa Perantara
            </p>
            <h2
              id="wa-modal-title"
              className="mt-1 text-2xl font-bold tracking-tight text-[#1b4332]"
            >
              Pesan Wisata via WhatsApp
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela pemesanan"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#eeeeea] text-[#1a1c1a] transition-colors hover:bg-[#dadad6]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          {/* Nama Pemesan */}
          <div>
            <label
              htmlFor="wa-visitor-name"
              className="block text-sm font-semibold text-[#1a1c1a]"
            >
              Nama Lengkap Anda
            </label>
            <input
              id="wa-visitor-name"
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="mt-1.5 min-h-[52px] w-full rounded-full border border-[#2d6a4f]/25 bg-[#f4f4f0] px-5 text-base text-[#1a1c1a] placeholder:text-[#717973] focus:border-[#1b4332] focus:outline-none focus:ring-3 focus:ring-[#2d6a4f]/15"
            />
          </div>

          {/* Pilihan Paket */}
          <div>
            <label
              htmlFor="wa-package-select"
              className="block text-sm font-semibold text-[#1a1c1a]"
            >
              Pilih Paket Wisata
            </label>
            <select
              id="wa-package-select"
              value={selectedPkgId}
              onChange={(e) => handleSelectPackage(e.target.value)}
              className="mt-1.5 min-h-[52px] w-full rounded-full border border-[#2d6a4f]/25 bg-[#f4f4f0] px-5 text-base font-medium text-[#1a1c1a] focus:border-[#1b4332] focus:outline-none focus:ring-3 focus:ring-[#2d6a4f]/15"
            >
              {TOUR_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} ({formatRupiah(pkg.pricePerPerson)}/orang)
                </option>
              ))}
            </select>
          </div>

          {/* Tanggal & Jumlah Peserta */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wa-visit-date"
                className="block text-sm font-semibold text-[#1a1c1a]"
              >
                Rencana Tanggal
              </label>
              <input
                id="wa-visit-date"
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="mt-1.5 min-h-[52px] w-full rounded-full border border-[#2d6a4f]/25 bg-[#f4f4f0] px-5 text-base text-[#1a1c1a] focus:border-[#1b4332] focus:outline-none focus:ring-3 focus:ring-[#2d6a4f]/15"
              />
            </div>

            <div>
              <span className="block text-sm font-semibold text-[#1a1c1a]">
                Jumlah Peserta (Min. {activePackage.minGuests})
              </span>
              <div className="mt-1.5 flex min-h-[52px] items-center justify-between rounded-full border border-[#2d6a4f]/25 bg-[#f4f4f0] px-2">
                <button
                  type="button"
                  onClick={() =>
                    setGuestCount((g) => Math.max(activePackage.minGuests, g - 1))
                  }
                  disabled={safeGuests <= activePackage.minGuests}
                  aria-label="Kurangi peserta"
                  className="inline-flex min-h-[42px] min-w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-[#1b4332] transition-colors hover:bg-[#e8e8e4] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="text-base font-bold text-[#1b4332] tabular-nums">
                  {safeGuests} Orang
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount((g) => Math.min(40, g + 1))}
                  aria-label="Tambah peserta"
                  className="inline-flex min-h-[42px] min-w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-[#1b4332] transition-colors hover:bg-[#e8e8e4]"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Catatan Tambahan */}
          <div>
            <label
              htmlFor="wa-notes"
              className="block text-sm font-semibold text-[#1a1c1a]"
            >
              Catatan Khusus (Opsional)
            </label>
            <input
              id="wa-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Bawa anak kecil, minta menu tidak pedas"
              className="mt-1.5 min-h-[52px] w-full rounded-full border border-[#2d6a4f]/25 bg-[#f4f4f0] px-5 text-base text-[#1a1c1a] placeholder:text-[#717973] focus:border-[#1b4332] focus:outline-none focus:ring-3 focus:ring-[#2d6a4f]/15"
            />
          </div>

          {/* Ringkasan Estimasi & Pratinjau Pesan */}
          <div className="rounded-2xl bg-[#f4f4f0] p-4">
            <div className="flex items-center justify-between text-sm tabular-nums">
              <span className="font-medium text-[#414844]">Estimasi Biaya Total</span>
              <span className="text-lg font-bold text-[#1b4332]">
                {formatRupiah(estimatedTotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#414844]">
              Pembayaran dilakukan setelah jadwal dikonfirmasi pengelola desa.
            </p>
          </div>

          {/* Tombol Kirim & Salin Pesan */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1b4332] px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(45,106,79,0.28)] transition-colors hover:bg-[#2d6a4f]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Buka WhatsApp Sekarang</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex min-h-[54px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#2d6a4f] bg-white px-5 py-3 text-sm font-bold text-[#1b4332] transition-colors hover:bg-[#f4f4f0]"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#2d6a4f]" aria-hidden="true" />
                  <span>Pesan Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" />
                  <span>Salin Pesan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WhatsAppFloatingButtonProps {
  onClick: () => void;
}

export function WhatsAppFloatingButton({ onClick }: WhatsAppFloatingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Pesan wisata atau tanya pemandu via WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex h-14 min-w-[56px] cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] px-4 text-white shadow-[0_8px_24px_rgba(45,106,79,0.34),0_2px_8px_rgba(27,67,50,0.2)] transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b4332]"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-bold whitespace-nowrap sm:inline">
        Pesan via WhatsApp
      </span>
    </button>
  );
}
