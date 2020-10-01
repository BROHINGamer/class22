const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box,ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var box_options ={
        isStatic: false
    }

    box = Bodies.rectangle(100,100,50,50,box_options);
    World.add(world,box);

    var ball_options ={
        isStatic: false,
        restitution:2.0
    }

    ball = Bodies.circle(300,100,50,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50);
}