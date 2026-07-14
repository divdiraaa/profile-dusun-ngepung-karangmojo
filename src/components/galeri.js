/* ===========================================================
   COMPONENT : GALERI DESA
=========================================================== */

const gallery = [

    {
        image: "/images/gallery/gallery1.jpg",
        title: "Festival Budaya",
        category: "Budaya"
    },

    {
        image: "/images/gallery/gallery2.jpg",
        title: "Gotong Royong",
        category: "Sosial"
    },

    {
        image: "/images/gallery/gallery3.jpg",
        title: "Wisata Alam",
        category: "Wisata"
    },

    {
        image: "/images/gallery/gallery4.jpg",
        title: "UMKM Desa",
        category: "UMKM"
    },

    {
        image: "/images/gallery/gallery5.jpg",
        title: "Balai Desa",
        category: "Pemerintahan"
    },

    {
        image: "/images/gallery/gallery6.jpg",
        title: "Embung Desa",
        category: "Wisata"
    },

    {
        image: "/images/gallery/gallery7.jpg",
        title: "Panen Raya",
        category: "Pertanian"
    },

    {
        image: "/images/gallery/gallery8.jpg",
        title: "Posyandu",
        category: "Kesehatan"
    }

];

export default function Galeri() {

    return `

<section id="galeri" class="gallery-section">

<div class="container">

<div class="text-center mb-5" data-aos="fade-up">

<span class="section-label">

Galeri Desa

</span>

<h2 class="section-heading">

Dokumentasi Kegiatan Desa

</h2>

<p class="section-text-center">

Kumpulan dokumentasi kegiatan,
pembangunan,
wisata,
serta aktivitas masyarakat Desa Ngepung.

</p>

</div>

<div class="row g-4">

${gallery.map((item, index) => `

<div
class="col-lg-3 col-md-4 col-sm-6"
data-aos="zoom-in"
data-aos-delay="${index * 70}">

<a
href="${item.image}"
class="gallery">

<div class="gallery-card">

<img
src="${item.image}"
alt="${item.title}">

<div class="gallery-overlay">

<span>

${item.category}

</span>

<h5>

${item.title}

</h5>

<i class="bi bi-plus-circle-fill"></i>

</div>

</div>

</a>

</div>

`).join("")}

</div>

</div>

</section>

`;

}