import { AppHandler } from '../../core/app';
import DashboardPage from './DashboardPage';
import NotifikasiPage from './notifikasiPage';
import laporanPage from './laporanPage';
import profilPage from './profilPage';
import '../../styles/masyarakat.css';
import '../../scripts/components/logout-button';

const routes = {
  '/': DashboardPage,
  '/masyarakat#notifikasi': NotifikasiPage,
  '/masyarakat#laporansaya': laporanPage,
  '/masyarakat#profil': profilPage,
};

const masyarakatTemplate = `
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

const app = new AppHandler(routes, masyarakatTemplate);

// Fungsi utama untuk menjalankan aplikasi
const main = () => {
  const container = document.querySelector('#app');
  app.render(container);
};

window.addEventListener('DOMContentLoaded', main);

export default app;
