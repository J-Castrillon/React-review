import React, { useEffect, useState } from "react";
import { useAjax } from "../useAjax";

export const Usuario = () => {

    const [url,setUrl] = useState('https://reqres.in/api/users/1')
    const {datos, loading} = useAjax(url);

  const user = (e) => {
    let id = e.target.value;
    setUrl(`https://reqres.in/api/users/${id}`);
  };

  return (
    <div>
      <h1>Usuario: </h1>
      <p>{loading == true && "Cargando"}</p>
      <p>
        Datos del usuario:{" "}
        {loading === false && datos?.first_name}
      </p>
      <input type="number" name="user" id="user" onChange={user} />
    </div>
  );
};
