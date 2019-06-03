import Game from "./game.js";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastTime = 0;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update();
    game.draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);