// write your codes here
let x = 50;
let y = 150;
let ballSize = 50;
let speedX = 2; 
let speedY = 3;
function setup() {
createCanvas(400,400); // width, height
background(80);

}

function draw() {
     //background(80);
    //  circle(x, height/2, 50);
fill("yellow")
circle(x,y, ballSize);
noStroke
fill( random(0,255), random(0,255))
x = x + speedX;
y = y + speedY;

if (x > 400-25) {
    speedX = speedX * (-1)
}
if (x < 0+25){
    speedX = speedX *(-1)
}
if (y > 400-25){
    speedY = speedY *(-1)
}
if (y < 0+25){
    speedY = speedY *(-1)
}
// if (keyIsDown(LEFT_ARROW)) {
// x = x -5
// }

// if (x < 25) {
//     X = 25;
// }
// if (keyIsDown(RIGHT_ARROW)) {

//     x = x +5
// }

// if (x > 400-25) {
//     X = 400-25;
// }
// }

// if (keyIsDown(UP_ARROW)) {

//     x = x +5
// }

// if (x > 400-25) {
//     X = 400-25;
 }

































































































































