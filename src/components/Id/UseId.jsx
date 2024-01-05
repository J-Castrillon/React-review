import React, { useEffect, useId } from "react";

// Es un Hook de React para generar IDs únicos que se pueden pasar a los atributos de accesibilidad
// Devuelve una cadena de ID única asociada con esta llamada useId llamado en un componente particular.
export const UseId = () => {

    const unicId = useId();

    useEffect(()=>{
        console.log(unicId);
    },[])

  return (
    <div>
      <h1>Hook useId</h1>
      <form action="">
        <input type="text" id={unicId} name="nombre"/>
      </form>
    </div>
  );
};
