import potensiHtml from './html/potensi.html?raw';
import '../css/components/potensi.css';

const wisata = [
    {
        title: "Bukit Sunrise",
        image: "svg", // Using SVG placeholder for now
        category: "Wisata Alam",
        location: "Dusun Ngepung",
        rating: "4.9"
    },
    {
        title: "Embung Ngepung",
        image: "svg",
        category: "Wisata Air",
        location: "Desa Ngepung",
        rating: "4.8"
    },
    {
        title: "Kampung UMKM",
        image: "svg",
        category: "UMKM",
        location: "Balai Desa",
        rating: "4.7"
    }
];

const generateCards = () => {
    return wisata.map((item, index) => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 150}">
            <div class="potensi-card">
                <div class="potensi-img">
                    <!-- SVG Placeholder instead of ${item.image} -->
                    <svg width="100%" height="100%" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#c1c8ba" />
                        <text x="50%" y="50%" fill="#fff" font-size="1.2rem" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle">IMG: ${item.title}</text>
                    </svg>
                    <div class="potensi-category">${item.category}</div>
                </div>
                <div class="potensi-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="text-warning small"><i class="bi bi-star-fill"></i> ${item.rating}</span>
                    </div>
                    <h4 class="font-heading mb-2">${item.title}</h4>
                    <p class="text-muted small mb-4"><i class="bi bi-geo-alt-fill text-accent me-1"></i> ${item.location}</p>
                    <a href="#" class="btn btn-outline-dark btn-sm rounded-pill mt-auto align-self-start">Lihat Detail</a>
                </div>
            </div>
        </div>
    `).join("");
};

export default function Potensi() {
    return potensiHtml.replace('<!-- POTENSI_LIST -->', generateCards());
}