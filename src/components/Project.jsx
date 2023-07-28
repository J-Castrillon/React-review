import React from 'react'
import { Peliculas } from './PelisProject/Peliculas'
import { Buscador } from './PelisProject/Buscador'
import { AddPeli } from './PelisProject/AddPeli'
import { useState } from 'react'

export const Project = () => {

    const [listadoState, setListadoState] = useState([]);

    return (
        <div className='layout'>
            <header className='header'>
                <div className='logo'>
                    <div className='play'></div>
                </div>
                <h1>Películas</h1>
            </header>
            <nav className='nav'>
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Películas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>
            <main className='content'>
                {/* Aquí va el listado de películas */}
                <Peliculas listadoState={listadoState} setListadoState={setListadoState} /> {/* Componte aparte */}
            </main>
            <aside className='lateral'>
                <Buscador setListadoState={setListadoState} listadoState={listadoState}/> {/* Componte aparte */}
                <AddPeli setListadoState={setListadoState} /> {/* Componente aparte */}
            </aside>
            <footer className='footer'>
                <p className='paragraph'><strong>&copy;</strong> Master en JavaScript</p>
            </footer>
        </div>
    )
}
