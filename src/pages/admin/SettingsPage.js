const SettingsPage = () => {
  return `
		<div class="page-content">
		  <div class="page-header">
			<h2>Pengaturan</h2>
			<p>Kelola pengaturan sistem SIPEKAT</p>
		  </div>
	
		  <div class="content-card">
			<h3>Profil Admin</h3>
			<div class="form-group">
			  <label>Nama Lengkap</label>
			  <input type="text" value="Elvira Chansa" class="form-input">
			</div>
			<div class="form-group">
			  <label>Email</label>
			  <input type="email" value="elchansa12@gmail.com" class="form-input">
			</div>
		  </div>
	
		  <div class="content-card">
			<h3>Pengaturan Sistem</h3>
			<div class="form-group">
			  <label>Nama Instansi</label>
			  <input type="text" value="Dinas Komunikasi dan Informatika" class="form-input">
			</div>
			<div class="form-group">
			  <label>Email Sistem</label>
			  <input type="email" value="sistem@sipekat.id" class="form-input">
			</div>
			<div class="form-group">
			  <label>Batas Waktu Respon (Jam)</label>
			  <input type="number" value="24" class="form-input">
			</div>
		  </div>
	
		  <div class="form-actions">
			<button class="btn-primary">Simpan Perubahan</button>
		  </div>
		</div>
	  `;
};

export default SettingsPage;
