new p5();


let createVector = (x,y, z) => {
    let V = [x,y,z];
    return V;
}

let horizHall1 = new horizHallway5x1(0,100);
let vertHall1 = new vertHallway1x5(150,100)
function setup() {
    createCanvas(500,500);
}

function draw() {
    background(100);
    horizHall1.draw();
    vertHall1.draw();
}