// Instalamos nodemon
// npm install -g nodemon


let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Holaa ' + nombre);
console.log('Mi web es  ' + web);

