import styles from "./input-component.css" with {type:"css"};
class InputComponent extends HTMLElement{
    static get observedAttributes() {
        return ["placeholder", "name", "type"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.type = this.getAttribute("type");
        this.name = this.getAttribute("name");
        this.placeholder = this.getAttribute("placeholder");
        this.render();
    }

    render() {
        // Crear el template del input
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <input type="${this.type}" name="${this.name}" placeholder="${this.placeholder}"><slot></slot></input>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.input = this.shadowRoot.querySelector("input");
    }
}

// Registrar el componente
customElements.define("input-component", InputComponent);
