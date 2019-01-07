class vertHallway1x5 {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    // draw(){
    //     for (let x = 0; x < this.row; x+=25){
    //         for (let y = 0; y< this.height; y+=25){
    //             let t = new Tile;
    //             t.draw(x,y);
    //         }
    //     }
    // }
    draw(){
        let t = new Tile;
        translate(this.x,this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x, this.y+25);
        t.draw(0,0);
        resetMatrix();

        translate(this.x,this.y+50);
        t.draw(0,0);
        resetMatrix();

        translate(this.x,this.y+75);
        t.draw(0,0);
        resetMatrix();

        translate(this.x,this.y+100);
        t.draw(0,0);
        resetMatrix();

        translate(this.x,this.y+125);
        t.draw(0,0);
        resetMatrix();
    }

}

