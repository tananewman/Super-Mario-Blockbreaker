import { objectCollisionDetected } from "./collisionDetected.js";

export default class Ball {
    constructor(game) {
        this.img = document.getElementById('gameBall');
        this.speed = { x: 3, y: 2 };
        this.position = { x: 10, y: 400 };
        this.size = 16;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
    }
    
    draw(context) {
        context.drawImage(this.img, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
       
        this.detectWallCollision();

        if (objectCollisionDetected(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;      
        }        
     }

    detectWallCollision() {
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {            
            this.speed.y = -this.speed.y;
        }
    }    
}