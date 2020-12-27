// namespacing or giving nick names
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var myengine,myworld;
var ground,ball;

function setup() {
  createCanvas(400,400);

myengine = Engine.create();
//myworld is my engine's world
myworld = myengine.world;
Engine.run(myengine);
var groundoptions={
  isStatic:true
}
ground= Bodies.rectangle(200,380,400,20,groundoptions);
World.add(myworld,ground);
console.log(ground);
var balloptions={
restitution:0.5
}
ball= Bodies.circle(200,100,20,balloptions)
World.add(myworld,ball);
console.log(ball);
}

function draw() {
  background(255,255,255);
  //drawSprites();

rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);

}