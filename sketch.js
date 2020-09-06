var helicopterIMG, helicopterSprite, packageSprite,packageIMG,package1,box_right,box_left,box_middle;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var package1,ground1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	//packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(400,670,800,20);

	package1 = new Package(400, 200, 10);

	box_right = new Box(510,610,20,100);
	box_middle = new Box(400,650,200,20);
	box_left = new Box(290,610,20,100);


	Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  
  ground1.display();
  package1.display();
  box_right.display();
  box_middle.display();
  box_left.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === DOWN_ARROW){
		Body.setStatic(package1.body, false);
	}	
}







