//3. Multilínea, Spread Operator, Desestructuración, let y const

// Multilineas
console.log("\n==== Multilineas ====\n");

// antes de es6
let frase =
  "Quiero escribir una frase supremamente épica \n" + "Otra frase cool";
console.log(frase);

// despues de es6
let frase2 = `Esta es mi segunda frase supremamente épica
la ultima frase cool`;
console.log(frase2);

// Destructuración de elementos
console.log("\n==== Destructuración de elementos ====\n");

// Se crea un objeto
let person = {
  name: "oscar",
  age: 32,
  country: "Col",
};

console.log(person.name, person.age, person.country);

// Se extraen sus propiedades
let { name, age, country } = person;

console.log(name, age, country);

// operador de propagación
console.log("\n==== Operador de propagación ====\n");

// creamos arrays
let team1 = ["oscar", "julian", "ricardo"];
let team2 = ["valeria", "yesica", "camila"];

// el operador de propagación se crea con tres puntos consecutivos:
let grupos = ["Jeisson", ...team1, ...team2];
console.log(grupos);

// Variables con var, Let y const
console.log("\n==== Variables con var, Let y const ====\n");

// Creamos variables con const, let y var en un scope diferente
// para acceder a las variables, hay que hacerlo en su contexto scope
{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global Let";
  console.log(globalLet);
}
{
  const globalConst = "Global Const";
  console.log(globalConst); // si quisieramos re asignar una variable const no podriamos hacerlo
}

// podemos accedemos a las variables var fuera del scope

console.log(globalVar);
