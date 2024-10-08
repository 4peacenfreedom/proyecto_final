import { ObtenerDatosConfiguracion } from "/js/Servicios_Config.js";

export const MostrarHTML = async () => {
  const Datos = await ObtenerDatosConfiguracion();

  if (Datos) {
    let navbar = (document.getElementById("Navbar").innerHTML = CrearNavbar(
      Datos.navbar
    ));
    let herobanner = (document.getElementById("heroBanner").innerHTML =
      CrearHeroBanner(Datos.herobanner));
    let footer = (document.getElementById("Footer").innerHTML = CrearFooter(
      Datos.footer
    ));
  }
};

// 0-Hero banner

const CrearHeroBanner = () => {
  let html = `
    <h2>¡Grandes Noticias hoy!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor laudantium rerum, excepturi est praesentium
        natus qui? Tempora rerum, numquam inventore eligendi in, nostrum reprehenderit, eum cumque fugit eaque
        similique!</p>
      <a href="#" class="boton">Regístrate <i class="fas fa-chevron-right"></i></a>
        `;

  return html;
};

//Test img change

// Selecciona el header por su ID
const heroBanner = document.getElementById("heroBanner");

// Obtiene la URL actual
const currentPage = window.location.pathname;

// Define un objeto con las rutas y las imágenes correspondientes
const images = {
  "/Inicio.html": "url('/img/hero-inicio.jpg')",
  "/Registro.html": "url('/img/hero-registro.jpg')",
  "/Tabla-Rick.html": "url('/img/hero-table.jpg')",
  "/Tabla-Usuarios.html": "url('/img/hero-users.jpg')",
};

// Verifica si la página actual tiene una imagen asignada
if (images[currentPage]) {
  // Cambia el background-image del header
  heroBanner.style.backgroundImage = images[currentPage];
} else {
  // Opción por defecto si la página no está en el objeto
  heroBanner.style.backgroundImage = "url('/img/1-Header.jpg')";
}

//1-Navbar

const CrearNavbar = (data) => {
  let html = `
     <a class="navbar-brand" href="#">
        <img src="img/1-Logo.png" alt="Logo NoticiasTecnológicas" class="navegacion-principal__marca">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="ListaNavbar">
        <ul class="navbar-nav mr-auto">
        `;

  data.forEach((element) => {
    html += ` <li class="${element.claseDeCss}"><a class="nav-link" href="${element.enlace}">${element.nombre}</a></li>`;
  });

  html += ` </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
        </ul>
      </div>`;

  return html;
};

//2- Footer
const CrearFooter = (data) => {
  let html = `
    
      <h3>Derechos de Autor de NoticiasTecnológicas</h3>
      <p>Sigue a NoticiasTecnológicas</p>
      <ul class="list-inline enlaces-pie" id="ListaFooter">
          `;
  data.forEach((element) => {
    html += `<a href="${element.enlace}" class="mx-2"><i class="${element.claseDeCss}"> ${element.nombre}</i></a>`;
  });

  html += ` </ul>`;

  return html;
};
