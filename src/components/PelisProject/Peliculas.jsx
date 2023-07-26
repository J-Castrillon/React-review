import React, { useEffect } from 'react'
import { useState } from 'react';
import { Edit } from './Edit';

export const Peliculas = ({ listadoState, setListadoState }) => {

    //   const [listadoState, setListadoState] = useState([]); Está en Project.jsx; 

    const [edit,setEdit] = useState(0); 

    useEffect(() => {
        conseguirPelis();
    }, [])

    const conseguirPelis = () => {
        let peliculas = JSON.parse(localStorage.getItem('Pelis'));
        setListadoState(peliculas);
        return peliculas;
    }

    const borrarPeli = id => {
        // Conseguir las películas almacenadas; 
        let movies = conseguirPelis();
        // filtrar las películas para eliminar la que quiero;
        let newMoviesList = movies.filter(movie => movie.id !== parseInt(id));
        // Actualizar el listadoState; 
        setListadoState(newMoviesList); // Listado original; 
        // Actualizar los datos en el localstorage; 
        localStorage.setItem('Pelis', JSON.stringify(newMoviesList)); // Al guardarlo en la misma key, ya actualiza; 
    }

    return (
        <>
            {
                // Es necesaria la validación, ya que en caso de estar vacío nos va a generar un error; 
                listadoState != null ? listadoState.map((peli, index) => {
                    return (
                        <article className="peli-item" key={peli.id}>
                            <h3 className="title">{peli.title}</h3>
                            <p className="description">{peli.description}</p>
                            <button className="update" onClick={()=>{setEdit(peli.id)}}>Editar</button> {/* Actualizamos el estado */}
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Eliminar</button>

                            {/* Formulario de editar */ }
                            {
                                edit === peli.id && (
                                    <Edit peli={peli} conseguirPelis={conseguirPelis} 
                                    setListadoState={setListadoState}
                                    setEdit={setEdit}/>
                                )
                            }
                        </article>
                    );


                }) : <h3>No hay películas para mostrar</h3>
            }

        </>
    )
}
