class BurguerComponent extends HTMLElement {
    static get observedAttributes() {
        return ["prop1"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.prop1 = this.getAttribute("prop1") || "prop1";
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "./src/components/burguer-component/burguer-component.css";
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
            <div class="container">
                Burguer Component  
                <div>
                    <i class="fa-solid fa-burger"></i>
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

customElements.define("burguer-component", BurguerComponent);