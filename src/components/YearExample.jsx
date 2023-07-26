/*
    1. Crear un componente; 
    2. Recibir una prop con el año actual; 
     -- Ojo, usar funciones para obtener el año; 
    3. Usar estados y eventos para tener dos botones; 
        - Pasar al proximo año; 
        - Ir al año anterior; 
        - Mostrar en todo momento el año por pantalla; 
    4. Validar que el año sea un número y que sea requerido; (prop); 
    5. Cambiar el año mediante un input de texto y que se cambie dinamicamente; 
*/

import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const YearExample = ({actualYear}) => {

    let [year, setYear] = new useState(actualYear);

    const siguiente = e => {
        setYear(year + 1);
    }

    const anterior = e => {
        setYear(year - 1);
    }

    const changeDates = (e,newDate)=>{
        Number.isInteger(newDate) === true ? setYear(newDate) : alert("Pasa un dato numérico"); 
    }

    return (
        <div>
            <h1>Componente de calendario</h1>
            <p><span id="year">{year}</span></p>
            <button onClick={e=>anterior(e)}>Anterior</button>
            <button onClick={e=>siguiente(e)}>Siguiente</button>
            <br />
            <input type="text" 
                name="changeDate" 
                id="changeDate"
                onChange={e => changeDates(e,parseInt(e.target.value))}
                placeholder='Cambia el año aquí'/>
        </div>
    )
}

YearExample.propTypes = {
    actualYear: PropTypes.number.isRequired 
}