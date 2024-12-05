export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    const masukBtn = this.shadowRoot.querySelector('.masuk-btn');
    const daftarBtn = this.shadowRoot.querySelector('.daftar-btn');

    masukBtn?.addEventListener('click', () => window.router.navigate('/login'));
    daftarBtn?.addEventListener('click', () => window.router.navigate('/register'));
  }

  render() {
    this.shadowRoot.innerHTML = `
		<style>
		  :host {
			display: block;
			width: 100%;
		  }
		  
		  .header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem 4rem;
			background: linear-gradient(90deg, #2B6CB0 0%, #4299E1 100%);
		  }
		  
		  .logo {
			color: white;
			font-size: 1.5rem;
			font-weight: bold;
			text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
		  }
		  
		  .nav {
			display: flex;
			align-items: center;
			gap: 2rem;
		  }
		  
		  .nav-links {
			display: flex;
			gap: 2rem;
		  }
		  
		  .nav-link {
			color: white;
			text-decoration: none;
			font-size: 1rem;
			padding: 0.5rem;
			transition: opacity 0.2s;
		  }
		  
		  .nav-link:hover {
			opacity: 0.8;
		  }
		  
		  .auth-buttons {
			display: flex;
			gap: 1rem;
		  }
		  
		  .btn {
			padding: 0.5rem 1.5rem;
			border-radius: 0.375rem;
			font-size: 0.875rem;
			cursor: pointer;
			transition: all 0.2s;
		  }
		  
		  .masuk-btn {
			background: transparent;
			border: 1px solid white;
			color: white;
		  }
		  
		  .masuk-btn:hover {
			background: rgba(255,255,255,0.1);
		  }
		  
		  .daftar-btn {
			background: white;
			border: 1px solid white;
			color: #2B6CB0;
		  }
		  
		  .daftar-btn:hover {
			opacity: 0.9;
		  }
		</style>
  
		<header class="header">
		  <div class="logo">SIPEKAT</div>
		  
		  <nav class="nav">
			<div class="nav-links">
			  <a href="/" class="nav-link">Home</a>
			  <a href="/" class="nav-link">Layanan</a>
			  <a href="/" class="nav-link">About us</a>
			  <a href="/" class="nav-link">FAQ</a>
			  <a href="/" class="nav-link">Kontak</a>
			</div>
			
			<div class="auth-buttons">
			  <button class="btn masuk-btn">Masuk</button>
			  <button class="btn daftar-btn">Daftar</button>
			</div>
		  </nav>
		</header>
	  `;
  }
}

customElements.define('header-component', Header);
