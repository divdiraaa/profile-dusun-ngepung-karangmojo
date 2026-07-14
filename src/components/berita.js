import beritaHtml from './html/berita.html?raw';
import '../css/components/berita.css';

const berita = [
    {
        title: "Festival Budaya Desa Ngepung Berhasil Menarik Ribuan Pengunjung",
        image: "svg", // SVG Placeholder
        date: "15 Januari 2026",
        category: "Budaya",
        desc: "Festival budaya tahunan menjadi salah satu daya tarik utama Desa Ngepung dengan menampilkan kesenian tradisional."
    },
    {
        title: "Pelatihan Digital Marketing untuk UMKM",
        image: "svg",
        date: "12 Januari 2026",
        category: "UMKM"
    },
    {
        title: "Gotong Royong Membersihkan Lingkungan Desa",
        image: "svg",
        date: "10 Januari 2026",
        category: "Sosial"
    },
    {
        title: "Peresmian Jalan Baru Menuju Kawasan Wisata",
        image: "svg",
        date: "8 Januari 2026",
        category: "Pembangunan"
    }
];

const generateFeaturedNews = () => {
    const item = berita[0];
    return `
    <div class="col-lg-7 mb-4 mb-lg-0" data-aos="fade-right">
        <div class="featured-news shadow-lg">
            <div class="featured-news-bg">
                <!-- SVG Placeholder -->
                <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#7a8c7b" />
                    <text x="50%" y="50%" fill="#fff" font-size="2rem" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle">IMG: Berita Utama</text>
                </svg>
            </div>
            <div class="featured-overlay"></div>
            <div class="featured-content">
                <span class="news-category">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="d-flex align-items-center justify-content-between mt-4">
                    <div class="news-meta"><i class="bi bi-calendar-event me-2"></i>${item.date}</div>
                    <a href="#" class="btn btn-outline-light btn-sm rounded-pill">Baca Selengkapnya</a>
                </div>
            </div>
        </div>
    </div>
    `;
};

const generateNewsList = () => {
    return berita.slice(1).map((item, index) => `
        <div class="news-list-item" data-aos="fade-left" data-aos-delay="${index * 120}">
            <div class="news-list-img">
                <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#e0e0e0" />
                    <text x="50%" y="50%" fill="#999" font-size="1rem" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle">IMG</text>
                </svg>
            </div>
            <div class="news-info">
                <span class="news-category py-1 px-2" style="font-size:0.7rem; margin-bottom:5px;">${item.category}</span>
                <h5>${item.title}</h5>
                <small><i class="bi bi-calendar3 me-1"></i>${item.date}</small>
            </div>
        </div>
    `).join("");
};

export default function Berita() {
    let html = beritaHtml;
    html = html.replace('<!-- FEATURED_NEWS -->', generateFeaturedNews());
    html = html.replace('<!-- NEWS_LIST -->', generateNewsList());
    return html;
}