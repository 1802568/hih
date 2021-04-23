
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,10,1200,20)
	ground2 = new Ground(525,10,1200,20)
  ground3 = new Ground(450,10,1200,20)
	ground4 = new Ground(375,10,1200,20)
    box1 = new bob(700,150,70,70);
    box2 = new bob(700,150,70,70);
    box3 = new bob(700,150,70,70);
    box4= new bob(700,150,70,70);

    Slingshot1= new Slingshot(box1.body,ground.body);
    Slingshot2= new Slingshot(box2.body,ground2.body)
    Slingshot3= new Slingshot(box3.body,ground3.body);
    Slingshot4= new Slingshot(box4.body,ground4.body)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  ground.display()
  Slingshot1.display()
Slingshot2.display()
Slingshot3.display()
Slingshot4.display()
  drawSprites();
 
}



