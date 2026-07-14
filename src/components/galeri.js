import galeriHtml from './html/galeri.html?raw';
import '../css/components/galeri.css';

const gallery = [
    // Ganti SVG dengan: /src/assets/images/gallery/pantai-mesra.jpg
    { title: "Pantai Mesra", category: "Pantai", c1: "#0a1f2e", c2: "#0d3040" },
    // Ganti: /src/assets/images/gallery/kukup.jpg
    { title: "Pantai Kukup", category: "Pantai", c1: "#0a1f1a", c2: "#0f3020" },
    // Ganti: /src/assets/images/gallery/karst.jpg
    { title: "Alam Karst", category: "Alam", c1: "#1a1a0a", c2: "#252510" },
    // Ganti: /src/assets/images/gallery/festival.jpg
    { title: "Festival Budaya", category: "Budaya", c1: "#1a0a10", c2: "#200a15" },
    // Ganti: /src/assets/images/gallery/umkm.jpg
    { title: "UMKM Lokal", category: "UMKM", c1: "#0d0d1f", c2: "#10102e" },
    // Ganti: /src/assets/images/gallery/trekking.jpg
    { title: "Trekking Bukit", category: "Petualangan", c1: "#0d1a10", c2: "#102015" },
    // Ganti: /src/assets/images/gallery/balai-desa.jpg
    { title: "Balai Desa", category: "Desa", c1: "#1a1010", c2: "#201510" },
    // Ganti: /src/assets/images/gallery/sunset.jpg
    { title: "Sunset Karst", category: "Alam", c1: "#1f0d05", c2: "#2a1008" }
];

const makeGalleryItem = (item) => `
    <div class="galeri-item">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="300" fill="${item.c1}"/>
            <path d="M0,180 Q100,130 200,155 Q300,120 400,145 L400,300 L0,300Z" fill="${item.c2}" opacity="0.7"/>
        </svg>
        <div class="galeri-overlay">
            <span class="galeri-overlay-cat">${item.category}</span>
            <h5>${item.title}</h5>
            <div class="galeri-overlay-icon"><i class="bi bi-zoom-in"></i></div>
        </div>
    </div>`;

export default function Galeri() {
    const items = gallery.map(makeGalleryItem).join('');
    return galeriHtml.replace('<!-- GALLERY_LIST -->', items);
}