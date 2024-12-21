const DashboardPage = {
  async render() {
    return `
		  <div class="page-content">
	 
			<div class="stats-container" id="statsContainer">
			  <div class="stat-card">
				<h3>Total Pengguna</h3>
				<div class="stat-value" id="totalUsers">5.000</div>
			  </div>
			  <div class="stat-card">
				<h3>Pengguna Aktif</h3>
				<div class="stat-value" id="activeUsers">4.400</div>
			  </div>
			  <div class="stat-card">
				<h3>Total Laporan</h3>
				<div class="stat-value" id="totalReports">248</div>
			  </div>
			</div>
	 
			<div class="content-card">
			  <h3>Daftar Pengguna Terbaru</h3>
			  <div id="latestUsersTable">
				<table class="data-table">
				  <thead>
					<tr>
					  <th>Nama</th>
					  <th>Email</th>
					  <th>Status</th>
					  <th>Aktif</th>
					</tr>
				  </thead>
				  <tbody id="userTableBody">
					<tr>
					  <td>Dida Adithya</td>
					  <td>didaadithya@gmail.com</td>
					  <td><span class="status-badge active">Aktif</span></td>
					  <td><a href="#" class="action-link">Edit</a></td>
					</tr>
				  </tbody>
				</table>
			  </div>
			</div>
  
			<footer class="page-footer">
			  <p>&copy; 2023 Dashboard Admin. All rights reserved.</p>
			</footer>
		  </div>
		`;
  },

  async afterRender() {},
};

export default DashboardPage;
