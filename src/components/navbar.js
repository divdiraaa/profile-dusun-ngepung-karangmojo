/* ===========================================================
   COMPONENT : NAVBAR
   Website Desa Wisata
=========================================================== */

export default function Navbar() {
    return `
  
<header>

<nav class="navbar navbar-expand-lg fixed-top">

<div class="container">

<!-- Logo -->

<a class="navbar-brand d-flex align-items-center" href="#hero">

<img
src="/images/icon/logo.png"
alt="Logo Desa"
class="logo me-2">

<div>

<h5 class="brand-title">

DESA NGEPUNG

</h5>

<small class="brand-subtitle">

Kabupaten Gunung Kidul, Yogyakarta

</small>

</div>

</a>

<!-- Mobile Button -->

<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarMenu"
aria-controls="navbarMenu"
aria-expanded="false"
aria-label="Toggle navigation">

<i class="bi bi-list"></i>

</button>

<!-- Menu -->

<div
class="collapse navbar-collapse"
id="navbarMenu">

<ul class="navbar-nav ms-auto align-items-lg-center">

<li class="nav-item">

<a class="nav-link active" href="#hero">

Home

</a>

</li>

<li class="nav-item">

<a class="nav-link" href="#tentang">

Profil Desa

</a>

</li>

<li class="nav-item dropdown">

<a
class="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown">

Layanan

</a>

<ul class="dropdown-menu shadow-lg border-0 rounded-4">

<li>

<a class="dropdown-item" href="#layanan">

Administrasi

</a>

</li>

<li>

<a class="dropdown-item" href="#layanan">

Surat Online

</a>

</li>

<li>

<a class="dropdown-item" href="#layanan">

Informasi Publik

</a>

</li>

<li>

<a class="dropdown-item" href="#layanan">

Nomor Penting

</a>

</li>

</ul>

</li>

<li class="nav-item">

<a class="nav-link" href="#potensi">

Potensi Desa

</a>

</li>

<li class="nav-item">

<a class="nav-link" href="#berita">

Berita

</a>

</li>

<li class="nav-item">

<a class="nav-link" href="#agenda">

Agenda

</a>

</li>

<li class="nav-item">

<a class="nav-link" href="#galeri">

Galeri

</a>

</li>

<li class="nav-item">

<a class="nav-link" href="#maps">

Kontak

</a>

</li>

</ul>

<!-- Search -->

<button
class="btn btn-search ms-lg-3">

<i class="bi bi-search"></i>

</button>

<!-- CTA -->

<a
href="#kontak"
class="btn btn-warning rounded-pill px-4 py-2 ms-lg-3">

Hubungi Kami

</a>

</div>

</div>

</nav>

</header>

`;
}