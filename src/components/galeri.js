import galeriHtml from './html/galeri.html?raw';
import '../css/components/galeri.css';

/* 
  UNTUK MENGGANTI GAMBAR:
  Hapus properti c1 dan c2, lalu tambahkan properti imgUrl: "path/to/image.jpg"
  Contoh: { title: "Pantai Mesra", category: "Pantai", imgUrl: "/src/assets/images/gallery/pantai-mesra.jpg" }
*/
const gallery = [
    { title: "Pantai Mesra", category: "Pantai", c1: "#0a1f2e", c2: "#0d3040" },
    { title: "Pantai Kukup", category: "Pantai", c1: "#0a1f1a", c2: "#0f3020" },
    { title: "Alam Karst", category: "Alam", c1: "#1a1a0a", c2: "#252510" },
    { title: "Festival Budaya", category: "Budaya", c1: "#1a0a10", c2: "#200a15" },
    { title: "UMKM Lokal", category: "UMKM", c1: "#0d0d1f", c2: "#10102e" },
    { title: "Trekking Bukit", category: "Petualangan", c1: "#0d1a10", c2: "#102015" },
    { title: "Balai Desa", category: "Desa", c1: "#1a1010", c2: "#201510" },
    { title: "Sunset Karst", category: "Alam", c1: "#1f0d05", c2: "#2a1008" }
];

const makeGalleryItem = (item) => `
    <div class="galeri-item">
        ${item.imgUrl 
            ? `<img src="${item.imgUrl}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" />` 
            : `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="300" fill="${item.c1}"/>
                <path d="M0,180 Q100,130 200,155 Q300,120 400,145 L400,300 L0,300Z" fill="${item.c2}" opacity="0.7"/>
               </svg>`
        }
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