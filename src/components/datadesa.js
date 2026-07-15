import html from './html/datadesa.html?raw';
import '../css/components/datadesa.css';

// Data Nominal APBDes (Bisa diubah dengan mudah di sini)
const apbdesData = [
  { label: "Pembangunan & Infrastruktur", nominal: 450000000, color: "var(--accent)" },
  { label: "Pemberdayaan Masyarakat", nominal: 250000000, color: "#10b981" },
  { label: "Penyelenggaraan Pemerintahan", nominal: 200000000, color: "#f59e0b" },
  { label: "Penanggulangan Bencana & Darurat", nominal: 100000000, color: "#ef4444" }
];

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
};

const renderApbdes = () => {
  const total = apbdesData.reduce((acc, curr) => acc + curr.nominal, 0);
  
  return apbdesData.map(item => {
    const percentage = total > 0 ? Math.round((item.nominal / total) * 100) : 0;
    
    return `
      <div class="apbdes-item">
        <div class="apbdes-meta">
          <span>${item.label}</span>
          <strong>${formatRupiah(item.nominal)} (${percentage}%)</strong>
        </div>
        <div class="apbdes-bar-track">
          <div class="apbdes-bar-fill" style="width: ${percentage}%; background: ${item.color};"></div>
        </div>
      </div>
    `;
  }).join('');
};

export default function DataDesa() {
  return html.replace('<!-- APBDES_LIST -->', renderApbdes());
}
