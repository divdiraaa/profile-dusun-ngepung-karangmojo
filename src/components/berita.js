/* ===========================================================
   COMPONENT : BERITA DESA
=========================================================== */

const berita = [
    {
        title: "Festival Budaya Desa Ngepung Berhasil Menarik Ribuan Pengunjung",
        image: "/images/berita/berita1.jpg",
        date: "15 Januari 2026",
        category: "Budaya",
        desc: "Festival budaya tahunan menjadi salah satu daya tarik utama Desa Ngepung dengan menampilkan kesenian tradisional."
    },
    {
        title: "Pelatihan Digital Marketing untuk UMKM",
        image: "/images/berita/berita2.jpg",
        date: "12 Januari 2026",
        category: "UMKM"
    },
    {
        title: "Gotong Royong Membersihkan Lingkungan Desa",
        image: "/images/berita/berita3.jpg",
        date: "10 Januari 2026",
        category: "Sosial"
    },
    {
        title: "Peresmian Jalan Baru Menuju Kawasan Wisata",
        image: "/images/berita/berita4.jpg",
        date: "8 Januari 2026",
        category: "Pembangunan"
    },
    {
        title: "Posyandu Balita dan Lansia Dilaksanakan Rutin",
        image: "/images/berita/berita5.jpg",
        date: "5 Januari 2026",
        category: "Kesehatan"
    }
];

export default function Berita() {

    return `

<section id="berita" class="news-section">

<div class="container">

<div class="text-center mb-5" data-aos="fade-up">

<span class="section-label">

Berita Desa

</span>

<h2 class="section-heading">

Informasi & Berita Terbaru

</h2>

<p class="section-text-center">

Ikuti berbagai informasi terbaru mengenai kegiatan, pembangunan,
pelayanan, dan potensi Desa Ngepung.

</p>

</div>

<div class="row">

<!-- BERITA UTAMA -->

<div class="col-lg-7 mb-4" data-aos="fade-right">

<div class="featured-news">

<img src="${berita[0].image}" alt="${berita[0].title}">

<div class="featured-content">

<span class="news-category">

${berita[0].category}

</span>

<h3>

${berita[0].title}

</h3>

<p>

${berita[0].desc}

</p>

<div class="news-meta">

<i class="bi bi-calendar-event"></i>

${berita[0].date}

</div>

<a href="#" class="btn btn-warning rounded-pill mt-3">

Baca Selengkapnya

</a>

</div>

</div>

</div>

<!-- LIST BERITA -->

<div class="col-lg-5">

${berita.slice(1).map((item, index) => `

<div class="news-list"

data-aos="fade-left"

data-aos-delay="${index * 120}">

<img src="${item.image}" alt="${item.title}">

<div class="news-info">

<span>

${item.category}

</span>

<h5>

${item.title}

</h5>

<small>

<i class="bi bi-calendar3"></i>

${item.date}

</small>

</div>

</div>

`).join("")}

</div>

</div>

</div>

</section>

`;

}