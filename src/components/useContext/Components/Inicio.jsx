import React, { useContext } from 'react'
import { PruebaContext } from '../../../context/pruebaContext'

export const Inicio = () => {

  const contexto = useContext(PruebaContext); 

  return (
    <div>
        <h1 className='useContextTitles'>Inicio</h1>
        <p>Pagina de inicio</p>
        <p>Valores compartidos: <pre>{JSON.stringify(contexto)}</pre></p>
    </div>
  )
}
