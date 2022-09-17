function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi funcion async');
      cb(err);
    }
  });
  return 3 + z;
}

try {
  // serompe();
  seRompeAsync(function (err) {
    console.log('Hay Error', err.message);
  });
} catch (error) {
  console.error('Vaya..Algo se ha roto por que', error.message);
  // console.error(error);
  console.error('Pero no pasa nada, lo hemos capturado');
}
console.error('Esto esta al final');
