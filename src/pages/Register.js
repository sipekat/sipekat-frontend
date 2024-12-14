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
    </style>
    <div class="container">
      <h2>Register</h2>
      <form>
        <div class="form-group">
          <label for="name">Nama Lengkap</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="contact">Nomor Kontak</label>
          <input type="tel" id="contact" name="contact" 
                 pattern="[0-9]{10,13}" 
                 title="Nomor telepon (10-13 digit)"
                 required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
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
  const form = container.querySelector('form');
  const loginLink = container.querySelector('.login-link');
  const password = container.querySelector('#password');
  const confirmPassword = container.querySelector('#confirm-password');
  const errorDiv = container.querySelector('.error');

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

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const email = formData.get('email');
    const password = formData.get('password');

    if (formData.get('password') !== formData.get('confirm-password')) {
      errorDiv.textContent = 'Password tidak cocok';
      return;
    }

    if (window.authService.register(name, contact, email, password)) {
      alert('Registrasi berhasil! Silakan login.');
      window.router.navigate('/login');
    } else {
      errorDiv.textContent = 'Email sudah terdaftar';
    }
  };

  form.addEventListener('submit', handleSubmit);
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.router.navigate('/login');
  });
};
