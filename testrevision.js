





let y=100
let w = 30;
let h=30;
let gray = 0;

function setup() {
    createCanvas(800, 600);
    background("steelblue");

}
function draw() {
    fill('red');
    // triangle(350, 200, 200, 300, 350, 350)
    for (let count=0; count<4; count++)  {
        x =x+40;
        let gray = gray+ 40;
        Rect(x, y, w, h)
    }
    
}



