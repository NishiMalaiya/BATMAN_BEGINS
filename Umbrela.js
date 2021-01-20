class Umbrela{
    constructor(x,y){
        var option = {
            isStatic :true
        }
        this.body = Bodies.circle(x,y,50,option);
        this.radius = 50;
        World.add(world,this.body);
        this.img = loadImage("images/Walking Frame/walking_1.png");
    }
    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.img,pos.x,pos.y,200,200);
    }
}