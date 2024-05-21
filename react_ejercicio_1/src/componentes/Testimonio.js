import React from "react";
import "../estilos/Testimonio.css"

const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src="https://github.com/estefaniacn/testimonios-freecodecamp/blob/master/src/imagenes/testimonio-emma.png?raw=true" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="text-testimonio"> {props.testimonio}</p>
      </div>
    </div>
  )
}

export default Testimonio;