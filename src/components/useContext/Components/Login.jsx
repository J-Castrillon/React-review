import React, { useContext, useRef } from "react";
import { PruebaContext } from "../../../context/pruebaContext";

export const Login = () => {
  const nick = useRef();
  const nombre = useRef();
  const edad = useRef();
  const email = useRef();

  const {usuario,setUsuario} = useContext(PruebaContext);

  const guardarDatos = (e) => {
    e.preventDefault();

    const newUser = {
      nick: nick.current.value,
      nombre: nombre.current.value,
      edad: edad.current.value,
      email: email.current.value,
    };

    setUsuario(newUser)
  };

  return (
    <div>
      <h1 className="useContextTitles">Login</h1>
      <p>Pagina de login</p>

      <form action="" className="login" onSubmit={(e) => guardarDatos(e)}>
        <input
          type="text"
          name="nick"
          id="nick"
          ref={nick}
          placeholder="NickName"
        />
        <input
          type="text"
          name="nombre"
          id="nombre"
          ref={nombre}
          placeholder="Nombre"
        />
        <input
          type="number"
          name="edad"
          id="nick"
          ref={edad}
          placeholder="Edad"
        />
        <input
          type="email"
          name="email"
          id="email"
          ref={email}
          placeholder="Email"
        />
        <button type="submit" value="Guardar" className="button-login">
          Enviar
        </button>
      </form>
    </div>
  );
};
