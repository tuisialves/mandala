function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  background(0);
  noFill();
  frameRate(40);
}

function draw() {
  translate(width/2,height/2);
  var b = 90-frameCount*5;
  


  stroke(lerpColor(color('#F4691C'),color('#28F21D'),(frameCount%100)/100));
  line(0,0,300*cos(b)*cos(b),-300*cos(b)*sin(b));
  line(0,0,-300*cos(b)*cos(b),300*cos(b)*sin(b));
  
  
}
