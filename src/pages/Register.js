export const render = (container) => {
  container.innerHTML = `
    <style>
      .container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .form-group {
        margin-bottom: 15px;
      }
      .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #333;
      }
      .form-group input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .form-group input:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
      }
      button {
        width: 100%;
        padding: 10px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover {
        background: #0056b3;
      }
      .error {
        color: #dc3545;
        margin-top: 10px;
        min-height: 20px;
      }
      .login-text {
        margin-top: 15px;
        text-align: center;
      }
      .login-link {
        color: #007bff;
        text-decoration: none;
        cursor: pointer;
      }
      .login-link:hover {
        text-decoration: underline;
      }
      .otp-section {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
      }
    </style>
    <div class="container">
      <h2>Register</h2>
      <form id="registerForm">
        <div class="form-group">
          <label for="nama">Nama Lengkap</label>
          <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
          <label for="nomor_hp">Nomor Kontak</label>
          <input type="tel" id="nomor_hp" name="nomor_hp" 
                 pattern="[0-9]{10,13}" 
                 title="Nomor telepon (10-13 digit)"
                 required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="tanggalLahir">Tanggal Lahir</label>
          <input type="date" id="tanggalLahir" name="tanggalLahir" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" 
                 minlength="6"
                 required>
        </div>
        <div class="form-group">
          <label for="confirm-password">Konfirmasi Password</label>
          <input type="password" id="confirm-password" name="confirm-password" 
                 minlength="6"
                 required>
        </div>
        <div class="otp-section">
          <div class="form-group">
            <label for="otp">Kode OTP</label>
            <input type="text" id="otp" name="otp" 
                   maxlength="6" 
                   pattern="[0-9]{6}"
                   placeholder="Masukkan 6 digit OTP"
                   required>
          </div>
          <button type="button" id="requestOtp">Minta OTP</button>
        </div>
        <div class="error"></div>
        <button type="submit">Register</button>
        <p class="login-text">
          Sudah punya akun? 
          <a href="/" class="login-link">Login</a>
        </p>
      </form>
    </div>
  `;

  // Attach event listeners
  const form = container.querySelector('#registerForm');
  const loginLink = container.querySelector('.login-link');
  const password = container.querySelector('#password');
  const confirmPassword = container.querySelector('#confirm-password');
  const errorDiv = container.querySelector('.error');
  const requestOtpButton = container.querySelector('#requestOtp');

  // Password confirmation validation
  confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Password tidak cocok');
      errorDiv.textContent = 'Password tidak cocok';
    } else {
      confirmPassword.setCustomValidity('');
      errorDiv.textContent = '';
    }
  });

  // Request OTP handler
  requestOtpButton.addEventListener('click', async () => {
    const formData = new FormData(form);

    // Validate required fields
    const requiredFields = ['nama', 'email', 'nomor_hp', 'tanggalLahir', 'password'];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        errorDiv.textContent = 'Harap isi semua data terlebih dahulu';
        return;
      }
    }

    // Validate password confirmation
    if (formData.get('password') !== formData.get('confirm-password')) {
      errorDiv.textContent = 'Password tidak cocok';
      return;
    }

    try {
      const response = await fetch('https://api-sipekat.my.id/auth/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: formData.get('nama'),
          email: formData.get('email'),
          nomor_hp: formData.get('nomor_hp'),
          tanggalLahir: formData.get('tanggalLahir'),
          password: formData.get('password'),
          role: 'masyarakat',
        }),
      });

      if (response.ok) {
        errorDiv.textContent = 'OTP telah dikirim ke email Anda';
        errorDiv.style.color = '#28a745'; // Success color
      } else {
        const data = await response.json();
        errorDiv.textContent = data.message || 'Terjadi kesalahan saat mengirim OTP';
        errorDiv.style.color = '#dc3545'; // Error color
      }
    } catch (error) {
      errorDiv.textContent = 'Terjadi kesalahan pada server'.error;
      console.error('Error:', error);
    }
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Validate OTP
    const otp = formData.get('otp');
    if (!otp || otp.length !== 6) {
      errorDiv.textContent = 'Masukkan kode OTP yang valid';
      return;
    }

    // Redirect to login page
    window.router.navigate('/login');
  };

  form.addEventListener('submit', handleSubmit);
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.router.navigate('/login');
  });
};
