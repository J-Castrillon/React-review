export const Storage = (key, item) => {
    // Conseguir lo que ya hay - Debe ser convertido a Json; 
    let elements = JSON.parse(localStorage.getItem(key));

    // Comprobar si es un array; 
    Array.isArray(elements) ? elements.push(item) : elements = [item];

    // Almacenamiento local;  
    localStorage.setItem(key, JSON.stringify(elements)); // Debe ser convertido a JSON String. Esto debido a que el localStorage solo guarda números o strings;

    return item;
}
