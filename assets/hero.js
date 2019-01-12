let Hero = {
    posX: 0,
    posY: 0,
    face: 0,
    HP: 100,
    inv: [],

    walk: function() {
        if(key == 'w' && keyIsPressed){
            this.posY--;
        }

        if(key == 'a' && keyIsPressed){
            this.posX--;
        }

        if(key == 'd' && keyIsPressed){
            this.posX++;
        }

        if(key == 's' && keyIsPressed){
            this.posY--;
        }
    },

    draw: function() {
        translate(this.posX,this.posY);
        fill(150,250,20);
        ellipse(0,0,50,50);
        resetMatrix();
    },

}