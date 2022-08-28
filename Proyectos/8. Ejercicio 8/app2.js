function solution(s1, s2) {
  let string1 = s1.split("");
  let string2 = s2.split("");
  let add = 0;
  if (s1.length > s2.length) {
    for (let i = 0; i < string1.length; i++) {
      console.log("°°°°°°°");
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] == string2[j]) {
          console.log("Igual");
          string1.splice(i, 1);
          string2.splice(j, 1);
          add = add + 1;
          j = 0;
        }
        console.log(string1);
        console.log(string2);
        console.log(add);
        console.log("-------------");
      }
    }
  } else {
    for (let i = 0; i < string1.length; i++) {
      console.log("°°°°°°°");
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] == string2[j]) {
          console.log("Igual");
          string1.splice(i, 1);
          string2.splice(j, 1);
          add = add + 1;
          j = 0;
          i = 0;
        }
        console.log(string1);
        console.log(string2);
        console.log(add);
        console.log("-------------");
      }
    }
  }
  console.log(add);
  return add;
}

let palabra1 = "abcdefghxtw";
let palabra2 = "hgfedbcwwt";

let resultado = solution(palabra1, palabra2);
