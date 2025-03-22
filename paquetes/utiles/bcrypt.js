const bscrypt = require ('bcrypt');

const password = 'Cristianpassword';

// Crea un password hash
bscrypt.hash(password, 5, (err,hash)=>{
    console.log(hash);
    // Para comprobar si es la misma contraseña
    bscrypt.compare(password,hash, function (error,resp) {
        console.log(resp);
    })
})
