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
  