function setup() {
  createCanvas(800,600);
  //background(255)
  noFill();
  angleMode(DEGREES);
  frameRate(10);
}

function draw() {
  translate(width/2,height/2);
  stroke(lerpColor(color('#EFBFD9'),color('#2B95A3'),(frameCount%90)/90));
  line(100,0,100*cos(frameCount*3),100*sin(frameCount*3), ["#E860AA"]);
  
}
