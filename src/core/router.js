/**
 * @fileoverview Modul ini mendefinisikan Router class yang menangani
 * navigasi dan routing dalam aplikasi SIPEKAT. Router mengelola perubahan URL,
 * render halaman, dan pembaruan status navigasi.
 */

/**
 * Class untuk menangani routing dan navigasi aplikasi.
 * Mengelola perubahan URL dan rendering halaman yang sesuai.
 */
export class Router {
  /**
   * Membuat instance baru dari Router.
   *
   * @param {Object} routes - Objek yang memetakan path URL ke komponen halaman
   */
  constructor(routes) {
    this.routes = routes;
  }

  /**
   * Menginisialisasi router dengan menambahkan event listeners
   * untuk menangani perubahan URL dan navigasi.
   *
   * Menangani tiga jenis event:
   * - hashchange: Saat hash URL berubah
   * - popstate: Saat pengguna menggunakan tombol back/forward browser
   * - click: Untuk link dengan atribut data-link
   */
  initializeRouter() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('popstate', () => this.handleRoute());

    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        window.history.pushState({}, '', href);
        this.handleRoute();
      }
    });
  }

  /**
   * Menangani perubahan rute dengan merender halaman yang sesuai.
   *
   * Proses:
   * 1. Mendapatkan path dan hash dari URL
   * 2. Menemukan komponen halaman yang sesuai
   * 3. Memperbarui status navigasi
   * 4. Merender halaman
   *
   * @async
   * @throws {Error} Jika terjadi kesalahan saat merender halaman
   */
  async handleRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const fullPath = path + hash;
    const pageContent = document.getElementById('page-content');

    // Mencari halaman yang sesuai dengan rute, atau gunakan halaman default
    const page = this.routes[fullPath] || this.routes[path] || this.routes['/'];
    this.updateNavigation(fullPath);

    try {
      pageContent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Error rendering page:', error);
      pageContent.innerHTML = '<div class="error">Terjadi kesalahan saat memuat halaman</div>';
    }
  }

  /**
   * Memperbarui status navigasi dengan menandai link yang aktif.
   *
   * @param {string} currentPath - Path URL saat ini
   * @note Menggunakan selector yang berbeda untuk admin (.nav-item) dan masyarakat (.nav-link)
   */
  updateNavigation(currentPath) {
    const navSelector = currentPath.includes('/') ? '.nav-item' : '.nav-link';
    document.querySelectorAll(navSelector).forEach((nav) => {
      const navHref = nav.getAttribute('href');
      nav.classList.toggle('active', navHref === currentPath);
    });
  }
}
