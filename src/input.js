export default class InputHandler {
    constructor(game, object) {

        const SPACEBAR = 32;
        const ARROW_KEY_LEFT = 37;
        const ARROW_KEY_RIGHT = 39;
        const ESCAPE_KEY = 27;

        document.addEventListener('keydown', event => {
            switch(event.keyCode) {
                case ARROW_KEY_LEFT:
                    object.moveLeft();
                    break;
                
                case ARROW_KEY_RIGHT: 
                    object.moveRight();
                    break;

                case ESCAPE_KEY:
                    game.pauseGame();
                    break;  
                case SPACEBAR:
                    game.start();
                    break;
            }
        });

        document.addEventListener('keyup', event => {
            switch(event.keyCode) {
                case ARROW_KEY_LEFT:
                    if (object.speed < 0) // fixes the stuttering
                        object.stop();
                    break;

                case ARROW_KEY_RIGHT:
                    if (object.speed > 0) 
                        object.stop();
                    break;
            }
        });
    }
}