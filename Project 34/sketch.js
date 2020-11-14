const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;
function setup(){
    var canvas = createCanvas(windowWidth/1,windowHeight/2);
    engine = Engine.create();
    world = engine.world;
    b1=new Bob(340,200,20)
    sling1=new Sling(b1.body,{x:280,y:20})
    b2=new Bob(415,200,20)
    sling2=new Sling(b2.body,{x:355,y:20})
    b3=new Bob(495,200,20)
    sling3=new Sling(b3.body,{x:430,y:20})
    b4=new Bob(575,200,20)
    sling4=new Sling(b4.body,{x:505,y:20})
    b5=new Bob(660,200,20)
    sling5=new Sling(b5.body,{x:580,y:20}) 
}

function draw(){
background(0);
Engine.update(engine);
    b1.display()
    sling1.display()
    b2.display()
    sling2.display()
    b3.display()
    sling3.display()
    b4.display()
    sling4.display()
    b5.display()
    sling5.display()
    
}
function mouseDragged(){
    Matter.Body.setPosition(b1.body,{x:mouseX, y:mouseY})
}