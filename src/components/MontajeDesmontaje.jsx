import React, { useState, useEffect } from 'react'

export const MontajeDesmontaje = () => {

    // Para cuando cargue el elemento; 
    useEffect(()=>{
        alert("El componente se ha montado"); 

        return (()=>{
            alert("Componente desmontado")
        }); 
    },[])
    

    return (
        <div>
            <h3>Bienvenido a nuestra web</h3>
            <button onClick={e=>alert("Esta es la alerta de nuestra web")}>
            Alerta
            </button>
        </div>
    )
}
