import users from '../../scripts/data/Users';

const generateDummyReports = () => {
  const categories = ['Infrastruktur', 'Layanan Publik', 'Kesehatan', 'Pendidikan', 'Lingkungan'];
  const statuses = ['Pending', 'Proses', 'Selesai'];
  const priorities = ['Tinggi', 'Sedang', 'Rendah'];

  return users.map((user, index) => ({
    number: `RPT-${String(index + 1).padStart(3, '0')}`,
    reporter: user.name,
    email: user.email,
    category: categories[Math.floor(Math.random() * categories.length)],
    date: new Date(2024, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    priority: priorities[Math.floor(Math.random() * priorities.length)],
  }));
};

const ReportsPage = {
  reports: [],

  async render() {
    return `
      <div class="page-content">
        <div class="page-header">
          <div>
            <h2>Manajemen Laporan</h2>
            <p>Kelola laporan pengaduan masyarakat</p>
          </div>
        </div>
 
        <div class="stats-summary">
          <div class="stat-item">
            <h4>Total Laporan</h4>
            <div class="stat-number" id="totalReports">0</div>
          </div>
          <div class="stat-item">
            <h4>Belum Diproses</h4>
            <div class="stat-number" id="unprocessedReports">0</div>
            <p class="stat-note red" id="highPriorityNote"></p>
          </div>
          <div class="stat-item">
            <h4>Sedang Diproses</h4>
            <div class="stat-number" id="inProgressReports">0</div>
            <p class="stat-note blue" id="progressNote"></p>
          </div>
          <div class="stat-item">
            <h4>Selesai</h4>
            <div class="stat-number" id="completedReports">0</div>
            <p class="stat-note green" id="completionNote"></p>
          </div>
        </div>
 
        <div class="content-actions">
          <div class="search-filter">
            <input type="text" placeholder="Cari laporan..." class="form-input" id="searchInput">
            <button class="btn-filter" id="filterBtn">Filter</button>
          </div>
          <div class="export-actions">
            <button class="btn-secondary" id="exportExcel">Export Excel</button>
            <button class="btn-secondary" id="exportPDF">Export PDF</button>
          </div>
        </div>
 
        <table class="data-table">
          <thead>
            <tr>
              <th>Nomor Laporan</th>
              <th>Pelapor</th>
              <th>Kategori</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Prioritas</th>
            </tr>
          </thead>
          <tbody id="reportsTableBody">
            <!-- Table content will be populated dynamically -->
          </tbody>
        </table>
      </div>
    `;
  },

  async afterRender() {
    this._initializeSearch();
    this._initializeExportButtons();
    await this._loadReportsData();
  },

  _initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const filterBtn = document.getElementById('filterBtn');

    searchInput?.addEventListener('input', (e) => {
      this._handleSearch(e.target.value);
    });

    filterBtn?.addEventListener('click', () => {
      this._handleFilter();
    });
  },

  _initializeExportButtons() {
    const exportExcel = document.getElementById('exportExcel');
    const exportPDF = document.getElementById('exportPDF');

    exportExcel?.addEventListener('click', () => {
      this._handleExport('excel');
    });

    exportPDF?.addEventListener('click', () => {
      this._handleExport('pdf');
    });
  },

  async _loadReportsData() {
    try {
      this.reports = await this._fetchReportsData();
      this._updateTableContent(this.reports);
      this._updateStats();
    } catch (error) {
      console.error('Error loading reports:', error);
    }
  },

  _handleSearch(searchTerm) {
    const filteredReports = this.reports.filter(
      (report) => report.reporter.toLowerCase().includes(searchTerm.toLowerCase()) || report.number.toLowerCase().includes(searchTerm.toLowerCase()) || report.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    this._updateTableContent(filteredReports);
  },

  _handleFilter() {
    // Future implementation: Add advanced filtering options
    console.log('Filter button clicked');
  },

  _handleExport(type) {
    console.log(`Exporting as ${type}`);
  },

  _updateStats() {
    if (!this.reports.length) return;

    const totalReports = this.reports.length;
    const unprocessed = this.reports.filter((r) => r.status === 'Pending').length;
    const inProgress = this.reports.filter((r) => r.status === 'Proses').length;
    const completed = this.reports.filter((r) => r.status === 'Selesai').length;
    const highPriority = this.reports.filter((r) => r.status === 'Pending' && r.priority === 'Tinggi').length;

    // Update stats numbers
    document.getElementById('totalReports').textContent = totalReports;
    document.getElementById('unprocessedReports').textContent = unprocessed;
    document.getElementById('inProgressReports').textContent = inProgress;
    document.getElementById('completedReports').textContent = completed;

    // Update notes
    document.getElementById('highPriorityNote').textContent = `${highPriority} Laporan Prioritas Tinggi`;
    document.getElementById('progressNote').textContent = `${Math.round((inProgress / totalReports) * 100)}% akan selesai minggu ini`;
    document.getElementById('completionNote').textContent = `${Math.round((completed / totalReports) * 100)}% tingkat penyelesaian`;
  },

  _updateTableContent(reports) {
    const tbody = document.getElementById('reportsTableBody');
    if (!tbody) return;

    const reportRows = reports
      .map(
        (report) => `
        <tr>
          <td>${report.number}</td>
          <td>${report.reporter}</td>
          <td>${report.category}</td>
          <td>${report.date}</td>
          <td><span class="status-badge ${report.status.toLowerCase()}">${report.status}</span></td>
          <td><span class="priority-badge ${report.priority.toLowerCase()}">${report.priority}</span></td>
        </tr>
      `,
      )
      .join('');

    tbody.innerHTML = reportRows;
  },

  async _fetchReportsData() {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateDummyReports());
      }, 500);
    });
  },
};

export default ReportsPage;
