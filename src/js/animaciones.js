import { verificación } from "./app.js";

export const popup = document.querySelector(".div-popup");

export function cerrarPopUp() {
  
  const cerrar = document.querySelector(".cerrar-popup");
  cerrar.addEventListener("click", () => {
    popup.classList.remove("div-popup");
    popup.classList.add("non");

    console.log("verificacion es ", verificación);
  });
}

export function abrirPopUp() {
   
   popup.classList.add('div-popup');
   popup.classList.remove('non');
    

} 


