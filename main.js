import "./src/index.js";

document.addEventListener("DOMContentLoaded", async () => {

    const header = document.querySelector("header-component");
    
    const menuItems = [
      { texto: "Inicio", link: "/" },
      { texto: "Contacta con nosotros", link: "/form" },
      { texto: "Conócelos", link: "/about-us" }
    ];
    
    header.buttons = menuItems;
});