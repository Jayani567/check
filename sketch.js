//Create variables here
var dog;
var happydog;
var database;
var foods;
var foodStock;
var dogImg,doghappy;

function preload()
{
	//load images here
  dogImg=loadImage("images/dog1.png");
 doghappy=loadImage("images/dog2.png");

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(doghappy);
  }

  drawSprites();
  //add styles here
  
  fill("blue");
  textSize(15);
  text("press up_arrow key to feed",100,50);
  text("Food: "+foods,100,100)
  stroke (2);

}
function readStock(data){
  foods=data.val();

}
function writeStock(x){
if(x<=0){
x=0
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}



