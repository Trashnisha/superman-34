class SlingShot{
    constructor(first,second){
        var opsions={
            bodyA:first,
            pointB:second,
            stiffness:0.06,
            length:10,

        }
        this.sling=Constraint.create(opsions)
        World.add(world,this.sling)
        this.pointB=second
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA!==null){
            var pointA= this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
       
    }
}