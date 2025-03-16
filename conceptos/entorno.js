// Instalamos nodemon
// npm install -g nodemon

// Tambien instalar pm2
// npm install -g pm2

// Para ejecutar en pm2
// pm2 start entorno.js

// para ver el monitor
// pm2 monitor


// Para ver el status
// pm2 status

// Para ver los logs
// pm2 logs

// Para parar
// pm2 stop 0

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Holaa ' + nombre);
console.log('Mi web es  ' + web);

console.log('Hola mundo!'); 
