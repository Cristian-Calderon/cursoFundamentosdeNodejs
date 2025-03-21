const { log } = require('console');
const os = require ('os');

// ver la arquitectura de tu procesador
console.log(os.arch());

// Podemos verificar la plataforma
console.log(os.platform());

// Para contar cuantos procesadores tienes
console.log(os.cpus().length);


// console.log(os.constants);

// Ver la memoria
const SIZE = 1024;
function kb(bytes) {
    return bytes/SIZE ;
}

function mb(bytes) {
    return kb(bytes/SIZE) ;
}

function gb(bytes) {
    return mb(bytes/SIZE) ;
}

console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem));

// Saber el directorio raiz
console.log(os.homedir());

// 
console.log(os.tmpdir());


// servidores
console.log(os.hostname());

console.log(os.networkInterfaces());



