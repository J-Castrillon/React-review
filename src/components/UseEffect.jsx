import React, { useState, useEffect } from 'react'
import { MontajeDesmontaje } from './MontajeDesmontaje';

// El hook useEffect permite especificar funciones que se ejecutarán 
// después de que React haya realizado las actualizaciones en el DOM. 
// Estas funciones pueden realizar tareas como suscribirse o cancelar suscripciones a eventos, 
// solicitar datos desde un servidor, manipular el DOM directamente, entre otros.

export const UseEffect = () => {

    const [lenguaje, setLenguaje] = new useState("JavaScript");
    const [date,setDate] = new useState("01/11/2001"); 

    const cambiarLenguaje = (e) => {
        setLenguaje(e.target.value);
    }

    const nuevaFecha = e => {
        let date = new Date(); 
        setDate(date.getFullYear()); 
    }

    // Hay tres formas de usar el useEffect, pero cada una especial para algo: 
    // Infinito, al cargar el componente, al actualizar un estado; 
    useEffect(()=>{
        console.log("Se ha cargado el componente o se ha actualizado algún elemento del DOM"); 
    });
    
    // Carga únicamente; Es importante utilizar los corchetes vacíos. *Muy utilizado*; 
    useEffect(()=>{
        console.log("Se ha cargado el componente"); 
    },[]); 

    // Basado en la actulización de un elemento del DOM - este es específico para cada estado; 
    // Tener en cuenta que se pasa la variable y no el setStatus; 
    useEffect(()=>{
        console.log("Se ha modificado la fecha");
        alert("Se ha modificado la fecha"); 
    },[date]);

    // Otro ejemplo con el input cambiando el lenguaje; 
    useEffect(()=>{
        // Para el ejemplo del contador; 
        setContador(contador+1);
        console.log("Se ha modificado el lenguaje de programación",contador);         
    },[lenguaje]); 

    // Ejemplo del contador; 
    const [contador,setContador] = useState(0); 

    return (
        <div>
            <h1>El efecto - UseEffect</h1>
            <p className={contador >= 5 ? 'label-green' : 'label'}>{lenguaje}</p><br />
            <p>{date}</p>
            <input type="text"
                onChange={cambiarLenguaje} /> <br />
            <button onClick={nuevaFecha}>Cambiar fecha</button>


            {lenguaje == 'php' && <MontajeDesmontaje />} {/* Mongaje y desmontaje de componentes */}
        </div>
    )
}
