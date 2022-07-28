// Funciones de arrays
console.log("\n ================ Funciones de arrays ================ \n");

// Las funciones de los arrays permiten manipular los elementos del array mediante una función o callback que se pasa como
// parámetro y devuelve un valor o un array con el resultado de la operación.

// IMPORTANTE: Las funciones de arrays no modifican el array original.

// Array de frutas
let frutas = ["🍎", "🍌", "🍓", "🍈"];

// .forEach(callback)
console.log(" \n ==== .forEach ====");

// Recorre el array ejecuta una iteración para cada elemento. Es similar a un for or, pero no devuelve ningún valor.

// Función: forEach
// Valores: NombreArray, indice
// Resultado: nuevoArray

//Ejemplo:
frutas.forEach((fruta, indice) => {
  console.log(" " + indice + " -> " + fruta);
});

// .map(callback)
console.log(" \n ==== .map ====");

// Devuelve un nuevo array y en su resultado devuelve la ejecución de una función, esto, para cada elemento del array.

// Función: map
// Valores: NombreArray
// Resultado: nuevoArray

let nuevoArray2 = frutas.map((fruta) => {
  return "🧺" + fruta;
});
console.log(" -> Nuevo array map: " + nuevoArray2);

// Por cada elemento del array de frutas, se añade una 🧺 al principio de cada elemento.
// NuevoArray2 es un nuevo array con los resultados de la función map // 🧺🍎, 🧺🍌, 🧺🍓, 🧺🍈

// .filter(callback)
console.log(" \n ==== .filter ====");

// Devuelve un nuevo array con los elementos del array que cumplen la condición.

// Función: filter
// Valores: NombreArray
// Resultado: nuevoArray

let nuevoArray3 = frutas.filter((fruta) => {
  return fruta === "🍈";
});
console.log(" -> Nuevo array filter: " + nuevoArray3);

// NuevoArray3 es un nuevo array con los resultados de la función filter // 🍈

// .reduce(callback)
console.log(" \n ==== .reduce ====");

// Devuelve un valor o un array con el resultado de la operación.

// Función: reduce
// Valores: acumulador, NombreArray
// Resultado: nuevoArray

let nuevoArray4 = frutas.reduce((acumulador, fruta) => {
  return acumulador + fruta;
});
console.log(" -> Nuevo array reduce: " + nuevoArray4);

// NuevoArray4 es un nuevo array con los resultados de la función reduce // En este caso, el resultado es un string con todas las frutas concatenadas.

// .join(separador)
console.log(" \n ==== .join ====");

// Devuelve una cadena de carácteres con los elementos del array espaciado por un separador.

// Función: join
// Valores: Separador
// Resultado: NuevaVariable

let cadenaFrutas = frutas.join(" - ");
console.log(" -> Lista de frutas: " + cadenaFrutas);

// El resultado es la variable con valores = "🍎 - 🍌 - 🍓 - 🍈" Esto es un String

// .concat(array)
console.log(" \n ==== .concat ====");

// Devuelve un nuevo array con los elementos del array concatenados con los elementos del array pasado como parámetro.

// Función: concat
// Valores: Nuevos elementos
// Resultado: nuevoArray

let nuevoArray = frutas.concat(["🍒", "🍍"]);
console.log(" -> Lista de frutas: " + nuevoArray);

// Se agregan al final los nuevos elementos 🍎,🍌,🍓,🍈,🍒,🍍

// .indexOf(elemento)
console.log(" \n ==== .indexOf ====");

// Devuelve el índice del primer elemento del array que coincida con el elemento pasado como parámetro.

// Función: indexOf
// Valores: elemento a encontrar
// Resultado: NuevaVariable

let indiceFruta = frutas.indexOf("🍈");
console.log(" -> Índice de la fruta 🍈: " + indiceFruta); // 3

// .lastIndexOf(elemento)
console.log(" \n ==== .lastIndexOf ====");

// Devuelve el índice del último elemento del array que coincida con el elemento pasado como parámetro.

// Función: lastIndexOf
// Valores: elemento a encontrar
// Resultado: NuevaVariable

let indiceFruta2 = frutas.lastIndexOf("🍈");
console.log(" -> Índice de la fruta 🍈: " + indiceFruta2); // 3
