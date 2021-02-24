class Slingshot{
    constructor(bodyA, ptb){
        var options = {
            bodyA: bodyA,
            pointB: ptb,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=ptb;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA!==null){
        push()
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
        }
    }
    fly(){
        this.sling.bodyA=null;
    }

    
}