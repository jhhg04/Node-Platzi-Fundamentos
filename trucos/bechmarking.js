console.time('todo');

let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1;
}
console.timeEnd('bucle2');
console.time('async');
console.log('Empieza proceso Async');
asincrona().then(() => {
  console.timeEnd('async');
});

console.timeEnd('todo');

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Termino Proceso Async');
      resolve();
    });
  });
}
