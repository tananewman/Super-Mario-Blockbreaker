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

    if (bottomOfBall >= topOfObject
        && topOfBall <= bottomOfObject
        && rightSideOfBall >= leftSideOfObject 
        && leftSideOfBall <= rightSideOfObject
        ) {
            bottomOfBall = topOfObject;
            topOfBall = bottomOfObject;
            rightSideOfBall = leftSideOfObject;
            leftSideOfBall = rightSideOfObject;
            return true;
        } 
        else {
            return false;
        }   
}

