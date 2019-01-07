class horizHallway5x1 {
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
        t.boundary();
        translate(this.x,this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x+25, this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x+50,this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x+75,this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x+100,this.y);
        t.draw(0,0);
        resetMatrix();

        translate(this.x+125,this.y);
        t.draw(0,0);
        resetMatrix();
    }

}

