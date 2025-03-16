function hola(nombre, callback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        callback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('bla bla bla');
        callbackHablar()
    }, 100);
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`);
        callback();
    }, 1000);
}

// -- Proceso 
console.log("Iniciando proceso");
hola('Cristian', function (nombre) {
    adios()
})



// hola("Cristian", (nombre) => {
//     hablar(function(){
//         hablar(function () {
//             adios(nombre, () => {
//                 console.log("Terminando proceso");
//             });
//         })
//     })
// });