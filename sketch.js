var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100, 660, 15, ball_options);
	World.add(world, ball);

	ground = new Ground(400, 680, 800, 20);
	
	rightSide = new Ground(750, 620, 10, 100);

	leftSide = new Ground(600, 620, 10, 100);

	Engine.run(engine);
  
	 
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ground.show();
  rightSide.show();
  leftSide.show();
 ellipse(ball.position.x, ball.position.y, 15);
 

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:19, y:3.5})

	}
}


