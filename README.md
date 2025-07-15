
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
