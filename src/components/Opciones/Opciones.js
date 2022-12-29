import "./Opciones.css";
import React from 'react';

function Opciones(props) {
  return (
      <div className="descripcion-proyecto">
        <a href="../">

        </a>
        <img
          className="imagenes-proyectos"
          src={require(`../Opciones/images/proyecto-${props.image}.jpg`)}
          alt="Projects"
        />
        <p>{props.nombre}</p>
      </div>
  );
}

export default Opciones;
