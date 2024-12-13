import VerificationPage from './Daftar/verificationPage';

const RegisterPage = {
  async render() {
    return `
      <div class="register-page">
        <div class="form-container">
          <h2>Buat Akunmu</h2>
          <form>
            <!-- Nama Field -->
            <div class="form-group">
              <label for="name">Nama</label>
              <input type="text" id="name" name="name" required placeholder="Masukkan Nama Anda">
            </div>

            <!-- Nomor Handphone Field -->
            <div class="form-group">
              <label for="contact">Nomor Handphone</label>
              <input type="tel" id="contact" name="contact" pattern="[0-9]{10,13}" title="Nomor telepon (10-13 digit)" required placeholder="Masukkan Nomor Handphone">
              <span class="description">gunakan email sebagai gantinya</span>
            </div>

            <!-- Tanggal Lahir Field -->
            <div class="form-group">
              <label for="birthdate">Tanggal Lahir</label>
              <input type="date" id="birthdate" name="birthdate" required value="2024-11-19">
              <span class="description">Ini tidak akan ditampilkan secara publik...</span>
            </div>

            <!-- Button Submit -->
            <button type="submit">Daftar</button>

            <!-- Keterangan Usia -->
            <p class="age-confirmation">Konfirmasi usia harus dilakukan sendiri, meskipun akun digunakan untuk tujuan bisnis, hewan peliharaan, atau tujuan lainnya.</p>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Form submit handler
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Ganti halaman ke VerificationPage
      const appContainer = document.querySelector('#app'); // Sesuaikan ID container utama Anda
      appContainer.innerHTML = await VerificationPage.render();
      await VerificationPage.afterRender();
    });
  }
};

export default RegisterPage;
