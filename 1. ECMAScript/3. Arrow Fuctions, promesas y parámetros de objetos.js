// Crear objetos desde otros elementos
console.log("\n==== Crear objetos desde otros elementos ====\n");

let name = "Jeisson";
let age = 24;

// antres de es6
obj = { name: name, age: age };
console.log(obj);

// despues de es6
obj2 = { name, age };
console.log(obj2);

// funciones tipo flecha
console.log("\n==== Funciones tipo flecha ====\n");

// Otra forma de escribir la sintaxis de las funciones, ahorrando lineas de codigo

let persons = [
  { name: "Jeisson", age: 24 },
  { name: "Liliana", age: 23 },
];

// antes de es6
let listOfNAmes = persons.map(function (item) {
  console.log(item.name);
});

// despues de es6
let listOfNAmes2 = persons.map((item) => console.log(item.name));

// otros ejemplos:

// const NameFunction = (item1, item2, item3) => {
//    ...Bloque de codigo
//}

// const NameFunction = item => {
//    ...Bloque de codigo
//}

// const Multiplicacion = num => num * num;

// Promesas
console.log("\n==== Promesas ====\n");

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((error) => console.log(error))
  .catch(() => console.log("Adios"));
