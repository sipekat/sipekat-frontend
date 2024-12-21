class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <p>© Copyright © 2024 SIPEKAT.</p>
                <p>Best Viewed with Mozilla Firefox / Google Chrome</p>
            </footer>
        `;
  }
}

customElements.define('custom-footer', FooterComponent);
