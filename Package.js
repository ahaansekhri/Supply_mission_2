class Package{
    constructor(x,y,width){
        var options = {
            restitution:0,
            isStatic:true,
        }
        
        this.width = width;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, width, options);

        World.add(world,this.body);

        this.image = loadImage("package.png");
    }

    display(){

    push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+20,this.width+20);
    pop();
    }
}