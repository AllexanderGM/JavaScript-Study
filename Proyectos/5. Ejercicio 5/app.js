let inputArray = [-6, 7, -8, 3, -5, 5, -4];
let producto = [];
for (let a = 0; a < inputArray.length - 1; a++) {
  producto[a] = inputArray[a] * inputArray[a + 1];
}
let mayor = 0;
//console.log(producto);
for (let b = 0; b < producto.length; b++) {
  if (producto[b] > mayor) {
    mayor = producto[b];
  }
  else if (b==0){
    mayor = producto[b];
  }
  console.log(mayor);
}
