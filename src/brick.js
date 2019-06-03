export default class Brick {
    constructor(game, position) {
        this.img = document.getElementById('brick');
        this.game = game;
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    update() {

    }

    draw(context) {
        context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
}