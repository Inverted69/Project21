function touch(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
       object2.x - object1.x < object1.width/2 + object2.width/2 &&
       object1.y - object2.y < object1.height/2 + object2.height/2 &&
       object2.y - object1.y < object1.height/2 + object2.height/2){
           return true;
       }
    else{
        return false;
    }
}

function justBounce(object1,object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
       object2.x - object1.x < object1.width/2 + object2.width/2){
            //object1.velocityX *=-1;
            /*had to comment this line or else the ball was retracing its own path
            i.e if it came from top left, it went back top left instead of going top right */
            object2.velocityX *=-1;
    }

    if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
       object2.y - object1.y < object1.height/2 + object2.height/2){
            object1.velocityY *=-1;
            object2.velocityY *=-1;
    }
}
