import {cerrarPopUp , abrirPopUp , popup} from "./animaciones.js";


const btnEncriptar = document.querySelector("#botonEncriptar");
const expresionRegular = /^[a-z\s]+$/;
export let verificación;

function revisarTexto() {
  btnEncriptar.addEventListener("click", () => {
    let textoRecibido = document.querySelector("#area__input").value;
    let verificado = undefined;

    if (expresionRegular.test(textoRecibido)) {
      verificado = true;
      verificación = verificado;
      abrirPopUp();

    } else {
      verificado = false;
      verificación = verificado;
    }

    return verificación;
  });
}


revisarTexto();
cerrarPopUp();

//funcion para encriptar el texto
function encriptar() {
  btnEncriptar.addEventListener("click", () => {
    let textoRecibido = document.querySelector("#area__input").value;

    textoRecibido = textoRecibido.split("");
    console.log(textoRecibido);
  });
}
encriptar();

//funcion para  revisar condiciones del texto
