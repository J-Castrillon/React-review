import React, { useLayoutEffect, useState } from "react";

// Comparacion de los hooks de useEffect, y el useLayoutEffect
// si necesitas realizar operaciones sincrónicas
// que afectan directamente al diseño de la interfaz de usuario,
// como medidas de elementos o manipulación del DOM antes del repintado,
// useLayoutEffect podría ser más adecuado.

// Es efectivo y util para las responsive en versiones movile, desktop or tablet.

const urlMobile =
  "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const urlDesktop =
  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const UseLayout = () => {
  const [responsive, setResponsive] = useState("desktop");

  // Esto es correcto, ya que tiene en cuenta el DOM antes de pintar todo. 
  useLayoutEffect(() => {
    window.innerWidth > 700
      ? setResponsive("desktop")
      : setResponsive("mobile");
  });

  return (
    <div>
      <center>
        <h1>Diferencias entre useEffect, y el useLayoutEffect</h1>

        {responsive === "desktop" && (
          <div>
            <img
              src={urlMobile}
              alt="Mobile image"
              title="Mobile image"
              className="mobile"
            />
          </div>
        )}

        {responsive === "mobile" && (
          <div>
            <img
              src={urlDesktop}
              alt="Desktop image"
              title="Desktop image"
              className="desktop"
            />
          </div>
        )}
      </center>
    </div>
  );
};
