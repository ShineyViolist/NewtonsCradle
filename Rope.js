class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var a = this.rope.bodyA.position;
        var b = this.rope.bodyB.position;
        stroke("blue");
        strokeWeight(2);
        var anchor1x = a.x;
        var anchor1y = a.y;
        var anchor2x = b.x + this.offsetX;
        var anchor2y = b.y + this.offsetY;
        line(anchor1x,anchor1y,anchor2x,anchor2y);
    }
}