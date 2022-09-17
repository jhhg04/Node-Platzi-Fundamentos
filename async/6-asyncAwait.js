async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla bla....');
      resolve('Hay un error');
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola('Carlos');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Terminando el proceso');
}

// --

console.log('Iniciando el proceso...');
main();
console.log('Va a ser la segunda instruccion');
