import React, { useCallback, useRef, useState } from "react";
import { Employees } from "./Employees";

export const UseMemo = () => {
  const [gestor, setGestor] = useState("Julián");
  const [page, setPage] = useState(1);
  const gestorName = useRef(gestor);
  // const [count, setCount] = useState(0);

  const changeGestor = () => {
    setGestor(gestorName.current.value); // Esta es la mejor manera de hacerlo;
  };

  // const changePage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // Hook useCallback, memorizacion de funciones. 
  // La clave aqui es que cada vez que se renderiza este componente useMemo, se crea nuevamente la funcion, por lo cual
  // el compontente que en realidad esta usando el react.memo, que es Employees, la toma como nueva y por eso la ejecuta. 
  const message = useCallback(()=> { 
    console.log('Mensaje para el useCallback'); 
  },[page])

  return (
    <div>
      <h1>Memorización</h1>
      <h2>Nombre del gestor: {gestor}</h2>
      <input
        type="text"
        placeholder="Introduce el nombre del gestor"
        ref={gestorName}
        onChange={(e) => changeGestor(e)}
      />

      <Employees page={page} message={message} />
      <center>
        <button
          onClick={() => {
            setPage((prevPage) => prevPage - 1);
          }}
        >
          Last
        </button>
        <button
          onClick={() => {
            setPage((prevPage) => prevPage + 1);
          }}
        >
          Next
        </button>
      </center>
    </div>
  );
};
