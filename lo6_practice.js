let posx, posy;



function setup(){
    createCanvas(400, 400);
    posx = width / 2;
    posy = height / 2;
}

function draw(){
    background(220);
    rect(posx,posy, 30, 30);

    if (KeyIsDown(RIGHT_ARROW)){
        posx = posy + 5;
    }
if (KeyIsDown(LEFT_ARROW)){
        posx = posy - 5;

}

if (KeyIsDown(UP_ARROW)){
        posx = posy - 5;

}
if (KeyIsDown(DOWN_ARROW)){
        posx = posy - 5;

}

posx = constrain(posy, 0, width - 30);

}
