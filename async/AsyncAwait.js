async function hola(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        resolve(nombre);
      }, 1000);
    });
  }
  
async function hablar(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("bla bla bla");
        // resolve(nombre);
        resolve('hay un error')
      }, 1000);
    });
  }
  
async function adios(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Adiós, ${nombre}`);
        resolve();
      }, 1000);
    });
  }
  
  // -- Ejecucion
async function main() {
    let nombre = await hola('Cristian');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso');
}

console.log('Empezamos el proceso');

main()

// let result = await hablar()
// console.log(result);





