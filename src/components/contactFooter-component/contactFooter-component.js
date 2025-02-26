import styles from "./contactFooter-component.css" with {type: "css"};
class ContactFooterComponent extends HTMLElement {
  static get observedAttributes() {
    return ["infoContact"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    // Parseamos el JSON (si es inválido, usamos una lista vacía)
    let aboutList = [];
    try {
      const infoContact = this.getAttribute("infoContact");
      if (infoContact) {
        aboutList = JSON.parse(infoContact);
      }
    } catch (e) {
      console.error("Error parsing infoContact JSON:", e);
    }

    // Generamos los íconos dinámicamente
    const aboutInfo = aboutList
      .map(
        (about) => `<p>${about.info}</p> `)
      .join("");
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /* html */ `
                <style>
                    @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
                </style>
              <div class="container">
                <div>
                <h2>Contact Info:</h2>
                  ${aboutInfo}
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

customElements.define("contactfooter-component", ContactFooterComponent);
