import React from 'react'
import PropTypes from 'prop-types' // Es necesaria esta instancia para su uso; 

// Comunicación entre componentes. 

// Debemos tener en cuenta que las propiedades pueden ser por defecto asingando un valor; 
export const Parametros = ({ tienda, nombreTienda }) => {

    return (
        <div>
            <h3>{nombreTienda}</h3>
            <h4>Estas son nuestras marcas de camionetas</h4>
            <ul>
                {
                    tienda.camionetas.map((element, indice) => {
                        return (<li key={indice}>{element.marca} {element.version}</li>)
                    })
                }
            </ul>
            <hr />
            <h4>Estas son nuestras marcas de particulares</h4>
            <ul>
                {
                    tienda.particular.map((element, index) => {
                        return (<li key={index}>{element.marca} {element.version}</li>)
                    })
                }
            </ul>
        </div>
    )
}

// Validación de tipo de dato; 
// Parametros.propTypes = {
//     tienda: PropTypes.object.isRequired,
//     nombreTienda: PropTypes.string.isRequired
//     // El .isRequired, lo que permite es que si o si se contenga el dato;
// }
Parametros.propType = {
    tienda: PropTypes.object,
    nombreTienda: PropTypes.string
}

// Props por defecto; 
Parametros.defaultProps = {
    nombreTienda: "MidToyota",

    concecionario: {
        camionetas: [{
            marca: "Chévrolet",
            version: "Tracker",
            modelo: 2010,
            estado: "Bueno"
        },
        {
            marca: "Hyundai",
            version: "Creta",
            modelo: 2023,
            estado: "Deplorable"
        },
        {
            marca: "Toyota",
            version: "Prado",
            modelo: 2022,
            estado: "Excelente"
        }],
        particular: [{
            marca: "Chévrolet",
            version: "Sail",
            modelo: 2013,
            estado: "Bueno"
        },
        {
            marca: "Hyundai",
            version: "Grand i10",
            modelo: 2015,
            estado: "Deplorable"
        },
        {
            marca: "Toyota",
            version: "Corolla",
            modelo: 2021,
            estado: "Excelente"
        }]
    }
}
