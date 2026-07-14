/* ===========================================================
   COMPONENT : STATISTIK DESA
=========================================================== */

const statistikData = [
    {
        icon: "bi-people-fill",
        number: 5200,
        suffix: "+",
        title: "Jumlah Penduduk"
    },
    {
        icon: "bi-house-door-fill",
        number: 12,
        suffix: "",
        title: "Dusun"
    },
    {
        icon: "bi-shop",
        number: 150,
        suffix: "+",
        title: "UMKM"
    },
    {
        icon: "bi-tree-fill",
        number: 25,
        suffix: "",
        title: "Objek Wisata"
    }
];

export default function Statistik() {
    return `
    <section id="statistik" class="statistik-section py-5">
      <div class="container">

        <div class="text-center mb-5">
          <span class="section-label">Statistik Desa</span>

          <h2 class="section-heading">
            Data Desa Ngepung
          </h2>

          <p class="section-text-center">
            Informasi singkat mengenai kondisi Desa Ngepung.
          </p>
        </div>

        <div class="row g-4">

          ${statistikData.map(item => `
            <div class="col-lg-3 col-md-6">

              <div class="stat-card">

                <div class="stat-icon">
                  <i class="bi ${item.icon}"></i>
                </div>

                <h2
                  class="counter"
                  data-target="${item.number}"
                  data-suffix="${item.suffix}">
                  0
                </h2>

                <p>${item.title}</p>

              </div>

            </div>
          `).join("")}

        </div>

      </div>
    </section>
  `;
}