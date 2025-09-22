// write your codes here
let soundsfx;
let ypos;
function preload() {
soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');

}

function setup(){
     createCanvas(600,1400);
     background(80);

     ypos = height;
}


function draw() {
    25;

    }
    ypos = ypos - 0.6;
    
    if(ypos < 0){
        ypos = height
    }
}
background(80);
    if (keyIsDown(32)) {
        soundsfx.play();
    }
    if (keyIsDown(DOWN_ARROW)) {
        soundsfx.stop();
    }
    translate( width/2, ypos);
    scale(1,5);
    fill("cyan")
    textSize(16);
    textAlign(CENTER, CENTER);
    let starwars = [
    "WELCOME...",
    "HAVE YOU COME TO SEE WHAT IS 67 IRL?", 
    "IF SO YOU HAVE MADE THE BEST CHOICE OF YOUR LIFE!", 
    "HOW OLD ARE YOU?", 
    "IF YOU ARE UNDER AGE LEAVE AT ONCE AND FORGET EVERYTHING I SAID!"
    ];
    

    let textY = 0;
    for (let index=0; index < starwars.length; index++) {
        text(starwars[index], 0, textY);
        textY = textY + 






