/**
 * @fileoverview Modul ini mendefinisikan AppHandler class yang bertanggung jawab
 * untuk menginisialisasi dan mengelola aplikasi. Class ini mengintegrasikan
 * routing dan event handling untuk aplikasi SIPEKAT.
 */

import { Router } from './router';

/**
 * Class untuk menangani inisialisasi dan manajemen aplikasi.
 * Mengintegrasikan router dan mengelola template rendering.
 */
export class AppHandler {
  /**
   * Membuat instance baru dari AppHandler.
   *
   * @param {Object} routes - Objek yang memetakan path URL ke komponen halaman
   * @param {string} renderTemplate - Template HTML untuk layout aplikasi
   */
  constructor(routes, renderTemplate) {
    this.router = new Router(routes);
    this.renderTemplate = renderTemplate;
  }

  /**
   * Merender template aplikasi ke dalam container yang ditentukan
   * dan menginisialisasi aplikasi.
   *
   * @param {HTMLElement} container - Elemen DOM tempat aplikasi akan dirender
   */
  render(container) {
    container.innerHTML = this.renderTemplate;
    this.initializeApp();
  }

  /**
   * Menginisialisasi aplikasi dengan mengatur event listeners,
   * menangani rute awal, dan menginisialisasi router.
   *
   * @async
   */
  async initializeApp() {
    this.setupEventListeners();
    await this.router.handleRoute();
    this.router.initializeRouter();
  }

  /**
   * Mengatur event listeners untuk komponen drawer di dashboard.
   * Method ini secara otomatis mendeteksi apakah dashboard memiliki
   * komponen drawer dan mengatur
   * event listeners yang sesuai.
   *
   * @note Drawer event listeners hanya diatur jika elemen-elemen drawer ditemukan
   */
  setupEventListeners() {
    const menuButton = document.getElementById('menuButton');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    if (menuButton && drawer && overlay) {
      // Toggle drawer saat tombol menu diklik
      menuButton.addEventListener('click', () => {
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
      });

      // Tutup drawer saat overlay diklik
      overlay.addEventListener('click', () => {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
      });

      // Tutup drawer saat item menu diklik
      drawer.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('open');
          overlay.classList.remove('active');
        });
      });
    }
  }
}
