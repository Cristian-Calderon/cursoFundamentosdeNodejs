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

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
            hablar(()=>{
                conversacion(nombre, --veces, callback)
            })
    }else{
        adios(nombre,callback);
    }
}

// -- Proceso 
console.log("Iniciando proceso");
hola('Cristian', function(nombre){
    conversacion(nombre,3 , function () {
        console.log('Proceso terminado');
        
    })
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