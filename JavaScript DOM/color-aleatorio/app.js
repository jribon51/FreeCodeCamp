
// Seleccionar Los elementos del dom
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#"

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;

}

boton.addEventListener("click", function () {
  let coloAleatorio = generarColorHexAleatorio();
  color.textContent = coloAleatorio;
  document.body.style.backgroundColor = coloAleatorio;
});