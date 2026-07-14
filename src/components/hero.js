/* ===========================================================
   HERO COMPONENT
=========================================================== */

export default function Hero() {

    return `

<section id="hero">

<div class="hero-overlay"></div>

<div class="container">

<div class="row align-items-center min-vh-100">

<!-- LEFT -->

<div
class="col-lg-7"
data-aos="fade-right">

<span class="hero-subtitle">

Selamat Datang di

</span>

<h1 class="hero-title">

Website Resmi
<br>

Desa Wisata Ngepung

</h1>

<p class="hero-description">

Desa Ngepung merupakan desa wisata yang memiliki
potensi alam, budaya, UMKM,
serta pelayanan publik berbasis digital
untuk memberikan pelayanan terbaik
kepada masyarakat.

</p>

<div class="hero-button">

<a
href="#tentang"
class="btn btn-warning btn-lg rounded-pill px-4">

Tentang Desa

</a>

<a
href="#layanan"
class="btn btn-outline-light btn-lg rounded-pill px-4 ms-3">

Layanan

</a>

</div>

</div>

<!-- RIGHT -->

<div
class="col-lg-5 text-center"
data-aos="fade-left">

<img

src="/images/hero/hero.png"

class="hero-image"

alt="Hero">

</div>

</div>

</div>

<!-- Statistik -->

<div class="hero-statistic">

<div class="container">

<div class="row text-center">

<div class="col-md-3">

<h2>5.200+</h2>

<p>Penduduk</p>

</div>

<div class="col-md-3">

<h2>12</h2>

<p>Dusun</p>

</div>

<div class="col-md-3">

<h2>150+</h2>

<p>UMKM</p>

</div>

<div class="col-md-3">

<h2>25</h2>

<p>Wisata</p>

</div>

</div>

</div>

</div>

<!-- Scroll -->

<div class="scroll-down">

<i class="bi bi-mouse"></i>

<p>Scroll</p>

</div>

<!-- SVG -->

<div class="hero-wave">

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1440 320">

<path
fill="#ffffff"

d="M0,256L80,245.3C160,235,320,213,480,186.7C640,160,800,128,960,133.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L0,320Z">

</path>

</svg>

</div>

</section>

`;

}