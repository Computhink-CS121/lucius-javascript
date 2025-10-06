
let bgColor = "purple";
let colorPicker;

let username = "david";
let userinput;

let age = 99;
let ageInput;


function setup(){
     createCanvas(600,400);
     background(bgColor);

     colorPicker = createColorPicker(bgColor);
     colorPicker.position(width/2, height/2+85)
      userInput = createInput(username);
    userInput.position(width/2, height/2 + 120)
    userInput.input(updateName);

    ageInput = createInput(age);
    ageInput.position(width/2, height/2 + 72);
    ageInput.input(updateAge);
    
}
function updateAge(){
    age = ageInput.value();
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
    textAlign(LEFT, CENTER)
    text(username, 150, 120);
    text(age, 150, 165)

    textAlign(RIGHT, CENTER);
    textSize(18);
    text("Change color here:",width/2, height/2+100);
    text("Enter your name:", width/2, height/2+132);
    text("Enter your age:", width/2,height/2+82);
}
















































































































































































































