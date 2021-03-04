var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   

    //create 4 different surfaces
  surface1=createSprite(40,595,200,40);
  surface1.shapeColor='blue';

  surface2=createSprite(260,595,200,40);
  surface2.shapeColor=rgb(255,128,0);

  surface3=createSprite(480,595,200,40);
  surface3.shapeColor= 'red';

  surface4=createSprite(700,595,200,40);
  surface4.shapeColor='green';

    //create box sprite and give velocity
  ball=createSprite((random(20,750)),50,35,35);
  ball.shapeColor='white';
  ball.velocityX=6;
  ball.velocityY=6;

  //create edgeSprite
  edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);
    
  
   if (isTouching(surface1,ball)){
    music.stop();
    ball.shapeColor = 'blue';
    ball.velocityX=0;
    ball.velocityY=0;
    bounceOff(surface1,ball);
   }

   else if (isTouching(surface2,ball)){
    music.play();
    ball.shapeColor = rgb(255,128,0);
    bounceOff(surface2,ball);
   }
  
   else if (isTouching(surface3,ball)){
    music.play();
    ball.shapeColor = 'red';
    bounceOff(surface3,ball);
   }
   
   else if (isTouching(surface4,ball)){
    music.play();
    ball.shapeColor = 'green';
    bounceOff(surface4,ball);
   }

   
    drawSprites();
}

