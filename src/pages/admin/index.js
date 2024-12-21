/**
 * @fileoverview File ini berisi konfigurasi dan inisialisasi aplikasi admin.
 * File ini bertanggung jawab untuk menyiapkan routing, template, dan menginisialisasi
 * dashboard admin dengan menggunakan AppHandler dari core.
 */

// Import handler aplikasi dari core untuk mengelola routing dan rendering
import { AppHandler } from '../../core/app';

// Import halaman-halaman yang digunakan dalam aplikasi admin
import UsersPage from './UserPage';
import ReportsPage from './ReportPage';
import DashboardPage from './DashboardPage';

// Import stylesheet dan komponen yang dibutuhkan
import '../../styles/admin.css';

/**
 * Konfigurasi rute untuk aplikasi admin.
 * Setiap rute memetakan path URL ke komponen halaman yang sesuai.
 * @constant {Object}
 */
const routes = {
  '/': DashboardPage, // Halaman dashboard sebagai halaman utama
  '/admin#users': UsersPage, // Halaman manajemen pengguna
  '/admin#reports': ReportsPage, // Halaman manajemen laporan
};

/**
 * Template HTML untuk layout dasar aplikasi admin.
 * Template ini mendefinisikan struktur sidebar dengan menu navigasi
 * dan area konten utama.
 *
 * @constant {string}
 * @note Menggunakan data-link pada elemen <a> untuk penanganan routing kustom
 */
const adminTemplate = `
  <div class="dashboard">
    <aside class="sidebar">
      <div class="logo">SIPEKAT</div>
      <nav>
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
      <logout-button></logout-button>
    </aside>
    <main class="main-content" id="page-content"></main>
  </div>
`;

/**
 * Inisialisasi instance AppHandler dengan konfigurasi untuk aplikasi admin.
 * AppHandler menangani routing dan rendering komponen.
 *
 * @constant {AppHandler}
 */
const app = new AppHandler(routes, adminTemplate);

/**
 * Fungsi utama untuk menginisialisasi aplikasi.
 * Dipanggil ketika DOM telah sepenuhnya dimuat.
 *
 * @function
 * @note Menggunakan querySelector untuk menemukan elemen container aplikasi
 */
const main = () => {
  const container = document.querySelector('#app');
  app.render(container);
};

// Event listener untuk memastikan DOM telah dimuat sebelum menjalankan aplikasi
window.addEventListener('DOMContentLoaded', main);

export default app;
