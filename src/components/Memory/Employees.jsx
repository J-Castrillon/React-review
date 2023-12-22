import React, { useEffect, useState } from "react";

// El React.memo() funciona para evitar hacer renderizaciones de
// componentes que no es necesario cargar varias veces al cargar otro.

// Tambien es posible aplicar el useMemo a una funcion especifica para asi no renderizarla si no es necesario. 

// En este caso queremos decir que si la dependencia (en este caso la prop) page cambia, que recalcule el resultado
// y lo devuelva. 

export const Employees = React.memo(({page}) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async (numberPage) => {
    const url = `https://reqres.in/api/users?page=${numberPage}`;

    await fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`ERROR HTTP: ${response.status}`);

        return response.json();
      })
      .then((datos) => {
        const { data } = datos;
        setEmployees(data);
        console.log(data);
      })
      .catch((error) => {
        setError(`Ocurrió un error HTTP: ${error.message}`);
      });
  };

  useEffect(() => {
    getEmployees(page);
  }, []);

  useEffect(() => {
    getEmployees(page);
  }, [page]);

  return (
    <div>
      <h1>Employees</h1>
      <ul className="list-memo">
        {employees.length !== 0 && employees.map((element, index) => {
          return (
            <li key={index}>
              <p>{`${element.email} - ${element.first_name}`}</p>
              <img src={element.avatar} alt="textAlternative" />
            </li>
          );
        })}
      </ul>
    </div>
  );
});
