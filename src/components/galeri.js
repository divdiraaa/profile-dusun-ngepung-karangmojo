import galeriHtml from './html/galeri.html?raw';
import '../css/components/galeri.css';

const gallery = [
    {
        image: "svg", // Placeholder
        title: "Festival Budaya",
        category: "Budaya"
    },
    {
        image: "svg",
        title: "Gotong Royong",
        category: "Sosial"
    },
    {
        image: "svg",
        title: "Wisata Alam",
        category: "Wisata"
    },
    {
        image: "svg",
        title: "UMKM Desa",
        category: "UMKM"
    },
    {
        image: "svg",
        title: "Balai Desa",
        category: "Pemerintahan"
    },
    {
        image: "svg",
        title: "Embung Desa",
        category: "Wisata"
    },
    {
        image: "svg",
        title: "Panen Raya",
        category: "Pertanian"
    },
    {
        image: "svg",
        title: "Posyandu",
        category: "Kesehatan"
    }
];

const generateGallery = () => {
    return gallery.map((item, index) => `
        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in" data-aos-delay="${(index % 4) * 100}">
            <a href="#" class="gallery text-decoration-none">
                <div class="gallery-card shadow-sm">
                    <!-- SVG Placeholder -->
                    <svg width="100%" height="100%" viewBox="0 0 300 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#d4d8cf" />
                        <text x="50%" y="50%" fill="#7a8c7b" font-size="1rem" font-family="sans-serif" text-anchor="middle" alignment-baseline="middle">IMG</text>
                    </svg>
                    <div class="gallery-overlay">
                        <span>${item.category}</span>
                        <h5>${item.title}</h5>
                        <i class="bi bi-zoom-in"></i>
                    </div>
                </div>
            </a>
        </div>
    `).join("");
};

export default function Galeri() {
    return galeriHtml.replace('<!-- GALLERY_LIST -->', generateGallery());
}