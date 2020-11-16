function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixedrect=createSprite(200,100,30,30)
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX; 
  movingrect.y=mouseY; 

  if (movingrect.x-fixedrect.x<(fixedrect.width+movingrect.width)/2 
  && fixedrect.x-movingrect.x<(fixedrect.width+movingrect.width)/2 
  && movingrect.y-fixedrect.y<(fixedrect.height+movingrect.height)/2 
  && fixedrect.y-movingrect.y<(fixedrect.height+movingrect.height)/2 ) 
{
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}
else
{
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}
  drawSprites();
}