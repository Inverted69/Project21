var block1,block2,block3,block4;
var ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green"; 

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(700,100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 8;
    ball.velocityX = 5;

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites(1);
    ball.bounceOff(edges);
     
    if(touch(ball,block1)){
        ball.shapeColor = "blue";
        justBounce(ball,block1);
    }



    if(touch(ball,block2)){
        ball.shapeColor = "orange";
            ball.velocityY = 0;
            ball.velocityX = 0;
            music.stop();
    }

    
    if(touch(ball,block3)){
        ball.shapeColor = "green";
        justBounce(ball,block3);
        music.play();
    }

    if(touch(ball,block4)){
        ball.shapeColor = "red";
        justBounce(ball,block4);
    }

    drawSprites();
}