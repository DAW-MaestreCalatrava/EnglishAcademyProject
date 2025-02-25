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
      this.currentIndex = (this.currentIndex + direction + this.services.length) % this.services.length;
      this.shadowRoot.querySelector('.title').textContent = this.services[this.currentIndex].title;
      this.shadowRoot.querySelector('.subtitle').textContent = this.services[this.currentIndex].subtitle;
    }
  
    render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
      this.shadowRoot.innerHTML = /* html */ `
        <style>
         @import "./src/components/banner-component/banner-component.css";
        </style>

        <div class="content">
          <h1 class="title">${this.services[this.currentIndex]?.title || ''}</h1>
          <p class="subtitle">${this.services[this.currentIndex]?.subtitle || ''}</p>
        </div>
        <div class="controls">
          <button class="arrow" id="prev">&#9664;</button>
          <button class="arrow" id="next">&#9654;</button>
        </div>
      `;
  
      this.shadowRoot.getElementById('prev').addEventListener('click', () => this.changeText(-1));
      this.shadowRoot.getElementById('next').addEventListener('click', () => this.changeText(1));
    }
  }
  
  customElements.define('banner-component', BannerComponent);
  