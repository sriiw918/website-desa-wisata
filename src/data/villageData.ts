export type DestinationCategory =
  | 'Semua'
  | 'Air Terjun'
  | 'Kebun & Alam'
  | 'Puncak & Sunrise'
  | 'Budaya & Kuliner';

export interface Destination {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, 'Semua'>;
  altitude: string;
  walkTime: string;
  difficulty: 'Ramah Keluarga' | 'Menengah';
  openHours: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  mapPointId: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  pricePerPerson: number;
  minGuests: number;
  summary: string;
  isFeatured?: boolean;
  includes: string[];
  scheduleHint: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  caption: string;
}

export interface MapLocationPoint {
  id: string;
  name: string;
  category: string;
  altitude: string;
  distanceFromGate: string;
  walkMinutes: string;
  description: string;
  facilities: string[];
  x: number;
  y: number;
  isMainHub?: boolean;
}

export interface VisitorTestimonial {
  id: string;
  name: string;
  origin: string;
  packageTaken: string;
  quote: string;
}

export const WHATSAPP_NUMBER = '6281234567890';
export const VILLAGE_COORDINATES = '-7.1842, 107.4318';

export const HERO_IMAGE = '/src/assets/images/hero_lereng_asri_1794887698074.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'curug-tirta-asri',
    name: 'Curug Tirta Asri',
    category: 'Air Terjun',
    altitude: '1.180 mdpl',
    walkTime: '15 menit jalan kaki',
    difficulty: 'Ramah Keluarga',
    openHours: '07.00 – 16.30 WIB',
    shortDesc:
      'Air terjun jernih dua tingkat di tengah rimbun pakis gunung dengan jembatan bambu yang aman dan nyaman untuk seluruh keluarga.',
    fullDesc:
      'Curug Tirta Asri mengalir langsung dari mata air hutan lindung lereng gunung. Tersedia jalur setapak bambu berpagar rapi, gazebo peristirahatan, serta kolam alami dangkal yang aman untuk bermain air bersama anak-anak.',
    highlights: [
      'Jalur papan bambu antiselip dan landai',
      'Kolam mata air jernih dan sejuk alami',
      'Tersedia ruang bilas bersih dan warung jahe hangat',
    ],
    image: '/src/assets/images/destinasi_air_terjun_1794887698925.jpg',
    mapPointId: 'titik-curug',
  },
  {
    id: 'kebun-kopi-terasering',
    name: 'Terasering Kebun Kopi & Teh',
    category: 'Kebun & Alam',
    altitude: '1.260 mdpl',
    walkTime: '10 menit dari pendopo',
    difficulty: 'Ramah Keluarga',
    openHours: '06.30 – 17.00 WIB',
    shortDesc:
      'Hamparan kebun kopi Arabika dan pucuk teh hijau di lereng berundak, tempat wisatawan dapat ikut memetik dan menyangrai biji kopi.',
    fullDesc:
      'Dikelola langsung oleh kelompok tani Desa Lereng Asri, area terasering ini menyajikan pemandangan lembah berkabut serta pengalaman edukasi panen kopi Arabika dataran tinggi hingga proses sangrai tradisional.',
    highlights: [
      'Sesi petik buah kopi merah langsung bersama petani',
      'Mencicipi seduhan kopi tubruk dan teh hijau segar',
      'Jalan batu tertata rapi sepanjang lereng kebun',
    ],
    image: '/src/assets/images/destinasi_kebun_kopi_1794887699668.jpg',
    mapPointId: 'titik-kebun',
  },
  {
    id: 'bukit-pandang-matahari',
    name: 'Bukit Pandang Matahari',
    category: 'Puncak & Sunrise',
    altitude: '1.420 mdpl',
    walkTime: '25 menit treking ringan',
    difficulty: 'Menengah',
    openHours: '04.45 – 17.30 WIB',
    shortDesc:
      'Anjungan kayu bambu menghadap lautan awan pagi dan gugusan puncak pegunungan saat matahari terbit keemasan.',
    fullDesc:
      'Titik tertinggi kawasan wisata dengan gardu pandang bambu bertingkat yang kokoh. Pengunjung biasa tiba pukul 05.15 WIB untuk menikmati hangatnya teh serai sembari menyaksikan kabut lembah perlahan tersingkap.',
    highlights: [
      'Panorama lautan awan 270 derajat saat fajar',
      'Anjungan bambu aman dengan meja santai',
      'Tersedia ojek wisata lokal bagi lansia atau rombongan',
    ],
    image: '/src/assets/images/destinasi_bukit_sunrise_1794887699709.jpg',
    mapPointId: 'titik-bukit',
  },
  {
    id: 'pendopo-kuliner-budaya',
    name: 'Pendopo Kuliner & Kampung Bambu',
    category: 'Budaya & Kuliner',
    altitude: '1.210 mdpl',
    walkTime: '2 menit dari area parkir',
    difficulty: 'Ramah Keluarga',
    openHours: '07.00 – 20.00 WIB',
    shortDesc:
      'Pusat keramahan warga desa dengan sajian liwetan daun pisang, lauk bumbu desa dalam kuali tanah liat, dan lokakarya kriya.',
    fullDesc:
      'Di Pendopo Bambu Asri, wisatawan disambut hangat oleh ibu-ibu PKK desa dengan hidangan rumahan segar dari kebun sendiri. Pengunjung juga bisa mengikuti kelas membatik ecoprint daun atau meracik wedang rempah.',
    highlights: [
      'Hidangan nasi liwet merah, ayam kampung, dan sambal dadak',
      'Sajian gerabah tanah liat hangat dan ramah lingkungan',
      'Lokakarya anyaman bambu dan batik daun untuk keluarga',
    ],
    image: '/src/assets/images/galeri_budaya_kuliner_1794887700361.jpg',
    mapPointId: 'titik-pendopo',
  },
  {
    id: 'homestay-warung-jati',
    name: 'Kawasan Homestay Bambu & Jati',
    category: 'Budaya & Kuliner',
    altitude: '1.230 mdpl',
    walkTime: '5 menit dari gerbang desa',
    difficulty: 'Ramah Keluarga',
    openHours: 'Check-in 14.00 WIB · Check-out 12.00 WIB',
    shortDesc:
      'Penginapan kayu jati dan anyaman bambu berteras luas menghadap terasering sawah hijau dengan suara alam yang tenang.',
    fullDesc:
      'Dirancang menggunakan arsitektur tradisional ramah lingkungan dengan pencahayaan hangat dan beranda santai pribadi. Setiap unit dilengkapi kamar mandi air hangat, selimut tebal pegunungan, dan sarapan pagi khas desa.',
    highlights: [
      'Beranda kayu pribadi menghadap terasering sawah',
      'Air hangat tenaga surya dan Wi-Fi area pendopo',
      'Suasana malam hening, sejuk, dan ramah anak',
    ],
    image: '/src/assets/images/paket_homestay_bambu_1794887700608.jpg',
    mapPointId: 'titik-homestay',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'paket-jelajah-sehari',
    name: 'Paket Jelajah Sehari',
    duration: '1 Hari (07.30 – 16.00 WIB)',
    pricePerPerson: 145000,
    minGuests: 2,
    summary:
      'Pilihan tepat untuk liburan akhir pekan singkat menikmati air terjun, kebun kopi, dan santap siang hangat di pendopo.',
    includes: [
      'Tiket masuk seluruh destinasi wisata alam',
      'Pemandu lokal ramah berpengalaman',
      'Tur petik & seduh kopi Arabika lereng gunung',
      'Makan siang liwetan saung & wedang jahe hangat',
    ],
    scheduleHint: 'Berangkat setiap hari · Fleksibel jam kedatangan',
    image: '/src/assets/images/destinasi_kebun_kopi_1794887699668.jpg',
  },
  {
    id: 'paket-menginap-harmoni',
    name: 'Paket Menginap Harmoni',
    duration: '2 Hari 1 Malam',
    pricePerPerson: 425000,
    minGuests: 2,
    isFeatured: true,
    summary:
      'Pengalaman paling lengkap: bermalam di homestay kayu & bambu, berburu matahari terbit di Bukit Pandang, dan makan 3 kali.',
    includes: [
      '1 malam di Homestay Bambu / Warung Jati (air hangat)',
      '3x makan hidangan tradisional desa & camilan sore',
      'Treking fajar ke Bukit Pandang Matahari + teh serai',
      'Kunjungan Curug Tirta Asri & tur kebun kopi pagi',
    ],
    scheduleHint: 'Paling diminati wisatawan · Kapasitas terbatas',
    image: '/src/assets/images/paket_homestay_bambu_1794887700608.jpg',
  },
  {
    id: 'paket-keluarga-rombongan',
    name: 'Paket Keluarga & Rombongan',
    duration: '1 Hari Penuh (Min. 5 Orang)',
    pricePerPerson: 120000,
    minGuests: 5,
    summary:
      'Dirancang khusus untuk keluarga besar, reuni, atau komunitas dengan jalur aman anak & lansia serta kegiatan kreatif desa.',
    includes: [
      'Rute wisata landai ramah anak dan lansia',
      'Lokakarya ecoprint daun atau membuat gula aren',
      'Makan siang prasmanan di Pendopo Bambu Asri',
      'Parkir khusus rombongan & dokumentasi foto bersama',
    ],
    scheduleHint: 'Anak di bawah 4 tahun gratis · Bisa atur menu',
    image: '/src/assets/images/galeri_budaya_kuliner_1794887700361.jpg',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'galeri-1',
    title: 'Pagi Berkabut di Lembah Lereng Asri',
    location: 'Kawasan Desa Utama',
    category: 'Pemandangan',
    image: HERO_IMAGE,
    caption:
      'Sinar matahari pagi menyapa deretan rumah kayu warga dan petak sawah terasering yang masih berselimut embun.',
  },
  {
    id: 'galeri-2',
    title: 'Kesegaran Alami Curug Tirta Asri',
    location: 'Zona Hutan Lindung',
    category: 'Air Terjun',
    image: '/src/assets/images/destinasi_air_terjun_1794887698925.jpg',
    caption:
      'Jembatan bambu yang tertata rapi memudahkan pengunjung menikmati gemericik air terjun tanpa harus mendaki terjal.',
  },
  {
    id: 'galeri-3',
    title: 'Panen Ceri Kopi Bersama Petani',
    location: 'Kebun Kopi Lereng',
    category: 'Aktivitas',
    image: '/src/assets/images/destinasi_kebun_kopi_1794887699668.jpg',
    caption:
      'Warga desa dengan keranjang bambu memanen buah kopi merah matang di antara terasering hijau pegunungan.',
  },
  {
    id: 'galeri-4',
    title: 'Lautan Awan dari Gardu Bambu',
    location: 'Bukit Pandang Matahari',
    category: 'Puncak',
    image: '/src/assets/images/destinasi_bukit_sunrise_1794887699709.jpg',
    caption:
      'Menyeruput teh hangat di atas gardu pandang bambu sambil menatap gugusan gunung di balik hamparan awan pagi.',
  },
  {
    id: 'galeri-5',
    title: 'Sajian Hangat di Pendopo Bambu',
    location: 'Pendopo Kuliner Asri',
    category: 'Kuliner',
    image: '/src/assets/images/galeri_budaya_kuliner_1794887700361.jpg',
    caption:
      'Nasi merah hangat, sayur asam desa, ayam goreng lengkuas, dan teh jahe serai disajikan dalam gerabah tanah liat.',
  },
  {
    id: 'galeri-6',
    title: 'Senja Damai di Beranda Homestay',
    location: 'Homestay Warung Jati',
    category: 'Penginapan',
    image: '/src/assets/images/paket_homestay_bambu_1794887700608.jpg',
    caption:
      'Lentera kuning temaram menerangi beranda kursi rotan saat senja turun di atas terasering hijau Desa Lereng Asri.',
  },
];

