import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Contact = () => {

    const navi = useNavigate(); // Hook que nos permite realizar una redirección; 

    const redirect = e =>{
        navi("/compras"); 
    }

    return (
        <div>
            <h1>Página de contacto</h1>
            <p>Esta es la página de contacto</p>
            <Link to="/inicio" className='links'>Volver al inicio</Link>
            <button onClick={e=>redirect(e)}>Comprar</button>
        </div>
    )
}
