export class LogoutButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.addLogoutListener();
  }

  handleLogout = () => {
    window.authService.logout();
    window.router.navigate('/');
  };

  addLogoutListener() {
    const button = this.shadowRoot.querySelector('button');
    button?.addEventListener('click', this.handleLogout);
  }

  render() {
    this.shadowRoot.innerHTML = `
		  <style>
			button {
			  padding: 0.5rem 1rem;
			  background: rgba(255,255,255,2);
			  border: 1px solid black;
			  color: black;
			  cursor: pointer;
			  border-radius: 4px;
			  font-size: 0.875rem;
			  transition: all 0.2s;
			}
	
			button:hover {
			  background: rgba(255,255,255,0.2);
			}
		  </style>
		  <button type="button">Logout</button>
		`;
  }
}

customElements.define('logout-button', LogoutButton);
