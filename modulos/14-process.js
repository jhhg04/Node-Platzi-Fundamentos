process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Ale, el proceso acabo');
  setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  }, 0);
});

setTimeout(() => {
  console.log('Esto SI se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.log('Vaya, se nos ha olvidado capturar un error');
  // console.log(err);
  setTimeout(() => {
    console.log('Esto viene desde las exepciones');
  }, 0);
});

funcionQueNoExiste();

console.log('Esto si el error no se captura , no sale');

process.on('');
