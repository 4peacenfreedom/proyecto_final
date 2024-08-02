console.log("Funciona");

/* Los componentes */
document.addEventListener("DOMContentLoaded", (ev) => {
  MostrarHTML();
});
/* 0- */
function MostrarHTML() {
  let navbar = (document.getElementById("Navbar").innerHTML = CrearNavbar());
  let footer = (document.getElementById("Footer").innerHTML = CrearFooter());
  let Noticias = (document.getElementById("Noticias").innerHTML =
    CrearTarjetaNoticias());
}
