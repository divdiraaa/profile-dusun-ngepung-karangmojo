import footerHtml from './html/footer.html?raw';
import '../css/components/footer.css';

const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Desa", href: "#tentang" },
    { name: "Destinasi Wisata", href: "#potensi" },
    { name: "Agenda", href: "#agenda" },
    { name: "Galeri", href: "#galeri" },
];

const wisataLinks = [
    { name: "Sendang Kali Bubar", href: "#potensi" },
    { name: "Embung Gentungan", href: "#potensi" },
    { name: "Kelompok Seni", href: "#potensi" },
    { name: "Pertanian Cabai", href: "#potensi" },
    { name: "Potensi Ngepung", href: "#potensi" },
];

const infoLinks = [
    { name: "Jam Layanan", href: "#maps" },
    { name: "Kontak Desa", href: "#maps" }
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