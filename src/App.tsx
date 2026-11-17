import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PackagesSection } from './components/PackagesSection';
import { GallerySection } from './components/GallerySection';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import {
  WhatsAppModal,
  WhatsAppFloatingButton,
} from './components/WhatsAppModal';

export default function App() {
  const [selectedMapPoint, setSelectedMapPoint] = useState<string>('titik-gerbang');
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    packageId?: string;
    guests?: number;
  }>({
    isOpen: false,
  });

  const handleOpenBooking = (packageId?: string, guests?: number) => {
    setBookingModalState({
      isOpen: true,
      packageId,
      guests,
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#f9faf6] text-[#1a1c1a]">
      <Navbar onOpenBooking={(pkgId) => handleOpenBooking(pkgId)} />

      <main>
        <HeroSection onOpenBooking={(pkgId) => handleOpenBooking(pkgId)} />

        <DestinationsSection
          onSelectOnMap={(pointId) => setSelectedMapPoint(pointId)}
          onOpenBooking={(pkgId) => handleOpenBooking(pkgId)}
        />

        <PackagesSection
          onBookPackage={(pkgId, guests) => handleOpenBooking(pkgId, guests)}
        />

        <GallerySection />

        <LocationMapSection
          selectedPointId={selectedMapPoint}
          onSelectPoint={(pointId) => setSelectedMapPoint(pointId)}
        />
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      <WhatsAppFloatingButton onClick={() => handleOpenBooking()} />

      <WhatsAppModal
        isOpen={bookingModalState.isOpen}
        initialPackageId={bookingModalState.packageId}
        initialGuests={bookingModalState.guests}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
