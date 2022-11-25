var garoto, cachorro, rua, rua2, carro
var pontos = 0
var inicio = 0
var fim = 1
var gameState = inicio
var gameover, gamover2
var background2

function preload(){
garotoImg = loadImage("./assets/garoto.png")
carroImg = loadImage("./assets/carro.png");
cachorroImg = loadImage("./assets/cachorro.png");
backGroundImg = loadImage("./assets/rua.png");
gameOverImg = loadImage("./assets/game over.png");
gameOver2Img = loadImage("./assets/game over2.png");

}

function setup() {
    createCanvas(600,600)
    rua = createSprite(300,300,)
    rua.addImage(backGroundImg)
    rua.scale = 0.35
    rua.velocityY = 6

    rua2 = createSprite(300,rua.y - 300)
    rua2.addImage(backGroundImg)
    rua2.scale = 0.35
    rua2.velocityY = (6 + 2*pontos/150)

    garoto=createSprite(35,400);
    garoto.addImage(garotoImg);
    garoto.scale = 0.3
    garoto.setCollider("rectangle",0,0,40,40);

    cachorro = createSprite(70,500);
    cachorro.addImage(cachorroImg);
    cachorro.scale = 0.3

    carros = new Group();

    background2 = createSprite (300,300, 600, 600)
    background2.visible = false

    gameover = createSprite (150,300)
    gameover.addImage(gameOverImg)
    gameover.visible = false

    gameover2 = createSprite (450,150)
    gameover2.addImage(gameOver2Img)
    gameover2.visible = false


    
}

function draw() {
    background(0)
 drawSprites();
 textSize(20);
  fill(255);
  text("pontos: "+ pontos,450,30);
 if(gameState===inicio){

    pontos = pontos + 3

 if(rua.y > 600 ){
    rua.y = height/2;
  } 

 garoto.x = World.mouseX;
 cachorro.x = garoto.x
 rua2.y = rua.y - 300

 if (World.frameCount % 150 == 0) {
    caro();
  }

  if(carros.isTouching(garoto)){
    gameState = fim;
}
}else if (gameState === fim){


    gameover.visible= true
    gameover2.visible= true
    background2.visible = true
    carros.destroyEach();
    textSize(20);
    fill(255);
    text("clique em espaço para reiniciar", 320,200);
    if(keyDown("space")){
        gameState = inicio
        gameover.visible= false
    gameover2.visible= false
    background2.visible = false 
    pontos = 0
    } 
}
}

function caro(){
    carro = createSprite(Math.round(random(50,550)), -100)
    carro.velocityY = 5
    carro.addImage(carroImg)
    carro.scale = 0.5
    carro.setLifetime = 200
    carros.add(carro)

}
