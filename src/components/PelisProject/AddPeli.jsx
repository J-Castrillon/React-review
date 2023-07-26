import React,{useState} from 'react'
import { Storage } from '../Helpers/Storage';

export const AddPeli = ({setListadoState}) => {

    const [peliState, setPeliState] = useState({
        id: '',
        title: '',
        description: ''
    }) 


    const datos = e => {
        e.preventDefault(); 
        alert("Los datos ya se enviaron satisfactoriamente");

        let title = e.target.title.value; 
        let description = e.target.description.value; 
    
        let peli = {
            id: new Date().getTime(), // Con esto conseguimos que sea "diferente para cada uno"; 
            title,
            description, 
        }
        setPeliState(peli); // Actualizamos el estado de peli; 
        Storage('Pelis',peli); // Función importada de helpers; 

        // Actualización del estado de las películas. 
        setListadoState(elements=>{
            return[peli,...elements];
        })
    }

    return (
        <div className="add">
            <h3 className='title'>Añadir una película</h3>
            {peliState.title}
            <form action="/#" onSubmit={e => datos(e)}>
                <input type="text" placeholder='Título' name="title" id="title" />
                <textarea name="description" placeholder="Descripción" id="description" cols="20" rows="5"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
