import React from 'react'
import { Link } from 'react-router-dom'

export const Articulos = () => {
    return (
        <div>
            <h1>Página de artículos</h1>
            <p>Esta es la página de artículos</p>
            <Link to="/inicio" className='links'>Volver al inicio</Link>
        </div>
    )
}
