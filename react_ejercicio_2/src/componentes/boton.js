import React from 'react'
import "../hojas-de-estilo/boton.css"

const Boton = ({texto,esBotonDeClic,manejarClic})=>{
    return(
        <button className={esBotonDeClic?"boton-clic":"boton-reiniciar"} onClick={manejarClic}>
            {texto}
        </button>
    );
}
export default Boton;