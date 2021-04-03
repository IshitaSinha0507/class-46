var back,backGround;
var shooter,shooterImg;
var alien,alienImg;
var alienGroup1,bulletGroup;
var gameState = 1;
var bullet,bulletImg;
var score = 0;
var alien2Img,alien2,alienGroup2;

function preload(){
  backGround = loadImage("backGr.jpg");
  shooterImg = loadImage("shooter.png");
  alienImg = loadImage("alien.png");
  bulletImg = loadImage("bullet.png");
  alien2Img = loadImage("alien2.png");
}

function setup() {
  createCanvas(1500,750);

  back = createSprite(750, 375, 50, 50);
  back.addImage(backGround);
  back.scale = 2;
  back.velocityY = 2;

  shooter = createSprite(700, 650, 50, 50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.6;

  alienGroup1 = new Group();
  alienGroup1 = new Group();
  bulletGroup = new Group();
  
}


function draw() {
  background(0);
  if(back.y > 500){
    back.y = 300;
  } 
  
if(gameState === 1){
  textSize(35);
    fill("white");
    stroke("white");
    textFont("astron")
    textStyle(ITALIC && BOLD);
    text("Instructions",100,100);
    text("1. Use the Arrow Keys to move left and right",100,200);
    text("2. Press Space key to shoot the aliens",100,300);
    text("3. You will have 3 lives to beat the aliens",100,400);
    text("Click Enter to start",900,650);
  if(keyWentDown("Enter")){
    gameState = 2;
    
  } 
}else if(gameState === 2){
  spawnAliens();

    //Moving the ballon with the arrow keys
    if(keyDown(LEFT_ARROW)){
      shooter.x = shooter.x - 10;
    }else if(keyDown(RIGHT_ARROW)){
      shooter.x = shooter.x + 10;
    }
    
    // release bullets when space key is pressed
  if (keyDown("space")) {
    createbullets();
  }
  if(bulletGroup.isTouching(alienGroup1)){
    alienGroup1.destroyEach();
    bulletGroup.destroyEach();
      //score = score + 2;
  }

  }

  drawSprites();
  
  }

  

 


function spawnAliens(){
  if(frameCount % 60 === 0){
  alien = createSprite(1200, 100, 50, 50);
  alien.addImage(alienImg);
  alien.scale = 0.3;
  alien.velocityY = 3
  alien.x = Math.round(random(10,1200));
  alien.lifetime = 750;
  alienGroup1.add(alien);
  }
}
// Creating  bullets
function createbullets() {
  var bullet= createSprite(100, 550, 30, 30);
  bullet.addImage(bulletImg);
  bullet.x = 360;
  bullet.x=shooter.x;
  bullet.velocityY = -4;
  bullet.lifetime = 150;
  bullet.scale = 0.3;
  bulletGroup.add(bullet);       
  //return arrow;
   
}