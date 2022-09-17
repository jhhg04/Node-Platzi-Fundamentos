const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf-8');
readableStream.on('data', function (chunk) {
  // console.log(chunk);
  // console.log(chunk.toString());
  data += chunk;
});

readableStream.on('end', function () {
  console.log(data);
});
