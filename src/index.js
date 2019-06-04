import Game from "./game.js";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastTime = 0;
let delta = 0;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

// 143hz monitor refresh rate
let timestep = 1000 / 143; 
let fps = 143, framesThisSecond = 0, lastFpsUpdate = 0;

function mainLoop(timeStamp) {
    delta += timeStamp - lastTime;
    lastTime = timeStamp;

    while (delta >= timestep) {
        game.updateGame(timestep);
        delta -= timestep;
    }
    game.draw();
    if (timeStamp > lastFpsUpdate + 1000) { // update every second
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps; // compute the new FPS
 
        lastFpsUpdate = timeStamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;
    console.log(fps);

    requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);