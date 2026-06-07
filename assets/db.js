// ============================================================
// EDUKASA.ID - DATABASE SERTIFIKAT
// Terakhir diupdate: 08/06/2026 01:31:25
// ============================================================

function generateID() {
    var ts = Date.now().toString();
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var mid = '';
    for (var i = 0; i < 16; i++) mid += chars[Math.floor(Math.random() * chars.length)];
    var suffix = '';
    for (var i = 0; i < 6; i++) suffix += upper[Math.floor(Math.random() * upper.length)];
    return (ts + mid + suffix).substring(0, 35);
}

var SERTIFIKAT_DATA = [
    {
        "id": "120697b1e6807dc01769676392WZ6SF6742",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6742",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "https://edukasa.id/kelas-live/120/pelatihan-nasional-penulisan-publikasi-ilmiah-dan-manajemen-data-untuk-pemula",
        "nama": "Muhammad Awal Nur, M.Pd",
        "nip": "198810242023211011",
        "nuptk": "-",
        "nidn": "0924108802",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "121699fae3cd41161772072508AJW7Y765",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U765",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "https://edukasa.id/kelas-live/121/pelatihan-nasional-pengenalan-dan-pemanfaatan-artificial-intelligence-ai-di-era-digital",
        "nama": "Muhammad Awal Nur, M.Pd",
        "nip": "198810242023211011",
        "nuptk": "-",
        "nidn": "0924108802",
        "instansi": "UNM"
    },
    {
        "id": "12269d79d89eae121775738249ZYDCV10140",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910140",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "https://edukasa.id/kelas-live/122/pelatihan-nasional-pengenalan-dan-pemanfaatan-artificial-intelligence-ai-di-era-digital1773013927gt1se",
        "nama": "Muhammad Awal Nur, M.Pd",
        "nip": "-",
        "nuptk": "-",
        "nidn": "0924108802",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780850491606f19352900f0edOLD1TAund",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U975",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "#",
        "nama": "Achmad Shabir, S.Pd., M.Pd.",
        "nip": "198711152019031014",
        "nuptk": "-",
        "nidn": "0015118706",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "17808506289094f5b56a116b77QJL2BCund",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6977",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "#",
        "nama": "Achmad Shabir, S.Pd., M.Pd.",
        "nip": "198711152019031014",
        "nuptk": "-",
        "nidn": "0015118706",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780850716703b311497c77012XAE5KUund",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910738",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "#",
        "nama": "Achmad Shabir, S.Pd., M.Pd.",
        "nip": "198711152019031014",
        "nuptk": "-",
        "nidn": "0015118706",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780852581921a74856ab5cbd0FPU7EAund",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6978",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "#",
        "nama": "Nursalim, S.Pd., M.Pd.",
        "nip": "198904072024061001",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "17808526743287b753e19a4cddEPE4LRund",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U976",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "#",
        "nama": "Nursalim, S.Pd., M.Pd.",
        "nip": "198904072024061001",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780852714963bdd20c83bf74eWEW5SFund",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910739",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "#",
        "nama": "Nursalim, S.Pd., M.Pd.",
        "nip": "198904072024061001",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780852755368e91d94d3c0f03XKT4QMund",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6979",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "#",
        "nama": "Andika Marsuki, S.Pd., M.Pd.",
        "nip": "199210112024061002",
        "nuptk": "-",
        "nidn": "0911109204",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780852851546967722ccff641KVC9TKund",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U977",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "#",
        "nama": "Andika Marsuki, S.Pd., M.Pd.",
        "nip": "199210112024061002",
        "nuptk": "-",
        "nidn": "0911109204",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780853043951aabf4c781501fFBK8XBund",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910740",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "#",
        "nama": "Andika Marsuki, S.Pd., M.Pd.",
        "nip": "199210112024061002",
        "nuptk": "-",
        "nidn": "0911109204",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780853116721ac7312fce6520EIG8FHund",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6980",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "#",
        "nama": "Muhammad Ikhsan Sukaria, M.Pd.",
        "nip": "199109242023211020",
        "nuptk": "-",
        "nidn": "0024099110",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "17808531933360c6247cb65fb2EIE7BVund",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U978",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "#",
        "nama": "Muhammad Ikhsan Sukaria, M.Pd.",
        "nip": "199109242023211020",
        "nuptk": "-",
        "nidn": "0024099110",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780853264723f7064e5e23c06PMX5QNund",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910741",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "#",
        "nama": "Muhammad Ikhsan Sukaria, M.Pd.",
        "nip": "199109242023211020",
        "nuptk": "-",
        "nidn": "0024099110",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "17808533202560b0ce3f8b9438JQP0UIund",
        "noSertifikat": "01.026/DO-UPDME-SER/IV/2026/LRCKG6981",
        "kelas": "Pelatihan Nasional Penulisan Publikasi Ilmiah dan Manajemen Data untuk Pemula",
        "kelasUrl": "#",
        "nama": "Awaluddin Bahar, S.Pd., M.Pd.",
        "nip": "199106172025061004",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "178085337602623f1515d6e3e3KAT6QHund",
        "noSertifikat": "13.003/ED-NSPPA/II/2026/XEA4U979",
        "kelas": "Pelatihan Nasional Pengenalan dan Pemanfaatan Artificial Intelligence (AI) di Era Digital",
        "kelasUrl": "#",
        "nama": "Awaluddin Bahar, S.Pd., M.Pd.",
        "nip": "199106172025061004",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    },
    {
        "id": "1780853432483621bff85b4ef9IHY9ULund",
        "noSertifikat": "13.003/ED-NSPAK/IV/2026/YL0T910742",
        "kelas": "Pelatihan Nasional Teknik Prompt AI untuk Mendukung Pekerjaan Harian: Penulisan, Analisis dan Kreativitas",
        "kelasUrl": "#",
        "nama": "Awaluddin Bahar, S.Pd., M.Pd.",
        "nip": "199106172025061004",
        "nuptk": "-",
        "nidn": "-",
        "instansi": "Universitas Negeri Makassar"
    }
];

var DB_BY_NOMOR = {};
var DB_BY_ID    = {};
SERTIFIKAT_DATA.forEach(function(s) {
    DB_BY_NOMOR[s.noSertifikat] = s;
    DB_BY_ID[s.id]              = s;
});
