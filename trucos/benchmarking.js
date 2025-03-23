
console.time('todo');

let suma = 0;
console.time('bucle')
for (let index = 0; index < 100000 ; index++) {
    suma = suma +1;
}

console.timeEnd('bucle')

console.log('Empieza el proceso asincrono');

console.time('Asincrono');
asincrona()
    .then(()=>{
        console.timeEnd('Asincrono');
        
    })



console.time('bucle 2')
for (let j = 0; j < 1000000 ; j++) {
    suma = suma +1;
}
console.timeEnd('bucle 2')


console.timeEnd('todo');

function asincrona() {
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    })
}