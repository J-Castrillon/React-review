// Sirve para lo mismo que un useState, solo que permite tener todas las acciones de un mismo estado en un solo sitio.
// Son funciones puras que especifican cómo cambia el estado de la aplicación en respuesta a una acción.
// Contiene diferentes acciones que se van a disparar por la accion que le pasamos desde el componente.

// se compone de dos parametros:
// 1. Estado incializado;
// 2. Accion que lo dispara;
export const JuegoReducer = (state = [], action) => {
  switch (action.type) {
    case "guardar":
      return [...state, action.payload]; // El payload son los datos que quiero almacenar en el estado;
    case "borrar": 
      return state.filter(juego => juego.id !== action.payload) // Actualiza el estado con todos los que son diferentes al id que pasamos por el payload; 
    default:
      return state; // Siempre debe retornarse el estado, fijarse en el anterior return, donde tambien se devuelve el estado, pero expandido;
  }
};
