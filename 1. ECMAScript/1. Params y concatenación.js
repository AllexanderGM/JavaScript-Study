// Default Params y Concatenación

// Se usa mucho las comillas francesas: ``

// Valores por defecto en funciones:
console.log("==== Valores por defecto en funciones ====");

// antes de es6
function nweFuncion(name, age, country) {
  var name = name || "Jeisson";
  var age = age || 32;
  var country = country || "Col";
  console.log(name, age, country);
}

// despues de es6
function nweFuncion2(name = "Jeisson", age = 32, country = "Col") {
  console.log(name, age, country);
}

nweFuncion();
nweFuncion2("Vivian", 23, "Col");

// Concatenaciones:
console.log("==== Concatenación ====");

// Declarar variables
let palabra1 = "Hola";
let palabra2 = "World";

// antes de es6
let Concatenacion = palabra1 + " " + palabra2;
console.log(Concatenacion);

// despues de es6
let Concatenacion2 = `${palabra1} ${palabra2}`;
console.log(Concatenacion2);


