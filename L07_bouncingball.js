// write your codes here
let x = 50;
let y = 50;
let ballSize = 50;
let speedX = 2; 
let speedY = 2;
function setup() {
createCanvas(400,400); // width, height
background(80);

}


 function draw() {
     background(80);
//     circle(x, height/2, 50);
fill("yellow")
circle(x,y, ballSize);


x = x + speedX;
y = y + speedY;

if (x > 400) {
    speedX = speedX * (-2)
}
if (x < 0)
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

































































































































