import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../Routes/Inicio';
import { Error } from '../Routes/Error';
import { Articulos } from '../Routes/Articulos';
import { Contact } from '../Routes/Contact';
import { Compras } from '../Routes/Compras';
import { Cursos } from '../Routes/ComprasPanel/Cursos';
import { JavaScriptCourse } from '../Routes/ComprasPanel/JavaScriptCourse';
import { ReactCourse } from '../Routes/ComprasPanel/ReactCourse';

// El comportamiento es igual al de un componente; 
export const RouterPrincipal = () => {

    const activeClass = (isActive) => {
        return isActive ? 'active links' : 'links';
    }

    return (
        // Debo retornar la configuración de todas las rutas; 
        <BrowserRouter>

            {/* Creación de un navegador */}
            <nav className="navigator">
                <ol>
                    <li><NavLink to="/inicio" className={({ isActive }) => activeClass(isActive)}>Inicio</NavLink></li>
                    <li><NavLink to="/articulos" className={({ isActive }) => activeClass(isActive)}>Articulos</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => activeClass(isActive)}>Contacto</NavLink></li>
                </ol>
            </nav>

            {/* Carga las rutas/componentes */}
            <Routes>
                {/* Configuración de cada ruta/componente */}
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/inicio" element={<Inicio />}></Route>
                <Route path="/articulos" element={<Articulos />}></Route>
                <Route path="/contacto" element={<Contact />}></Route>
                <Route path="*" element={<Error />}></Route>
                <Route path="/redirect" element={<Navigate to="/inicio"/>}></Route> {/* Redireccionar */}

                {/* Subrutas */}
                <Route path="/compras/*" element={<Cursos />}>
                    <Route path="javascript" element={<JavaScriptCourse />}></Route>
                    <Route path="react" element={<ReactCourse />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}