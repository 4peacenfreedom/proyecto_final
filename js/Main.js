import { MostrarHTML } from "/js/Global.js";

import { ObtenerDatosConfiguracion } from "/js/Servicios_Config.js";

/* Los componentes */
document.addEventListener("DOMContentLoaded", (ev) => {
  MostrarHTML();
  ObtenerDatosConfiguracion();
});
