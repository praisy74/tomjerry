var garden,cat,jerry,cat1,cat2,cat3,jerry1,jerry2;
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadImage("images/cat1.png")
    
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadImage("images/cat4.png")
    jerry1=loadImage("images/mouse1.png")
    jerry2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3=loadImage("images/mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,10,10)
    jerry=createSprite(200,600,10,10)
    cat.addImage("sd",cat1)
    jerry.addImage("s",jerry1)

    jerry.scale=0.2
    cat.scale=0.2


}

function draw() {

   background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-jerry.x<(cat.width-jerry.width)/2){
        jerry.addImage("aaa",jerry3)
        jerry.changeImage("aaa",jerry3)
        cat.addImage("dd",cat3)
        cat.changeImage("dd",cat3)
        cat.velocityX=0
        cat.x=cat.x+100
  cat.velocityX=0

    }
   // cat.debug=true
   


    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
  cat.velocityX=-5
  cat.addAnimation("ad",cat2)
  cat.changeAnimation("ad",cat2)
  jerry.addAnimation("bat",jerry2)
  jerry.changeAnimation("bat",jerry2)
  
  
  cat.velocityX=0

  }
  

  //For moving and changing animation write code here


}
