function solution(inputArray) {
  let longString = [];
  let resultado = [];
  let max = 0;
  for (let i = 0; i < inputArray.length; i++) {
    longString[i] = inputArray[i].length;
  }
  max = Math.max(...longString);
  for (let j = 0; j < inputArray.length; j++) {
    if (max == longString[j]) {
      resultado.push(inputArray[j]);
    }
  }
  return resultado;
}
let arreglo = ["aba", "aa", "ad", "vcd", "aba"];
let solucion = solution(arreglo);
