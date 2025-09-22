// write your codes here
let xpos;
let velocityX = 0.6;
let sfx;
let bgcolor = "pink";

function preload() {
     sfx = loadSound("assets/DunDunDunnn.mp3");

}


function setup(){
     createCanvas(600,400);
     background(80)
     background("bgcolor");
     xpos = width/2
}


 function draw(){
      background("bgcolor");

     let aHour = hour() -12;
     aHour = nf(aHour, 2);
     let aMinute = minute();
     aMinute = nf(aMinute, 2);
     let aSecond = second();
      aSecond = nf(aSecond, 2);
      textSize(32);
            textAlign(CENTER, CENTER)
     fill("red")
      text("time now" + aHour + ":" + aMinute + ":" + aSecond, width/2, height/2);
 }

 function mousePressed(){
     sfx.play();
 }
 function mousePressed(){
     if(keyCode === 32) {
          bgcolor = color( random(255), )
     }
 }
 
//     xpos = xpos + velocityX;
//     if (xpos > width) {
//      velocityX = velocityX * -1;
//     }
//     else if (xpos < -60){
//      velocityX = velocityX * -1;

//     }
//     else if (xpos < 0+60){
//      velocityX = velocityX * -1;

//     }

    

   
    
























































































































































































































































































