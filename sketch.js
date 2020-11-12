var thunder, thunderAnimation;
var batman, batmanAnimation;
var bg;

function preload(){
    thunderAnimation = loadAnimation("images/proc41images/images/thunderbolt/1.png","images/proc41images/images/thunderbolt/2.png","images/proc41images/images/thunderbolt/3.png","images/proc41images/images/thunderbolt/4.png");
    batmanAnimation = loadAnimation("images/proc41images/images/Walking Frame/walking_1.png","images/proc41images/images/Walking Frame/walking_2.png","images/proc41images/images/Walking Frame/walking_3.png","images/proc41images/images/Walking Frame/walking_4.png","images/proc41images/images/Walking Frame/walking_5.png","images/proc41images/images/Walking Frame/walking_6.png","images/proc41images/images/Walking Frame/walking_7.png","images/proc41images/images/Walking Frame/walking_8.png")
}

function setup(){
    createCanvas(1000,1000); 

    var bg = createSprite(500,500,1000,1000);
    bg.shapeColor = 'black';
    
    
   thunder = createSprite(500,140,10,10);
   thunder.addAnimation("thund",thunderAnimation);
   thunder.scale = 0.5;
    
   batman = createSprite(100,430,10,10);
   batman.addAnimation("batmen",batmanAnimation);
}

function draw(){
    if(keyDown("UP_ARROW")){
        batman.velocityX = 2;
    }
    rainDrops();
    drawSprites();
}   

function rainDrops(){
    var drop = createSprite(random(10,990),0,random(2,6),random(20,50));
    
    drop.velocityY = random(2,6);
    drop.shapeColor = 'lightBlue';

}