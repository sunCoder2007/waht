var garden,rabbit, select_sprites;
var gardenImg,rabbitImg, redImg;
var randy, apple, leaf, appleImg, orangeImg;
var leafImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  leafImg= loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}







function draw() {
  background(0);
  rabbit.x = World.mouseX;
  var randy = Math.round(random(1,400));
  console.log(randy);
  
   var select_sprites = Math.round(random(1,2));
  
   edges= createEdgeSprites();
  rabbit.collide(edges);

  if (frameCount%60 === 0)
  {
    if  (select_sprites === 1)
    {
     createApple();
   }
   else 
   {

     createLeaf();
   }


  }
  
  
  drawSprites();
  
}


function createApple () {
   apple = createSprite(random(1, 369), 40,20, 20 );
  apple.addImage(appleImg);
  apple.velocityY=4;
  apple.lifetime = 100;
  apple.scale=0.07;
}
  
  function createLeaf(){
   leaf = createSprite( random(100,300), 40, 20, 20 );
  leaf.addImage(leafImg);
  leaf.lifetime= 100;
  leaf.velocityY=3;
  leaf.scale=0.07;
  }