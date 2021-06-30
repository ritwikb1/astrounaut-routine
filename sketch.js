function preload() {
  background = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png")
  eat = loadAnimation("eat1.png", "eat2.png", "eat1.png", "eat2.png", "drink1.png", "drink2.png")
  bath = loadAnimation("bath1.png", "bath2.png")
  move = loadAnimation("move.png", "move1.png")
}

function setup() {
  createCanvas(2000, 1200);
  bg = createSprite(700, 300)
  bg.addImage(background)
  astronaut = createSprite(700, 500)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.addAnimation("brushing", brush)
  astronaut.addAnimation("gymming", gym)
  astronaut.addAnimation("eating", eat)
  astronaut.addAnimation("bathing", bath)
  astronaut.addAnimation("moving", move)
  astronaut.scale = 0.1
  bg.scale = 0.3

}

function draw() {
  //background(255,255,255);
  textSize(20)
  text("Instructions: up arrow = brushing   down arrow = gymming   left arrow = eating   right arrow = bathing   m key = moving", 50, 20)  
  if(keyDown("UP_ARROW")){
    astronaut.changeAnimation("brushing", brush)
    astronaut.y = 500
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gymming", gym)
    astronaut.y = 500
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating", eat)
    astronaut.x = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing", bath)
    astronaut.x = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0

  }
  if(keyDown("m")){
    astronaut.changeAnimation("moving", move)
    astronaut.x = astronaut.x + 2
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
  if(keyDown("s")){
    astronaut.changeAnimation("sleeping", sleep)
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  drawSprites();  
  }