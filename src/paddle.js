export default class Paddle {

    constructor(game) {
        this.width = 150;
        this.height = 5;
        this.maxSpeed = 7;
        this.speed = 0;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = {
            x: game.gameWidth / 2 - this.width / 2, 
            y: game.gameHeight - this.height - 10
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(context) {
        context.clearRect(0, 0, this.gameWidth, this.gameHeight);
        context.fillStyle = "red";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }    

    update(deltaTime) {
        this.position.x += this.speed;

        if(this.position.x < 0) {
            this.position.x = 0;
        }
        if(this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width;
        }
    }

    stop() {
        this.speed = 0;
    }
}