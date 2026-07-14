import potensiHtml from './html/potensi.html?raw';
import '../css/components/potensi.css';

// TODO: replace imgUrl values with local files after adding to /src/assets/images/
const wisata = [
    {
        title: "Pantai Mesra (Ngrawe)",
        category: "Pantai",
        desc: "Berpasir putih bersih dengan ombak besar dan hamparan rumput hijau — dijuluki Miami-nya Jogja. Tiket Rp 10.000.",
        location: "Tanjungsari, Gunung Kidul",
        rating: "4.9",
        imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&fm=webp",
        imgAlt: "Pantai Mesra Ngepung",
        featured: true,
    },
    {
        title: "Pantai Kukup",
        category: "Pantai",
        desc: "Pasir putih, air jernih, dan batu karang khas. Buka 24 jam dengan fasilitas lengkap. Tiket Rp 10.000.",
        location: "Tanjungsari, Gunung Kidul",
        rating: "4.8",
        imgUrl: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&fm=webp",
        imgAlt: "Pantai Kukup Gunung Kidul",
    },
    {
        title: "Geopark Gunung Sewu",
        category: "Alam Karst",
        desc: "Kawasan Geopark UNESCO dengan lanskap karst spektakuler, gua, dan bukit untuk trekking menikmati sunset.",
        location: "Gunung Kidul, DIY",
        rating: "4.7",
        imgUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80&fm=webp",
        imgAlt: "Geopark Gunung Sewu",
    },
    {
        title: "Cave Tubing & Trekking",
        category: "Petualangan",
        desc: "Petualangan cave tubing di sungai bawah tanah dan trekking bukit karst dengan panorama matahari terbenam.",
        location: "Sekitar Desa Ngepung",
        rating: "4.6",
        imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&fm=webp",
        imgAlt: "Cave Tubing Gunung Kidul",
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