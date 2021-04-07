var car,wall
var speed,weight
var damage

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60,height/2);

  car.shapeColor = "white"
  wall.shapeColor = "brown"

  speed = random(55,90);
  car.velocityX = speed
  weight = random(400,1500);
}

function draw() {
  background("black");  
if(wall.x-car.x <(car.width+wall.width)/2){
  damage=0.5*weight * speed *speed/22500;

  car.velocityX = 0

  if(damage>180){
    car.shapeColor="red";
  }

  if(damage>100 && damage<180){
car.shapeColor = "yellow";
  }
  if(damage<100){
car.shapeColor = "green";
  }
}


  drawSprites();
}