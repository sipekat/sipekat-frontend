export const render = (container) => {
  const previousLogin = getPreviousLogin();

  container.innerHTML = `
<style>
      .container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
      }
      .container:hover {
        transform: translateY(-5px);
      }
      .form-group {
        margin-bottom: 15px;
      }
      .form-group label {
        display: block;
        margin-bottom: 5px;
        color: #333;
        font-weight: 500;
      }
      .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
      }
      .form-group input:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0,123,255,0.2);
      }
      button {
        width: 100%;
        padding: 10px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease;
      }
      button:hover {
        background: #0056b3;
      }
      .error {
        color: #dc3545;
        margin-top: 10px;
        min-height: 20px;
        text-align: center;
      }
      .register-text {
        margin-top: 15px;
        text-align: center;
      }
      .register-link {
        color: #007bff;
        text-decoration: none;
        cursor: pointer;
      }
      .register-link:hover {
        text-decoration: underline;
      }
    </style>
    <div class="container">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="error"></div>
        <button type="submit">Login</button>
        <p class="register-text">
          Belum punya akun?
          <a href="/register" class="register-link">Daftar</a>
        </p>
      </form>
    </div>
  `;

  attachEventListeners(container);
};

const attachEventListeners = (container) => {
  const form = container.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleSubmit(e, container);
  });

  const registerLink = container.querySelector('.register-link');
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.router.navigate('/register');
  });
};

const handleSubmit = async (e, container) => {
  const formData = new FormData(e.target);
  const email = formData.get('email');
  const password = formData.get('password');

  const user = await window.authService.login(email, password);
  if (user) {
    saveLogin(email, password); // Simpan data login
    window.dispatchEvent(new Event('auth-change'));
    window.router.navigate(`/${user.role}`);
  } else {
    const errorDiv = container.querySelector('.error');
    errorDiv.textContent = 'Email atau password salah';
  }
};

// Fungsi untuk menyimpan data login ke localStorage
const saveLogin = (email, password) => {
  localStorage.setItem('loginData', JSON.stringify({ email, password }));
};

// Fungsi untuk mengambil data login dari localStorage
const getPreviousLogin = () => {
  const loginData = localStorage.getItem('loginData');
  return loginData ? JSON.parse(loginData) : {};
};
