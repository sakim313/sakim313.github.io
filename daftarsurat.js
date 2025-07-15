function getSurat() {
    console.log('Memulai fetch data surat...');
    fetch('https://equran.id/api/surat')
        .then(response => response.json())
        .then(data => {
            const listSurat = document.querySelector('.card-surat-list');
            if (!listSurat) {
                console.error('Elemen .card-surat-list tidak ditemukan di halaman!');
                return;
            }

            const cards = data.map(surat => `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="card mb-4 shadow-sm h-100 card-surat">
                        <div class="card-body" style="cursor: pointer;" onclick="location.href='surat.html?nomorsurat=${surat.nomor}'">
                            <h5 class="card-title">${surat.nomor}. ${surat.nama_latin}</h5>
                            <h3 class="card-subtitle mb-2 text-muted text-end">${surat.nama}</h3>
                            <p class="card-text text-end"><em>${surat.arti}</em></p>
                        </div>
                    </div>
                </div>
            `).join('');

            listSurat.innerHTML = cards;
        })
        .catch(error => {
            console.error('Gagal mengambil data surat:', error);
            alert('Terjadi kesalahan saat mengambil daftar surat.');
        });
}

getSurat();

let semuaSurat = [];

function tampilkanDaftarSurat(data) {
  const listSurat = document.querySelector('.card-surat-list');
  if (!listSurat) return;

  const cards = data.map(surat => `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card mb-4 shadow-sm h-100 card-surat">
        <div class="card-body" style="cursor: pointer;" onclick="location.href='surat.html?nomorsurat=${surat.nomor}'">
          <h5 class="card-title">${surat.nomor}. ${surat.nama_latin}</h5>
          <h3 class="card-subtitle mb-2 text-muted text-end">${surat.nama}</h3>
          <p class="card-text text-end"><em>${surat.arti}</em></p>
        </div>
      </div>
    </div>
  `).join('');

  listSurat.innerHTML = cards;
}

function getSurat() {
  fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(data => {
      semuaSurat = data;
      tampilkanDaftarSurat(semuaSurat);
    })
    .catch(error => {
      console.error('Gagal mengambil data surat:', error);
      alert('Terjadi kesalahan saat mengambil daftar surat.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  getSurat();

  const inputCari = document.getElementById('cari-surat');
  if (inputCari) {
    inputCari.addEventListener('input', (e) => {
      const keyword = e.target.value.toLowerCase();
      const hasil = semuaSurat.filter(surat =>
        surat.nama_latin.toLowerCase().includes(keyword) ||
        surat.arti.toLowerCase().includes(keyword) ||
        surat.nama.toLowerCase().includes(keyword)
      );
      tampilkanDaftarSurat(hasil);
    });
  }
});
const surat = [
  { id: 1, nama: "Al-Fatihah", arti: "Pembukaan", arab: "الفاتحة" },
  { id: 2, nama: "Al-Baqarah", arti: "Sapi Betina", arab: "البقرة" },
  { id: 3, nama: "Ali 'Imran", arti: "Keluarga Imran", arab: "آل عمران" },
  // Tambahkan lanjut...
];

const container = document.getElementById("surat-container");

surat.forEach((s) => {
  container.innerHTML += `
    <div class="col-md-3 col-sm-6">
      <a href="../detailSurat/index.html?id=${s.id}" class="text-decoration-none">
        <div class="card surat-card text-center h-100">
          <div class="card-body">
            <h5 class="card-title">${s.id}. ${s.nama}</h5>
            <div class="arabic mb-2">${s.arab}</div>
            <div class="card-subtitle text-muted fst-italic">${s.arti}</div>
          </div>
        </div>
      </a>
    </div>
  `;
});
