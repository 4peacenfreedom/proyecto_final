/* Los componentes */
document.addEventListener("DOMContentLoaded", (ev) => {
  MostrarHTML();
  MostrarDatosConfiguracion();
  MostrarDatosPersonas();
  MostrarDatosEnConsola();
});

export function MostrarDatosEnConsola() {
  MostrarDatosConfiguracion();
  MostrarDatosPersonas();
}

function MostrarDatosConfiguracion() {
  // Truco !Fetch url

  let url = "/js/Configuraciones.json";
  fetch(url)
    .then((response) => response.json())

    .then((data) => console.log(data));
}

function MostrarDatosPersonas() {
  // Truco !Fetch url

  let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())

    .then((data) => console.log(data));
}
