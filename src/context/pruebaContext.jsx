import { createContext } from "react";

// PROVEEDOR DE CONTEXTOS. 
// Compartir datos entre diferentes componentes al utilizar react router.  
// Se suele utilizar el context, ya que con las props utilizando el router ya 
// No seria tan util seguirlo haciendo con las props. 

// La declaracion es una funcion que se exporta y se inicializa con un valor
// Al hacer la instancia de que es un context con el createContext(defaultValue)

export const PruebaContext = createContext(null);