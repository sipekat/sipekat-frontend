import { AppHandler } from '../../core/app';
import UsersPage from './UserPage';
import ReportsPage from './ReportPage';
import DashboardPage from './DashboardPage';
import '../../styles/admin.css';

import '../../scripts/components/logout-button';

const routes = {
  '/': DashboardPage,
  '/admin#users': UsersPage,
  '/admin#reports': ReportsPage,
};

const adminTemplate = `
  <div class="dashboard">
    <aside class="sidebar">
      <div class="logo">SIPEKAT</div>
      <nav>
        <a href="/admin" class="nav-item" data-link>
          <span>📊</span> Dashboard
        </a>
        <a href="/admin#users" class="nav-item" data-link>
          <span>👥</span> Pengguna
        </a>
        <a href="/admin#reports" class="nav-item" data-link>
          <span>📝</span> Laporan
        </a>
        <a href="/admin#settings" class="nav-item" data-link>
          <span>⚙️</span> Pengaturan
        </a>
      </nav>
      <logout-button></logout-button>
    </aside>
    <main class="main-content" id="page-content"></main>
  </div>
`;

const app = new AppHandler(routes, adminTemplate);

const main = () => {
  const container = document.querySelector('#app');
  app.render(container);
};

window.addEventListener('DOMContentLoaded', main);

export default app;
