const UsersPage = {
  async render() {
    return `
		  <div class="page-content">
			<div class="page-header">
			  <div>
				<h2>Manajemen Pengguna</h2>
				<p>Kelola data pengguna sistem</p>
			  </div>
			</div>
	 
			<div class="content-actions">
			  <div class="search-filter">
				<input type="text" placeholder="Cari pengguna..." class="form-input" id="searchInput">
				<button class="btn-filter" id="filterBtn">Filter</button>
			  </div>
			  <button class="btn-primary" id="addUserBtn">+ Tambah Pengguna</button>
			</div>
	 
			<div class="data-table-container">
			  <table class="data-table">
				<thead>
				  <tr>
					<th>Nama</th>
					<th>Email</th>
					<th>Role</th>
					<th>Status</th>
					<th>Terakhir Login</th>
					<th>Aksi</th>
				  </tr>
				</thead>
				<tbody id="userTableBody">
				  <!-- Table content will be populated dynamically -->
				</tbody>
			  </table>
			</div>
		  </div>
	  `;
  },

  async afterRender() {
    // Initialize event listeners
    this._initializeSearch();
    this._initializeAddButton();
    await this._loadUsersData();
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

  _initializeAddButton() {
    const addUserBtn = document.getElementById('addUserBtn');
    addUserBtn?.addEventListener('click', () => {
      this._handleAddUser();
    });
  },

  async _loadUsersData() {
    try {
      const users = await this._fetchUsersData();
      this._updateTableContent(users);
    } catch (error) {
      console.error('Error loading users:', error);
      // Handle error appropriately
    }
  },

  _handleSearch(searchTerm) {
    // Implement search logic
    console.log('Searching for:', searchTerm);
  },

  _handleFilter() {
    // Implement filter logic
    console.log('Filter button clicked');
  },

  _handleAddUser() {
    // Implement add user logic
    console.log('Add user button clicked');
  },

  _handleEditUser(userId) {
    // Implement edit user logic
    console.log('Edit user:', userId);
  },

  _handleDeleteUser(userId) {
    // Implement delete user logic
    console.log('Delete user:', userId);
  },

  _updateTableContent(users) {
    const tbody = document.getElementById('userTableBody');
    if (!tbody) return;

    const userRows = users
      .map(
        (user) => `
		<tr>
		  <td>${user.name}</td>
		  <td>${user.email}</td>
		  <td><span class="role-badge ${user.role.toLowerCase()}">${user.role}</span></td>
		  <td><span class="status-badge ${user.status.toLowerCase()}">${user.status}</span></td>
		  <td>${user.lastLogin}</td>
		  <td>
			<a href="#" class="action-link edit" data-user-id="${user.id}">Edit</a>
			<a href="#" class="action-link delete" data-user-id="${user.id}">Hapus</a>
		  </td>
		</tr>
	  `,
      )
      .join('');

    tbody.innerHTML = userRows;

    // Add event listeners to action buttons
    this._initializeActionButtons();
  },

  _initializeActionButtons() {
    document.querySelectorAll('.action-link.edit').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const userId = button.getAttribute('data-user-id');
        this._handleEditUser(userId);
      });
    });

    document.querySelectorAll('.action-link.delete').forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const userId = button.getAttribute('data-user-id');
        this._handleDeleteUser(userId);
      });
    });
  },

  async _fetchUsersData() {
    // Simulate API call - replace with actual API integration
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            name: 'Dida Adithya',
            email: 'didaadithya@gmail.com',
            role: 'User',
            status: 'Aktif',
            lastLogin: '2 jam yang lalu',
          },
          // Add more mock data as needed
        ]);
      }, 1000);
    });
  },
};

export default UsersPage;
