// Impor modul halaman yang akan digunakan dalam routing
import DashboardPage from './DashboardPage';
import NotifikasiPage from './notifikasiPage';
import laporanPage from './laporanPage';
import profilPage from './profilPage';

// Impor file CSS untuk gaya halaman admin
import '../../styles/masyarakat.css';

// Objek routes berisi definisi rute URL dan komponen halaman yang akan dirender
const routes = {
  '/': DashboardPage, // Rute untuk halaman Dashboard
  '/masyarakat#notifikasi': NotifikasiPage, // Rute untuk halaman Notifikasi
  '/masyarakat#laporansaya': laporanPage, // Rute untuk halaman Laporan
  '/masyarakat#profil': profilPage, // Rute untuk halaman Profil
};

// Objek aplikasi utama
const app = {
  /**
   * Metode untuk merender struktur HTML awal ke dalam container.
   * @param {HTMLElement} container - Elemen DOM tempat aplikasi akan dirender.
   */
  render(container) {
    container.innerHTML = `
      <header class="header">
        <button class="menu-button" id="menuButton">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div class="overlay" id="overlay"></div>

        <nav class="drawer" id="drawer">
          <div class="drawer-header">
            <h2>Menu</h2>
          </div>
          <ul class="nav-list">
            <li class="nav-item">
              <a href="/" class="nav-link" data-link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Beranda
              </a>
            </li>
            <li class="nav-item">
              <a href="/masyarakat#laporansaya" class="nav-link" data-link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Laporan Saya
              </a>
            </li>
            <li class="nav-item">
              <a href="/masyarakat#notifikasi" class="nav-link" data-link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Notifikasi
              </a>
            </li>
            <li class="nav-item">
              <a href="/masyarakat#profil" class="nav-link" data-link>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Profil
              </a>
            </li>
            <li class="nav-item">
              <logout-button></logout-button>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main-content" id="page-content"></main>
    `;

    // Inisialisasi aplikasi setelah rendering awal
    this._initializeApp();
  },

  /**
   * Inisialisasi aplikasi, termasuk mengatur routing dan event listeners.
   */
  async _initializeApp() {
    this._setupEventListeners(); // Atur event listener untuk interaksi pengguna
    await this._handleRoute(); // Render halaman awal sesuai rute
    this._initializeRouter(); // Atur router untuk menangani navigasi
  },

  /**
   * Mengatur event listener untuk drawer dan logout button.
   */
  _setupEventListeners() {
    const menuButton = document.getElementById('menuButton');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    if (menuButton && drawer && overlay) {
      // Toggle drawer when menu button is clicked
      menuButton.addEventListener('click', () => {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
      });

      // Close drawer when overlay is clicked
      overlay.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
      });

      // Close drawer when a menu item is clicked
      drawer.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          overlay.classList.remove('active');
        });
      });
    }
  },

  /**
   * Menginisialisasi router dengan event listener untuk peristiwa perubahan URL.
   */
  _initializeRouter() {
    // Handle hash changes
    window.addEventListener('hashchange', () => this._handleRoute());

    // Handle popstate events
    window.addEventListener('popstate', () => this._handleRoute());

    // Handle navigation link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        window.history.pushState({}, '', href);
        this._handleRoute();
      }
    });
  },

  /**
   * Menangani logika routing dan merender halaman sesuai dengan path dan hash URL.
   */
  async _handleRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const fullPath = path + hash;
    const pageContent = document.getElementById('page-content');

    const page = routes[fullPath] || routes[path] || routes['/'];
    this._updateNavigation(fullPath);

    try {
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
    document.querySelectorAll('.nav-link').forEach((nav) => {
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
