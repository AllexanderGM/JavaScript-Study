let n, i, k, aux;
let a = [-1, 150, 190, 170, -1, -1, 160, 180];
let positionTree = [];
a.map((numero, indice) => {
  numero == -1 ? positionTree.push(indice) : "";
});

console.log(positionTree);

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (a[j] > a[j + 1] && a[i] != p) {
      aux = a[j];
      a[j] = a[j + 1];
      a[j + 1] = aux;
    }
  }
}

console.log(a);
