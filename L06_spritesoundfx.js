// write your codes here

let soundpop;
let picoImg, bgmusic;

// preload()
function preload(){
    picoImg = loadImage('assets/pico-a.png');
bgmusic = loadSound('assets/bossaNova.mp3');}
soundpop = loadsound('assets/pop.mp3');

// setup()
function setup(){
    createCanvas(600,400);
    background("lightblue");
bgmusic.loop();
}
// draw()
function draw(){

    image(picoImg, 300, 200, 110, 133);
    if (keyIsDown(RIGHT_ARROW)){
        posx = posx + 5;
    }
    if (keyIsDown(LEFT_ARROW)){
            posx = posx - 5;
    }

    if (keyIsDown(UP_ARROW)){
        posy = posy - 5;
    }
    if (keyIsDown(DOWN_ARROW)){
        posy = posy + 5;

    }

    posx = constrain(posx, 0, width - 30);
    posy = constrain(posy, 0, width - 30);

}



bgmusic.loop()


function keyPressed(){
    soundpop.play();
}
function mousePressed(){
    soundpop.play();
}






































































































































