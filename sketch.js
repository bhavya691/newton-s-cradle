const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var canvas;
var engine , world;
var bob1 , bob2 , bob3 , bob4 , bob5;
var rope1 , rope2 , rope3 , rope4 , rope5;


function setup(){
  canvas = createCanvas(1200 , 750);
    engine = Engine.create();
    world = engine.world;

  //creating bob
  bob1 = new Pendulum(550,380,"pink");
  bob2 = new Pendulum(450,380,"blue");
  bob3 = new Pendulum(350,380,"red");
  bob4 = new Pendulum(650,380,"yellow");
  bob5 = new Pendulum(750,380,"green");

  //creating ropes
  rope1 = new String(bob1.body , {x:550 , y:100});
  rope2 = new String(bob2.body , {x:450 , y:100});
  rope3 = new String(bob3.body , {x:350 , y:100});
  rope4 = new String(bob4.body , {x:650 , y:100});
  rope5 = new String(bob5.body , {x:750 , y:100});
}

function draw(){
  background("grey");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){
 // Matter.Body.setPosition(bob3.body , {x:mouseX , y:mouseY});
  Matter.Body.setPosition(bob5.body , {x:mouseX , y:mouseY});
}