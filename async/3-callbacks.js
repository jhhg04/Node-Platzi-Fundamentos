// function soyAsync(miCallback) {
//   setTimeout(() => {
//     console.log('Estoy siendo Async');
//     miCallback();
//   }, 1000);
// }
// console.log('Iniciando Proceso');

// soyAsync(function () {
//   console.log('Terminando Proceso');
// });

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando Proceso');

hola('John', function () {
  adios('John', function () {
    console.log('Terminando Proceso');
  });
});
