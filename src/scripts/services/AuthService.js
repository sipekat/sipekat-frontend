/**
 * AuthService - Layanan untuk mengelola autentikasi pengguna
 *
 * Service ini menggunakan pola Singleton untuk memastikan hanya ada satu instance.
 * Data pengguna disimpan di localStorage untuk persistensi sesi.
 *
 * @author Tim Pengembang
 * @version 1.0.0
 */
import users from '../data/data';

export class AuthService {
  /**
   * Constructor untuk AuthService
   * Mengimplementasikan pola Singleton
   */
  constructor() {
    // Jika instance sudah ada, kembalikan instance yang sudah ada
    if (AuthService.instance) {
      return AuthService.instance;
    }
    // Inisialisasi data pengguna dari data.js
    this.users = users;
    AuthService.instance = this;
  }

  /**
   * Melakukan proses login pengguna
   * @param {string} email - Email pengguna
   * @param {string} password - Password pengguna
   * @returns {Object|null} Data pengguna jika berhasil, null jika gagal
   *
   * Format userInfo yang dikembalikan:
   * {
   *   id: number,
   *   email: string,
   *   name: string,
   *   role: string
   * }
   */
  login = (email, password) => {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      const userInfo = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      };
      // Simpan data pengguna ke localStorage
      localStorage.setItem('user', JSON.stringify(userInfo));
      return userInfo;
    }
    return null;
  };

  /**
   * Mendaftarkan pengguna baru
   * @param {string} name - Nama lengkap pengguna
   * @param {string} contact - Nomor kontak pengguna
   * @param {string} email - Alamat email pengguna
   * @param {string} password - Password pengguna
   * @returns {boolean} true jika berhasil, false jika email sudah terdaftar
   */
  register = (name, contact, email, password) => {
    // Cek apakah email sudah terdaftar
    if (this.users.some((u) => u.email === email)) {
      return false;
    }

    // Buat data pengguna baru
    const newUser = {
      id: this.users.length + 1,
      email,
      password,
      name,
      contact,
      role: 'masyarakat', // Role default untuk pendaftaran baru
    };
    this.users.push(newUser);
    return true;
  };

  /**
   * Melakukan logout pengguna
   * Menghapus data sesi dari localStorage
   */
  logout = () => {
    localStorage.removeItem('user');
  };

  /**
   * Mengambil data pengguna yang sedang login
   * @returns {Object|null} Data pengguna dari localStorage atau null jika tidak ada
   *
   * @throws {Error} Error parsing JSON dari localStorage
   */
  getCurrentUser = () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error saat mengambil data pengguna:', error);
      return null;
    }
  };

  /**
   * Memeriksa status login pengguna
   * @returns {boolean} true jika pengguna sudah login, false jika belum
   */
  isAuthenticated = () => {
    return this.getCurrentUser() !== null;
  };
}
