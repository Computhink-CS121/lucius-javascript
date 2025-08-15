let circleSize = 5;
let shapeColor = "Blue";

let rectSize = 50;  

function setup() {
createCanvas(600,400); // width, height
background(220);
}


 


function draw() {
    background(220);
    // noStroke();
    
    // let xpos = 50;
    // let ypos = 50;
    // rect(xpos, ypos, rectSize, rectSize)
    if (key === 'w') {
    triangle(50,350, 150,50, 350,350);


    }
    else (key === 'c'); {
        circle(xpos, ypos, diameter);
    }
    if (key === 's'); {
        rect(xpos, ypos, 10, 10);
    }
}
 
// function mousePressed() {
// shapeColour = color(random(255), 0, random(255))
// fill(shapeColour);
// circleSize = 5
// }

// function mouseDragged() {
//     circle(mouseX, mouseY, circleSize);
//     circleSize = circleSize + 0.5;

// }
function keyPressed(){
// rectSize = 100;
// if (key === 'r') {
//     fill("red");
// }
//     else if (key === '9') {
//         fill("cyan");
//     }
//     else if (key === 'g') {
//     fill("green");
//     }
//     else {
//         fill("white");
//     }
}
 function keyReleased(){
rectSize = 50;
}
 
