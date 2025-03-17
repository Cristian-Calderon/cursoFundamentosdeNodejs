function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla");
      // resolve(nombre);
      reject('hay un error')
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adiós, ${nombre}`);
      resolve();
    }, 1000);
  });
}

// -- Ejecucion
console.log("Iniciando el proceso...");
hola("Cristian")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch(x =>{
    console.error('Ha habido un error:',x);
    
  })
