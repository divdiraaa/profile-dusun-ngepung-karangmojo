/* ===========================================================
   COMPONENT : FOOTER
=========================================================== */

const quickLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Profil Desa", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Potensi Desa", href: "#potensi" },
    { name: "Berita", href: "#berita" },
    { name: "Agenda", href: "#agenda" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#maps" }
];

const latestNews = [
    "Festival Budaya Desa",
    "Pelatihan UMKM",
    "Gotong Royong",
    "Peresmian Jalan"
];

export default function Footer() {

    const year = new Date().getFullYear();

    return `

<footer class="footer">

<div class="container">

<div class="row gy-5">

<!-- LOGO -->

<div class="col-lg-4">

<div class="footer-logo">

<img
src="/images/icon/logo.png"
alt="Logo Desa">

<h3>Desa Ngepung</h3>

</div>

<p class="footer-desc">

Website resmi Pemerintah Desa Ngepung yang
menyediakan informasi desa, pelayanan publik,
potensi wisata, UMKM, dan berita terbaru.

</p>

<div class="footer-social">

<a href="#"><i class="bi bi-facebook"></i></a>

<a href="#"><i class="bi bi-instagram"></i></a>

<a href="#"><i class="bi bi-youtube"></i></a>

<a href="#"><i class="bi bi-whatsapp"></i></a>

</div>

</div>

<!-- MENU -->

<div class="col-lg-2">

<h4>Menu</h4>

<ul class="footer-links">

${quickLinks.map(link => `

<li>

<a href="${link.href}">

${link.name}

</a>

</li>

`).join("")}

</ul>

</div>

<!-- BERITA -->

<div class="col-lg-3">

<h4>Berita Terbaru</h4>

<ul class="footer-news">

${latestNews.map(item => `

<li>

<i class="bi bi-chevron-right"></i>

${item}

</li>

`).join("")}

</ul>

</div>

<!-- KONTAK -->

<div class="col-lg-3">

<h4>Kontak</h4>

<ul class="footer-contact">

<li>

<i class="bi bi-geo-alt-fill"></i>

Jl. Raya Desa Ngepung,
Kabupaten Magelang

</li>

<li>

<i class="bi bi-telephone-fill"></i>

(0293) 123456

</li>

<li>

<i class="bi bi-envelope-fill"></i>

desangepung@gmail.com

</li>

<li>

<i class="bi bi-clock-fill"></i>

Senin - Jumat
08.00 - 15.00 WIB

</li>

</ul>

</div>

</div>

<hr>

<div class="footer-bottom">

<p>

© ${year} Pemerintah Desa Ngepung.
All Rights Reserved.

</p>

<p>

Developed with ❤️ using Vite + Bootstrap 5

</p>

</div>

</div>

<button id="backToTop">

<i class="bi bi-arrow-up"></i>

</button>

</footer>

`;

}