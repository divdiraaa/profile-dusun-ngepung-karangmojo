import potensiHtml from './html/potensi.html?raw';
import '../css/components/potensi.css';

// Helper for generic SVG placeholder
const svgPlaceholder = (text) => `data:image/svg+xml;utf8,<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%230a1520' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.1'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='18'>${text}</text></svg>`;

/* 
  UNTUK MENGGANTI GAMBAR:
  Ubah nilai imgUrl dari fungsi svgPlaceholder menjadi path gambar asli.
  Contoh: imgUrl: "/src/assets/images/wisata/sendang-kali.jpg"
*/

const wisata = [
    {
        title: "Sendang Kali Bubar",
        category: "Wisata Air",
        desc: "Mata air alami yang menyegarkan, cocok untuk bersantai menikmati kesejukan alam.",
        location: "Ngrombo 1",
        rating: "4.8",
        imgUrl: "../public/images/wisata/sendang.jpg",
        imgAlt: "Sendang Kali Bubar",
        featured: true,
    },
    {
        title: "Water Byur Ponjong",
        category: "Kolam Renang",
        desc: "Destinasi wisata keluarga dengan fasilitas kolam renang buatan yang asri dan air yang menyegarkan.",
        location: "Ponjong",
        rating: "4.7",
        imgUrl: "../public/images/wisata/water-byur.jpg",
        imgAlt: "Water Byur Ponjong",
    },
    {
        title: "Embung Gentungan & Batur Agung",
        category: "Embung / Danau",
        desc: "Waduk buatan berpanorama indah. Jelajahi Embung Gentungan serta Embung Batur Agung di Karang Etan.",
        location: "Gentungan & Karang Etan",
        rating: "4.8",
        imgUrl: "../public/images/wisata/embung-batur.jpg",
        imgAlt: "Embung Gentungan",
    },
    {
        title: "Kelompok Seni Desa",
        category: "Kebudayaan",
        desc: "Potensi budaya lokal yang kental dan dikembangkan melalui pelestarian kesenian oleh para warga desa.",
        location: "Padukuhan Ngepung",
        rating: "5.0",
        imgUrl: "../public/images/wisata/kelompok-seni.jpg",
        imgAlt: "Kelompok Seni",
    },
    {
        title: "Sentra Pertanian Cabai",
        category: "Pertanian",
        desc: "Potensi agrikultur unggulan penanaman cabai. Rutin mengadakan pelatihan kelompok tani (ex: 21 Juli).",
        location: "Padukuhan Ngepung",
        rating: "4.9",
        imgUrl: "../public/images/wisata/sentra-cabai.jpg",
        imgAlt: "Pertanian Cabai",
    }
];

const generateCards = () => {
    return wisata.map((item, i) => {
        const isFeatured = item.featured;
        return `
        <div class="dest-card${isFeatured ? ' dest-card-featured' : ''}" data-aos="fade-up" data-aos-delay="${i * 80}">
            <div class="dest-img">
                <img src="${item.imgUrl}" alt="${item.imgAlt}" loading="lazy" />
                <div class="dest-img-overlay"></div>
                <span class="dest-tag">${item.category}</span>
                <div class="dest-rating"><i class="bi bi-star-fill" style="color:var(--accent);font-size:11px;"></i> ${item.rating}</div>
            </div>
            <div class="dest-body">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="dest-meta">
                    <div class="dest-meta-loc">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span>${item.location}</span>
                    </div>
                    <a href="#" class="dest-link"><i class="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
        </div>`;
    }).join('');
};

export default function Potensi() {
    return potensiHtml.replace('<!-- POTENSI_LIST -->', generateCards());
}