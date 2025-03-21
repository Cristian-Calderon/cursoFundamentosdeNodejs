const { exec, spawn } = require("child_process");
const { error, log } = require("console");
// const exec = require("child_process").exec;

// exec("ls -al", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

// spawn invocar un proceso nuevo de node.js

let proceso = spawn("ls", ["-la"]);

// El id del proceso
console.log(proceso.pid);

// Si esta conectado
console.log(proceso.connected);

// Orientado a eventos  => Ventaja de este enfoque es que obtienes mayor control del proceso, y del estado en el que se encuentra
proceso.stdout.on("data", function (dato) {
  console.log("Esta muerto?");
  console.log(proceso.killed);

  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("El proceso termino");
  console.log(proceso.killed);
});
