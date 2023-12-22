import React, { useEffect, useRef, useState } from 'react'

export const UseRef = () => {

    const nombre = useRef("Julián"); // Inicializamos con un valor inicial.   
    const email = useRef();
    const content = useRef();

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludoEnCola = useRef(numeroSaludo);

    useEffect(() => {
        nombre.current.focus();
    }, []); 

    useEffect(()=>{
        // Para el segundo ejemplo; 
        // Funciona de manera similar a colocarlo directamente, pero en este caso se coloca el valor más actualizado sin necesidad de ejecutar todos los setTimeOut; 
        saludoEnCola.current = numeroSaludo; 
        setTimeout(()=>{
            console.log(`Saludos: ${saludoEnCola.current}`); 
        },2000) 
    },[numeroSaludo])

    const sendInfo = (e) => {
        e.preventDefault();
        // Esto mismo se podría hacer con el event.target... Sin embargo lo que permite además de seleccionar 
        // valores es la persistencia de los datos en el re-renderizado de los componentes. 

        // También como se puede ver en lo siguiente, accedemos directamente por medio de current a las
        // propiedades del elemento que tiene la referencia. 
        console.log(nombre.current.value);
        console.log(email.current.value);

        let { current: caja } = content;
        caja.classList.contains('background-green') ? caja.classList = 'normalDiv background-red' : caja.classList = 'normalDiv background-green';
        caja.innerHTML = "Cambiada la propiedad";

        console.log(content.current.classList);
    }

    const saludar = e => {
        setNumeroSaludo(numeroSaludo + 1); 
    }

    return (
        <div>
            <form action="#" onSubmit={e => sendInfo(e)}>
                <input type="text" name="nombre" id="nombre" placeholder='Nombre' ref={nombre} />
                <input type="email" name="email" id="email" placeholder='Apellido' ref={email} />
                <button type="submit">Enviar</button>
            </form>

            <div ref={content} className='normalDiv'>
                Texto del Div
            </div>

            {/* Segundo ejemplo */}
            <h3>Número de saludos: {numeroSaludo}</h3>
            <button onClick={e => saludar(e)}>Saludar</button>

        </div>
    )
}
