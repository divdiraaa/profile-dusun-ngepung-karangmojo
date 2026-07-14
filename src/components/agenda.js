import agendaHtml from './html/agenda.html?raw';
import '../css/components/agenda.css';

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

const generateAgenda = () => {
    return agenda.map(item => `
        <div class="swiper-slide h-auto">
            <div class="agenda-card">
                <div class="agenda-date">
                    <h2>${item.tanggal}</h2>
                    <span>${item.bulan}</span>
                </div>
                <div class="agenda-body">
                    <h4>${item.judul}</h4>
                    <p><i class="bi bi-geo-alt-fill"></i> ${item.lokasi}</p>
                    <p><i class="bi bi-clock-fill"></i> ${item.jam}</p>
                    <a href="#" class="text-accent small fw-bold mt-2 d-inline-block">Lihat Detail <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `).join("");
};

export default function Agenda() {
    return agendaHtml.replace('<!-- AGENDA_LIST -->', generateAgenda());
}