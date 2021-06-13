
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var ground;
var angle=60;
var poly;
var wedge;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01,
    isStatic:false
  }
   
   var ground_options ={
     isStatic: true
   };
   
   var wedge_options={
     isStatic:true 
   };

   wedge = Bodies.rectangle(100,200,100,20,wedge_options)
  World.add(world,wedge)

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("pink");
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle)
  push()
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,20);
  pop()
angle+=0.2

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

