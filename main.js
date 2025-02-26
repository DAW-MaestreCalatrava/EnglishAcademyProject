import "./src/index.js";

document.addEventListener("DOMContentLoaded", async () => {
    const header = document.querySelector("header-component");
    const headerButtons = [
        { texto: "Inicio", link: "/" },
        { texto: "Contáctanos", link: "/contactanos" },
        { texto: "Conócenos", link: "/conocenos" }
      ];
header.buttons=headerButtons;
});