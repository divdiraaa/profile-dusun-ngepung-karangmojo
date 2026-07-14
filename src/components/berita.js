import beritaHtml from './html/berita.html?raw';
import '../css/components/berita.css';

// TODO: Replace imgUrl with local /src/assets/images/berita/*.jpg after uploading
const berita = [
    {
        title: "Festival Sedekah Laut Pantai Kukup Menarik Ribuan Pengunjung",
        category: "Budaya",
        desc: "Upacara adat Sedekah Laut di Pantai Kukup kembali digelar sebagai wujud syukur masyarakat nelayan atas hasil laut yang melimpah.",
        date: "10 Juli 2026",
        imgUrl: "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800&q=80&fm=webp",
        imgAlt: "Festival Sedekah Laut Pantai Kukup",
    },
    {
        title: "Pantai Mesra Raih Penghargaan Destinasi Terbaik Gunung Kidul",
        category: "Pariwisata", date: "8 Jul 2026",
        imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&q=80&fm=webp",
    },
    {
        title: "Pelatihan Digital Marketing UMKM Nelayan Desa Ngepung",
        category: "UMKM", date: "5 Jul 2026",
        imgUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&q=80&fm=webp",
    },
    {
        title: "Program Posyandu Rutin Tingkatkan Kesehatan Warga Desa",
        category: "Kesehatan", date: "2 Jul 2026",
        imgUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80&fm=webp",
    }
];

const generateFeatured = () => {
    const b = berita[0];
    return `
    <div class="news-featured" data-aos="fade-right">
        <div class="news-featured-bg">
            <img src="${b.imgUrl}" alt="${b.imgAlt}" loading="lazy" />
        </div>
        <div class="news-featured-overlay"></div>
        <div class="news-featured-body">
            <span class="news-cat">${b.category}</span>
            <div class="news-featured-title">${b.title}</div>
            <div class="news-featured-desc">${b.desc}</div>
            <div class="news-meta-row">
                <span class="news-date"><i class="bi bi-calendar3" style="color:var(--accent);margin-right:6px;"></i>${b.date}</span>
                <a href="#" class="btn-glass" style="padding:8px 16px;font-size:12px;">Baca Selengkapnya <i class="bi bi-arrow-up-right"></i></a>
            </div>
        </div>
    </div>`;
};

const generateList = () => {
    return `<div class="news-list" data-aos="fade-left">` +
        berita.slice(1).map((b, i) => `
        <div class="news-list-item" data-aos-delay="${i * 70}">
            <div class="news-list-thumb">
                <img src="${b.imgUrl}" alt="${b.category}" loading="lazy" />
            </div>
            <div class="news-list-content">
                <span class="news-cat" style="margin-bottom:8px;font-size:9px;">${b.category}</span>
                <div class="news-list-title">${b.title}</div>
                <div class="news-list-meta"><i class="bi bi-calendar3" style="color:var(--accent);margin-right:5px;"></i>${b.date}</div>
            </div>
        </div>`).join('') +
    `</div>`;
};

export default function Berita() {
    let html = beritaHtml;
    html = html.replace('<!-- FEATURED_NEWS -->', generateFeatured());
    html = html.replace('<!-- NEWS_LIST -->', generateList());
    return html;
}