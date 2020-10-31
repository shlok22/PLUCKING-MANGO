const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree1, mango1;
var boy, slingShot;
var stone1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    tree1 = new Tree(700,320,70,70);
    
    mango1 = new Mango(810, 350);
    stone1 = new Stone(810,260,300, PI/2);

    
    chain = new Chain(boy.body,stone.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    tree1.display();
    
    ground.display();
    mango1.display();
    stone1.display();

    boy.display();
    
    chain.display();    
}
