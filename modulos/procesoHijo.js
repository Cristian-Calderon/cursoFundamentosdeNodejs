const { exec } = require("child_process");
const { error, log } = require("console");
// const exec = require("child_process").exec;

exec("ls -al", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});
