// pages/landing.js
import '../styles/landing.css';

export const render = (container) => {
  container.innerHTML = `
    <header-component></header-component>
    <div class="landing">
      <section class="hero">
        <div class="hero-content">
          <h1>Selamat Datang di Smart Reporting!</h1>
          <h2>Solusi pelaporan cerdas untuk infrastruktur dan kesehatan.</h2>
          <p>Tingkatkan respons dan perbaikan untuk menciptakan lingkungan yang lebih baik!</p>
          <button class="mulai-btn">Mulai Lapor</button>
        </div>
      </section>

      <div class="stats-container">
        <div class="stat-card">
          <svg class="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div class="stat-number">5,000</div>
          <div class="stat-label">Pengguna Aktif</div>
        </div>

        <div class="stat-card">
          <svg class="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <div class="stat-number">10,100</div>
          <div class="stat-label">Laporan Dibuat</div>
        </div>

        <div class="stat-card">
          <svg class="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <div class="stat-number">98%</div>
          <div class="stat-label">Tingkat Respons</div>
        </div>

        <div class="stat-card">
          <svg class="stat-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="stat-number">15 mins</div>
          <div class="stat-label">Rata - Rata Respons</div>
        </div>
      </div>

        <section class="apa-itu-sipekat">
        <h2>Apa itu SIPEKAT?</h2>
        <p>SIPEKAT (Sistem Pelaporan Cerdas Terintegrasi) adalah platform inovatif yang menghubungkan masyarakat dengan pemerintah dan pemangku kepentingan terkait untuk meningkatkan respons dan perbaikan infrastruktur dan kesehatan.</p>
        <p>Platform ini dikembangkan untuk mempercepat respons terhadap masalah infrastruktur dan kesehatan, meningkatkan transparansi, dan memudahkan koordinasi antar instansi terkait.</p>
         </section>

<section class="layanan-kami">
  <h2>Layanan Kami</h2>
  <div class="layanan-container">
    <div class="layanan-box">
      <div class="layanan-icon">
        <i class="fas fa-server"></i>
      </div>
      <h3>Pelayanan Infrastruktur</h3>
      <p>Laporan kerusakan atau masalah infrastruktur dengan mudah dan cepat.</p>
    </div>
    <div class="layanan-box">
      <div class="layanan-icon">
        <i class="fas fa-hospital"></i>
      </div>
      <h3>Pelayanan Kesehatan</h3>
      <p>Sistem pelaporan terintegrasi untuk fasilitas kesehatan.</p>
    </div>
    <div class="layanan-box">
      <div class="layanan-icon">
        <i class="fas fa-chart-line"></i>
      </div>
      <h3>Real-time Monitoring</h3>
      <p>Pantau status laporan Anda secara real-time.</p>
    </div>
    <div class="layanan-box">
      <div class="layanan-icon">
        <i class="fas fa-chart-pie"></i>
      </div>
      <h3>Dashboard Analytics</h3>
      <p>Analisis data dan statistik laporan secara komprehensif.</p>
    </div>
  </div>
</section>

      <section class="form-section">
        <h2 class="form-title">Kirim Pesan</h2>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="subject">Subjek</label>
            <input type="text" id="subject" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea id="message" class="form-control" required></textarea>
          </div>

          <button type="submit" class="btn-submit">
            Kirim Pesan
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </form>
      </section>

      <section class="contact-section">
        <!-- Contact section content -->
      </section>
    </div>
  `;

  const attachEventListeners = () => {
    const mulaiBtn = container.querySelector('.mulai-btn');
    const contactForm = container.querySelector('#contact-form');

    mulaiBtn?.addEventListener('click', () => window.router.navigate('/register'));

    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Pesan Anda telah terkirim!');
      e.target.reset();
    });
  };

  attachEventListeners();
};