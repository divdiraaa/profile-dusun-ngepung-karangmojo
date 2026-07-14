/* ==========================================
   AGENDA DESA
========================================== */

const agenda = [

    {

        tanggal: "05",

        bulan: "JAN",

        judul: "Musyawarah Desa",

        lokasi: "Balai Desa",

        jam: "08.00 WIB"

    },

    {

        tanggal: "12",

        bulan: "JAN",

        judul: "Kerja Bakti",

        lokasi: "Lapangan Desa",

        jam: "07.00 WIB"

    },

    {

        tanggal: "18",

        bulan: "JAN",

        judul: "Festival Budaya",

        lokasi: "Alun-alun Desa",

        jam: "09.00 WIB"

    },

    {

        tanggal: "25",

        bulan: "JAN",

        judul: "Pelatihan UMKM",

        lokasi: "Gedung Serbaguna",

        jam: "10.00 WIB"

    },

    {

        tanggal: "02",

        bulan: "FEB",

        judul: "Posyandu",

        lokasi: "Balai RW",

        jam: "08.00 WIB"

    }

];

export default function Agenda() {

    return `

<section id="agenda" class="agenda-section">

<div class="container">

<div class="text-center mb-5">

<span class="section-label">

Agenda Desa

</span>

<h2 class="section-heading">

Agenda Kegiatan

</h2>

<p class="section-text-center">

Kegiatan Pemerintah Desa
yang akan dilaksanakan
dalam waktu dekat.

</p>

</div>

<div class="swiper agendaSwiper">

<div class="swiper-wrapper">

${agenda.map(item => `

<div class="swiper-slide">

<div class="agenda-card">

<div class="agenda-date">

<h2>

${item.tanggal}

</h2>

<span>

${item.bulan}

</span>

</div>

<div class="agenda-body">

<h4>

${item.judul}

</h4>

<p>

<i class="bi bi-geo-alt-fill"></i>

${item.lokasi}

</p>

<p>

<i class="bi bi-clock-fill"></i>

${item.jam}

</p>

<a
href="#"

class="btn btn-warning rounded-pill">

Detail

</a>

</div>

</div>

</div>

`).join("")}

</div>

</div>

<div class="agenda-pagination mt-5"></div>

<div class="agenda-prev">

<i class="bi bi-chevron-left"></i>

</div>

<div class="agenda-next">

<i class="bi bi-chevron-right"></i>

</div>

</div>

</section>

`;

}