// tenemos como principales cambios en la versión 8 de ECMAScript:
// Object entries
// Object values
// padding

const data = {
  fronted: "Liliana",
  backend: "Jeisson",
  desing: "Jose",
};

// Object entries => nos permite crear un arreglo con los atributos de un objeto
console.log("\n==== Object entries ====\n");

const entries = Object.entries(data);
console.log(entries);

// podemos usar varias propiedades como length:
console.log(entries.length);

// Object values => Nos permite crear un arreglo con los valores de cada atributo
console.log("\n==== Object values ====\n");

const value = Object.values(data);
console.log(value);

// podemos usar varias propiedades como length:
console.log(entries.length);

// Asignacipon de elementos Padding
console.log("\n==== Asignación de elementos 'Padding' ====\n");

const string = "Hola";

// Agregar elementos al inicio
// primer parametro = cantidad de carácteres, segundo parametro = caracteres para añadir
console.log(string.padStart(9, "Hey! "));

// Agregar elementos al final
// primer parametro = cantidad de carácteres, segundo parametro = caracteres para añadir
console.log(string.padEnd(10, " Mundo"));
