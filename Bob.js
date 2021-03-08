class Bob{
    constructor(x,y,radius){
        var options={
            'isStatic':true,
            'restitution':0.1,
            'friction':0.1,
            'density':0.1 
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius=radius
        
        
        World.add(world,this.body)
         }
        display(){
           fill("magenta")
           ellipseMode(RADIUS);
           ellipse(this.body.position.x,this.body.position.y,this.radius);
           
        }
    }
