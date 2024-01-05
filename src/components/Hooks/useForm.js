import { useState } from "react";

export const useForm = (objetoInicial = {}) => {

    const serializado = (form) => {
        const formData = new FormData(form); 
        const objetoCompleto = {}; 

        for(let [key,value] of formData){
            objetoCompleto[key] = value; 
        }

        return objetoCompleto; 
    }

    const enviado = e =>{
        e.preventDefault();
        
        setFormulario(serializado(e.target)); 
    }

    return {
        formulario,
        serializado,
        enviado
    }
};
