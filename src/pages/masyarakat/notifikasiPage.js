const DashboardPage = {
  async render() {
    return `
      <div class="notification-container">
        <div class="notification-item">
          <p class="notification-status">Laporan anda diproses</p>
          <p class="notification-time">2 Jam yang lalu</p>
          <p class="notification-title">Jalan Berlubang</p>
          <p class="notification-location">Lokasi : JL.Kota NO.123</p>
        </div>
        <div class="notification-item">
          <p class="notification-status">Laporan anda telah diterima</p>
          <p class="notification-time">2 Jam yang lalu</p>
          <p class="notification-title">Lampu Jalan Mati</p>
          <p class="notification-location">Lokasi : Taman Kota</p>
        </div>
        <div class="notification-item">
          <p class="notification-status">Laporan Terkirim</p>
          <p class="notification-time">2 Jam yang lalu</p>
          <p class="notification-title">Sampah Menumpuk</p>
          <p class="notification-location">Lokasi : Pasar Sentral</p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Optional: Tambahkan interaksi jika diperlukan
  },
};

export default DashboardPage;
