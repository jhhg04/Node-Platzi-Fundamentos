function asincrona(cb) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      cb(null, a);
    } catch (e) {
      cb(e);
    }
  }, 1000);
}

asincrona(function (err, dato) {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    // throw err
    return false;
  }
  console.log('Todo ha ido bien, mi data es ', dato);
});
