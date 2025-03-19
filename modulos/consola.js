function function1(params) {
  console.group("funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto tambein");
  function2();
  console.log("Hemos vuelvto a la funcion 1");
  console.groupEnd("funcion 1");
}

function function2() {
  console.group("funcion 2");
  console.log("Ahora estamos en la funcion 2");

  console.groupEnd("funcion 2");
}

console.log("Empezamos");
function1();
