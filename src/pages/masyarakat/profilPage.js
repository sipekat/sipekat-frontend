const DashboardPage = {
  async render() {
    return `
      <div class="profile-container">
        <div class="profile-card">
          <!-- Profile Image Placeholder -->
          <div class="profile-image">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          
          <!-- Profile Details -->
          <div class="profile-details">
            <p class="profile-name">Nama Pengguna</p>
            <button class="edit-button">Ubah Profil</button>
            <p class="profile-email">email@example.com</p>
            <p class="profile-phone">+62 xxx-xxxx-xxxx</p>
          </div>
          
          <!-- Logout Button -->
          <button class="logout-button">Logout</button>
        </div>
      </div>

      <style>
        .profile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
          background-color: #f3f4f6;
        }

        .profile-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 320px;
          text-align: center;
        }

        .profile-image {
          width: 100px;
          height: 100px;
          margin: 0 auto 1.5rem;
          background: #e5e7eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
        }

        .profile-details {
          margin-bottom: 1.5rem;
        }

        .profile-name {
          font-size: 1.25rem;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .edit-button {
          background: #e5e7eb;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          color: #4b5563;
          cursor: pointer;
          margin: 0.5rem 0 1rem;
        }

        .edit-button:hover {
          background: #d1d5db;
        }

        .profile-email, .profile-phone {
          color: #6b7280;
          margin: 0.25rem 0;
          font-size: 0.875rem;
        }

    `;
  },

  async afterRender() {},
};

export default DashboardPage;
