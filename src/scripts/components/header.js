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
	  const hamburgerBtn = this.shadowRoot.querySelector('.hamburger-btn');
	  const nav = this.shadowRoot.querySelector('.nav');
  
	  masukBtn?.addEventListener('click', () => window.router.navigate('/login'));
	  daftarBtn?.addEventListener('click', () => window.router.navigate('/register'));
  
	  hamburgerBtn?.addEventListener('click', () => {
		nav.classList.toggle('active');
		hamburgerBtn.classList.toggle('active');
	  });
  
	  this.addHoverEffects(masukBtn, 'masuk-btn-hover');
	  this.addHoverEffects(daftarBtn, 'daftar-btn-hover');
	}
  
	addHoverEffects(btn, hoverClass) {
	  btn?.addEventListener('mouseenter', () => {
		btn.classList.add(hoverClass);
	  });
	  btn?.addEventListener('mouseleave', () => {
		btn.classList.remove(hoverClass);
	  });
  
	  btn?.addEventListener('touchstart', () => {
		btn.classList.add(hoverClass);
	  });
	  btn?.addEventListener('touchend', () => {
		btn.classList.remove(hoverClass);
	  });
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
			position: relative;
			z-index: 100;
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
			transition: background-color 0.2s, color 0.2s;
		  }
  
		  .masuk-btn-hover {
			background-color: rgba(255,255,255,0.2);
			color: #E2E8F0;
		  }
  
		  .daftar-btn {
			background: white;
			border: 1px solid white;
			color: #2B6CB0;
			transition: opacity 0.2s;
		  }
  
		  .daftar-btn-hover {
			opacity: 0.9;
		  }
  
		  .hamburger-btn {
			display: none;
			background: none;
			border: none;
			color: white;
			font-size: 1.5rem;
			cursor: pointer;
			z-index: 100;
		  }
  
		  @media screen and (min-width: 800px) and (max-width: 900px) {
			.header {
			  padding: 1rem 2rem;
			}
  
			.nav-links {
			  gap: 1rem;
			}
  
			.nav-link {
			  font-size: 0.9rem;
			}
  
			.auth-buttons {
			  gap: 0.5rem;
			}
  
			.btn {
			  padding: 0.4rem 1rem;
			  font-size: 0.8rem;
			}
		  }
  
		  /* Existing mobile styles */
		  @media screen and (max-width: 768px) {
			.header {
			  padding: 1rem;
			}
  
			.hamburger-btn {
			  display: block;
			  position: absolute;
			  right: 1rem;
			  top: 50%;
			  transform: translateY(-50%);
			}
  
			.nav {
			  display: none;
			  flex-direction: column;
			  position: absolute;
			  top: 100%;
			  left: 0;
			  width: 100%;
			  background: linear-gradient(90deg, #2B6CB0 0%, #4299E1 100%);
			  padding: 1rem;
			  gap: 1rem;
			  z-index: 99;
			}
  
			.nav.active {
			  display: flex;
			}
  
			.nav-links {
			  flex-direction: column;
			  align-items: center;
			}
  
			.auth-buttons {
			  flex-direction: column;
			  width: 100%;
			  align-items: center;
			}
  
			.btn {
			  width: 80%;
			  margin: 0.5rem 0;
			}
  
			.masuk-btn:active, .masuk-btn-hover {
			  background-color: rgba(255,255,255,0.2);
			  color: #E2E8F0;
			}
  
			.daftar-btn:active, .daftar-btn-hover {
			  opacity: 0.9;
			}
		  }
		</style>
  
		<header class="header">
		  <div class="logo">SIPEKAT</div>
  
		  <button class="hamburger-btn" aria-label="Toggle Navigation">&#9776;</button>
  
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