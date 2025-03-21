const { log } = require("node:console");

process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar');

})

process.on('exit', ()=>{
    console.log('Ale, el proceso acabo');
    setTimeout(() => {
        console.log('Esto no se va ver nunca');
        
    }, 0);    
})
