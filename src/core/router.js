/**
 * Class untuk menangani routing aplikasi
 */
export class Router {
  constructor(routes) {
    this.routes = routes;
  }

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

  async handleRoute() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    const fullPath = path + hash;
    const pageContent = document.getElementById('page-content');

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

  updateNavigation(currentPath) {
    const navSelector = currentPath.includes('/') ? '.nav-item' : '.nav-link';
    document.querySelectorAll(navSelector).forEach((nav) => {
      const navHref = nav.getAttribute('href');
      nav.classList.toggle('active', navHref === currentPath);
    });
  }
}
