import styles from "./aboutfooter-component.css" with {type: "css"};
class AboutFooterComponent extends HTMLElement {
  static get observedAttributes() {
    return ["infoAbout"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    const description = this.getAttribute("description") || "Agora Academy";
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /* html */ `
                <style>
                    @import "./src/components/aboutfooter-component/aboutfooter-component.css";
                    </style>
                  <div class="container">
                    <div>
                      <h2>Sobre Nosotros:</h2>
                      <p>${description}</p>
                    </div>
                  </div>
            `;
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("aboutfooter-component", AboutFooterComponent);
