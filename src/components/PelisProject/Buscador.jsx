import React, { useState } from 'react'

export const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState("");
    const [notFound,setNotFound] = useState(false); 

    const buscarPeli = e => {
        setBusqueda(e.target.value);

        let finds = listadoState.filter(peli => {
            return peli.title.toLowerCase().includes(busqueda.toLowerCase());
        });

        // Búsqueda mínimo de 3 letras y si es erróneo, que las muestre todas; 
        if (busqueda.length <= 1 || finds == 0) {
            finds = JSON.parse(localStorage.getItem('Pelis'));
            setNotFound(true); 
        }else
            setNotFound(false); 

        // Actualización del estado; 
        setListadoState(finds);
    }

    return (
        <div className="search">
            <h3 className='title'>Buscador : {busqueda}</h3>
            {
                (notFound == true && busqueda.length > 2) && <span className='not-found'>No hay coincidencias con la búsqueda</span>
            }
            <form action="#">
                <input type="text"
                    name="sought"
                    id="sought"
                    autoComplete='off'
                    onChange={e => buscarPeli(e)} />
                <button>Buscar</button>
            </form>
        </div>
    )
}