export const MAP_LOCATIONS: MapLocationPoint[] = [
  {
    id: 'titik-gerbang',
    name: 'Gerbang Desa & Area Parkir Utama',
    category: 'Pusat Kedatangan',
    altitude: '1.190 mdpl',
    distanceFromGate: '0 m (Titik Awal)',
    walkMinutes: 'Akses langsung mobil & minibus',
    description:
      'Pos penyambutan wisatawan, loket informasi desa, mushola bersih, toilet umum, serta lahan parkir luas untuk mobil pribadi maupun Elf wisata.',
    facilities: ['Parkir Luas', 'Pusat Informasi', 'Mushola & Toilet'],
    x: 165,
    y: 410,
    isMainHub: true,
  },
  {
    id: 'titik-pendopo',
    name: 'Pendopo Kuliner & Kampung Bambu',
    category: 'Kuliner & Budaya',
    altitude: '1.210 mdpl',
    distanceFromGate: '180 m',
    walkMinutes: '2 menit berjalan kaki',
    description:
      'Tempat berkumpul utama untuk makan siang liwetan, istirahat sejenak, kelas batik ecoprint, dan pembelian oleh-oleh kopi serta gula aren.',
    facilities: ['Saung Makan', 'Oleh-oleh Desa', 'Wi-Fi Gratis'],
    x: 280,
    y: 335,
  },
  {
    id: 'titik-homestay',
    name: 'Kawasan Homestay Bambu & Jati',
    category: 'Penginapan',
    altitude: '1.230 mdpl',
    distanceFromGate: '350 m',
    walkMinutes: '5 menit berjalan kaki',
    description:
      'Deretan penginapan warga berbahan kayu jati dan anyaman bambu yang menghadap langsung ke lembah sawah terasering.',
    facilities: ['Air Hangat', 'Beranda Sawah', 'Sarapan Pagi'],
    x: 235,
    y: 225,
  },
  {
    id: 'titik-kebun',
    name: 'Terasering Kebun Kopi & Teh',
    category: 'Agrowisata',
    altitude: '1.260 mdpl',
    distanceFromGate: '600 m',
    walkMinutes: '10 menit dari pendopo',
    description:
      'Jalur wisata menyusuri lereng perkebunan kopi Arabika dan teh hijau bersama pemandu tani setempat.',
    facilities: ['Gazebo Kebun', 'Edukasi Kopi', 'Spot Foto'],
    x: 425,
    y: 255,
  },
  {
    id: 'titik-curug',
    name: 'Curug Tirta Asri',
    category: 'Wisata Air Terjun',
    altitude: '1.180 mdpl',
    distanceFromGate: '850 m',
    walkMinutes: '15 menit jalur bambu',
    description:
      'Air terjun jernih alami di lembah barat desa dengan jembatan bambu aman dan kolam dangkal ramah keluarga.',
    facilities: ['Jalur Bambu', 'Kamar Bilas', 'Warung Hangat'],
    x: 585,
    y: 350,
  },
  {
    id: 'titik-bukit',
    name: 'Bukit Pandang Matahari',
    category: 'Puncak Sunrise',
    altitude: '1.420 mdpl',
    distanceFromGate: '1,3 km',
    walkMinutes: '25 menit treking / 7 menit ojek desa',
    description:
      'Gardu pandang bambu di puncak punggungan bukit untuk menyaksikan matahari terbit dan lautan awan.',
    facilities: ['Gardu Pandang', 'Pos Teh Pagi', 'Ojek Desa'],
    x: 560,
    y: 120,
  },
];

export const VISITOR_TESTIMONIALS: VisitorTestimonial[] = [
  {
    id: 'testi-1',
    name: 'Ibu Ratna Kusuma & Keluarga',
    origin: 'Bandung',
    packageTaken: 'Paket Keluarga & Rombongan (6 orang)',
    quote:
      'Orang tua saya yang berusia 65 tahun bisa ikut jalan santai ke pendopo dan kebun kopi karena jalannya landai. Makan siangnya di kuali tanah liat terasa sangat hangat seperti pulang ke rumah nenek.',
  },
  {
    id: 'testi-2',
    name: 'Dimas Pratama',
    origin: 'Jakarta Selatan',
    packageTaken: 'Paket Menginap Harmoni (2H1M)',
    quote:
      'Bangun jam lima pagi di homestay langsung dengar suara air sungai dan kabut tipis. Pemandu desanya ramah sekali, menjelaskan cara panen kopi sampai menemani ke Bukit Pandang saat matahari terbit.',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
