// en EcmaScript 7 es una nueva versión de EcmaScript
// Algunas de sus funcionalidades nuevas son:

// Includes
console.log("\n==== includes ====\n");
// los includes sirven para strings o arreglos

let array = [1, 2, 3, 4, 5, 6, 7];

if (array.includes(9)) {
  console.log("Si se encuentra");
} else {
  console.log("No se encuentra");
}

// Elevar a la potencia
console.log("\n==== Elevar a la potencia ====\n");

let base = 4;
let exponente = 3;
let resultado = base ** exponente;

console.log(resultado);
