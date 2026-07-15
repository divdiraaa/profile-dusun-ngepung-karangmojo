import beritaHtml from './html/berita.html?raw';
import '../css/components/berita.css';

// Helper for generic SVG placeholder
const svgImage = (title) => `data:image/svg+xml;utf8,<svg viewBox='0 0 800 600' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%230a1520' stroke='%2338bdf8' stroke-width='2' stroke-opacity='0.2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='32' opacity='0.5'>${title}</text></svg>`;

/* ==========================================================
   DATA BERITA DESA
   Tambahkan atau edit berita baru di dalam array ini. 
   Berita pada urutan pertama otomatis menjadi berita utama (besar).
========================================================== */
export const berita = [
    {
        id: 1,
        title: "Pelatihan Penanaman Cabai untuk Kelompok Tani Padukuhan Ngepung",
        category: "Pertanian & UMKM",
        desc: "Pemerintah Padukuhan bekerja sama dengan dinas pertanian akan mengadakan pelatihan penanaman cabai pada tanggal 21 Juli mendatang. Kegiatan ini diharapkan dapat meningkatkan potensi pertanian desa.",
        date: "16 Juli 2026",
        imgUrl: svgImage("Pelatihan Tani Cabai")
    },
    {
        id: 2,
        title: "Menggali Jejak Sejarah: Asal-Usul Nama Padukuhan Ngepung",
        category: "Sejarah",
        desc: "Berawal dari kisah pelarian salah satu petinggi kerajaan di masa lampau yang kemudian terdesak (dikepung) di wilayah ini.", 
        date: "12 Jul 2026",
        imgUrl: svgImage("Sejarah Desa")
    },
    {
        id: 3,
        title: "Pesona Wisata Sekitar: Sendang Kali Bubar hingga Embung Batur Agung",
        category: "Pariwisata", 
        desc: "Jelajahi potensi wisata air di sekitar Ngepung, mulai dari Sendang Kali Bubar di Ngrombo 1 hingga Water Byur di Ponjong.",
        date: "8 Jul 2026",
        imgUrl: svgImage("Wisata Alam")
    },
    {
        id: 4,
        title: "Kelompok Seni Lokal Giat Lestarikan Budaya Keraton",
        category: "Kebudayaan", 
        desc: "Berbagai kelompok seni di Padukuhan Ngepung rutin mengadakan latihan bersama untuk melestarikan peninggalan budaya.",
        date: "5 Jul 2026",
        imgUrl: svgImage("Seni & Budaya")
    }
];

const generateFeatured = (b) => {
    return `
    <div class="news-featured" data-id="${b.id}" data-aos="fade-right">
        <div class="news-featured-bg">
            <img src="${b.imgUrl}" alt="${b.title}" loading="lazy" id="feat-img" />
        </div>
        <div class="news-featured-overlay"></div>
        <div class="news-featured-body">
            <span class="news-cat" id="feat-cat">${b.category}</span>
            <div class="news-featured-title" id="feat-title">${b.title}</div>
            <div class="news-featured-desc" id="feat-desc">${b.desc}</div>
            <div class="news-meta-row">
                <span class="news-date"><i class="bi bi-calendar3" style="color:var(--accent);margin-right:6px;"></i><span id="feat-date">${b.date}</span></span>
                <a href="#" class="btn-glass" style="padding:8px 16px;font-size:12px;">Baca Berita <i class="bi bi-arrow-up-right"></i></a>
            </div>
        </div>
    </div>`;
};

const generateList = (list) => {
    return `<div class="news-list" id="news-list-container" data-aos="fade-left">` +
        list.map((b, i) => `
        <div class="news-list-item" data-id="${b.id}" data-aos-delay="${i * 70}">
            <div class="news-list-thumb">
                <img src="${b.imgUrl}" alt="${b.category}" loading="lazy" />
            </div>
            <div class="news-list-content">
                <span class="news-cat" style="margin-bottom:8px;font-size:9px;padding:2px 8px;">${b.category}</span>
                <div class="news-list-title">${b.title}</div>
                <div class="news-list-meta"><i class="bi bi-calendar3" style="color:var(--accent);margin-right:5px;"></i>${b.date}</div>
            </div>
        </div>`).join('') +
    `</div>`;
};

export default function Berita() {
    let html = beritaHtml;
    // Berita pertama jadi featured
    html = html.replace('<!-- FEATURED_NEWS -->', generateFeatured(berita[0]));
    // Sisanya masuk list
    html = html.replace('<!-- NEWS_LIST -->', generateList(berita.slice(1)));
    return html;
}

// Inisialisasi klik untuk swap berita
export function initBerita() {
    const listContainer = document.getElementById('news-list-container');
    if (!listContainer) return;

    let currentFeatured = berita[0];
    let currentList = berita.slice(1);

    // Render ulang list item
    const renderListItems = () => {
        listContainer.innerHTML = currentList.map((b) => `
        <div class="news-list-item" data-id="${b.id}">
            <div class="news-list-thumb">
                <img src="${b.imgUrl}" alt="${b.category}" loading="lazy" />
            </div>
            <div class="news-list-content">
                <span class="news-cat" style="margin-bottom:8px;font-size:9px;padding:2px 8px;">${b.category}</span>
                <div class="news-list-title">${b.title}</div>
                <div class="news-list-meta"><i class="bi bi-calendar3" style="color:var(--accent);margin-right:5px;"></i>${b.date}</div>
            </div>
        </div>`).join('');
        attachListeners();
    };

    let autoplayInterval;

    const swapNews = (clickedId) => {
        const clickedIndex = currentList.findIndex(b => b.id === clickedId);
        if (clickedIndex !== -1) {
            const clickedBerita = currentList[clickedIndex];
            
            // Tukar tempat: hapus item yang diklik, dan masukkan featured lama ke list (ke bagian bawah)
            // Atau cukup swap posisinya (biar urutannya tetap)
            currentList[clickedIndex] = currentFeatured;
            currentFeatured = clickedBerita;
            
            // Update tampilan Featured
            document.getElementById('feat-img').src = currentFeatured.imgUrl;
            document.getElementById('feat-cat').textContent = currentFeatured.category;
            document.getElementById('feat-title').textContent = currentFeatured.title;
            document.getElementById('feat-desc').textContent = currentFeatured.desc;
            document.getElementById('feat-date').textContent = currentFeatured.date;
            
            // Update list
            renderListItems();
        }
    };

    // Pasang event listener ke setiap item
    const attachListeners = () => {
        const items = listContainer.querySelectorAll('.news-list-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const clickedId = parseInt(item.getAttribute('data-id'));
                swapNews(clickedId);
                resetAutoplay();
            });
        });
    };

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            if (currentList.length > 0) {
                // Otomatis pilih item pertama di list untuk swap
                swapNews(currentList[0].id);
            }
        }, 5000); // Ganti setiap 5 detik
    };

    const resetAutoplay = () => {
        clearInterval(autoplayInterval);
        startAutoplay();
    };

    attachListeners();
    startAutoplay();
}