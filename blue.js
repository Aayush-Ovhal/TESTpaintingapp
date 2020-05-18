class Blue{
    constructor(x,y,width,height){

        this.body = rect(x,y,width,height);
        this.width = width;
        this.height = height;

        this.image = loadImage("colors/blue.png");
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image,380,80,this.width,this.height);
        pop();

    }
}