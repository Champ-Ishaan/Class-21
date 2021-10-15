class Ground{
    constructor(x, y, w, h){
    var ground_options={
        isStatic:true,
            
    }
    this.w=w;
    this.h=h;
    this.ground = Bodies.rectangle(x, y, w, h, ground_options);
    World.add(world, this.ground);
    }

    show() {
    var pos = this.ground.position;
    push();
    rectMode(CENTER);
    stroke("blue");
    fill("cyan");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
    }
}