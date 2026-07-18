import galeriHtml from './html/galeri.html?raw';
import '../css/components/galeri.css';

const gallery = [
    {
        title: "Kader Kesehatan",
        category: "Kesehatan",
        imgUrl: "/images/galeri/kader-kesehatan.jpg"
    },
    {
        title: "Kegiatan Posyandu",
        category: "Kesehatan",
        imgUrl: "/images/galeri/kader-posyandu.jpg"
    },
    {
        title: "Kenduri Warga",
        category: "Budaya",
        imgUrl: "/images/galeri/kenduri-1.jpg"
    },
    {
        title: "Kenduri Padukuhan",
        category: "Budaya",
        imgUrl: "/images/galeri/kenduri-2.jpg"
    },
    {
        title: "Latihan Karawitan",
        category: "Seni Budaya",
        imgUrl: "/images/galeri/latihan-karawitan.jpg"
    },
    {
        title: "Pertemuan KRT",
        category: "Kemasyarakatan",
        imgUrl: "/images/galeri/pertemuan-krt.jpg"
    },
    {
        title: "Senam Bersama",
        category: "Olahraga",
        imgUrl: "/images/galeri/senam-bersama.jpg"
    },
    {
        title: "Senam Bersama Warga",
        category: "Olahraga",
        imgUrl: "/images/galeri/senam-bersama2.jpg"
    },
    {
        title: "Thoklik",
        category: "Kesenian",
        imgUrl: "/images/galeri/thoklik.jpg"
    },
    {
        title: "Turnamen Voli",
        category: "Olahraga",
        imgUrl: "/images/galeri/turnamen-volly.jpg"
    },
    {
        title: "UMKM Peyek",
        category: "UMKM",
        imgUrl: "/images/umkm/umkm-peyek.jpg"
    },
    {
        title: "UMKM Tahu",
        category: "UMKM",
        imgUrl: "/images/umkm/umkm-tahu.jpg"
    },
    {
        title: "Panen Singkong",
        category: "Pertanian",
        imgUrl: "/images/galeri/panen-tela.jpeg"
    },
    {
        title: "Anak Dusun Ngepung",
        category: "Kemasyarakatan",
        imgUrl: "/images/galeri/anak-dusun-ngepung.jpeg"
    },
    {
        title: "Jaga Pos Ronda",
        category: "Kemasyarakatan",
        imgUrl: "/images/galeri/jaga-pos-ronda.jpeg"
    },
];

const makeGalleryItem = (item) => `
    <div class="galeri-item">
        <img
            src="${item.imgUrl}"
            alt="${item.title}"
            style="width:100%;height:100%;object-fit:cover;"
            loading="lazy"
        />

        <div class="galeri-overlay">
            <span class="galeri-overlay-cat">${item.category}</span>
            <h5>${item.title}</h5>
            <div class="galeri-overlay-icon">
                <i class="bi bi-zoom-in"></i>
            </div>
        </div>
    </div>
`;

export default function Galeri() {
    const items = gallery.map(makeGalleryItem).join('');
    return galeriHtml.replace('<!-- GALLERY_LIST -->', items);
}