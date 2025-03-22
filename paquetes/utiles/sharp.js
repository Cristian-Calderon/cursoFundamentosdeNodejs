const sharp = require('sharp');

sharp('invencible.png')
    .resize(80)
    .toFile('resized.png')