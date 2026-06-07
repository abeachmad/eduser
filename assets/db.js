// ============================================================
// EDUKASA.ID - DATABASE SERTIFIKAT
// Untuk menambah data baru, gunakan halaman /admin
// atau tambahkan manual di array SERTIFIKAT di bawah ini.
// ============================================================

// Fungsi generate ID unik 35 karakter (angka + huruf, persis format asli)
// Format: 12 digit timestamp + angka random + 6 huruf besar + angka
function generateID() {
    var ts = Date.now().toString(); // 13 digit
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var mid = '';
    for (var i = 0; i < 16; i++) mid += chars[Math.floor(Math.random() * chars.length)];
    var suffix = '';
    for (var i = 0; i < 6; i++) suffix += upper[Math.floor(Math.random() * upper.length)];
    return (ts + mid + suffix).substring(0, 35);
}

// ============================================================
// DATA SERTIFIKAT
// ============================================================
var SERTIFIKAT_DATA = [
    {
        id: "120697b1e6807dc01769676392WZ6SF6742",
        noSertifikat: "01.026/DO-UPDME-SER/IV/2026/LRCKG6742",
        kelas: "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        kelasUrl: "https://edukasa.id/kelas-live/120/pelatihan-nasional-penulisan-publikasi-ilmiah-dan-manajemen-data-untuk-pemula",
        nama: "Muhammad Awal Nur, M.Pd",
        nip: "198810242023211011",
        nuptk: "-",
        nidn: "0924108802",
        instansi: "Universitas Negeri Makassar"
    },
    {
        id: "121699fae3cd41161772072508AJW7Y765",
        noSertifikat: "13.003/ED-NSPPA/II/2026/XEA4U765",
        kelas: "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        kelasUrl: "https://edukasa.id/kelas-live/121/pelatihan-nasional-pengenalan-dan-pemanfaatan-artificial-intelligence-ai-di-era-digital",
        nama: "Muhammad Awal Nur, M.Pd",
        nip: "198810242023211011",
        nuptk: "-",
        nidn: "0924108802",
        instansi: "UNM"
    },
    {
        id: "12269d79d89eae121775738249ZYDCV10140",
        noSertifikat: "13.003/ED-NSPAK/IV/2026/YL0T910140",
        kelas: "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        kelasUrl: "https://edukasa.id/kelas-live/122/pelatihan-nasional-pengenalan-dan-pemanfaatan-artificial-intelligence-ai-di-era-digital1773013927gt1se",
        nama: "Muhammad Awal Nur, M.Pd",
        nip: "-",
        nuptk: "-",
        nidn: "0924108802",
        instansi: "Universitas Negeri Makassar"
    },
    {
        id: "12370a4fc9b12e531776000001ACHMAD6953",
        noSertifikat: "01.026/DO-UPDME-SER/IV/2026/LRCKG6953",
        kelas: "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        kelasUrl: "https://edukasa.id/kelas-live/120/pelatihan-nasional-penulisan-publikasi-ilmiah-dan-manajemen-data-untuk-pemula",
        nama: "Achmad Shabir, S.Pd. M.Pd",
        nip: "198711152019031014",
        nuptk: "-",
        nidn: "0015118706",
        instansi: "Universitas Negeri Makassar"
    }
];

// ============================================================
// BUILD INDEX untuk lookup cepat
// ============================================================
var DB_BY_NOMOR = {};
var DB_BY_ID    = {};

SERTIFIKAT_DATA.forEach(function(s) {
    DB_BY_NOMOR[s.noSertifikat] = s;
    DB_BY_ID[s.id]              = s;
});
