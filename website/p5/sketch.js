var eDiameter = 400;
var eX = 600;
var eY = 390; 
var counter = 0;
var threeCounter = 0;
var thirtyCounter = 0;
var colorChange = 0;
var alreadyCounted = false;

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);

  if(counter % 3 == 0 && counter!=0  ){
    background(55,200,230);
    
  }

  if(counter % 30 == 0 && counter !=0){
    background(230,13,90);
  }

  ellipse(eX,eY,eDiameter,eDiameter)
  push();
  fill("black");
  textSize(30);
  text(counter, 700,600);
  text(threeCounter, 700,640);
  text(thirtyCounter, 700,680);
  pop();

    if(counter >= 10){
      fill("red");
      
    }

    if(counter >= 100){
      fill("orange");
      
    }

    if(counter >= 1000){
      fill("yellow");
      
    }

    if(counter >= 10000){
      fill("green");
   
    }

    if(counter >= 100000){
      fill("blue");

    }

    if(counter >= 1000000){
      fill("purple");
    }
 

    
}
  function mousePressed(){
    if(Math.sqrt((mouseX - eX)*(mouseX - eX) + (mouseY - eY) * (mouseY - eY)) < eDiameter/2){
      counter++;

      if(counter % 3 == 0 && counter!=0 && (counter%30 !=0)){
        threeCounter++;
      }

      if(counter % 30 == 0 && counter!=0 ){
        thirtyCounter++;
      }
     
   
      
    }

   
    
  }


  
