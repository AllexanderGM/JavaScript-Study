let entrada = "aammaa";
let letras = Array.from(entrada);
let letras2 = Array.from(entrada).reverse();
let b = 0;

for (let a = 0; a < entrada.length; a++) {
  if (letras[a] == letras2[a]) {
    b = b + 1;
  } else {
    console.log("Falso");
    break;
  }
}

if (b == entrada.length) {
  console.log("Verdadero");
}
