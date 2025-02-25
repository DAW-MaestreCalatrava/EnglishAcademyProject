import styles from "./textarea-component.css" with {type:"css"};
class TextareaComponent extends HTMLElement{
    static get observedAttributes() {
        return ["placeholder", "name"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.name = this.getAttribute("name");
        this.placeholder = this.getAttribute("placeholder");
        this.render();
    }

    render() {
        // Create the textarea template
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <textarea name="${this.name}" placeholder="${this.placeholder}"></textarea>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.textarea = this.shadowRoot.querySelector("textarea");
    }
}

// Registrar el componente
customElements.define("textarea-component", TextareaComponent);
