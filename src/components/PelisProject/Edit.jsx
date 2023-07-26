import React from 'react'

const tituloComponente = 'Editar Película';

export const Edit = ({ peli, conseguirPelis, setListadoState, setEdit }) => {

    const guardarEdicion = (e, id) => {
        e.preventDefault(); 

        const storage = conseguirPelis(); // Recuperar de nuevo las películas almacenadas; 
        const indice = storage.findIndex(peli => peli.id === id); // Devuleve el índice del objeto en el array; 

        const actPeli = {
            id, // Quiere decir que le pasamos el id de los parámetros; 
            title: e.target.title.value,
            description: e.target.descriptionEdit.value
        }

        // Actualización; 
        storage[indice] = actPeli; 

        // Guardar LocalStorage; 
        localStorage.setItem('Pelis',JSON.stringify(storage)); 

        // Actualización de estados; 
        setListadoState(storage);
        setEdit(0); 
    }

    return (
        <div className="edit-form">
            <h3 className='title'>{tituloComponente}</h3>
            <form action="#" id="form-edit" onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text" name="title" id="title" className='titulo_editado'
                    defaultValue={peli.title} />
                <textarea name="descriptionEdit" id="descriptionEdit" className='description_edit'
                    defaultValue={peli.description} />
                <input type="submit" value="Actualizar" className='editButton' />
            </form>
        </div>
    )
}
