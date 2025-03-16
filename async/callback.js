function hola(nombre, callback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        callback(nombre);
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`);
        callback();
    }, 500);
}

console.log("Iniciando proceso");
hola("Cristian", (nombre) => {
    adios(nombre, () => {
        console.log("Terminando proceso");
    });
});