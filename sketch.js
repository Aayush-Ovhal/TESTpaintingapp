
var drawing = [];
var currentPath = [];

var red,blue;

var R;
var G;
var B;

let d ;

function setup(){
    canvas = createCanvas(400,400);

    canvas.mousePressed(startPath);

    red = new Color(0,0,30,30);
    blue = new Blue(0,0,30,26);

    R = 0;
    G = 0;
    B = 0;

}

function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}

function draw(){
    background(0);
    stroke(255);

    if(mouseIsPressed){
        var point ={
            x: mouseX,
            y: mouseY
        };

        currentPath.push(point);
    }

    if(mouseIsPressed){
        
        push();
        d = dist(mouseX,mouseY,390,50);
        vertex()
        if(d < 30){
            R = 255;
            G = 0;
            B = 0;
        }
        pop();
        
        push();
        d = dist(mouseX,mouseY,380,80);
        if(d < 30){
            R = 0;
            B = 255; 
            G = 0;
        }
        pop();
    }

    stroke(R,G,B);
    strokeWeight(4);
    noFill();
    for(let i = 0; i < drawing.length; i++){
         var path = drawing[i];
       beginShape();
       for(let j = 0; j < path.length; j++){
         vertex(path[j].x, path[j].y);
       }
       endShape();
    }
    
    red.display();
    blue.display();
}

// function mousePressed(){
//     var d;

//     push();
//     d = dist(mouseX, mouseY, 390, 50);
//     if(d < 30){
//        R = 255;
//        G = 0;
//        B = 0; 
//     }
//     pop();

//     push();
//     d = dist(mouseX,mouseY,380, 80);
//     if(d < 25){
//         R = 0;
//         G = 0;
//         B = 255; 
//     }
//     pop();

// }
    
    
    // stroke(R,G,B);
    // noStroke();
    // stroke(R,G,B);
    
    // strokeWeight(4);
    // noFill();
    // for(let i = 0; i < drawing.length; i++){
    //    var path = drawing[i];
    //    beginShape();
    //    for(let j = 0; j < path.length; j++){
    //      vertex(path[j].x, path[j].y);
    //    }
    //    endShape();
    // }
    
