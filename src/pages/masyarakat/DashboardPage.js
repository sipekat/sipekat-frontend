const DashboardPage = {
  async render() {
    return `
		<section class="report-section">
            <h2>Laporan Terkini <span class="status">status</span></h2>
            <div class="report-list">
                <!-- Laporan 1 -->
                <div class="report-item">
                    <h3>Jalan Berlubang</h3>
                    <p class="location">Lokasi: JL.Kota NO. 123</p>
                    <span class="status-label pending">Menunggu Verifikasi</span>
                </div>
                <!-- Laporan 2 -->
                <div class="report-item">
                    <h3>Lampu Jalan Mati</h3>
                    <p class="location">Lokasi: Taman Kota</p>
                    <span class="status-label processing">Dalam Proses</span>
                </div>
                <!-- Laporan 3 -->
                <div class="report-item">
                    <h3>Sampah Menumpuk</h3>
                    <p class="location">Lokasi: Pasar Sentral</p>
                    <span class="status-label completed">Selesai</span>
                </div>
            </div>
        </section>
		
	  `;
  },

  async afterRender() {},
};

export default DashboardPage;
