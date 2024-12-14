import { Router } from './router';

export class AppHandler {
  constructor(routes, renderTemplate) {
    this.router = new Router(routes);
    this.renderTemplate = renderTemplate;
  }

  render(container) {
    container.innerHTML = this.renderTemplate;
    this.initializeApp();
  }

  async initializeApp() {
    this.setupEventListeners();
    await this.router.handleRoute();
    this.router.initializeRouter();
  }

  setupEventListeners() {
    // Setup drawer event listeners if it's masyarakat app
    const menuButton = document.getElementById('menuButton');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    if (menuButton && drawer && overlay) {
      menuButton.addEventListener('click', () => {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
      });

      drawer.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          overlay.classList.remove('active');
        });
      });
    }
  }
}
