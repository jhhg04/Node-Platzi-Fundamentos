const moment = require('moment');

let ahora = moment();

console.log(ahora);
console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
// bcrypt.hash(password, 5, function (err, hash) {
//   bcrypt.compare(password, hash, function (err, res) {
//     console.log(res);
//   });
// });
