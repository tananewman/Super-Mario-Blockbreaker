import Ball from "./ball.js";
import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./level.js";

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
        this.setupGameCanvas();
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.bricks = buildLevel(this, level1);
        
        this.gameObjects = [this.paddle, this.ball, ...this.bricks];

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        // this.gameObjects.forEach(object => object.update(deltaTime));'
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
    }

    draw() {
        this.gameObjects.forEach(object => object.draw(this.ctx));
    }
}