class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        
        strokeWeight(4);
        line(pointA.x, pointA.y);
    }
    
}