// Metodo flat
console.log("\n==== Flat ====\n");
// un nuevo método que nos permite aplanar arreglos.
// Array.prototype.flat(nivel_de_profundidad):

let array = [1, 2, 3, [1, 2, 3, [(1, 2, 3)]]];

console.log(array.flat());

// Metodo flatMAp
console.log("\n==== FlatMap ====\n");
//lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
// Array.prototype.flatMap();

let arrayFlatMap = [1, 2, 3, 4, 5];
console.log(arrayFlatMap.flatMap((value) => [value, value * 2]));

// trimStart y trimEnd
console.log("\n==== trimStart & trimEnd ====\n");
// permite quitar los espacios al inicio o al final dependiendo de la funciona.
// String.prototype.trimStart() | String.prototype.trimEnd()

let hello = "    hola word   ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// try/catch
console.log("\n==== try/catch ====\n");
// ahora puedes utilizarlo sin necesidad de especificaro como catch(error)
// sino directamente usarlo en el scope del catch.

// antes de es10
try {
  console.log("hola");
} catch (error) {
  console.log("adios");
}

// despues de es10
try {
  console.log("hola");
} catch {
  console.log("adios");
}

// fromEntries
console.log("\n==== fromEntries ====\n");
// Podemos transformar arreglos a objetos de manera inversa que el Object.entries
// Object.fromEntries() lo inverso a Object.entries()

let entries = [
  ["name", "jeisson"],
  ["age", 24],
];
console.log(Object.fromEntries(entries));

// Symbol
console.log("\n==== Symbol ====\n");
// permite regresar el descripcion opcional del Symbol

let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
