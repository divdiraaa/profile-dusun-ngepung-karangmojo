import footerHtml from './html/footer.html?raw';
import '../css/components/footer.css';

const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Desa", href: "#tentang" },
    { name: "Destinasi Wisata", href: "#potensi" },
    { name: "Layanan Publik", href: "#layanan" },
    { name: "Berita", href: "#berita" },
    { name: "Agenda", href: "#agenda" },
    { name: "Galeri", href: "#galeri" },
];

const wisataLinks = [
    { name: "Pantai Mesra (Ngrawe)", href: "#potensi" },
    { name: "Pantai Kukup", href: "#potensi" },
    { name: "Geopark Gunung Sewu", href: "#potensi" },
    { name: "Cave Tubing", href: "#potensi" },
    { name: "Trekking Bukit", href: "#potensi" },
];

const infoLinks = [
    { name: "Jam Layanan", href: "#maps" },
    { name: "Kontak Desa", href: "#maps" },
    { name: "Transparansi APBDes", href: "#layanan" },
    { name: "Pengumuman Desa", href: "#berita" },
];

export default function Footer() {
    const year = new Date().getFullYear();
    let html = footerHtml;
    html = html.replace('<!-- NAV_LINKS -->', navLinks.map(l => `<li><a href="${l.href}">${l.name}</a></li>`).join(''));
    html = html.replace('<!-- WISATA_LINKS -->', wisataLinks.map(l => `<li><a href="${l.href}">${l.name}</a></li>`).join(''));
    html = html.replace('<!-- INFO_LINKS -->', infoLinks.map(l => `<li><a href="${l.href}">${l.name}</a></li>`).join(''));
    html = html.replace('<!-- YEAR -->', year);
    return html;
}