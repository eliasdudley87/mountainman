var cnv;

function centerCanvas(){
  var x = (windowWidth-500)/2;

  cnv.position(x);
}

//The setup function only happens once
function setup() {
cnv = createCanvas(500, 500); //create a 500px X 500px canvas
centerCanvas()
background(20,39,fill(200,137,137));
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  strokeWeight(5);
  stroke(42,28,1,85);
  fill(121,85,72,205);
  ellipse(0,0,230,230);

  strokeWeight(2.5);
  stroke(223,203,197);
  fill(210,211,227,125);
  let angle = frameCount * 0.08;
  rotate(angle);
  rect(25,118,64,200);

  strokeWeight(4);
  stroke(225,203,197,185)
  line(120,120,285,85);

  strokeWeight(4);
  stroke(228,203,197,75);
  line(220,237,222,95);

  strokeWeight(2.5);
  stroke(255,255,255,65);
  line(385,375,285,5);
}
