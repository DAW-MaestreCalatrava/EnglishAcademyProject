import styles from "./banner-component.css" with {type: "css"};

class BannerComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.currentIndex = 0;
      this.services = JSON.parse(this.getAttribute('services') || '[]');
      this.image = this.getAttribute('image') || '';
    }
  

    connectedCallback() {
      this.render();
    }
  
    changeText(direction) {
      const titleElement = this.shadowRoot.querySelector("my-text[size='title']");
      const subtitleElement = this.shadowRoot.querySelector("my-text[size='subtitle']");
    
      let opacity = 1;
      
      // Animación de desvanecimiento
      const fadeOut = () => {
        if (opacity > 0) {
          opacity -= 0.05;
          titleElement.style.opacity = opacity;
          subtitleElement.style.opacity = opacity;
          requestAnimationFrame(fadeOut);
        } else {
          this.currentIndex = (this.currentIndex + direction + this.services.length) % this.services.length;
          titleElement.textContent = this.services[this.currentIndex].title;
          subtitleElement.textContent = this.services[this.currentIndex].subtitle;
          
          // Reiniciar la opacidad con una nueva animación
          fadeIn();
        }
      };
    
      const fadeIn = () => {
        if (opacity < 1) {
          opacity += 0.05;
          titleElement.style.opacity = opacity;
          subtitleElement.style.opacity = opacity;
          requestAnimationFrame(fadeIn);
        }
      };
    
      fadeOut();
    }
  
    render() {
      this.shadowRoot.adoptedStyleSheets.push(styles);
      this.shadowRoot.innerHTML = /* html */ `
    <div class="banner">
      <div class="content">
        <my-text size="title" color="white" alignCenter="true">
          ${this.services[this.currentIndex]?.title || "Sin título"}
        </my-text>
        <my-text size="subtitle" color="white" alignCenter="true">
          ${this.services[this.currentIndex]?.subtitle || "Sin descripción"}
        </my-text>
      </div>
      <div class="controls">
        <button class="arrow" id="prev"><</button>
        <button class="arrow" id="next">></button>
      </div>
    </div>
  `;

  // Seleccionamos el banner y le aplicamos la imagen
  const banner = this.shadowRoot.querySelector(".banner");
  banner.style.backgroundImage = this.image ? `url('${this.image}')` : "none";
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  this.shadowRoot.getElementById('prev').addEventListener('click', () => this.changeText(-1));
  this.shadowRoot.getElementById('next').addEventListener('click', () => this.changeText(1));
    }
  }
  
  customElements.define('banner-component', BannerComponent);
  
  /**/