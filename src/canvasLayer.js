export default class CanvasLayer {
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
        let ctx = canvas.getContext('2d');
        return ctx;
    }
}
