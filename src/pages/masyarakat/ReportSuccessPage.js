const LaporanSuccessPage = {
    async render() {
      return `
        <section class="success-page">
          <!-- Pesan Konfirmasi -->
          <div class="success-message">
            <p class="success-text">Laporan anda telah dikirimkan</p>
            <i class="success-icon">&#10004;</i> <!-- Ikon centang hijau -->
          </div>
          
          <!-- Tombol Aksi -->
          <div class="success-actions">
            <button class="status-button">Lihat Status Laporan Saya</button>
          </div>
        </section>
      `;
    },
  
    async afterRender() {
      // Menangani klik tombol "Lihat Status Laporan Saya"
      const statusButton = document.querySelector('.status-button');
      statusButton.addEventListener('click', async () => {
        // Navigasi ke halaman notifikasiPage.js
        const root = document.querySelector('#app'); // Pastikan ada elemen #app di index.html
        const NotifikasiPage = (await import('./notifikasiPage.js')).default; // Import halaman notifikasiPage.js
  
        // Render halaman notifikasiPage
        root.innerHTML = await NotifikasiPage.render();
        if (NotifikasiPage.afterRender) await NotifikasiPage.afterRender();
      });
    },
  };
  
  export default LaporanSuccessPage;
  