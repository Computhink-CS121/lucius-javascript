// write your codes here


let picoImg, bgmusic;

// preload()
function preload(){
    picoImg = loadImage('assets/pico-a.png');
bgmusic = loadsound('assets/bossaNova.mp3');}


// setup()
function setup(){
    createCanvas(600,400);
    background("lightblue");
bgmusic.loop();
}
// draw()
function draw(){

    image(picoImg, 300, 200, 110, 133);
}



bgmusic.loop()









































































































































