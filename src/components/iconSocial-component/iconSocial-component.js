class IconSocialComponent extends HTMLElement {
    static get observedAttributes() {
      return ["socials"];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  
    render() {
      // Parseamos el JSON (si es inválido, usamos una lista vacía)
      let socialList = [];
      try {
        const socials = this.getAttribute("socials");
        if (socials) {
          socialList = JSON.parse(socials);
        }
      } catch (e) {
        console.error("Error parsing socials JSON:", e);
      }
  
      // Generamos los íconos dinámicamente
      const iconsHtml = socialList
        .map(
          (social) => `
        <a href="${social.link}" target="_blank" class="icon-container"><i class="${social.icon}"></i>
        </a>`
        )
        .join("");
  
      this.shadowRoot.innerHTML = /* html */ `
                <style>
                    @import "./src/components/iconSocial-component/iconSocial-component.css";
                    @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
                </style>
               <div class="container">
               <div>
                 ${iconsHtml}
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
  
  customElements.define("iconsocial-component", IconSocialComponent);
  