import React, { useEffect, useState } from "react";
import { useMayus } from "../useMayus";

export const Custom = () => {
  const { miTexto, mayusculas, minusculas, concatenar } =
    useMayus("Es mi texto");

//   useEffect(() => {
//     console.log(mayusculas());
//     console.log(minusculas());
//     console.log(concatenar("Juliancho"));
//   }, []);

  return (
    <div>
      <h1>Probando custom hooks</h1>

      <h3>{miTexto}</h3>

      <button
        onClick={(e) => {
          mayusculas();
        }}
      >
        Mayusculas
      </button>

      <button
        onClick={(e) => {
          minusculas();
        }}
      >
        Minusculas
      </button>

      <button
        onClick={(e) => {
          concatenar('Continuo probando los hooks personalizados');
        }}
      >
        Concatenar
      </button>
    </div>
  );
};
