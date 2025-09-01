// write your codes here
let x = 200;
let Y = 200;
   
function setup() {
createCanvas(600,400); // width, height
background(80);
}


function draw() {
    background(80);
    circle(x, height/2, 50);

if (keyIsDown(LEFT_ARROW)) {
x = x -5
}

if (x < 25) {
    X = 25;
}
if (keyIsDown(RIGHT_ARROW)) {

    x = x +5
}

if (x > 400-25) {
    X = 400-25;
}
}

if (keyIsDown(UP_ARROW)) {

    x = x +5
}

if (x > 400-25) {
    X = 400-25;
}










