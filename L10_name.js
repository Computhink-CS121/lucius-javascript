
let bgColor = "purple";
let colorPicker;

let username = "david";
let userinput;


function setup(){
     createCanvas(600,400);
     background("bgcolor");

     colorPicker = createColorPicker();
     colorPicker.position(width/2, height/2+85)
      userInput = createInput(username);
    userInput.position(width/2, height/2 + 120)
    userInput.input(updateName);
}
function updateName(){
    username = userInput.value();
}

function draw() {
    background( colorPicker.value());
    fill("white");
    rect(100,50,400,200, 25);
    fill("black");
    textSize(44);
    text(username, 150, 100);

    textAlign(RIGHT, CENTER);
    tex
}
















































































































































































































