const sharp = require('sharp')

// Importa el modulo path, que nos ayuda a manejar rutas de archivos de manera segura
const path = require('path');

sharp(path.resolve(__dirname, 'invencible.png'))
    .resize({ width: 80 })
    .toFile(path.resolve(__dirname, 'resized.png'))
    .then(() => console.log('Imagen redimensionada correctamente'))
    .catch(err => console.error('Error al procesar la imagen:', err));
