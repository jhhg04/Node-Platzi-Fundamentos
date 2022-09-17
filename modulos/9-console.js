console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');

const tabla = [
  {
    a: 1,
    b: 'Z',
  },
  {
    a: 2,
    b: 'Otra',
  },
];
console.log(tabla);
console.table(tabla);

console.group('Conversacion');
console.log('Hola');
console.group('bla');
console.log('Bla Bla Bla ...');
console.log('Bla Bla Bla ...');
console.log('Bla Bla Bla ...');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('Otra Cosa de otra funcion');

function funcion1() {
  console.group('funcion1');
  console.log('Esto es de la funcion 1');
  console.log('Esto tambien');
  console.log('Esto tambien');
  funcion2();
  console.log('Hemos vuelto a la funcion1');
  console.groupEnd('funcion1');
}

function funcion2() {
  console.group('funcion2');
  console.log('Ahora estamos en la funcion 2');

  console.groupEnd('funcion2');
}
console.log('Empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
