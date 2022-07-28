// Métodos de arrays
// Un método de un array es una acción que se realiza mediante un comando, esto modifica el array original y devuelve
// un valor o un array con el resultado de la operación.

// IMPORTANTE: Los métodos de arrays se trabanjan sobre el array original. No se devuelve un nuevo array.

// Los métodos de arrays son:

// Array
let frutas = ["🍎", "🍌", "🍓", "🍈"]; // Array de frutas

// Manipulación de arrays
console.log("\n ================ Manipulación de arrays ================ \n");

// .length -> Devuelve el número de elementos del array. Es decír la longitud del array.
let cantFrutas = frutas.length; // 4
console.log(" -> Cantidad de frutas: " + cantFrutas);

// .push(elemento) -> Agrega un valor al final del array.
frutas.push("🍐");
console.log(" push -> Lista de frutas: " + frutas);

// .pop() -> Elimina el último elemento del array.
frutas.push();
console.log(" push -> Lista de frutas: " + frutas); // No hay peras

// .shift() -> Elimina el primer elemento del array.
frutas.shift();
console.log(" shift -> Lista de frutas: " + frutas); // No hay manzanas

// .unshift(elemento) -> Agrega un valor al inicio del array.
frutas.unshift("🍇");
console.log(" unshift -> Lista de frutas : " + frutas); // 🍇, 🍌, 🍓, 🍈

// .splice(indiceDeInicio, cantidadDeElementos) -> Elimina elementos del array.
frutas.splice(1, 1);
console.log(" splice -> Lista de frutas: " + frutas); // 🍇, 🍓, 🍈

// .reverse() -> Invierte el orden de los elementos del array.
frutas.reverse();
console.log(" reverse -> Lista de frutas: " + frutas); // 🍈, 🍓, 🍇

// .sort() -> Ordena los elementos del array.
frutas.sort();
console.log(" sort -> Lista de frutas: " + frutas); // 🍇, 🍓, 🍈
// Ordena alfabéticamente o numéricamente según el valor del elemento, si es un emoji se ordena en su representación en Unicode.

// Si el array esta declarado como una constante, se modifica igualmente ya que almacena una referencia a la misma dirección de memoria.
const frutas2 = ["🍎", "🍌", "🍓", "🍈"];
frutas2.push("🍐");
console.log(" push -> Lista de frutas: " + frutas2); // 🍎, 🍌, 🍓, 🍈, 🍐
