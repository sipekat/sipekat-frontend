const DashboardPage = {
  async render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? user.name : 'Pengguna';

    return `
      <main>
        <section class="welcome">
          <h1>Selamat Datang di Smart Reporting, ${userName}!</h1>
          <p><strong>Solusi pelaporan cerdas untuk infrastruktur dan kesehatan.</strong></p>
          <p>Tingkatkan respons dan perbaikan untuk menciptakan lingkungan yang lebih baik!</p>
          <a href="masyarakat#laporan" class="report-button" data-link>Mulai Lapor</a>
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
    `;
  },

  async afterRender() {},
};

export default DashboardPage;
