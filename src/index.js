import Game from "./game.js";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastTime = 0;
let delta = 0;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);

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

requestAnimationFrame(mainLoop);