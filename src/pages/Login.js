export const render = (container) => {
  const previousLogin = getPreviousLogin();

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
          <input type="email" id="email" name="email" value="${previousLogin.email || ''}" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value="${previousLogin.password || ''}" required>
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
