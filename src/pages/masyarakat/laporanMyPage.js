const DashboardPage = {
    async render() {
      return `
        <section class="create-report-section">
          
          <!-- Formulir Laporan -->
          <form class="report-form">
            <div class="form-group">
              <label for="judul-laporan">Judul Laporan</label>
              <input type="text" id="judul-laporan" placeholder="Judul Laporan">
            </div>
            <div class="form-group">
              <label for="kategori">Kategori</label>
              <input type="text" id="kategori" placeholder="Kategori">
            </div>
            <div class="form-group">
              <label for="provinsi">Provinsi</label>
              <input type="text" id="provinsi" placeholder="Provinsi">
            </div>
            <div class="form-group">
              <label for="kabupaten">Kabupaten / Kota</label>
              <input type="text" id="kabupaten" placeholder="Kabupaten / Kota">
            </div>
            <div class="form-group">
              <label for="kecamatan">Kecamatan</label>
              <input type="text" id="kecamatan" placeholder="Kecamatan">
            </div>
            <div class="form-group">
              <label for="kelurahan">Kelurahan</label>
              <input type="text" id="kelurahan" placeholder="Kelurahan">
            </div>
            <div class="form-group">
              <label for="tanggal-kejadian">Tanggal Kejadian</label>
              <input type="date" id="tanggal-kejadian">
            </div>
            <div class="form-group">
              <label for="kronologi">Kronologi</label>
              <textarea id="kronologi" rows="5" placeholder="Deskripsikan kronologi kejadian"></textarea>
            </div>
            <div class="form-group">
              <label for="lampiran">Berkas Lampiran</label>
              <input type="file" id="lampiran">
            </div>
  
            <!-- Info Pelapor -->
            <h3 class="section-title">Info Pelapor</h3>
            <div class="form-group">
              <label for="nama-pelapor">Nama Pelapor</label>
              <input type="text" id="nama-pelapor" placeholder="Nama Pelapor">
            </div>
            <div class="form-group">
              <label for="email-pelapor">Email Pelapor</label>
              <input type="email" id="email-pelapor" placeholder="Email Pelapor">
            </div>
            <div class="form-group">
              <label for="nomor-whatsapp">Nomor WhatsApp</label>
              <input type="tel" id="nomor-whatsapp" placeholder="Nomor WhatsApp">
            </div>
  
            <div class="form-group">
              <label for="captcha">Captcha</label>
              <img src="path-to-captcha-image" alt="Captcha" class="captcha-image">
              <input type="text" id="captcha" placeholder="Captcha">
            </div>
  
            <!-- Submit Button -->
            <button type="submit" class="submit-button">Kirim Laporan</button>
          </form>
          
          <footer class="footer">
            <p>© Copyright © 2024 SIPEKAT. <br>
            Best Viewed with Mozilla Firefox / Google Chrome</p>
          </footer>
        </section>
      `;
    },
  
    async afterRender() {
      // Tambahkan interaksi atau event handler jika diperlukan
    },
  };
  
  export default DashboardPage;
  