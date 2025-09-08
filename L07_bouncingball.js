// write your codes here
let x = 50;
let y = 250;
let ballSize = 50;
let speedX = 2; 
let speedY = 3;
function setup() {
createCanvas(400,600); // width, height
background(80);
fill("yellow")

}

function draw() {
     //background(80);
    //  circle(x, height/2, 50);
circle(x,y, ballSize);
noStroke();
x = x + speedX;
y = y + speedY;

if (x > 400-25) {
    speedX = speedX * (-1)
    fill( random(0,255), random(0,255), random(0,255))
}
if (x < 0+25){
    speedX = speedX *(-1)
    fill( random(0,255), random(0,255), random(0,255))

}
if (y > 600-25){
    speedY = speedY *(-1)
    fill( random(0,255), random(0,255), random(0,255))

}
if (y < 0+25){
    speedY = speedY *(-1)
    fill( random(0,255), random(0,255), random(0,255))

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

































































































































