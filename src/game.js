import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./level.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;       
    }

    setupGameCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = "gameScreen";
        canvas.width = this.gameWidth;
        canvas.height = this.gameHeight;
        document.body.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
    }

    start() {
        this.gamestate = GAMESTATE.RUNNING;
        this.setupGameCanvas();
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.bricks = buildLevel(this, level1);
        
        this.gameObjects = [this.paddle, this.ball, ...this.bricks];

        new InputHandler(this, this.paddle);
    }

    updateGame(deltaTime) {
        if (this.gamestate === GAMESTATE.PAUSED) return;

        this.gameObjects.forEach(object => object.update(deltaTime));
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }

    draw() {        
        this.gameObjects.forEach(object => object.draw(this.ctx));

        if (this.gamestate === GAMESTATE.PAUSED) {
            this.ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.fill();
        }
    }

    pauseGame() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        }
        else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}