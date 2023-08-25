import React from 'react'
import { Link } from 'react-router-dom'
import { ListWorks } from './ListWorks'

export const Home = () => {
  return (
    <div className='home'>
      <h2 className='heading'>
        Hola, soy Julián Castrillón Sánchez y soy <strong id='profesion'>desarrollador de software</strong> web en 
        Medellín Colombia. Ofrezco servicios en programación y análisis de software, 
        creación y mantenimiento de bases de datos, mantenimiento y reparación de computadores, 
        y todo lo relacionado con ello. 
      </h2>
      <h3>
        Te ayudo a implementar diferentes soluciones de problemas frente a programación, tener más
        visiblidad y relevancia en internet. <Link to='/contact'>¡Contactate conmigo! 🦾</Link>
      </h3>
      <section id='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p className='paragraph'>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListWorks projectLimit="3"/>
      </section>
    </div>
  )
}
