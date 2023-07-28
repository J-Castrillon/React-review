import React from 'react'

const tituloComponente = 'Editar Película';

export const Edit = ({ peli, conseguirPelis, setListadoState,setEdit }) => {

    const saveChange = (e, id) => {
        e.preventDefault();

        const storage = conseguirPelis();
        const indice = storage.findIndex(peli => peli.id === id);

        let changes = {
            id,
            title: e.target.title.value,
            description: e.target.descriptionEdit.value
        }

        // Actualización del arreglo; 
        storage[indice] = changes;
        // Actualización del LocalStorage; 
        localStorage.setItem('Pelis', JSON.stringify(storage));
        // Actualización de los estados; 
        setListadoState(storage);
        setEdit(0);  
    }

    return (
        <div className="edit-form">
            <h3 className='title'>{tituloComponente}</h3>
            <form action="#" id="form-edit" onSubmit={e => saveChange(e, peli.id)}>
                <input type="text" name="title" id="title" className='titulo_editado'
                    defaultValue={peli.title} />
                <textarea name="descriptionEdit" id="descriptionEdit" className='description_edit'
                    defaultValue={peli.description} />
                <input type="submit" value="Actualizar" className='editButton' />
            </form>
        </div>
    )
}
