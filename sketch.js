var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  bullet = createSprite(400, 200, 20, 20);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  weight = random(30,52);
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    bullet.collide (wall)
   if(damage<10){
    wall.shapeColor = rgb(0, 255, 0)
   } 
   if(damage>10){
    wall.shapeColor = rgb(255, 0, 0)
   } 
   
   console.log(damage)
  }
  
  drawSprites();
}