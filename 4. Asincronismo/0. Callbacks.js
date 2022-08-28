// Es una función que pasa a otra función como argumento

// Ejemplo

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 6, sum));

setTimeout(function () {
  console.log("Hola Javascript");
}, 2000);

function greeting(name) {
  console.log(`Helo ${name}`);
}

setTimeout(greeting, 2000, "Jeisson");
