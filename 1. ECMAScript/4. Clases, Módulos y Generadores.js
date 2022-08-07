// Crear clases
console.log("\n==== Clases ====\n");

class calculadora {
  constructor() {
    this.valorA = 0;
    this.valorB = 0;
  }
  sumar(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB;
  }
}

// Instancia
const calc = new calculadora();
console.log(calc.sumar(2, 2));

// // Usar modulos
console.log("\n==== Usar modulos ====\n");
// Es importante aclarar que se creo un modulo anteriormente en la carpeta del proyecto.
// Importar el modulo: Nos permite incluir en este caso, la función del modulo creado
const hello = require('./5.module');

// Imprimir el resultado de la función de otro modulo.
console.log(hello());

// Generadores "generations"
console.log("\n==== Generadores 'generations' ====\n");

function helloWord() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "Wordl";
  }
}

const generatorHello = helloWord();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);