import React, { useState } from 'react'

export const UseState = () => {

    // De esta manera no funciona; 
    // const nombre = "Julián Castrillón";

    // const cambiarNombre = e => {
    //     nombre = "Julián Castrillón Sánchez"; 
    // }

    // La forma correcta de realizar este tipo de acciones es con el useState; 

    //Nombre: variable, setNombre: función. El parámetro del useState, es el valor de la variable al no hacerle ningúna actualización al estado de la misma; 
    const [nombre, setNombre] = new useState("Julián");

    const cambiarNombre = (e, newName) => {
        setNombre(newName); // Debemos actualizarle el valor por medio de su setState; 
    }

    return (
        <div>
            <h1>Hook UseState</h1>
            <h3>{nombre}</h3>
            <button onClick={e => cambiarNombre(e, "Julián Castrillón Sánchez")}>Cambiar nombre</button>
            <hr />
            <input type="text" placeholder="Cambie el texto" onChange={e=>(cambiarNombre(e,e.target.value))}/>
        </div>
    )
}
