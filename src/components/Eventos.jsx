import React from 'react'

// Eventos mayormente importantes en React; 

export const Eventos = () => {

    // Como estudio hacer una minicalculadora; 
    const clicked = (texto, nombre)=>{
        alert(`${texto} ${nombre}`); 
    }

    // Para el doble click; 
    const doubleClicked = (e)=>{
        alert("Has dado doble click"); 
    }

    // Enter and leave; 
    const enterBox = (e,accion)=>{
        accion == 'Entrado' ? console.log(`Has ${accion} a la caja`) : console.log(`Has ${accion} de la caja`);  
    }

    // Focus and blur; 
    const focusInput = e =>{
        console.log("Acabas de entrar a la caja de texto"); 
    }

    const blurInput = e =>{
        console.log("Acabas de salir de la caja de texto"); 
    }

    return (
        <div>
            <button onClick={e=>clicked("Este es el texto del evento click","Julián")}>Dame click!</button>            

            <hr />
            
            <button onDoubleClick={e=>doubleClicked(e)}>Click x2</button>

            <hr />

            <div id="caja" onMouseEnter={e=>enterBox(e,"Entrado")} onMouseLeave={e=>enterBox(e,"Salido")}>
            </div>

            <hr />

            <input type="text" placeholder="Introduce tu nombre" onFocus={e=>focusInput(e)} 
                onBlur={e=>blurInput(e)}
                onChange={e=>console.log(e.target.value)}/>
        </div>
    )
}
