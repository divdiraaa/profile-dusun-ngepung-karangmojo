import statistikHtml from './html/statistik.html?raw';
import '../css/components/statistik.css';

const statistikData = [
    { icon: "bi-people-fill",    number: 5200, suffix: "+", label: "Penduduk" },
    { icon: "bi-house-door-fill", number: 12,  suffix: "",  label: "Dusun" },
    { icon: "bi-shop",            number: 150,  suffix: "+", label: "UMKM Aktif" },
    { icon: "bi-water",           number: 2,    suffix: "",  label: "Pantai Wisata" }
];

const generateStatistik = () => {
    return statistikData.map((item, i) => `
        <div class="stat-item" data-aos="fade-up" data-aos-delay="${i * 80}">
            <div class="stat-icon-wrap">
                <i class="bi ${item.icon}"></i>
            </div>
            <div class="stat-number">
                <span class="counter" data-target="${item.number}">0</span><span class="stat-suffix">${item.suffix}</span>
            </div>
            <div class="stat-label">${item.label}</div>
        </div>
    `).join('');
};

export default function Statistik() {
    return statistikHtml.replace('<!-- STATISTIK_LIST -->', generateStatistik());
}