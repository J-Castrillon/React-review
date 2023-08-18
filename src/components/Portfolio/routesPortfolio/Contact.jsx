import React from 'react'

export const Contact = () => {
  return (
    <div>
      <h2 className='heading'>Contáctate conmigo</h2>
      <form action="#" className="contact-form">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder='Escribe aquí'/>
        <label htmlFor="number">Teléfono:</label>
        <input type="number" name="number" id="number" placeholder='Escribe aquí'/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
