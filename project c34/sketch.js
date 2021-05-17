const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
var backgroundImg,snowImg;

function preload() {
    backgroundImg = loadImage("snow1.jpg");
    snowImg=loadImage("snow4.webp")
}
function setup(){
    var canvas = createCanvas(1200,400);
    snowGroup=createGroup();
    engine = Engine.create();
    world = engine.world;
}
function draw(){
    background(backgroundImg);
    spawnSnow()
    Engine.update(engine);

}
function spawnSnow(){
    if(frameCount%10==0){
  var snow =createSprite(0,0,30,30);
    snow.x=Math.round(random(1,1200))
    snow.addImage(snowImg)
    snow.scale=0.1
    snow.velocityX = -3;
    snow.lifetime=150
    snow.depth=background.depth
    snow.depth= snow.depth+1
    snowGroup.add(snow)
    }
}