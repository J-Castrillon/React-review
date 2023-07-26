import React, { useState, useEffect } from 'react'

export const Giphy = () => {

    /* 
        Consumir el api; 
        Crear la interfaz de carga; 
        Crear la interfaz para cuando sucedan errores; 
    */

    const [loading, setLoading] = new useState(true);
    const [error, setError] = new useState('');
    const [query, setQuery] = new useState('cats');
    const [gifs, setGifs] = new useState([]);

    useEffect(() => {
        loadingChange(); 
    }, [])

    const loadingChange = ()=>{
        setTimeout(()=>{
            setLoading(false); 
        },3000)
    }

    const giphyApi = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search';
        const key = 'KK32FKkqtmL4pIZ4t9wiEI51P0mCk5kK';
        const limit = '40';
        let urlComplete = `${url}?q=${query}&api_key=${key}&limit=${limit}`;

        await fetch(urlComplete)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`ERROR HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setGifs(data.data);
                console.log(gifs); 
            })
            .catch(errores => setError(errores));
    }

    if (error === "" && loading === false) {
        return (
            <div id='content-api' className='display-center'>
                <header id="header-api" className='display-center'>
                    <form action="#" id="form-api" className='display-center'>
                        <input type="text" name="textbox" id="textbox" onChange={e=>setQuery(e.target.value)}/>
                        <button type="button" id="button" onClick={e => {
                            e.preventDefault();
                            giphyApi(); 
                        }}>Buscar</button>
                    </form>
                </header>

                <main id="results-main-content">
                    <div id="results-content" className='display-center'> 
                        <div id="gifs">
                            {
                                gifs.map((element, index) => {
                                    return(<div className="content-images" key={index}>
                                        <img src={element.images.original.url} alt={element.id}  className='imgs'/>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        )
    } else if (loading === true && error === "") {
        return (
            <div>
                {
                    <h3>INTERFAZ DE CARGA</h3>
                }
            </div>
        )
    } else if (error !== "") {
        return (
            <div>
                {
                    alert(error)
                }
            </div>
        )
    }
}
