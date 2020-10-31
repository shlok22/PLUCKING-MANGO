class slingshot{
constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        
        stiffness:0.04,
        length:10
    }
    this.pointB = pointB
    this.sling = Constraint.create(options)
    World.add(World,this.sling)
}
display(){
    var pointA = this.sling.bodyA.position
    
    strokeWeight(4)
    line(pointA.x,pointA.y)
}
}