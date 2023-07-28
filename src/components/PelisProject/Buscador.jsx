import React, { useState } from 'react';

export const Buscador = ({ setListadoState, listadoState }) => {

    const [searched, setSearched] = useState("");
    const [notFound, setNotFound] = useState(false);

    const search = (e) => {
        setSearched(e.target.value); // Pisa los valores tecleados; 

        let founds = listadoState.filter(peli => peli.title.toLowerCase().includes(searched.toLocaleLowerCase()));

        if (searched.length <= 1 || founds == 0) {
            founds = JSON.parse(localStorage.getItem('Pelis'));
            setNotFound(true);
        } else
            setNotFound(false);

        setListadoState(founds); 
    }

    return (
        <div className="search">
            <h3 className='title'>Busqueda: {searched}</h3>
            {
                (searched.length > 2 && notFound === true) && (<span className='not-found'>No se encontraron coincidencias</span>)
            }
            <form action="#">
                <input type="text"
                    name="sought"
                    id="sought"
                    autoComplete='off'
                    onChange={e => search(e)}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
