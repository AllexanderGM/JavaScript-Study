// Variables
// Las variables una especie de "cajas de información" que se almacenan en la memoria del ordenador, permitiendo
// que se puedan reutilizar en diferentes partes del código. Estas variables pueden ser de cualquier tipo, como
// números, cadenas de texto, etc. Las más comunes son:

// Enteros: Todos los números enteros que toman en cuanta positivos y negativos, un ejemplo sería:
let numeroEntero = 10;

// Decimales: Permite agregar decimales como en el siguiente ejemplo:
let numeroDecimal = 3.1416;

// Lógicas: Son las variables que tienen dos valores: verdadero y falso, se conocen como booleanos y sus valores
// son ture y false:
let datoBooleano = true;

// Carácter: son variables que guardan una letra, un símbolo o un número, de aquí podemos tener una cadena de
// caracteres y poder completar frases
let caracter = a;
let string = "Hola mundo";

// Las variables se pueden declarar de tres formas:
// 1. la primera forma es con la palabra reservada var, seguida del nombre de la variable y una asignación de valor.
// 2. la segunda forma es con la palabra reservada let, seguida del nombre de la variable y una asignación de valor.
// 3. la tercera forma es con la palabra reservada const, seguida del nombre de la variable y una asignación de valor.

// La palabra reservada var se utiliza para declarar variables globales.
// Las variables globales pueden ser accedidas desde cualquier parte del código.

// La palabra reservada let se utiliza para declarar variables locales en función de su contexto o Scope.
// Las variables locales solo pueden ser accedidas dentro de su contexto.

// La palabra reservada const se utiliza para declarar variables constantes.
//Las variables constantes no pueden ser modificadas en ninguna parte del código después de su declaración.

// Ejemplo:
// Var
var nombre = "Alex";
console.log(nombre);

// Se puede reasignar el valor de la variable
nombre = "Andres";
console.log(nombre);

// Let
function saludar() {
  let nombreLet = "Ana";
  console.log(nombreLet);
}

// Error, la variable nombreLet no está definida por que solo existe dentro del contexto de la función saludar()
console.log(nombreLet);

// Const
const PI = 3.1416;
console.log(PI);

// Error, la variable PI no puede ser reasignada porque es una constante
PI = 3.14;
