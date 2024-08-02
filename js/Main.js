import { MostrarHTML } from "/js/CrearHTML.js";

/* Los componentes */
document.addEventListener("DOMContentLoaded", (ev) => {
  MostrarHTML();
});

function MostrarDatosConfiguracion() {
  // Truco !Fetch url

  let url;
  fetch("/js/Configuraciones.json")
    .then((response) => response.json())

    .then((data) => console.log(data));
}
