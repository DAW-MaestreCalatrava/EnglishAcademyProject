import styles from "./header-button-component.css" with {type: "css"};
class HeaderButtonComponent extends HTMLElement {
    static get observedAttributes() {
        return ["type"];
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }
    render() {
        const buttonType = this.getAttribute('type');
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /*html*/`
            <button type="${buttonType}"><slot></slot></button>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("header-button-component", HeaderButtonComponent);