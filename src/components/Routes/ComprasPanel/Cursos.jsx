import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Cursos = () => {

    return (
        <div>
            <h1>Esta es la página de Compras</h1>
            <nav className='navigator'>
                <ol>
                    <li><Link to="/compras/javascript" className='links'>JavaScript</Link></li>
                    <li><Link to="/compras/react" className='links'>React</Link></li>
                </ol>
            </nav>

            <section id="results">
                <div>
                    {/* Salida de los componentes/subrutas */}
                    <Outlet /> 
                </div>
            </section>
        </div>
    )
}
