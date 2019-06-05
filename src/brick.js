import { objectCollisionDetected } from "./collisionDetected.js";

export default class Brick {
    constructor(game, position) {
        this.img = document.getElementById('brick');
        this.game = game;
        this.position = position;
        this.width = 40;
        this.height = 40;
        this.markedForDeletion = false;
    }

    update(deltaTime) {
        if (objectCollisionDetected(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            console.log(deltaTime);
            this.markedForDeletion = true;
            // reset it somehow
        }
    }

    draw(context) {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}