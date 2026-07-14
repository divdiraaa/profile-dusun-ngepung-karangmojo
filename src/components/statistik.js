import statistikHtml from './html/statistik.html?raw';
import '../css/components/statistik.css';

const statistikData = [
    {
        icon: "bi-people-fill",
        number: 5200,
        suffix: "+",
        title: "Penduduk"
    },
    {
        icon: "bi-house-door-fill",
        number: 12,
        suffix: "",
        title: "Dusun"
    },
    {
        icon: "bi-shop",
        number: 150,
        suffix: "+",
        title: "UMKM"
    },
    {
        icon: "bi-tree-fill",
        number: 25,
        suffix: "",
        title: "Wisata"
    }
];

const generateStatistik = () => {
    return statistikData.map((item, index) => `
        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="${index * 100}">
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="bi ${item.icon}"></i>
                </div>
                <div class="d-flex justify-content-center align-items-baseline">
                    <h2 class="counter mb-0" data-target="${item.number}" data-suffix="${item.suffix}">0</h2>
                    <span class="fs-4 ms-1">${item.suffix}</span>
                </div>
                <p class="mt-2 text-uppercase small">${item.title}</p>
            </div>
        </div>
    `).join("");
};

export default function Statistik() {
    return statistikHtml.replace('<!-- STATISTIK_LIST -->', generateStatistik());
}