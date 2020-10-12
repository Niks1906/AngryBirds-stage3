class Chain{
      constructor(x, y) {
        var options = {
            bodyA : x,
            bodyB : y,
            stiffness : 0.01
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
     }
     display() {
         line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x - 50 , this.chain.bodyB.position.y);
     }

}