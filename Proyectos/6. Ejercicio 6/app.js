function solution(matrix) {
  let suma = 0;
  let cantY = matrix.length;
  if ((cantY < 1)) {
    for (let i = 0; i < matrix[0].length; i++) {
      console.log(matrix[0][i]);
      suma = suma + matrix[0][i];
    }
  } else {
    for (let i = 0; i <= matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[j][i] === 0 && j < matrix.length - 1) {
          matrix[j + 1][i] = 0;
        }
        if (matrix[j][i]) {
          suma = suma + matrix[j][i];
        }
      }
    }
  }
  console.log(suma);
}

let matris = [[1, 2, 3, 4, 5]];
let resultado = solution(matris);
