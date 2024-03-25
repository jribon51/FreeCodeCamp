//recorrer el dom

/* elemento por id - retorna objeto
const titulo= document.getElementById("titulo");
console.dir(titulo.tagName);*/


/* elemento por clase - retorna coleccion de objetos

const toppings=document.getElementsByClassName("topping");
console.dir(toppings);*/


/* elemento por tag array de elementos - retorna coleccion de objetos
const tag=document.getElementsByTagName("li");
console.dir(tag);
*/

/* queryselector (primer elemento con una clase específica - retorna un objeto)
const classe=document.querySelector(".topping");
console.log(classe);

// queryselector combinación - retorna objeto
const classe2=document.querySelector(".topping.fondo-naranja");
console.log(classe2);

// queryselector combinación - retorna objeto
const class3=document.querySelector("ul li.fondo-naranja");// const class3=document.querySelector("ul li:not(.fondo-marron");
console.log(class3); */


/* queryselectorall() trae una lista de nodos - son objetos
const varios=document.querySelectorAll(".topping");
console.log(varios[0]);
console.log(varios[1]);
*/

/*ejemplo estilos css
const primerTopping = document.querySelector(".topping");
primerTopping.style.backgroundColor="blue";
primerTopping.style.color="black";
primerTopping.style.textTransform="uppercase";



const ejemplo=document.getElementById("lista-toppings");
console.log("> innertext");
console.log(ejemplo.innerText);
console.log("> textcontent");
console.log(ejemplo.textContent);
console.log("> innerhtml");
console.log(ejemplo.innerHTML);


const titulo=document.getElementById("titulo");
titulo.innerText="Este es el otro mensaje que debe salir";

//verificamos el valor del atributo href de la coleccion html
const titulo=document.getElementsByTagName("a");
//console.dir(titulo[0].getAttribute("href"));
//console.dir(titulo[0].removeAttribute("href"));
console.dir(titulo[0].setAttribute("href","https://www.google.com/"));

//agregar clase classList.add()
const primerTopping=document.querySelector(".topping");
primerTopping.classList.add("texto-verde");
console.log(primerTopping.classList);

//mirar si contiene la clase classList.contains() retorna tru o false
console.log(primerTopping.classList.contains("fondo-marron"));

//eliminar clase classList.remove() retorna tru o false
primerTopping.classList.remove("topping");
console.log(primerTopping.classList);


//crear elemento createElement() en el dom
//metodo append() permite agregar un nodo en la lista de referencia
const referencisListaToppings=document.getElementById("lista-toppings");
const toppingNuevo=document.createElement("li");
toppingNuevo.classList.add("topping","fondo-marron");
toppingNuevo.innerText="Queso Extra";
//referencisListaToppings.append(toppingNuevo);
referencisListaToppings.appendChild(toppingNuevo);


// traer elemento padre e hijos
const referencisListaToppings=document.getElementById("lista-toppings");
//console.log(referencisListaToppings.parentElement);
//console.log(referencisListaToppings.parentElement.parentElement.parentElement);
console.log(referencisListaToppings.children[0]);
console.log(referencisListaToppings.firstChild);
console.log(referencisListaToppings.lastChild);
console.log(referencisListaToppings.firstElementChild);
console.log(referencisListaToppings.lastElementChild);
// traer elemento hermano anterrior
console.log(referencisListaToppings.previousElementSibling);
console.log(referencisListaToppings.nextElementSibling);
*/

//eventos del dom
/* los eventos mas comunes con los eventos de cursor y teclado 
conceptos importantes:
.elemento target (blanco) -  elemento que va a recibir
.trigger -  desencadenante
.event handler - funcion que se ejecuta cuando ocurre un evento
.event listener - uniion entre un evento y una funcion, escucha un evento
*/
const toppings=document.getElementsByClassName("topping");


// function mostrarClick(e){
//     console.log(e.target.innerText);
// }


for(const topping of toppings){
    topping.addEventListener("click",(e)=>{
        console.log(e.target.innerText);
    } );
}


