var bulletImage;
var robotImage;
var droneImage;
var powerImage;
var bullet, robot, drone, power;

function preload() {
  bulletImage = loadImage("Bullet.gif");
  robotImage = loadImage("robot-run.gif");
  droneImage = loadImage("tomas-sousa-drone3.gif");
  powerImage = loadImage("image-Asset.gif");
}

function setup() {
  createCanvas(900, 900);
  
  bullet = createSprite(200,200,20,20);
  bullet.addImage(bulletImage);
  robot = createSprite(100,100,20,20);
  robot.addImage(robotImage);
  drone = createSprite(150,150,20,20);
  drone.addImage(droneImage);
  power = createSprite(700,700,20,20);
  power.addImage(powerImage);
  power.scale = 0.5;
}

function draw() {
  background(220);

  drawSprites();
}