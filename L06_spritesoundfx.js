
let soundEffect, bgMusic, staticImage;
let x =0;
let y =0;

let secondguy;
let secondguyX = 200;
let secondguyY = 200;


function preload() {
    soundEffect = loadSound("assets/pop.mp3");
    bgMusic = loadSound("assets/bossaNova.mp3");
    staticImage = loadImage("assets/pico-a.png");
    secondguy = loadImage('assets/penguin2-c.svg');
}


function setup() {
    createCanvas(400, 400);
    bgMusic.loop();
}


function draw () {
    background("lightblue")

    let w =110;
    let h =133;
    Image(staticImage, x, y, w, h);


    Image(secondguy, secondguyX, secondguyY, 96,128);


    if (keyIsDown(87)) {
        secondguyY = secondguyY-5;
    }
}





















































































































