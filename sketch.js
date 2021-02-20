var tower,towerImg;
var door,doorImg,doorsGroup;
var climber,climberImg,climberGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleBlockGroup;
var gameState ="play";
var spookySound;
function preload(){
 towerImg =loadImage("tower.png"); 
  doorImg =loadImage("door.png");
  climberImg =loadImage("climber.png");
 ghostImg =loadImage("ghost-standing.png");
  spookySound =loadSound("spooky.wav");
}

function setup(){
 createCanvas(600,600);
  spookySound.loop();
  tower =createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY =1;
  
  doorsGroup =new Group()
  climberGroup =new Group()
  
  ghost =createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale =0.3;
  
  invisibleBlockGroup =new Group();
  
 
}

function draw(){
 background("black");
 if(gameState==="play"){
  
  
  
  if(tower.y>400) {
    tower.y =300;
  }
  if(keyDown("left_arrow")){
    ghost.x =ghost.x-3;
  }
  
  if(keyDown("right_arrow")){
    ghost.x =ghost.x+3;
  }
  if(keyDown("space")){
    ghost.velocityY =-5;
  }
  ghost.velocityY =ghost.velocityY+0.8;
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY =0;
  }
  
 if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
   ghost.destroy();
 } 
  
  
  
  spawnDoors();
 drawSprites();
 }
  if(gameState==="end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("gameOver",230,250);
  }
}

function spawnDoors(){
  
 if(frameCount%240===0){
   door =createSprite(200,-50);
   climber =createSprite(200,10);
    invisibleBlock =createSprite(200,50);
   invisibleBlock.width =climber.width;
   invisibleBlock.height =2;
   door.addImage("door",doorImg);
   climber.addImage("climber",climberImg);
   door.x =Math.round(random(120,400));
   climber.x =door.x;
   invisibleBlock.x =door.x;
   invisibleBlock.velocityY =1;
   climber.velocityY =1;
   door.velocityY =1;
   door.lifetime =800;
   climber.lifetime =800;
   doorsGroup.add(door);
   climberGroup.add(climber);
   invisibleBlockGroup.add(invisibleBlock);
   ghost.depth =door.depth;
   ghost.depth =ghost.depth+1;
 }                                     
  
}


























