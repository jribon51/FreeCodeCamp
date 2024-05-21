const input=document.getElementById('ingresar-tarea');
const boton=document.querySelector('button');
const listaTareas=document.getElementById('lista-de-tareas');

function agregarTarea(){
    if(input.value){
        console.log("crear tarea");
        //crear tarea
        let tareaNueva=document.createElement('div');
        tareaNueva.classList.add('tarea');

        console.log("texto ingresado por el usuario");
        //texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);


        console.log("crear y agregar contenedor de iconos");
        //crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        console.log("iconos");
        //iconos
        console.log("iconos1");
        let completar=document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        completar.addEventListener("click",completarTarea);

        
        console.log("iconos2");
        let eliminar=document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener("click",eliminarTarea);

        console.log("iconos3");
        iconos.appendChild(completar);
        iconos.appendChild(eliminar);
        //iconos.append(completar,eliminar);

        //agregar la tarea a la lista
        console.log("agregar la tarea a la lista");
        listaTareas.appendChild(tareaNueva);

    }else{
        alert("POr fanvor ingresa una tarea");
    }
}

function eliminarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.remove();
}

function completarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

boton.addEventListener('click',agregarTarea);

input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        agregarTarea();
    }
});