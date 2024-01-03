import React, { useReducer } from "react";
import { CountReducer } from "../countReducer";

// Contador basico utilizando reducers para entender la logica;

export const Count = () => {
  const [contador, dispatch] = useReducer(CountReducer, 0);

  const substract = (e) => {
    const action = {
      type: "sub",
      payload: 1,
    };

    dispatch(action);
  };

  const add = (e) => {
    const action = {
      type: "add",
      payload: 1,
    };

    dispatch(action);
  };

  return (
    <div>
      <h3>Contador con reducers</h3>
      <h3>{contador}</h3>
      <button onClick={(e) => substract(e)}>-</button> &nbsp;{" "}
      <button onClick={(e) => add(e)}>+</button>
    </div>
  );
};
