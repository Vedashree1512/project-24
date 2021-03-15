class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.2,
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("red");
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}