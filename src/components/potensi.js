/* ===========================================================
   COMPONENT : POTENSI DESA
=========================================================== */

const wisata = [
    {
        title: "Bukit Sunrise",
        image: "/images/wisata/wisata1.jpg",
        category: "Wisata Alam",
        location: "Dusun Ngepung",
        rating: "4.9"
    },
    {
        title: "Embung Ngepung",
        image: "/images/wisata/wisata2.jpg",
        category: "Wisata Air",
        location: "Desa Ngepung",
        rating: "4.8"
    },
    {
        title: "Kampung UMKM",
        image: "/images/wisata/wisata3.jpg",
        category: "UMKM",
        location: "Balai Desa",
        rating: "4.7"
    }
];

export default function Potensi() {

    return `

<section id="potensi" class="potensi-section">

<div class="container">

<div class="text-center mb-5" data-aos="fade-up">

<span class="section-label">

Potensi Desa

</span>

<h2 class="section-heading">

Jelajahi Potensi Unggulan Desa

</h2>

<p class="section-text-center">

Desa Ngepung memiliki berbagai potensi wisata,
UMKM, budaya, dan alam yang siap dikembangkan
sebagai daya tarik masyarakat maupun wisatawan.

</p>

</div>

<div class="row g-4">

${wisata.map((item, index) => `

<div
class="col-lg-4 col-md-6"
data-aos="zoom-in"
data-aos-delay="${index * 150}">

<div class="destination-card">

<div class="destination-image">

<img src="${item.image}" alt="${item.title}">

<div class="destination-category">

${item.category}

</div>

</div>

<div class="destination-body">

<div class="destination-rating">

⭐ ${item.rating}

</div>

<h3>

${item.title}

</h3>

<p>

<i class="bi bi-geo-alt-fill"></i>

${item.location}

</p>

<a href="#"

class="btn btn-warning rounded-pill">

Lihat Detail

</a>

</div>

</div>

</div>

`).join("")}

</div>

</div>

</section>

`;

}