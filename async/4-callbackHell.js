function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla bla....');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ' + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log('Iniciando Proceso');

hola('John', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Terminando Proceso');
  });
});

// Callback Hell
// hola('John', function () {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios('John', function () {
//           console.log('Terminando Proceso');
//         });
//       });
//     });
//   });
// });
