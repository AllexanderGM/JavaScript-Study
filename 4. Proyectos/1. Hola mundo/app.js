let statues = [6, 3, 5, 7, 11];
statues.sort();
let max;
let min;
let arreglo = [];
let iguales = 0;
let faltantes = 0;
let temp = true;
max = Math.max(...statues);
min = Math.min(...statues);
arreglo = Array.from({ length: max - min + 1 }, (v, k) => k + min);
for (i = 0; i <= arreglo.length; i++) {
  if (statues.includes(arreglo[i])) {
    faltantes = faltantes + 1;
  } else {
    iguales = iguales + 1;
  }
}
console.log(arreglo);
console.log(iguales);
console.log(faltantes);