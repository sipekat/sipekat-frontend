const DashboardPage = {
    async render() {
      return `
       
  
        <main>
          <section class="welcome">
            <h1>Selamat Datang di Smart Reporting!</h1>
            <p><strong>Solusi pelaporan cerdas untuk infrastruktur dan kesehatan.</strong></p>
            <p>Tingkatkan respons dan perbaikan untuk menciptakan lingkungan yang lebih baik!</p>
            <button class="report-button">Mulai Lapor</button>
          </section>
  
          <section class="stats">
            <div class="stat-item">
              <p class="stat-number">5,000</p>
              <p>Pengguna Aktif</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">10,100</p>
              <p>Laporan Dibuat</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">98%</p>
              <p>Tingkat Respons</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">15 mins</p>
              <p>Rata - Rata Respons</p>
            </div>
          </section>
  
          <section class="report-guide">
            <h2>Cara Melapor</h2>
            <p>Cara yang bisa anda lakukan untuk melakukan pelaporan:</p>
            <div class="contact">
              <p>Anda dapat melaporkan kasus ke SIPEKAT melalui WhatsApp ke nomor di bawah ini, dengan mengikuti format yang ada.</p>
              <p class="whatsapp-number">0811-9620-0340</p>
            </div>
          </section>
        </main>
  
        <footer>
          <p>© Copyright © 2024 SIPEKAT.</p>
          <p>Best Viewed with Mozilla Firefox / Google Chrome</p>
        </footer>
      `;
    },
  
    async afterRender() {
      // Tambahkan interaktivitas di sini, jika diperlukan
      const reportButton = document.querySelector('.report-button');
      reportButton.addEventListener('click', () => {
        alert('Fitur laporan akan segera tersedia!');
      });
    },
  };
  
  export default DashboardPage;
