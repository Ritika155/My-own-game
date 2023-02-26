var bgImg;
var player1, player1Animation;
var player2, player2Animation;





function preload(){
  bgImg=loadImage("./Assets/bg2.jpeg")
  player1Animation=loadAnimation("./Assets/P_1.png","./Assets/P_2.png","./Assets/P_3.png","./Assets/P_4.png","./Assets/P_5.png")
  player2Animation=loadAnimation("./Assets/p2_1.png","./Assets/p2_2.png","./Assets/p2_3.png")
}





function setup() {
  createCanvas(windowWidth-10,windowHeight-10);

  
//player 1
  player1=createSprite(150,height/2+230);
  player1.addAnimation("swimmer1",player1Animation);
  player1.scale=(0.15);

  //player 2
  player2=createSprite(150,height/2+280);
  player2.addAnimation("swimmer2",player2Animation)
  player2.scale=0.3



  imageMode(CENTER)
}



function draw() {
  background(0);
  //image(bgImg,0,-height*3,width,height*3)
  image(bgImg,width/2,height/2,width,height) 


  if(keyIsDown(RIGHT_ARROW)){
    player1.x=player1.x+5
  }
  
  drawSprites();
}