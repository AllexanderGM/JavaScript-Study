function solution(s1, s2) {
  let string1 = s1.split("");
  let string2 = s2.split("");
  let add = 0;
  let pos = 0;
  for (let i = 0; i < s1.length; i++) {
    console.log("°°°°°°°");
    for (let j = 0; j < s2.length; j++) {
      add = add + 1;
      if (string1[i] == string2[j]) {
        console.log("Igual");
        //string1.slice(i, 1);
      }
      console.log(string1[i] + "-----" + string2[j]);
    }
  }
  console.log(add);
  /*let memoria = [];
  if (s1.length > s2.length) {
    for (let i = 0; i <= s1.length; i++) {
      if (string1.includes(string2[i]) && !memoria.includes(string1[i])) {
        memoria[i] = string1[i];
        add = add + 1;
        console.log(memoria);
      }
    }
  } else {
    for (let i = 0; i <= s2.length; i++) {
      if (string2.includes(string1[i]) && !memoria.includes(string1[i])) {
        memoria[i] = string1[i];
        add = add + 1;
        console.log(memoria);
      }
    }
  }
  console.log(add);*/
  return add;
}

let palabra1 = "aabcc";
let palabra2 = "adcaa";

let resultado = solution(palabra1, palabra2);
