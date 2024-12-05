// Impor modul halaman yang akan digunakan dalam routing
import UsersPage from './UserPage';
import ReportsPage from './ReportPage';
import DashboardPage from './DashboardPage';

// Impor file CSS untuk gaya halaman admin
import '../../styles/admin.css';

// Objek routes berisi definisi rute URL dan komponen halaman yang akan dirender
const routes = {
  '/': DashboardPage, // Rute untuk halaman Dashboard
  '/admin#users': UsersPage, // Rute untuk halaman Pengguna
  '/admin#reports': ReportsPage, // Rute untuk halaman Laporan
  // '/admin#settings': SettingsPage, // untuk halaman pengaturan, akan diaktifkan ketika SettingsPage tersedia
};

// Objek aplikasi utama
const app = {
  /**
   * Metode untuk merender struktur HTML awal ke dalam container.
   * @param {HTMLElement} container - Elemen DOM tempat aplikasi akan dirender.
   */
  render(container) {
    container.innerHTML = `
    <main class="main-content" id="page-content"></main>
      <div class="dashboard">
        <aside class="sidebar">
          <div class="logo">SIPEKAT</div>
          <nav>
            <!-- Menu navigasi dengan tautan ke halaman yang sesuai -->
            <a href="/admin" class="nav-item" data-link>
              <span>📊</span> Dashboard
            </a>
            <a href="/admin#users" class="nav-item" data-link>
              <span>👥</span> Pengguna
            </a>
            <a href="/admin#reports" class="nav-item" data-link>
              <span>📝</span> Laporan
            </a>
            <a href="/admin#settings" class="nav-item" data-link>
              <span>⚙️</span> Pengaturan
            </a>
          </nav>
          <logout-button></logout-button> <!-- Komponen tombol logout -->
        </aside>
      </div>
    `;
    // Inisialisasi aplikasi setelah rendering awal
    this._initializeApp();
  },

  /**
   * Inisialisasi aplikasi, termasuk mengatur routing dan event listeners.
   */
  async _initializeApp() {
    await this._handleRoute(); // Render halaman awal sesuai rute
    this._initializeRouter(); // Atur router untuk menangani navigasi
    this._setupEventListeners(); // Atur event listener untuk interaksi pengguna
  },

  /**
   * Mengatur event listener untuk logout button.
   */
  _setupEventListeners() {},

  /**
   * Menginisialisasi router dengan event listener untuk peristiwa perubahan URL.
   */
  _initializeRouter() {
    // Tangani perubahan hash pada URL
    window.addEventListener('hashchange', () => this._handleRoute());

    // Tangani navigasi langsung melalui popstate
    window.addEventListener('popstate', () => this._handleRoute());

    // Tangani klik pada tautan navigasi
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault(); // Hentikan navigasi default
        const href = link.getAttribute('href');
        window.history.pushState({}, '', href); // Perbarui URL di browser
        this._handleRoute(); // Render halaman sesuai rute baru
      }
    });
  },

  /**
   * Menangani logika routing dan merender halaman sesuai dengan path dan hash URL.
   */
  async _handleRoute() {
    const path = window.location.pathname; // Ambil path dari URL
    const hash = window.location.hash; // Ambil hash dari URL
    const fullPath = path + hash; // Gabungkan path dan hash untuk mendapatkan rute penuh
    const pageContent = document.getElementById('page-content');

    // Temukan rute yang cocok, atau gunakan dashboard sebagai default
    const page = routes[fullPath] || routes[path] || routes['/'];

    // Perbarui penyorotan navigasi
    this._updateNavigation(fullPath);

    try {
      // Render konten halaman dan panggil metode setelah render jika ada
      pageContent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Error rendering page:', error);
      pageContent.innerHTML = '<div class="error">Terjadi kesalahan saat memuat halaman</div>';
    }
  },

  /**
   * Memperbarui penyorotan navigasi untuk menampilkan halaman yang aktif.
   * @param {string} currentPath - Path URL saat ini.
   */
  _updateNavigation(currentPath) {
    document.querySelectorAll('.nav-item').forEach((nav) => {
      const navHref = nav.getAttribute('href');
      nav.classList.toggle('active', navHref === currentPath);
    });
  },
};

// Fungsi utama untuk menjalankan aplikasi saat DOM siap
const main = () => {
  const container = document.querySelector('#app');
  app.render(container);
};

// Inisialisasi aplikasi setelah DOM sepenuhnya dimuat
window.addEventListener('DOMContentLoaded', main);

// Ekspor aplikasi untuk digunakan di bagian lain proyek
export default app;
