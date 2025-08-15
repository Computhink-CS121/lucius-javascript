let posx, posy;



function setup(){
    createCanvas(400, 400);
    posx = width / 2;
    posy = height / 2;
}

function draw(){
    background(220);
    rect(posx,posy, 30, 30);

    if (keyIsDown(RIGHT_ARROW)){
        posx = posy + 5;
    }
}




 





