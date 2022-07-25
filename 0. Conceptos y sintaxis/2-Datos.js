// Tipos de datos
// Los datos se dividen en dos, los primitivos y los compuestos, pueden ser:

/* Primitivos: */

// 1. Números (Number) - Admite enteros y decimales.
// Ejemplo:
let numero = 10;
console.log(
  "El valor de la variable numero es: " +
    numero +
    " y su tipo es: " +
    typeof numero
);

// 3. Booleanos (Boolean) - Sus valores son verdadero y falso: True & False, o 1 o 0 respectivamente.
// Ejemplo:
let booleano = true;
console.log(
  "El valor de la variable booleano es: " +
    booleano +
    " y su tipo es: " +
    typeof booleano
);

/* Compuestos: */

// 2. Cadenas de texto (String) - Admite carácteres, simbolos y numeros.
// Ejemplo:
let cadena = "Hola mundo";
console.log(
  "El valor de la variable cadena es: " +
    cadena +
    " y su tipo es: " +
    typeof cadena
);

// 4. Arreglos (Array) - son una susesión de slots de memoria que se pueden almacenar en un solo lugar, poseen indice y contenido.
// Ejemplo:
let arreglo = [1, 2, 3, 4, 5];
console.log(
  "El valor de la variable arreglo es: " +
    arreglo +
    " y su tipo es: " +
    typeof arreglo
);

// 5. Objetos (Object) - Es una colección de propiedades y una propiedad es una asociación entre un nombre y un valor, el valor
//                       puede ser un función. En este ultimo caso, esta propiedad es conocido como método
// Ejemplo:
let objeto = {
  nombre: "Ana",
  apellido: "Galarza",
};
console.log(
  "El valor de la variable objeto es: " +
    objeto +
    " y su tipo es: " +
    typeof objeto
);

// 6. Funciones (Function) - Es un grupo aislado de instrucciones que funciona con una entradad e datos y una salida.
// Ejemplo:
let funcion = function () {
  console.log("Hola mundo");
};
console.log(
  "El valor de la variable funcion es: " +
    funcion +
    " y su tipo es: " +
    typeof funcion
);

// 7. Null - Los valores null son valores especiales que no tienen valor.
// Ejemplo:
let nulo = null;
console.log(
  "El valor de la variable nulo es: " + nulo + " y su tipo es: " + typeof nulo
);

// 8. Undefined - Los valores undefined es un valor que no existe.
// Ejemplo:
let indefinido;
console.log(
  "El valor de la variable indefinido es: " +
    indefinido +
    " y su tipo es: " +
    typeof indefinido
);

// 9. NaN - El valor NaN es un valor especial que no se puede convertir a un número. NaN se representa con el *número* "Not a Number".
// Ejemplo:
let nan = "Hola mundo";
// El valor de la variable nan es NaN, porque la cadena "Hola mundo" no se puede convertir a un número
nan = parseInt(nan);
console.log(
  "El valor de la variable nan es: " + nan + " y su tipo es: " + typeof nan
);
