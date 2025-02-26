
import styles from "./contact-form.css" with {type:"css"};
class ContactForm extends HTMLElement{
    static get observedAttributes() {
        return ["action", "name"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.name = this.getAttribute("name");
        this.action = this.getAttribute("action");
        this.render();
    }

    render() {
        // Create the textarea template
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <form name="${this.name}" action="${this.action}">
                <my-text size="title" color="#ee0c45">Contact us</my-text>
                <my-text size="body">We'd love to hear from you. Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.</my-text>
                <input-component name="name" type="text" placeholder="Name"></input-component>
                <input-component name="email" type="text" placeholder="Email ID"></input-component>
                <input-component name="phone" type="text" placeholder="Phone NO."></input-component>
                <textarea-component name="textarea" placeholder="Type your message here..."></textarea-component>
                <primary-button type="submit">Send message</primary-button>
            </form>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.form = this.shadowRoot.querySelector("form");
    }
}

// Registrar el componente
customElements.define("contact-form", ContactForm);
