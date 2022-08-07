// Dinamic importation
// importar de manera dinamica una importación cuando se desencadene un llamado

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./file.js");
  module.hello();
});

// Crear numeros con la capacidad mas grande permitida
const bigNumber = 9007199254740991n;
const otherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(otherBigNumber);

// promesas con allSttled

const promise1 = new Promise((resolve, reject) => {
  reject("reject");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("resolve");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("resolve 1");
});

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// global.this

console.log(window);
console.log(globalThis);

// En el navegador
window === globalThis; // true

// En Node.js
global === globalThis; // true

// Operador Nullish Coalescing

// const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres";

const usuario2 = { name: "Juan" };
const nombre2 = usuario2.name ?? "Andres";

console.log(nombre1); // 'Andres'
console.log(nombre2); // 'Juan'
