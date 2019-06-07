import SpriteSheet from "./spriteSheet.js";

 export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
           resolve(image); 
        });
        image.src = url;
    });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

loadImage('../assets/images/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('ground', 0, 0);
        sprites.define('sky', 3, 23);
        sprites.draw('ground', context, 45, 62);

        context.drawImage(image, 
            0, 0,
            16, 16,
            
            32, 32,
            16, 16);
});
