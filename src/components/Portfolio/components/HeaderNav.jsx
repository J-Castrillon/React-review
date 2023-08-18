import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

    const active = (isActive)=>{
        return isActive ? 'links active' : 'links'; 
    }

    return (
        <header id='header-portafolio'>
            <div className="logotipo">
                <span>J</span>
                <h2>Julián Castrillón</h2>
            </div>
            <nav>
                <ul className='links-ul'>
                    <li><NavLink to="/home" className={({isActive})=>active(isActive)}>Inicio</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive})=>active(isActive)}>Contacto</NavLink></li>
                    <li><NavLink to="/curriculum" className={({isActive})=>active(isActive)}>Curriculum</NavLink></li>
                    <li><NavLink to="/Projectos" className={({isActive})=>active(isActive)}>Proyectos</NavLink></li>
                    <li><NavLink to="/services" className={({isActive})=>active(isActive)}>Servicios</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
