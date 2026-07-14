import footerHtml from './html/footer.html?raw';
import '../css/components/footer.css';

const quickLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Profil Desa", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Potensi Desa", href: "#potensi" },
    { name: "Berita", href: "#berita" },
    { name: "Agenda", href: "#agenda" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#maps" }
];

const latestNews = [
    "Festival Budaya Desa",
    "Pelatihan UMKM",
    "Gotong Royong",
    "Peresmian Jalan"
];

const generateQuickLinks = () => {
    return quickLinks.map(link => `
        <li><a href="${link.href}"><i class="bi bi-chevron-right me-2 small text-accent"></i>${link.name}</a></li>
    `).join("");
};

const generateLatestNews = () => {
    return latestNews.map(item => `
        <li><a href="#"><i class="bi bi-newspaper me-2 small text-accent"></i>${item}</a></li>
    `).join("");
};

export default function Footer() {
    const year = new Date().getFullYear();
    let html = footerHtml;
    
    html = html.replace('<!-- QUICK_LINKS -->', generateQuickLinks());
    html = html.replace('<!-- LATEST_NEWS -->', generateLatestNews());
    html = html.replace('<!-- YEAR -->', year);
    
    return html;
}