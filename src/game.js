import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import { buildLevel, level1, level2 } from "./level.js";
import CanvasLayer from "./canvasLayer.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gamestate = GAMESTATE.MENU;
        this.lives = 3;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;               
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.levels = [level1, level2];
        this.currentLevel = 0;
        new InputHandler(this, this.paddle);

        const canvasLayer = new CanvasLayer(this.gameWidth, this.gameHeight);
        this.ctx = canvasLayer.setupGameCanvas();
    }

    start() {
        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL && this.gamestate !== GAMESTATE.GAMEOVER) { return; }
        this.lives = 3;
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);        
        this.gameObjects = [this.paddle, this.ball];
        this.gamestate = GAMESTATE.RUNNING;
    }

    updateGame(deltaTime) {
        if (this.lives === 0) { this.gamestate = GAMESTATE.GAMEOVER }
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) { return; }

        [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime));
        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
        
        if (this.bricks.length < 1) {
            this.startNewLevel();
        }
    }

    draw() {        
        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(this.ctx));
        this.handleGameState();        
    }

    pauseGame() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        }
        else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }

    startNewLevel() {
        this.currentLevel++;
        this.gamestate = GAMESTATE.NEWLEVEL;
        this.start();
    }

    handleGameState() {
        if(this.gamestate === GAMESTATE.MENU) {
            this.ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fill();

            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.font = "80px";
            this.ctx.fillText("Press Space to start", this.gameWidth / 2, this.gameHeight / 2);
        }
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            this.ctx.fillStyle = "rgba(0,0,0,0.5)";
            this.ctx.fill();
        }
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            this.ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            this.ctx.fillStyle = "black";
            this.ctx.fill();

            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.font = "80px";
            this.ctx.fillText("Game Over. Press space to restart.", this.gameWidth / 2, this.gameHeight / 2);
        }
    }
}