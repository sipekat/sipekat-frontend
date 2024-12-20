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
        <img 
          src="./images/hero.png" 
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
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
        <div class="layanan-kami-description">
          Solusi pelaporan cerdas yang memudahkan pengelolaan infrastruktur dan kesehatan
        </div>
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

      <section class="faq-section">
        <div class="faq-container">
          <h2 class="faq-title">Frequently Asked Questions</h2>
          <div class="faq-items">
            <div class="faq-item">
              <div class="faq-question-container">
                <h3 class="faq-question">Apa itu SIPEKAT?</h3>
                <button class="faq-toggle"></button>
              </div>
              <div class="faq-answer">
                <p>SIPEKAT adalah platform inovatif untuk pelaporan dan penanganan masalah infrastruktur dan kesehatan secara efisien.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question-container">
                <h3 class="faq-question">Bagaimana cara melaporkan masalah?</h3>
                <button class="faq-toggle">+</button>
              </div>
              <div class="faq-answer">
                <p>Anda dapat melaporkan masalah melalui aplikasi SIPEKAT yang tersedia di perangkat mobile Anda. Kami akan segera menindaklanjuti setiap laporan yang masuk.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question-container">
                <h3 class="faq-question">Apakah layanan SIPEKAT gratis?</h3>
                <button class="faq-toggle">+</button>
              </div>
              <div class="faq-answer">
                <p>Ya, layanan SIPEKAT tersedia secara gratis untuk masyarakat umum. Kami berkomitmen untuk meningkatkan kesejahteraan masyarakat melalui platform ini.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question-container">
                <h3 class="faq-question">Bagaimana cara menghubungi tim SIPEKAT?</h3>
                <button class="faq-toggle">+</button>
              </div>
              <div class="faq-answer">
                <p>Anda dapat menghubungi kami melalui email di email@sipekat.com atau nomor telepon +62 123 4567 890. Tim kami akan dengan senang hati membantu Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <h2>Ada Pertanyaan? Kami Siap Membantu</h2>
            <h3>Tim kami siap membantu anda 24/7. Pilih cara nyaman untuk menghubungi kami</h3>
            <h2>Cara Menghubungi Kami</h2>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-detail">
                <p>Telepon</p>
                <a href="tel:+6282134565678">+62 812 345-678</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-detail">
                <p>Email</p>
                <a href="mailto:info@sipekat.id">info@sipekat.id</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-detail">
                <p>Kantor</p>
                <p>Jalan Sudirman No.123 Jakarta Pusat</p>
              </div>
            </div>
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

      <section class="newsletter-section">
        <h2>Berlangganan Newsletter</h2>
        <h3>Dapatkan update terbaru tentang SIPEKAT</h3>
        <div class="newsletter-input">
          <input type="email" id="email-input" placeholder="Masukkan email anda" required>
          <button id="subscribe-btn">Subscribe</button>
        </div>
      </section>

      <section class="footer-section">
        <div class="footer-container">
          <div class="footer-info">
            <h2>SIPEKAT</h2>
            <p>Platform inovatif untuk pelaporan dan penanganan masalah infrastruktur dan kesehatan secara efisien.</p>
            <div class="footer-social">
              <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 SIPEKAT. All rights reserved.</p>
          </div>
        </div>
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

    // Initialize FAQ accordion
    initializeFAQ();
  };

  const initializeFAQ = () => {
    const faqItems = container.querySelectorAll('.faq-item');

    // Initially hide all answers
    faqItems.forEach((item) => {
      const answer = item.querySelector('.faq-answer');
      if (answer) {
        answer.style.display = 'none';
      }
    });

    faqItems.forEach((item) => {
      const questionContainer = item.querySelector('.faq-question-container');
      const toggleBtn = item.querySelector('.faq-toggle');
      const answer = item.querySelector('.faq-answer');

      if (questionContainer && toggleBtn && answer) {
        questionContainer.addEventListener('click', () => {
          const isOpen = answer.style.display === 'block';

          // Close all other answers
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              const otherAnswer = otherItem.querySelector('.faq-answer');
              const otherToggle = otherItem.querySelector('.faq-toggle');
              if (otherAnswer && otherToggle) {
                otherAnswer.style.display = 'none';
                otherToggle.textContent = '+';
              }
            }
          });

          // Toggle current answer
          answer.style.display = isOpen ? 'none' : 'block';
          toggleBtn.textContent = isOpen ? '+' : '-';
        });
      }
    });
  };

  attachEventListeners();
};
