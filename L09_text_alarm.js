// write your codes here
let xpos;
let velocityX = 0.6;
let sfx;
let bgcolor = "pink";

let objectID
let counter = 10;

let secondID;

function countdown(){
 counter--; 
counter = constrain(counter, 0, 10);


if(counter === 0) {
     sfx.play();
     clearInterval( objectID);

      secondID =  setInterval(changeColor,500);
}
}
let colorChanged = 0;
function changeColor(){
     color-Changed++;
     if (colorChanged > 5){
           clearInterval( objectID);
     }
     bgcolor = color(random(255), random(255), random(255));
}
function draw() {
     sfx = loadSound("assets/DunDunDunnn.mp3");

}


function setup(){
     createCanvas(600,400);
     background(80)
     background(bgcolor);
     xpos = width/2

     objectID = setInterval(countdown, 1000);
}


 function draw(){
      background(bgcolor);

     let aHour = hour() -12;
     aHour = nf(aHour, 2);
     let aMinute = minute();
     aMinute = nf(aMinute, 2);
     let aSecond = second();
      aSecond = nf(aSecond, 2);
      textSize(18);
            textAlign(CENTER, CENTER)
     fill("red")
      text("time now" + aHour + ":" + aMinute + ":" + aSecond, width/2, height/2);
      text("Countdown Timer", width/2, 180)
      text(counter, width/2, 270)
text("click me to start timer", width/2, 300);
let pie = 3.1415912345567;
console.log(nf(pie, 1, 3));
}
 function mousePressed(){
     //sfx.play();
     if (counter === 10) {
          objectID = setInterval(countdown, 1000);
     }
 }
//  function keyPressed(){
//      if(keyCode === 18) {
//           bgcolor = color( random(255), random(255), random(255)  );
//      }
//  }

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

    

   
    
























































































































































































































































































