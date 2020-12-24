
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;



ground = new Ground(400,690,800,20);
paper= new Paper(50,250,50);

	//Create the Bodies Here.
	block1 = new dustbin(500,610,20,100)
	block2 = new dustbin(400,650,180,20) 
	block3 = new dustbin(300,610,20,100)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

ground.display();
paper.display();
block1.display();
block2.display();
block3.display();
}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


}
}






