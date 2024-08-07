/* 0- */

import { ObtenerDatosConfiguracion } from "/js/Servicios_Config.js";

export async function MostrarHTML() {
  const Datos = await ObtenerDatosConfiguracion();

  let navbar = (document.getElementById("Navbar").innerHTML = CrearNavbar(
    Datos.navbar
  ));
  let footer = (document.getElementById("Footer").innerHTML = CrearFooter(
    Datos.footer
  ));
}

/* 1-Navbar */
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
  html += `<li class="nav-item"><a class="nav-link" href="${element.enlace}">${element.nombre}</a></li>`;

  html += ` </ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-search"></i></a></li>
            </ul>
          </div>
        `;

  return html;
};

/* 2-Footer */
const CrearFooter = (data) => {
  let html = `
        <h3>Derechos de Autor de NoticiasTecnológicas</h3>
          <p>Sigue a NoticiasTecnológicas</p>
          <ul class="list-inline enlaces-pie" id="ListaFooter">
          `;
  html += `<a href="${element.enlace}" class="mx-2"><i class="${element.claseDeCss}"></i></a>`;

  html += `</ul>
        `;

  return html;
};
