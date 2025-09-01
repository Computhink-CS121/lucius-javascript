

let soundpop;
// let picoImg, bgmusic;

// preload()
function preload(){
    static = loadImage('assets/pico-a.png');
bgmusic = loadSound('assets/bossaNova.mp3');}
soundpop = loadsound('assets/pop.mp3');
 let secondguy;
 let secondguyX = 200;
 let secondY = 200;

// setup()
function setup(){
    createCanvas(600,400);
    background("lightblue");
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








let soundEffect, bgMusic, picoImg;

let posx, posy;

function preload(){
    picoImg = loadImage('assets/squirrel.png')
    soundEffect = loadSound('assets/pop.mp3')
    bgMusic = loadSound('assets/bossaNova.mp3')
    secondguy = loadImage('assets/squirrel.png');
}
function setup(){
    createCanvas(400, 400);
    bgMusic.loop();

    posx = width / 2;
    posy = height / 2;
}

function draw(){
    background(220);
    image(picoImg, posx, posy, 110, 133);
    let w =110;
        let h =133;
        image(picoImg, posx, posy, 110, 133);
        secondguyY = 200;
        secondguyX = 200;

if (keyIsDown(87)){
       secondguyY = secondguyY - 5
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

        let w =110;
        let h =133;
        image(picoImg, posx, posy, 110, 133);
        secondguyY = 200;
        secondguyY
image(secondguy, 200, 200, 96, 128);
    } }
  
    
    posx = constrain(posx, 0, width - 110);
    posy = constrain(posy, 0, width - 110);


}

function keyPressed() {
        if (keyCode === 32){
            soundEffect.play();
        }
}























































































































