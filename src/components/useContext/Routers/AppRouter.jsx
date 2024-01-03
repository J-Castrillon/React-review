import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Inicio } from "../Components/Inicio";
import { Acerca } from "../Components/Acerca";
import { Contacto } from "../Components/Contacto";
import { Login } from "../Components/Login";
import { Articulos } from "../Components/Articulos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <nav>
          <div className="logotypes">
            <h2>Use Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/acerca">Acerca</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <section className="contentSection">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Error, no existe la pagina que buscas</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
