// write your codes here



function preload() {
let soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');


}
function setup(){
    createCanvas(600,400); // width, height
background(80);
}
function draw(){
    if (keyIsDown(32) )
        soundsfx.play();

}
if (keyIsDown(Down_ARROW)) {
  soundsfx.stop();

}

























