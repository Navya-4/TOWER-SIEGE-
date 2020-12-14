const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var box1;

function setup () {
var canvas = createCanvas (1280,610)

engine = Engine.create();
world = engine.world;

ground = new Ground (700,400,300,15)

box1 = new Box (710,390,40,40)


}

function draw (){
background ("black")

ground.display();
box1.display();

}
