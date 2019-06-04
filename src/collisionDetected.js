export function objectCollisionDetected(ball, gameObject) {

    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let rightSideOfBall = ball.position.x + ball.size;
    let leftSideOfBall = ball.position.x;

    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftSideOfObject = gameObject.position.x; 
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    
    if (bottomOfBall > topOfObject
        && topOfBall < bottomOfObject
        && ball.position.x > leftSideOfObject 
        && ball.position.x + ball.size < rightSideOfObject ) {
            console.log("We got into a very very bad place :(")
        }

        // // collision from side
        // if (rightSideOfBall > leftSideOfObject || leftSideOfBall < rightSideOfObject) {
        //     // if it came from the right side
        //     ball.speed.x = -ball.speed.x;
        // }

        // // collison from top or bottom
        // if (topOfBall < bottomOfObject || bottomOfBall > topOfObject) {
        //     // console.log("collision from y called");

        //     ball.speed.y = -ball.speed.y;
        // }

    //write collision from y

    if (bottomOfBall >= topOfObject
        && topOfBall <= bottomOfObject
        && rightSideOfBall >= leftSideOfObject 
        && leftSideOfBall <= rightSideOfObject
        ) {
            // console.log("collision detected");
            return true;
        } 
        else {
            return false;
        }
}
