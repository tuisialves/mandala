function setup() {
  createCanvas(800, 600);
  frameRate(10);
  background(10);
  noFill();
}

function draw() {
  
  push();
  translate(400,300);
  rotate(frameCount);
  polygon(frameCount*0.2, frameCount*0.2, frameCount, frameCount/10);
  
  pop();
  var col1=color('#D376B0');
  var col2=color('#242F60');
  stroke(lerpColor(col2,col1,frameCount/120));
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 3; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}