const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand, sling;
var box, polygon;

function setup(){
    createCanvas(900,400)
    engine = Engine.create();
    world = engine.world
    stand = new Stand(390, 300, 250, 10)
    box1 = new Box(300, 275, 30, 40)
    box2 = new Box(330, 275, 30, 40)
    box3 = new Box(360, 275, 30, 40)
    box4 = new Box(390, 275, 30, 40)
    box5 = new Box(420, 275, 30, 40)
    box6 = new Box(450, 275, 30, 40)
    box7 = new Box(480, 275, 30, 40)
    
    box8 = new Box(330, 235, 30, 40)
    box9 = new Box(360, 235, 30, 40)
    box10 = new Box(390, 235, 30, 40)
    box11 = new Box(420, 235, 30, 40)
    box12 = new Box(450, 235, 30, 40)

    box13 = new Box(360, 195, 30, 40)
    box14 = new Box(390, 195, 30, 40)
    box15 = new Box(420, 195, 30, 40)

    box16 = new Box(390, 155, 30, 40)

    polygon = new Polygon(200, 100)

    sling = new Slingshot(polygon.body, {x:100, y:100})
    
    Engine.run(engine);
}

function draw(){
    background(0);
    rectMode(CENTER);
    stand.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("lightblue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("yellow")
    box13.display();
    box14.display();
    box15.display();
    fill("red")
    box16.display();

    polygon.display();
    sling.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})

}

function mouseReleased(){
    sling.fly();

}
