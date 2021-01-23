const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,70,70);
    box2 = new Box(940,500,70,70);
    box3 = new Box(700,460,70,70);
    box4 = new Box(940,460,70,70);

    ground = new Ground(600,590,1200,20);
    pig1 = new Pig(820,500);
    log1 = new Log(820,480,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   //box3.display();
    //box4.display();
    ground.display();
    pig1.display();
    log1.display();
}