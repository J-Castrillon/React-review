import React from 'react'
import { Routes, Route, Link, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { MainPortfolio } from '../Portfolio/MainPortfolio';
import { Projectos } from '../Portfolio/routesPortfolio/Projectos';
import { Contact } from '../Portfolio/routesPortfolio/Contact';
import { Services } from '../Portfolio/routesPortfolio/Services';
import { Curriculum } from '../Portfolio/routesPortfolio/Curriculum';
import { Error } from '../Routes/Error';
import { Home } from '../Portfolio/routesPortfolio/Home';
import { Detail } from '../Portfolio/routesPortfolio/Detail';

export const RouterPortfolio = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<MainPortfolio />}>
                    <Route path='' element={<Navigate to="home" />}></Route> {/* Se usa el navigate para que se seleccione el inicio */}
                    <Route path='home' element={<Home />}></Route>
                    <Route path='projectos' element={<Projectos />}></Route>
                    <Route path='contact' element={<Contact />}></Route>
                    <Route path='services' element={<Services />}></Route>
                    <Route path='curriculum' element={<Curriculum />}></Route>
                    <Route path='proyecto/:id' element={<Detail />}></Route>
                </Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
