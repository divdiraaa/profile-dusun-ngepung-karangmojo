import agendaHtml from './html/agenda.html?raw';
import '../css/components/agenda.css';

const agenda = [
    { tanggal: "05", bulan: "AGS", judul: "Musyawarah Desa", lokasi: "Balai Desa Ngepung", jam: "08.00 WIB" },
    { tanggal: "12", bulan: "AGS", judul: "Festival Sedekah Laut", lokasi: "Pantai Kukup", jam: "07.00 WIB" },
    { tanggal: "18", bulan: "AGS", judul: "Pelatihan Digital UMKM", lokasi: "Gedung Serbaguna", jam: "09.00 WIB" },
    { tanggal: "24", bulan: "AGS", judul: "Kerja Bakti Desa", lokasi: "Seluruh Dusun", jam: "06.30 WIB" },
    { tanggal: "02", bulan: "SEP", judul: "Posyandu Rutin", lokasi: "Balai RW", jam: "08.00 WIB" }
];

const generateAgenda = () => {
    return agenda.map(item => `
        <div class="swiper-slide h-auto" style="padding-bottom: 4px;">
            <div class="agenda-card">
                <div class="agenda-date-block">
                    <div class="agenda-date-num">${item.tanggal}</div>
                    <div class="agenda-date-month">${item.bulan}</div>
                </div>
                <h4>${item.judul}</h4>
                <div class="agenda-info"><i class="bi bi-geo-alt-fill"></i><span>${item.lokasi}</span></div>
                <div class="agenda-info"><i class="bi bi-clock-fill"></i><span>${item.jam}</span></div>
                <div class="spacer"></div>
                <a href="#" class="agenda-link">Detail Kegiatan <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
};

export default function Agenda() {
    return agendaHtml.replace('<!-- AGENDA_LIST -->', generateAgenda());
}