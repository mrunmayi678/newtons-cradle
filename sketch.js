const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobDiameter=2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
     roofObject1= new Roof(400,200,200,20);
     bobObject1= new Bob(400,400,20);
     bobObject2= new Bob(440,400,20);
     bobObject3= new Bob(480,400,20);
     bobObject4= new Bob(360,400,20);
     bobObject5= new Bob(320,400,20);
     rope1= new Rope(bobObject1.body,roofObject1.body,-bobDiameter*2,-190);
     rope2= new Rope(bobObject2.body,roofObject1.body,-bobDiameter*2,-190);
     rope3= new Rope(bobObject3.body,roofObject1.body,-bobDiameter*2,-190);
     rope4= new Rope(bobObject4.body,roofObject1.body,-bobDiameter*2,-190);
     rope5= new Rope(bobObject5.body,roofObject1.body,-bobDiameter*2,-190);
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-200,y:-200});
	}
}



