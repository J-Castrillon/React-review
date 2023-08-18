import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Cursos = () => {

    return (
        <div>
            <h1>Esta es la página de Compras</h1>
            <nav className='navigator'>
                <ol>
                    <li><NavLink to="/compras/javascript" className='links'>JavaScript</NavLink></li>
                    <li><NavLink to="/compras/react" className='links'>ReactJS</NavLink></li>
                </ol>
            </nav>

            {/* Apartado donde mostrar los resultados  de las subrutas*/}
            <section id='results'>
                <div>
                    <Outlet /> {/* Esto quiere decir que aquí se van a mostrar los resultados de las subrutas */}
                </div>
            </section>
        </div>
    )
}
