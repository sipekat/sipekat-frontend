import 'regenerator-runtime';
import '../styles/main.css';
import AuthRouter from './services/routes/AuthRouter.js';
import { AuthService } from './services/AuthService.js';

import '../pages/app.js';

import './components/index.js';

window.authService = new AuthService();
window.router = new AuthRouter();

document.addEventListener('DOMContentLoaded', () => {
  window.router.init();
});
