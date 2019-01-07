class Ghost {
    constructor(posX, posY, HP, name){
        this.posX = posX;
        this.posY = posY;
        this.HP = HP;
        this.name = name;
        let G = new Entity(this.pos, this.HP, this.name)
    }
    draw(){
        rectMode(CENTER);
        translate(this.posX, this.posY);
        fill(100,0,100,100);
        rect(0, 0, 20, 20,100);
        resetMatrix();
        rectMode(CORNER);
    }
    boundaries(){
        let T = new Tile;
        if (dist(this.posX,this.posY,T.x,T.y)>25){
            background(0);
        }
    }
    update(){
        this.posX++;
    }
}