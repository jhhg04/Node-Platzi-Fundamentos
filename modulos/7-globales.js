// console.log(global);
let i = 0;
let intervalo = setInterval(function () {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

console.log(__dirname);
