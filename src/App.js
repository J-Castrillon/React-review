import logo from "./logo.svg";
import "./App.css";
import { MiComponente } from "./components/MiComponente";
import { Parametros } from "./components/Parametros";
import { Eventos } from "./components/Eventos";
import { UseState } from "./components/UseState";
import { YearExample } from "./components/YearExample";
import { UseEffect } from "./components/UseEffect";
import { Ajax } from "./components/Ajax";
import { Giphy } from "./components/Giphy";
import { Forms } from "./components/Forms";
import { Project } from "./components/Project";
import { RouterPrincipal } from "./components/Routers/RouterPrincipal";
import { RouterPortfolio } from "./components/Routers/RouterPortfolio";
import { MainPortfolio } from "./components/Portfolio/MainPortfolio";
import { UseRef } from "./components/UseRef";
import { UseMemo } from "./components/Memory/UseMemo";
import { UseLayout } from "./components/layoutVsEffect/useLayout";
import { Juegos } from "./components/Reducers/components/juegos";
import { Count } from "./components/Reducers/components/Count";
import { AppRouter } from "./components/useContext/Routers/AppRouter";
import { PruebaContext } from "./context/pruebaContext";
import { useEffect, useState } from "react";
import { UseId } from "./components/Id/UseId";
import { Custom } from "./components/Hooks/components/Custom";
import { Formulario } from "./components/Hooks/components/Formulario";
import { Usuario } from "./components/Hooks/components/Usuario";

function App() {
  const nombreTienda = "MidToyota";

  const concecionario = {
    camionetas: [
      {
        marca: "Chévrolet",
        version: "Tracker",
        modelo: 2010,
        estado: "Bueno",
      },
      {
        marca: "Hyundai",
        version: "Creta",
        modelo: 2023,
        estado: "Deplorable",
      },
      {
        marca: "Toyota",
        version: "Prado",
        modelo: 2022,
        estado: "Excelente",
      },
    ],
    particular: [
      {
        marca: "Chévrolet",
        version: "Sail",
        modelo: 2013,
        estado: "Bueno",
      },
      {
        marca: "Hyundai",
        version: "Grand i10",
        modelo: 2015,
        estado: "Deplorable",
      },
      {
        marca: "Toyota",
        version: "Corolla",
        modelo: 2021,
        estado: "Excelente",
      },
    ],
  };

  // Obtener el año actual;
  const date = new Date();
  const year = date.getFullYear();

  const cursos = {
    id: 1,
    titulo: "Master en MERN",
    descripcion: "Estudiando las tecnologias de MERN a profundidad",
  };

  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    // Persistencia de los datos;
    const logueado = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(logueado);
  }, []);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className="App">
      {/* <MiComponente /> */}
      {/* <Parametros tienda={concecionario} nombreTienda={nombreTienda} /> */}
      {/* <Eventos /> */}
      {/* <UseState /> */}
      {/* <YearExample actualYear={year}/> */}
      {/* <UseEffect /> */}
      {/* <Ajax /> */}
      {/* <Giphy /> */}
      {/* <Forms /> */}
      {/* <Project /> */}
      {/* <RouterPrincipal /> */} {/* Cargar el enrutador */}
      {/* <RouterPortfolio /> */}
      {/* <UseRef /> */}
      {/* <UseMemo/> */}
      {/* <UseLayout /> */}
      {/* Reducers */}
      {/* <Juegos/> 
      <Count/> */}


      {/* Estamos diciendo que todos los componentes envueltos 
          por el contexto 'PruebaContext', van a compartir el valor 
          pasado a traves del provider y la propiedad value */}
      {/* Pasando un useState */}
      {/* <PruebaContext.Provider value={{ usuario, setUsuario }}>
        <AppRouter />
      </PruebaContext.Provider> */}

      {/* <UseId/> */}
      {/* <Custom/> */}
      {/* <Formulario/> */}
      <Usuario/>
    </div>
  );
}

export default App;
