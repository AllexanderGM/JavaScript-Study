var miAuto = {
  marca: "Toyota", //Atributos del objeto
  modelo: "Corolla",
  annio: 2022,
  detalleDelAuto: function () {
    //Metodos del objeto
    console.log(`Auto ${this.modelo} ${this.annio}`);
  },
};

miAuto.detalleDelAuto();

// función constructura

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// nuevo objeto

var autoNuevo = new auto("Mercedes", "M8", 2021);
var autoNuevo2 = new auto("Tesla", "X", 2019);
var autoNuevo3 = new auto("Ferrari", "F40", 2001);

console.log(autoNuevo3);
