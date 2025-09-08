// write your codes here

let soundsfx;

function preload() {
soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');


}
function setup(){
    createCanvas(600,400); // width, height
background(80);
fill('cyan')
textSize(32);
text("Hello my friend!", 20, 50);
text("Today is Monday!", 20, 90);
text("My name is 67!", 20, 50);
text("I am 69 this year!", 20, 90);
text("I am 69 this year!", 20, 90);

let xpos = 100;
for (let count=0; count<5; count++) {
    circle(xpos,200,50);
    xpos = xpos + 55;
}
}


// function draw(){
//     if (keyIsDown(32) ) {
//         soundsfx.play();
//     }

//     if (keyIsDown(DOWN_ARROW)) {
//     soundsfx.stop();

//     }
// }
























