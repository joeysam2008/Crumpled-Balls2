var paperObject;
var side1,side2,side3;
var ground;
var paperImg;
var dustbinImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImg = loadImage("CrumpledPaper.png");
	dustbinImg = loadImage("TrashCan.png");
}

function setup() {
	createCanvas(4000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,590,30);
	ground= new Ground(1000,600, 4000, 10);

	side1= new Dustbin(590,590,150,10);
	// side2= new Dustbin(510,550,10,200);
	// side3= new Dustbin(670,550,10,200);

  
}


function draw() {
  background("white");
  Engine.update(engine);

  ground.display();
  side1.display();
//   side2.display();
//   side3.display();
  paperObject.display();
  

 // keyPressed();

  drawSprites();
 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:40, y:-40})
		
	}
}



