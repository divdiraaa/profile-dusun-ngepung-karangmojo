import html from './html/umkm.html?raw';
import '../css/components/umkm.css';

const svgPlaceholder = (text) => `data:image/svg+xml;utf8,<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%230a1520' stroke='%2338bdf8' stroke-width='2' stroke-opacity='0.2'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='16'>${text}</text></svg>`;

/* 
  UNTUK MENGGANTI GAMBAR:
  Ubah nilai imgUrl dari fungsi svgPlaceholder menjadi path gambar asli.
  Contoh: imgUrl: "/src/assets/images/umkm/kerajinan-bambu.jpg"
*/

const umkmData = [
  {
    title: "Kerajinan Bambu Ngepung",
    category: "Kriya / Kerajinan",
    desc: "Berbagai macam perabotan rumah tangga dan suvenir cantik berbahan dasar bambu lokal berkualitas.",
    owner: "KWT Sekar Tanjung",
    imgUrl: "/images/umkm/kerajinan.png"
  },
  {
    title: "UMKM Peyek Mbak Yenni",
    category: "Kuliner",
    desc: "Keripik atau Peyek yang diolah langsung dari hasil bumi tanah Padukuhan Ngepung.",
    owner: "Mbak Yenni",
    imgUrl: "/images/umkm/umkm-peyek.jpg"
  },
  {
    title: "Pabrik Tahu Ngepung",
    category: "Bahan Makanan Pokok",
    desc: "Tahu yang diolah secara tradisional dari kedelai lokal, menjadi salah satu produk unggulan desa.",
    owner: "Pak Yamin",
    imgUrl: "/images/umkm/umkm-tahu.jpg"
  },
  // {
  //   title: "Suvenir Kulit Kerang",
  //   category: "Kriya / Suvenir",
  //   desc: "Pernak-pernik hiasan dan aksesori berbahan dasar kulit kerang dari area pantai sekitar.",
  //   owner: "Pemuda Karang Taruna",
  //   imgUrl: svgPlaceholder("Gambar Suvenir Kerang")
  // },
  // {
  //   title: "Gula Jawa Organik",
  //   category: "Bahan Pangan",
  //   desc: "Gula kelapa murni tanpa bahan pengawet, diproses secara tradisional oleh para penderes lokal.",
  //   owner: "Paguyuban Penderes",
  //   imgUrl: svgPlaceholder("Gambar Gula Jawa")
  // }
];

const generateSlides = () => {
  return umkmData.map(item => `
    <div class="swiper-slide">
      <div class="umkm-card">
        <div class="umkm-img">
          <img src="${item.imgUrl}" alt="${item.title}" loading="lazy" />
          <span class="umkm-badge">${item.category}</span>
        </div>
        <div class="umkm-body">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="umkm-owner">
            <i class="bi bi-person-fill"></i> ${item.owner}
          </div>
        </div>
      </div>
    </div>
  `).join('');
};

export default function UMKM() {
  return html.replace('<!-- UMKM_LIST -->', generateSlides());
}
