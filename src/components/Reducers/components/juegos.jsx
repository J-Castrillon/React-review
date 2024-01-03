import React, { useEffect, useReducer } from "react";
import { JuegoReducer } from "../juegoReducer";

// Funcion inicializadora del estado. 
const init = () => {
  return JSON.parse(localStorage.getItem('Juegos')) || [] // Si el registro no existe me retorna un array vacio; 
};

export const Juegos = () => {
  // Necesitamos una funcion denominada dispatch para lanzar el reducer; 
  const [juego, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(()=>{
    // En este caso es para inicializar el localstorage para que el reducer encuentre algo.
    localStorage.setItem('Juegos',JSON.stringify(juego));
  },[juego])

  const trash = (id) => {
    const accion = {
      type: 'borrar', 
      payload: id
    }

    dispatch(accion); 
  }

  const conseguirDatos = (e) => {
    e.preventDefault();

    const game = {
      id: new Date().getTime(),
      titulo: e.target.title.value,
      description: e.target.description.value,
    };

    // Accion que se envia al dispatch; 
    const accion = {
      type: 'guardar',
      payload: game
    }

    // Disparar el reducer y provocar el cambio en el estado; 
    dispatch(accion);
  };

  const editar = (e,id) =>{
    const game = {
      id,
      titulo: e.target.value,
      description: e.target.value,
    };

    const action = {
      type: 'editar',
      payload: game 
    }

    dispatch(action);
  }

  return (
    <div>
      <h1>Estos son mis videojuegos</h1>

      <p>Numero de videojuegos {juego.length}</p>
      <ul>
        {juego.map((element, index) => {
          return (
            <li key={index} className="game">
              {element.titulo}
              &nbsp; <button className="buttonTrash" onClick={e=> trash(element.id)}>X</button>
              <input type="text" name="editign" id="editign" 
                        onKeyDown={e=>{
                          if(e.key === 'Enter'){
                            editar(e, element.id);
                          }
                        }}
              />
            </li>
          );
        })}
      </ul>

      <h3>Agregar videojuego</h3>

      <form action="#" onSubmit={conseguirDatos}>
        <label htmlFor="title">Agregar:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="title"
          placeholder="title"
        />
        <label htmlFor="description">Descripcion:</label>
        <input
          type="text"
          name="description"
          id="description"
          className="description"
        />

        <button className="button" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};
