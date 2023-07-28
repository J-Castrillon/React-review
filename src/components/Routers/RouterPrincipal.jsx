import React from 'react'; 
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'; 
import { Inicio } from '../Routes/Inicio';
import { Error } from '../Routes/Error'; 
import { Articulos } from '../Routes/Articulos';
import { Contact } from '../Routes/Contact';


export const RouterPrincipal = () => {
    return (
        // Debo retornar la configuración de todas las rutas; 
        <BrowserRouter>
            {/* Carga las rutas */}
            <Routes>
                {/* Configuración de cada ruta */}
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/inicio" element={<Inicio />}></Route>
                <Route path="/articulos" element={<Articulos />}></Route>
                <Route path="/contacto" element={<Contact />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}