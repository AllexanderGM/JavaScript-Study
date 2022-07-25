let CantidadAutos = 0;
let autos = [];

function auto(marca, modelo, annio) {
  return {
    marca,
    modelo,
    annio,
  };
}

alert('Vamos a crear una "base de datos" para diferentes autos');
CantidadAutos = prompt("¿Cuantos autos son?");
CantidadAutos = parseInt(CantidadAutos);

for (let a = 1; a <= CantidadAutos; a++) {
  let marca = prompt("Marca del auto #" + a);
  let modelo = prompt("Modelo del auto #" + a);
  let annio = prompt("Año del auto #" + a);

  let NewAuto = auto(marca, modelo, annio);

  autos.push(NewAuto);
}

console.log(autos);
