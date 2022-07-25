// Operadores
console.log("============ Operadores =============\n");

// Los operadores son procedimientos que se utilizan para realizar operaciones matemáticas, lógicos o de comparación.
// Para la explicación vamos a usar 2 valores:
let numero1 = 10;
let numero2 = 20;
console.log("-> Numero 1: " + numero1);
console.log("-> Numero 2: " + numero2);

// Operadores matemáticos:
console.log("\n============ Operadores matemáticos ============\n");

// + Suma - Suma dos o mas elementos
// Ejemplo:
console.log("El resultado de la suma es: " + (numero1 + numero2));

// - Resta - Resta dos o mas elementos
// Ejemplo:
console.log("El resultado de la resta es: " + (numero1 - numero2));

// * Multiplicación - multiplica dos o mas elementos
// Ejemplo:
console.log("El resultado de la multiplicación es: " + numero1 * numero2);

// / División - divide dos elementos
// Ejemplo:
console.log("El resultado de la división es: " + numero1 / numero2);

// % Módulo - residuo de una división
// Ejemplo:
console.log("El resultado del módulo es: " + (numero1 % numero2));

// ** Potencia
// Ejemplo:
console.log("El resultado de la potencia es: " + numero1 ** numero2);

// Operadores lógicos:
console.log("\n============ Operadores lógicos ============\n");

// && AND (Y) - El resultado es true si los dos valores son verdaderos, si son falsos, regresa false
// Ejemplo:
console.log("El resultado del AND es: " + (numero1 > 10 && numero2 > 10));

// || OR (O) - El resultado es true si uno de los dos valores es verdadero, si los dos son falsos regresa false
// Ejemplo:
console.log("El resultado del OR es: " + (numero1 > 10 || numero2 > 10));

// ! NOT (NO) - El resultado es opuesto al valor booleano
// Ejemplo:
console.log("El resultado del NOT es: " + !(numero1 > 10));

// Operadores de comparación:
console.log("\n============ Operadores de comparación ============\n");

// == Igual a - El resultado sera booleano y compara el valor de la variable
// Ejemplo:
console.log("El resultado de la iguación es: " + (numero1 == numero2));

// === Igual e identico a - El resultado sera booleano y compara el valor de la variable junto con el tipo de variable
// Ejemplo:
console.log(
  "El resultado de la iguación estricta e identico a es: " +
    (numero1 === numero2)
);

// != Diferente de - El resultado será booleano y verifica la diferencia de los valores que tienen las variables
// Ejemplo:
console.log("El resultado de la diferencia es: " + (numero1 != numero2));

// !== Diferente e identico a - El resultado será booleano y verifica la diferencia de los valores y los tipos de variable que tienen las variables
// Ejemplo:
console.log(
  "El resultado de la diferencia estricta e identico a es: " +
    (numero1 !== numero2)
);

// > Mayor que - El resultado será booleano y verifica que un valor sea mayor a otro
// Ejemplo:
console.log("El resultado de la mayor que es: " + (numero1 > numero2));

// < Menor que - El resultado será booleano y verifica que un valor sea menor que otro
// Ejemplo:
console.log("El resultado de la menor que es: " + (numero1 < numero2));

// >= Mayor o igual que - El resultado será booleano y verifica que un valor sea mayor o igual a otro
// Ejemplo:
console.log("El resultado de la mayor o igual que es: " + (numero1 >= numero2));

// <= Menor o igual que - El resultado será booleano y verifica que un valor sea menor o igual a otro
// Ejemplo:
console.log("El resultado de la menor o igual que es: " + (numero1 <= numero2));

// Operadores de asignación:
console.log("\n============ Operadores de asignación ============\n");

//creamos un valor numero3 para hacer esta parte de la explicación y le asignamos el valor de numero 1:
let numero3;

// = Asignación - asigna valores y puede re escribir variables
// Ejemplo:
numero3 = numero1;
console.log("El resultado de la asignación es: " + numero3);

// += Suma y asignación
// Ejemplo:
numero3 += 5;
console.log("El resultado de la suma y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// -= Resta y asignación
// Ejemplo:
numero3 -= 5;
console.log("El resultado de la resta y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// *= Multiplicación y asignación
// Ejemplo:
numero3 *= 5;
console.log("El resultado de la multiplicación y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// /= División y asignación
// Ejemplo:
numero3 /= 5;
console.log("El resultado de la división y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// %= Módulo y asignación
// Ejemplo:
numero3 %= 5;
console.log("El resultado del módulo y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// **= Potencia y asignación
// Ejemplo:
numero3 **= 5;
console.log("El resultado de la potencia y asignación es: " + numero3);
numero3 = numero1; //Restablecemos valor

// Operadores de incremento y decremento:
console.log(
  "\n============ Operadores de incremento y decremento ============\n"
);

// ++ Incremento - aumenta el valor en un numero
// Ejemplo:
numero3++;
console.log("El resultado del incremento es: " + numero3);
numero3 = numero1; //Restablecemos valor

// -- Decremento - decrementa el valor en un numero
// Ejemplo:
numero3--;
console.log("El resultado del decremento es: " + numero3);
numero3 = numero1; //Restablecemos valor
