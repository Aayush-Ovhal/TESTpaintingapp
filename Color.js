class Color{
    constructor(x,y,width,height){

        this.body = rect(x,y,width,height);
        this.width = width;
        this.height = height;

        this.image = loadImage("colors/colors.png");
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image,390,50,this.width,this.height);
        pop();

    }
}