import styles from "./footer-component.css" with {type: "css"};
import "../iconSocial-component/iconSocial-component.js";
import "../contactFooter-component/contactFooter-component.js";
import "../aboutFooter-component/aboutFooter-component.js";

class FooterComponent extends HTMLElement {
    static get observedAttributes() {
        return ["prop1"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
            </style>
  
            <footer class="footer-container">
   
                <div class="footer-content">
                    <div class= "contact">
                    <contactFooter-component
                        infoContact='[
                            { "info": "Calle Lentejuela 6, local 2"},
                            { "info": "tlf:692 34 14 61"},
                            { "info": "info@formacionagora.es"}
                        ]'
                        ></contactFooter-component>
                    
                    </div>
                    <div class= "about">
                    <aboutfooter-component 
                    description="Somos una academia de Ciudad Real de mas de 20 años donde tenemos varios niveles de enseñanza en varios idiomas">
                    </aboutfooter-component>
                    </div>
                    <div class ="socials">
                        <iconSocial-component
                        socials='[
                            { "icon": "fa-brands fa-facebook", "link": "https://www.facebook.com/agoraciudadreal" },
                            { "icon": "fa-brands fa-instagram", "link": "https://www.instagram.com" },
                            { "icon": "fa-brands fa-x-twitter", "link": "https://twitter.com" }
                        ]'
                        ></iconSocial-component>
                    </div> 
                </div>
                <div class="footer-bottom">
                    Copyright &copy; 2025. Alberto Carlos Javi Pablo
                </div>
            </footer>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("footer-component", FooterComponent);