console.log("\n==== Parametros restantes (...Restante) ====\n");
// Parametros Rest(...restante)
// Se usan para guardar en una variable, los objetos restantes de un array, objeto o string

const obj = {
  name: "jeisson",
  age: 24,
  country: "Colombia",
};

let { name, ...all } = obj;
console.log(name, all);

// Se puede usar este operador de la siguiente manera tambien:

const obj2 = {
  name: "Jeisson",
  age: 24,
};
console.log(obj2);

const obj3 = {
  ...obj2,
  country: "Colombia",
};
console.log(obj3);

// finally
console.log("\n==== finally en las promesas ====\n");

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hola Mundo"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWord()
  .then((response) => console.log(response))
  .catch((error) => conole.log(error))
  .finally(() => console.log("Finalizo")); //Se ejecuta siempre que termine la espera de la promesa

// Regex
console.log("\n==== Regex ====\n");

// Sintaxis = /([numInicial-numFinal]{cantidadNum})-SiguienteBloque/;
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; // crear un grupo de informacion
const match = regexData.exec("2022-08-06"); //.exec es para ejecutar y colocar el dato en cada grupo
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
