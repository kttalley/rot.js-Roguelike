class Tile {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        rectMode(CENTER);
        translate(this.x,this.y);
        fill(255);
        noStroke();
        rect(0,0,25,25);
        resetMatrix();
        rectMode(CORNER);
    }
    boundary() {
        
    }
}