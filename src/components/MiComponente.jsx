import React from 'react'

export const MiComponente = () => {

    const libros = ["Crear o morir", "Clean code", "Sálvese quien pueda"];

    return (
        <div>
            {libros.length >= 1 ?
                <ul>
                    {/* Esta es una línea de comentarios */}
                    {libros.map((elemento, indice) => {
                        return <li key={indice}>{elemento}</li>
                    })}

                </ul>
                : <p>No hay libros</p>
            }
        </div>
    )
}
