
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Al-Qur'an Digital</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=El+Messiri&display=swap" rel="stylesheet" />

  <style>
    * {
      margin: 0;
      padding: 0;
      font-family: 'El Messiri', sans-serif;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
      overflow: hidden;
    }

    /* Background hijau gradasi */
    body {
      background: linear-gradient(to bottom right, #0f5132, #198754);
      color: white;
    }

    /* Efek partikel */
    #particles-js {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .container-center {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .welcome-box {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(6px);
      border-radius: 20px;
      padding: 50px 30px;
      text-align: center;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
      animation: fadeIn 1.5s ease;
    }

    .welcome-box h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .welcome-box p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .btn-enter {
      font-size: 1.1rem;
      padding: 12px 30px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

  <!-- Partikel -->
  <div id="particles-js"></div>

  <!-- Konten -->
  <div class="container-center">
    <div class="welcome-box">
      <h1>Selamat Datang di Aplikasi Al-Qur'an</h1>
      <p>Baca dan pelajari Al-Qur'an digital dengan mudah dan nyaman</p>
      <a href="index.html" class="btn btn-light btn-lg btn-enter">Masuk ke Aplikasi</a>
    </div>
  </div>

  <!-- Library partikel -->
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script>
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.3 },
        "size": { "value": 3 },
        "move": { "enable": true, "speed": 1 }
      },
      "interactivity": {
        "events": {
          "onhover": { "enable": true, "mode": "repulse" }
        }
      },
      "retina_detect": true
    });
  </script>

  <!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Daftar Surat</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link href="css/style.css" rel="stylesheet">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand mb-0 h1">Daftar Surat Al-Qur'an</span>
    </div>
  </nav>

  <!-- Konten -->
  <div class="container mt-4">
    <div class="mb-4">
      <input type="text" id="cari-surat" class="form-control form-control-lg" placeholder="🔍 Cari nama surat...">
    </div>

    <div class="row g-3 card-surat-list"></div>
  </div>

  <!-- Script -->
  <script src="daftarSurat.js"></script>
</body>
</html>




</body>
</html>

<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Detail Surat</title>

  <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom CSS -->
  <link href="css/style.css" rel="stylesheet">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="index.html">⬅ Kembali</a>
      <span class="navbar-text">Detail Surat</span>
    </div>
  </nav>

  <!-- Konten -->
  <div class="container mt-4">
    <!-- Judul surat -->
    <div id="judul-surat" class="mb-4 text-center"></div>

    <!-- Tombol Audio -->
    <div class="text-center mb-4">
      <button id="btn-audio" class="btn btn-primary">🔊 Dengarkan Tilawah</button>
    </div>

    <!-- Audio Player -->
    <audio id="audio-player" controls class="d-none w-100"></audio>

    <!-- Daftar ayat -->
    <div class="row" id="daftar-ayat"></div>
  </div>

  <!-- Script -->
  <script src="detailSurat.js"></script>
</body>
</html>
''
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

function toArabicNumber(number) {
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return number.toString().split('').map(d => arabicDigits[d]).join('');
  }
  
  function getNomorSurat() {
    const params = new URLSearchParams(window.location.search);
    return params.get('nomorsurat');
  }
  
  function tampilkanSurat(nomor) {
    fetch('https://equran.id/api/surat/' + nomor)
      .then(res => res.json())
      .then(data => {
  
          const judul = document.getElementById('judul-surat');
        judul.innerHTML = `
          <h2>${data.nama_latin} (${data.nama})</h2>
          <p class="text-muted">Jumlah ayat: ${data.jumlah_ayat}</p>
        `;
  
        const daftarAyat = document.getElementById('daftar-ayat');
        daftarAyat.innerHTML = data.ayat.map(ayat => `
          <div class="col-12">
            <div class="card mb-3">
              <div class="card-body">
                <p class="text-end fs-4">${ayat.ar}</p>
                <span class="penanda-ayat ms-2">${toArabicNumber(ayat.nomor)}</span>
                <p><strong>Latin:</strong> ${ayat.tr}</p>
                <p><strong>Arti:</strong> ${ayat.idn}</p>
              </div>
            </div>
          </div>
        `).join('');
  
        const audio = document.getElementById('audio-player');
        if (data.audio) {
          audio.src = data.audio;
          document.getElementById('btn-audio').addEventListener('click', () => {
            audio.classList.remove('d-none');
            audio.play();
          });
        }
      })
      .catch(err => {
        document.getElementById('judul-surat').innerHTML = "<p class='text-danger'>Gagal memuat data surat.</p>";
        console.error("Gagal mengambil data surat:", err);
      });
  }
  
  const nomor = getNomorSurat();
  if (nomor) {
    tampilkanSurat(nomor);
  } else {
    document.getElementById('judul-surat').innerHTML = "<p class='text-danger'>Nomor surat tidak ditemukan di URL.</p>";
  }

  body {
    background-color: #f8f9fa;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .navbar {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .card-surat {
    border-radius: 16px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
  }
  
  .card-surat:hover {
    transform: translateY(-6px);
    box-shadow: 2px 4px 16px rgba(0,0,0,0.1);
  }
  
  .card-title {
    font-weight: bold;
  }
  
  .card-subtitle {
    font-size: 24px;
  }
  
  .card-text {
    font-style: italic;
    color: #666;
  }
  
  #daftar-ayat .card {
    border: 1px solid #dee2e6;
    border-radius: 12px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.03);
  }
  
  #btn-audio {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }
  
  #cari-surat {
    border-radius: 12px;
    padding-left: 1.2rem;
  }
  
  .penanda-ayat {
    display: inline-block;
    padding: 4px 10px;
    margin-left: 8px;
    background-color: #000;
    color: #fff;
    border-radius: 999px;
    font-family: 'Amiri', serif;
    font-size: 1.25rem;
    line-height: 1;
    min-width: 40px;
    text-align: center;
  }
  
  body {
    font-family: 'Amiri', serif;
  }
  
  .surat-card {
    transition: all 0.3s ease;
    border-radius: 15px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  
  .surat-card:hover {
    background-color: #f0f8ff;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
    border-color: #0d6efd;
  }
  
  .surat-card:active {
    transform: scale(0.98);
    background-color: #dbefff;
  }
  
  .arabic {
    font-size: 1.8rem;
    font-family: 'Scheherazade New', serif;
    direction: rtl;
  }
  

  
  
