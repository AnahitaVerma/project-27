class Bob
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: true,
          restitution: 0.3,
          friction:  0.5,
          density: 1.2
            
        }

      this.body = Bodies.circle(x, y,15,options);
      
        this.x = x;
        this.y = y;
        this.radius = 30;

      World.add(world, this.body);
      
}
display()
{

  

    var pos = this.body.position;
    ellipseMode(RADIUS);

    push()

    translate (pos.x , pos.y)

    fill("purple");

    

    ellipse(0, 0, this.radius);

    pop()
  }



}