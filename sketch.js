const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Stand(450, 390, 900, 20);
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);

  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);

  block16 = new Block(390, 155, 30, 40);

  blocks1 = new Block(640, 175, 30, 40);
  blocks2 = new Block(670, 175, 30, 40);
  blocks3 = new Block(700, 175, 30, 40);
  blocks4 = new Block(730, 175, 30, 40);
  blocks5 = new Block(760, 175, 30, 40);

  blocks6 = new Block(670, 135, 30, 40);
  blocks7 = new Block(700, 135, 30, 40);
  blocks8 = new Block(730, 135, 30, 40);

  blocks9 = new Block(700, 95, 30, 40);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
}
function draw() {
  background("royalBlue");
  textSize(20);

  fill("brown");
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("white");
  block8.display();
  block9.display();
  block11.display();
  block12.display();
  fill("blue");
  block10.display();
  fill("orange");
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("green");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("white");
  blocks6.display();
  blocks8.display();
  fill("blue");
  blocks7.display();
  fill("orange");
  blocks9.display();
  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}
