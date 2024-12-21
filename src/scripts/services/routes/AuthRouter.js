import BaseRouter from './BaseRouter.js';

export default class AuthRouter extends BaseRouter {
  constructor() {
    super();
    this.addRoutes([
      {
        path: '/',
        pageModule: () => import('../../../pages/LandingPage.js'),
        public: true,
        authRedirect: true,
      },
      {
        path: '/login',
        pageModule: () => import('../../../pages/Login'),
        public: true,
        authRedirect: true,
      },
      {
        path: '/register',
        pageModule: () => import('../../../pages/Register.js'),
        public: true,
        authRedirect: true,
      },
      {
        path: '/admin',
        pageModule: () => import('../../../pages/admin/index.js'),
        role: 'admin',
      },
      {
        path: '/masyarakat',
        pageModule: () => import('../../../pages/masyarakat/index.js'),
        role: 'masyarakat',
      },
      // {
      //   path: '/instansi',
      //   pageModule: () => import('../../../pages/instansi/InstansiDashboard.js'),
      //   role: 'instansi',
      // },
    ]);
  }
}
