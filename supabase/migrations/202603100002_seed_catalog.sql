-- Seed default catalog items for PanenLangsung

insert into public.catalog_items (
  id,
  name,
  category,
  price,
  unit,
  stock,
  location,
  harvest,
  farmer,
  rating,
  image_key,
  is_active
)
values
  (
    '00000000-0000-0000-0000-000000000001',
    'Cabai Merah Keriting',
    'Rempah',
    32000,
    '/kg',
    '58 kg',
    'Magelang, Jawa Tengah',
    'Panen hari ini',
    'Pak Suraji',
    4.9,
    'card-pic1',
    true
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    'Tomat Organik Premium',
    'Sayuran',
    18500,
    '/kg',
    '74 kg',
    'Bandung Barat, Jawa Barat',
    'Panen 1 hari lalu',
    'Bu Ratih',
    4.8,
    'card-pic2',
    true
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'Beras Merah Lembut',
    'Beras',
    23000,
    '/kg',
    '210 kg',
    'Sleman, Yogyakarta',
    'Giling minggu ini',
    'Kelompok Tani Makmur',
    4.7,
    'card-pic3',
    true
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    'Jeruk Keprok Manis',
    'Buah',
    21000,
    '/kg',
    '92 kg',
    'Batu, Jawa Timur',
    'Panen hari ini',
    'Pak Harun',
    4.9,
    'card-pic4',
    true
  ),
  (
    '00000000-0000-0000-0000-000000000005',
    'Bayam Hijau Segar',
    'Sayuran',
    8000,
    '/ikat',
    '140 ikat',
    'Bogor, Jawa Barat',
    'Panen pagi ini',
    'Bu Intan',
    4.8,
    'card-pic5',
    true
  ),
  (
    '00000000-0000-0000-0000-000000000006',
    'Paket Panen Keluarga',
    'Paket Mingguan',
    129000,
    '/paket',
    '35 paket',
    'Klaten, Jawa Tengah',
    'Kurasi mingguan',
    'Koperasi Tunas Tani',
    5.0,
    'card-pic6',
    true
  )
on conflict (id) do nothing;
