import Game from "./game.js";
import { loadImage } from "./loaders.js";
import SpriteSheet from "./spriteSheet.js";
import CanvasLayer from "./canvasLayer.js";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastTime = 0;
let delta = 0;
let game;

//const context = document.getElementById('gameScreen').getContext('2d');
const context = new CanvasLayer().setupGameCanvas();


loadImage('../assets/images/tileset.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('ground', 0, 0);
        sprites.define('sky', 3, 23);

        game = new Game(GAME_WIDTH, GAME_HEIGHT, sprites);
        console.log('sprite sheet are loaded and they are here!');
        startGame();
});

function startGame() {
    requestAnimationFrame(mainLoop);
}


// 143hz monitor refresh rate
let timestep = 1000 / 143; 

function mainLoop(timeStamp) {
    delta += timeStamp - lastTime;
    lastTime = timeStamp;

    while (delta >= timestep) {
        game.updateGame(timestep);

        delta -= timestep;
    }
    game.draw();
    
    requestAnimationFrame(mainLoop);
}


