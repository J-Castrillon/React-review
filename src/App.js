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
      <UseLayout />
    </div>
  );
}

export default App;
