import styles from "./header-component.css" with {type: "css"};
class HeaderComponent extends HTMLElement {
    static get observedAttributes() {
        return ["image"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.items = [];
        this.render();
    }

    set buttons(data) {
        this.items = data;
        this.render();
    }

    render() {
        const image = this.getAttribute("image");
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /*html*/`
        <header>
            <img src='${image}'>
            <div>
            ${this.items
                .map((button) => `<header-button-component onClick='window.open("${button.link}")'>${button.texto}</header-button-component>`)
                .join(" ")}
            </div>
        </header>
        `;
    }
    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define("header-component", HeaderComponent);