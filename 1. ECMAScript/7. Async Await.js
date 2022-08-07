console.log("\n==== Async & Await ====\n");

// ES otra forma de abordar el asincronizmo en JavaScript haciendo un uso adecuado de los errores
// Se usa una promesa (Promise)

const helloWordl = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello Wordl"), 3000)
      : reject(new Error("Test Error"));
  });
};

//  Se usa la palabra async antes de pasar los parametros, dentro de la función se usa el await

const helloAsync = async () => {
  const hello = await helloWordl(); // Esto lo que hace es esperar la respuesta de la función
  console.log(hello);
};

helloAsync(); // aqui se ejecuta la funcion asincrónica

console.log("\n==== Try & Catch ====\n");

const otraFuncion = async () => {
  try {
    const hello = await helloWordl();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

// El try catch ayuda a manejar los datos que recibe una función y mejora el
// tratamiento de errores para datos que no se esperen, o que no coincidan con lalogica usada.

otraFuncion();
