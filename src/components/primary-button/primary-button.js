import styles from "./primary-button.css" with {type:"css"};
class PrimaryButton extends HTMLElement{
    static get observedAttributes() {
        return ["color", "type"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.color = this.getAttribute("color") || "#ee0c45";
        this.type = this.getAttribute("type");
        this.render();
    }

    render() {
        // Crear el template del botón
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <button type="${this.type}" color="${this.color}">
                <slot></slot>
            </button>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector("button");
    }
}

// Registrar el componente
customElements.define("primary-button", PrimaryButton);