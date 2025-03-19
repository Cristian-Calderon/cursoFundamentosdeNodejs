function otherfunction() {
  return serompe();
}

function serompe(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en mi funcion asincrona");
      cb(error);
    }
  }, 1000);
}

try {
  serompe(function (e) {
    console.error(e.message);
  });
  //   otherfunction();
  //   serompe();
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error.message);
  console.error("Pero no pasa nada, lo hemos capturado");
}
console.log("esto de aqui esta al final");
