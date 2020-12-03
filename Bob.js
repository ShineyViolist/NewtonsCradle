class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0.0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var radius1 = this.radius;
        fill("purple");
        stroke("black");
        ellipse(pos.x,pos.y,radius1*2)
    }
}
