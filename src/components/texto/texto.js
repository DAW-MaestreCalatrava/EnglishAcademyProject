import styles from "./texto.css" with {type: "css"};

class Text extends HTMLElement {
  static get observedAttributes() {
    return ["size", "color", "alignCenter"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.size = this.getAttribute("size") || "body";
    this.color = this.getAttribute("color") || "#000";
    this.alignCenter = this.getAttribute("alignCenter") || false;

    this.render();
  }

  render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /* html */ `
          <style>
              h1, h2, p {
                  color: ${this.color};
                  text-align: ${this.alignCenter ? "center" : "unset"};
              }
          </style>
          ${this.size === "title" ? this.sizeTitle() : ""}
          ${this.size === "subtitle" ? this.sizeSubTitle() : ""}
          ${this.size === "body" ? this.sizeBody() : ""}
      `;
  }

  sizeJumboTitle() {
    return /* html */ `
          <h1 class="jumbotitle"><slot></slot></h1>
      `;
  }

  sizeJumboSubtitle() {
    return /* html */ `
          <h2 class="jumbosubtitle"><slot></slot></h1>
      `;
  }

  sizeTitle() {
    return /* html */ `
          <h1><slot></slot></h1>
      `;
  }

  sizeSubTitle() {
    return /* html */ `
          <h2><slot></slot></h1>
      `;
  }

  sizeBody() {
    return /* html */ `
          <p><slot></slot></p>
      `;
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-text", Text);
