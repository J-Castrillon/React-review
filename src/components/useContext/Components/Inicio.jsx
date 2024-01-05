import React, { useContext } from 'react'
import { PruebaContext } from '../../../context/pruebaContext'

export const Inicio = () => {

  // const contexto = useContext(PruebaContext); // Primera prueba del useContext;

  const {usuario,setUsuario} = useContext(PruebaContext);


  return (
    <div>
        <h1 className='useContextTitles'>Inicio</h1>
        <p>Pagina de inicio</p>
        <p>Usuario: <strong>{usuario.nombre}, {usuario.edad} años</strong></p>
        <p>Valores compartidos: </p>
        <pre>{JSON.stringify(usuario)}</pre>
    </div>
  )
}
