const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = 'Soy data: ';

let leerStream = fs.createReadStream(__dirname + '/input.txt');
// Transforma el stream en base a utf-8
leerStream.setEncoding('utf-8')

leerStream.on('data', function (chunk) {
    data += chunk    
})

leerStream.on('end', function () {
    console.log(data);
})


// process.stdout.write('hola');
// process.stdout.write('que');