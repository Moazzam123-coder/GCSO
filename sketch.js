var car,wall;
var weight,speed;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  


 


if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX = 0;
  var defor = 0.5 * weight * speed * speed/22509;
  if(defor>180)
  {
    car.shapeColor=color(250,0,0)
  }
  if(defor<180 && defor>100)
  {
    car.shapeColor=color(230,230,0)
  }if(defor<100)
  {
    car.shapeColor=color(0,250,0)
  }
  
}

  drawSprites();






}