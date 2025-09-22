// write your codes here

let soundsfx;

function preload() {
soundsfx = loadSound('assets/star_wars_theme_8_bit.mp3');


}
function setup(){
     createCanvas(400,400);
     background(200);

     fill("orange");
     rect(width/2, height/2, 200, 200);

     fill("black")
     textSize(32);
     textAlign(RIGHT, TOP);

     text("WELCOME", width/2, height/2);

//     createCanvas(600,400); // width, height
// background(80);
// fill('cyan')
// textSize(32);
// text("Hello my friend!", 20, 40);
// text("Today is Monday!", 20, 90);
// text("My name is frontman!", 20, 140);
// text("I am 69 this year!", 20, 190);
// text("my favourite activity is grieving in games!", 30, 240);
// let ypos = 50;
// let favFoods = ["pizza", "chicken wings", "bubble tea", "ice cream", "chocolates"];
// for (let index=0; index < favFoods.length; index++ ) {

//     console.log( favFoods[index]);
//     text( favFoods[index],20, ypos);
//     ypos = ypos + 50;
}

// let xpos = 100;
// for (let count=0; count<5; count++) {
//     circle(xpos,200,50);
//     xpos = xpos + 55;
// }



// function draw(){
//     if (keyIsDown(32) ) {
//         soundsfx.play();
//     }

//     if (keyIsDown(DOWN_ARROW)) {
//     soundsfx.stop();

//     }
// }
























