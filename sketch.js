  
var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

 //movingRect.velocityY = -5;
 //fixedRect.velocityY = +5;

object1 = createSprite(100,200,50,50);
object1.shapeColor = "blue";
object2 = createSprite(200,200,50,50);
object2.shapeColor = "red";
object3 = createSprite(600,50,50,50);
object3.shapeColor = "green";
object3.velocityY = 4;
object4 = createSprite(600,750,50,50);
object4.shapeColor = "yellow";
object4.velocityY = -4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  //check collision between fixedRect and movingRect
  if(checkColl(movingRect,object3))
  {
    movingRect.shapeColor = "red";
    object3.shapeColor = "red";
  }
  else 
    {
    movingRect.shapeColor = "green";
    object3.shapeColor = "green";
    }
  
  
  (bounce(object3,object4));
  
  
  
    //if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  //  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  //movingRect.velocityX = movingRect.velocityX * (-1);
  //fixedRect.velocityX = fixedRect.velocityX * (-1);
  //}
  //if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  //&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  //movingRect.velocityY = movingRect.velocityY * (-1);
  //fixedRect.velocityY = fixedRect.velocityY * (-1);
//}
  drawSprites();
}

