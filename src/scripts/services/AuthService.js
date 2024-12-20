/**
 * AuthService - Layanan untuk mengelola autentikasi pengguna
 *
 * Service ini menggunakan pola Singleton untuk memastikan hanya ada satu instance.
 * Data pengguna dan token disimpan di localStorage untuk persistensi sesi.
 *
 * @author Tim Pengembang
 * @version 2.0.0
 */
export class AuthService {
  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    this.apiUrl = 'https://api-sipekat.my.id/auth/api/v1';
    AuthService.instance = this;
  }

  /**
   * Melakukan proses login pengguna menggunakan API
   * @param {string} email - Email pengguna
   * @param {string} password - Password pengguna
   * @returns {Object|null} Data pengguna jika berhasil, null jika gagal
   */
  login = async (email, password) => {
    try {
      const response = await fetch(`${this.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.succes && data.token) {
        // Decode token untuk mendapatkan data user
        const userInfo = this.decodeToken(data.token);

        if (userInfo && userInfo.rows && userInfo.rows[0]) {
          const user = userInfo.rows[0];
          const userData = {
            id: user.id_user,
            email: user.email,
            name: user.nama,
            role: user.role,
          };

          // Simpan token dan data user ke localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(userData));

          return userData;
        }
      }
      return null;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  };

  /**
   * Decode JWT token untuk mendapatkan data user
   * @param {string} token - JWT token
   * @returns {Object|null} Data hasil decode token
   */
  decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  /**
   * Mendapatkan token JWT
   * @returns {string|null} Token JWT dari localStorage
   */
  getToken = () => {
    return localStorage.getItem('token');
  };

  /**
   * Melakukan logout pengguna
   * Menghapus token dan data user dari localStorage
   */
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  /**
   * Mengambil data pengguna yang sedang login
   * @returns {Object|null} Data pengguna dari localStorage atau null jika tidak ada
   */
  getCurrentUser = () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  };

  /**
   * Memeriksa status login pengguna
   * @returns {boolean} true jika pengguna sudah login, false jika belum
   */
  isAuthenticated = () => {
    return this.getToken() !== null && this.getCurrentUser() !== null;
  };
}
