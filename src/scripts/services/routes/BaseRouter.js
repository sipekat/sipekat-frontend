/**
 * BaseRouter - Kelas dasar untuk menangani routing pada aplikasi
 * Kelas ini mengatur navigasi halaman dan pengecekan otentikasi
 */
export default class BaseRouter {
  constructor() {
    // Menyimpan daftar rute yang tersedia
    this.routes = [];
  }

  /**
   * Menginisialisasi router dengan menambahkan event listener
   * untuk perubahan state navigasi browser
   */
  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  }

  /**
   * Menangani perubahan rute dan memuat konten yang sesuai
   * Melakukan pengecekan otentikasi dan otorisasi untuk setiap rute
   */
  async handleRoute() {
    try {
      // Mendapatkan path dari URL saat ini
      const path = window.location.pathname;
      const route = this.findRoute(path);

      // Jika rute tidak ditemukan, arahkan ke halaman utama
      if (!route) {
        this.navigate('/');
        return;
      }

      // Mengambil status otentikasi dan informasi pengguna
      const isAuthenticated = window.authService.isAuthenticated();
      const user = window.authService.getCurrentUser();

      // Mengatur redirect berdasarkan status otentikasi
      if (route.authRedirect && isAuthenticated && user?.role) {
        this.navigate(`/${user.role}`);
        return;
      }

      // Cek akses untuk halaman yang membutuhkan otentikasi
      if (!route.public && !isAuthenticated) {
        this.navigate('/');
        return;
      }

      // Cek role pengguna untuk halaman yang membutuhkan role tertentu
      if (route.role && (!user || user.role !== route.role)) {
        if (user?.role) {
          this.navigate(`/${user.role}`);
        } else {
          this.navigate('/');
        }
        return;
      }

      // Mencari elemen utama untuk menampilkan konten
      const dashboard = document.querySelector('#dashboard');
      if (!dashboard) {
        console.error('Main content tidak ditemukan');
        return;
      }

      try {
        // Memuat modul halaman secara dinamis
        const pageModule = await route.pageModule();

        // Memeriksa format modul dan merender konten
        if (this.isValidPageModule(pageModule)) {
          await this.renderPage(pageModule, dashboard);
        } else {
          console.error('Format modul halaman tidak valid');
        }
      } catch (error) {
        console.error('Error saat memuat modul halaman:', error);
      }

      // Memicu event untuk memberitahu komponen lain bahwa rute telah berubah
      window.dispatchEvent(new Event('route-change'));
    } catch (error) {
      console.error('Error saat menangani rute:', error);
    }
  }

  /**
   * Memeriksa apakah modul halaman memiliki format yang valid
   * @param {Object|Function|String} pageModule - Modul halaman yang akan diperiksa
   * @returns {Boolean} - Status validitas modul
   */
  isValidPageModule(pageModule) {
    // Cek jika berupa fungsi
    if (typeof pageModule.render === 'function') {
      return true;
    }

    // Cek jika berupa objek dengan metode render
    if (pageModule.default && typeof pageModule.default.render === 'function') {
      return true;
    }

    // Cek jika berupa instance kelas
    if (pageModule instanceof Object && typeof pageModule.render === 'function') {
      return true;
    }

    // Cek jika berupa objek dengan string HTML
    if (typeof pageModule === 'object' && (typeof pageModule.template === 'string' || typeof pageModule.html === 'string')) {
      return true;
    }

    // Cek jika berupa string HTML biasa
    if (typeof pageModule === 'string') {
      return true;
    }

    return false;
  }

  /**
   * Merender konten halaman ke dalam container
   * @param {Object|Function|String} pageModule - Modul halaman yang akan dirender
   * @param {HTMLElement} container - Elemen container untuk konten
   */
  async renderPage(pageModule, container) {
    try {
      // Render jika berupa fungsi
      if (typeof pageModule.render === 'function') {
        const content = await pageModule.render(container);
        if (content) container.innerHTML = content;
        if (typeof pageModule.afterRender === 'function') {
          await pageModule.afterRender();
        }
        return;
      }

      // Render jika berupa objek dengan export default
      if (pageModule.default && typeof pageModule.default.render === 'function') {
        const content = await pageModule.default.render(container);
        if (content) container.innerHTML = content;
        if (typeof pageModule.default.afterRender === 'function') {
          await pageModule.default.afterRender();
        }
        return;
      }

      // Render jika berupa objek dengan template/html string
      if (typeof pageModule === 'object') {
        const htmlContent = pageModule.template || pageModule.html;
        if (htmlContent) {
          container.innerHTML = htmlContent;
          if (typeof pageModule.afterRender === 'function') {
            await pageModule.afterRender();
          }
          return;
        }
      }

      // Render jika berupa string HTML biasa
      if (typeof pageModule === 'string') {
        container.innerHTML = pageModule;
        return;
      }

      throw new Error('Format modul halaman tidak didukung');
    } catch (error) {
      console.error('Error saat merender halaman:', error);
      container.innerHTML = '<div class="error">Error saat memuat konten halaman</div>';
    }
  }

  /**
   * Mencari rute berdasarkan path
   * @param {String} path - Path URL yang dicari
   * @returns {Object|undefined} - Objek rute yang ditemukan
   */
  findRoute(path) {
    return this.routes.find((route) => route.path === path);
  }

  /**
   * Melakukan navigasi ke path tertentu
   * @param {String} path - Path tujuan navigasi
   */
  navigate(path) {
    if (window.location.pathname !== path) {
      window.history.pushState(null, null, path);
      this.handleRoute();
    }
  }

  /**
   * Menambahkan satu rute baru
   * @param {Object} route - Objek rute yang akan ditambahkan
   */
  addRoute(route) {
    this.routes.push(route);
  }

  /**
   * Menambahkan beberapa rute sekaligus
   * @param {Array} routes - Array berisi objek-objek rute
   */
  addRoutes(routes) {
    this.routes.push(...routes);
  }
}
