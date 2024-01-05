import { useEffect, useState } from 'react'

export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto);


    const mayusculas = () => {
        setMiTexto( texto.toUpperCase());  
    }

    const minusculas = () => {
        setMiTexto( texto.toLowerCase()); 
    }

    const concatenar = (added) => {
        setMiTexto( texto+' '+added) 
    }

    return {
        miTexto,
        mayusculas,
        minusculas,
        concatenar,
    }
};
