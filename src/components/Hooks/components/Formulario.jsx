import React, { useState } from "react";
import { useForm } from "../useForm";

export const Formulario = () => {
  const {formulario,serializado,enviado} = useForm({}); 

  return (
    <div>
      <h1>Formulario para custom hooks</h1>
      <p>Formulario para guardar cursos:</p>
      <p>Curso guardado: {formulario.titulo}</p>
      <pre>{JSON.stringify(formulario)}</pre>

      <form action="" className="login" onSubmit={enviado}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <input type="number" name="publicacion" placeholder="Publicacion" />
        <input type="text" name="autor" placeholder="autor" />
        <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
        <input
          type="email"
          name="contacto"
          id="contacto"
          placeholder="email@email.com"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
