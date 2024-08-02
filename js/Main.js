import { MostrarHTML } from "/js/CrearHTML.js";

/* Los componentes */
document.addEventListener("DOMContentLoaded", (ev) => {
  MostrarHTML();
});

function MostrarDatosConfiguracion() {
  // Truco !Fetch

  let url;
  fetch("url")
    .then((response) => response.json())

    .then((data) => console.log(data));
}
