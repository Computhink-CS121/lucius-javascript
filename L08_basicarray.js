// write your codes here

let soundsfx;

function preload() {
soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');


}
function setup(){
    createCanvas(600,400); // width, height
background(80);
textsize(32);
textsize(32);
}
function draw(){
    if (keyIsDown(32) ) {
        soundsfx.play();
    }

    if (keyIsDown(DOWN_ARROW)) {
    soundsfx.stop();

    }
}
























