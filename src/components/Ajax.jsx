import React, { useEffect, useState } from 'react'

export const Ajax = () => {

    // forma en promesa; 
    const [usuarios, setUsuarios] = useState([]);
    const [usuariosAjax, setUsuariosAjax] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getUsuarios = () => {
        setUsuarios([
            {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ]);
    }

    useEffect(() => {
        getUsuarios();
        fetchUsuarios();
    }, [])

    // Utilizando promesas y peticiones Ajax con fetch;
    // Para este ejemplo puede hacerse también sin el asyn y el await; 
    const fetchUsuarios = () => {

        setTimeout(async () => {
            let url = 'https://reqres.in/api/users?page=1'; 
            let urlMala = 'https://reqres.in/api/?page=1'; 

            await fetch(urlMala)
                .then(response => {
                    if (!response.ok)
                        throw new Error(`ERROR HTTP: ${response.status}`);

                    return response.json();
                })
                .then(data => {
                    setUsuariosAjax(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(`Ocurrió un error HTTP: ${error.message}`);
                });
        }, 2000);
    }

    if (error !== "") {
        return(
            <div className='main-content-ajax display-center'>
                <h2>Ocurrió un error {error}</h2>
            </div>
        )
    } else if (loading === true) {
        // Efecto de cargando;
        return (
            <div className='main-content-ajax display-center'>
                <h2>CARGANDO</h2>
            </div>
        )
    } else if(loading === false && error === ""){
        return (
            <div className='main-content-ajax display-center'>
                <div id="empty">
                    <h3>Listado de usuarios</h3>
                    <p>Por defecto y sin promesas ni nada</p>
                    <ol>
                        {/* Esto es sin nada de peticiones ni promesas;  */}
                        {
                            usuarios.map((usuario, indice) => {
                                return (<li key={indice}>{usuario.email}</li>);
                            })
                        }
                    </ol>
                    <br /><hr /><br />
                    <h3>Listado de usuarios</h3>
                    <p>Con peticiones ajax</p>
                    <ol>
                        {/* Esto es con las peticiones Ajax;  */}
                        {
                            usuariosAjax.map((user, index) => {
                                return (<li key={index}>{user.first_name}&nbsp;{user.last_name}<br /><img src={user.avatar} width='60px'></img></li>);
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
